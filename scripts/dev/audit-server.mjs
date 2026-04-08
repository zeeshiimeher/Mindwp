import fs from 'node:fs';
import net from 'node:net';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn, spawnSync } from 'node:child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');
const WORK_DIR = path.join(ROOT, '_workspace');
const LOG_DIR = path.join(WORK_DIR, 'logs');
const PID_DIR = path.join(WORK_DIR, 'pids');
const PID_FILE = path.join(PID_DIR, 'audit-server.pid.json');
const LOG_FILE = path.join(LOG_DIR, 'audit-server.log');
const AUDIT_PORT = Number.parseInt(process.env.VISUAL_AUDIT_PORT || '3009', 10);
const AUDIT_HOST = process.env.VISUAL_AUDIT_HOST || '127.0.0.1';
const AUDIT_DIST_DIR = process.env.VISUAL_AUDIT_DIST_DIR || '.next-audit';
const START_TIMEOUT_MS = 120000;

function getNpmBin() {
  return process.platform === 'win32' ? 'npm.cmd' : 'npm';
}

function ensureWorkspaceDir() {
  if (!fs.existsSync(WORK_DIR)) {
    fs.mkdirSync(WORK_DIR, { recursive: true });
  }

  if (!fs.existsSync(LOG_DIR)) {
    fs.mkdirSync(LOG_DIR, { recursive: true });
  }

  if (!fs.existsSync(PID_DIR)) {
    fs.mkdirSync(PID_DIR, { recursive: true });
  }
}

function isProcessRunning(pid) {
  if (!pid || typeof pid !== 'number') return false;

  try {
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
}

function readPidFile() {
  if (!fs.existsSync(PID_FILE)) return null;

  try {
    const payload = JSON.parse(fs.readFileSync(PID_FILE, 'utf8'));
    return payload && typeof payload === 'object' ? payload : null;
  } catch {
    return null;
  }
}

function writePidFile(payload) {
  ensureWorkspaceDir();
  fs.writeFileSync(PID_FILE, JSON.stringify(payload, null, 2));
}

function removePidFile() {
  if (fs.existsSync(PID_FILE)) {
    fs.unlinkSync(PID_FILE);
  }
}

function runGenerateStep(scriptName) {
  const result = spawnSync(getNpmBin(), ['run', '-s', scriptName], {
    cwd: ROOT,
    stdio: 'inherit',
    env: process.env,
  });

  if (result.status !== 0) {
    throw new Error(`Failed while running ${scriptName}.`);
  }
}

function isPortReachable({ host = AUDIT_HOST, port = AUDIT_PORT, timeout = 1000 } = {}) {
  return new Promise(resolve => {
    const socket = net.connect({ host, port });

    const finish = value => {
      socket.removeAllListeners();
      socket.destroy();
      resolve(value);
    };

    socket.setTimeout(timeout);
    socket.once('connect', () => finish(true));
    socket.once('timeout', () => finish(false));
    socket.once('error', () => finish(false));
  });
}

async function waitForPort({ host = AUDIT_HOST, port = AUDIT_PORT, timeoutMs = START_TIMEOUT_MS } = {}) {
  const startedAt = Date.now();

  while (Date.now() - startedAt < timeoutMs) {
    if (await isPortReachable({ host, port, timeout: 1000 })) {
      return true;
    }

    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  return false;
}

export async function getAuditServerStatus() {
  const pidInfo = readPidFile();
  const portReachable = await isPortReachable();

  if (pidInfo && isProcessRunning(pidInfo.pid)) {
    return {
      state: portReachable ? 'running' : 'starting',
      managed: true,
      pid: pidInfo.pid,
      port: AUDIT_PORT,
      host: AUDIT_HOST,
      distDir: AUDIT_DIST_DIR,
      logFile: LOG_FILE,
    };
  }

  if (pidInfo && !isProcessRunning(pidInfo.pid)) {
    removePidFile();
  }

  if (portReachable) {
    return {
      state: 'running',
      managed: false,
      pid: null,
      port: AUDIT_PORT,
      host: AUDIT_HOST,
      distDir: AUDIT_DIST_DIR,
      logFile: LOG_FILE,
    };
  }

  return {
    state: 'stopped',
    managed: false,
    pid: null,
    port: AUDIT_PORT,
    host: AUDIT_HOST,
    distDir: AUDIT_DIST_DIR,
    logFile: LOG_FILE,
  };
}

export async function startAuditServer({ waitForReady = true } = {}) {
  const currentStatus = await getAuditServerStatus();
  if (currentStatus.state === 'running' || currentStatus.state === 'starting') {
    return currentStatus;
  }

  runGenerateStep('generate:core');
  runGenerateStep('generate:dev');

  ensureWorkspaceDir();
  const logFd = fs.openSync(LOG_FILE, 'a');
  const child = spawn(
    process.execPath,
    ['scripts/runners/run-next.mjs', '--filter', 'dev', '--', '--webpack', '-p', String(AUDIT_PORT)],
    {
      cwd: ROOT,
      detached: true,
      stdio: ['ignore', logFd, logFd],
      env: {
        ...process.env,
        PORT: String(AUDIT_PORT),
        NEXT_DIST_DIR: AUDIT_DIST_DIR,
      },
    }
  );

  child.unref();

  writePidFile({
    pid: child.pid,
    port: AUDIT_PORT,
    host: AUDIT_HOST,
    distDir: AUDIT_DIST_DIR,
    startedAt: new Date().toISOString(),
    logFile: LOG_FILE,
  });

  if (waitForReady) {
    const ready = await waitForPort();
    if (!ready) {
      throw new Error(`Audit server did not become reachable on port ${AUDIT_PORT} within ${START_TIMEOUT_MS}ms.`);
    }
  }

  return getAuditServerStatus();
}

export async function ensureAuditServer() {
  const status = await getAuditServerStatus();
  if (status.state === 'running') return status;
  return startAuditServer({ waitForReady: true });
}

export async function stopAuditServer() {
  const pidInfo = readPidFile();
  if (!pidInfo || !isProcessRunning(pidInfo.pid)) {
    removePidFile();
    return { stopped: true, managed: false };
  }

  process.kill(pidInfo.pid, 'SIGTERM');

  const deadline = Date.now() + 10000;
  while (Date.now() < deadline) {
    if (!isProcessRunning(pidInfo.pid)) {
      removePidFile();
      return { stopped: true, managed: true };
    }
    await new Promise(resolve => setTimeout(resolve, 250));
  }

  process.kill(pidInfo.pid, 'SIGKILL');
  removePidFile();
  return { stopped: true, managed: true, forced: true };
}

async function main() {
  const command = process.argv[2] || 'status';

  if (command === 'start') {
    const status = await startAuditServer({ waitForReady: true });
    console.log(`Audit server running on http://${status.host}:${status.port}`);
    console.log(`Log file: ${status.logFile}`);
    return;
  }

  if (command === 'ensure') {
    const status = await ensureAuditServer();
    console.log(`Audit server ready on http://${status.host}:${status.port}`);
    console.log(`Log file: ${status.logFile}`);
    return;
  }

  if (command === 'stop') {
    const result = await stopAuditServer();
    console.log(result.forced ? 'Audit server stopped (forced).' : 'Audit server stopped.');
    return;
  }

  if (command === 'status') {
    const status = await getAuditServerStatus();
    console.log(JSON.stringify(status, null, 2));
    return;
  }

  throw new Error('Usage: node scripts/dev/audit-server.mjs <start|ensure|stop|status>');
}

const isEntrypoint = process.argv[1]
  ? path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
  : false;

if (isEntrypoint) {
  main().catch(error => {
    console.error(`[audit-server] ${error instanceof Error ? error.message : String(error)}`);
    process.exit(1);
  });
}