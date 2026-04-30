import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const PROJECT_ENV_FILES = ['.env', '.env.local'];
const setupEnvFilePath = fileURLToPath(import.meta.url);
const SETUP_ENV_IMPORT_FLAG = `--import=${pathToFileURL(setupEnvFilePath).href}`;
const LEGACY_SETUP_ENV_IMPORT_FLAG = '--import=./scripts/setup-env.mjs';

function parseEnvValue(rawValue) {
  const trimmed = rawValue.trim();

  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    const unquoted = trimmed.slice(1, -1);
    return trimmed.startsWith('"') ? unquoted.replace(/\\n/g, '\n') : unquoted;
  }

  return trimmed;
}

function parseEnvFile(contents) {
  return contents.split(/\r?\n/u).reduce((entries, line) => {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith('#')) {
      return entries;
    }

    const separatorIndex = trimmed.indexOf('=');
    if (separatorIndex === -1) {
      return entries;
    }

    const key = trimmed.slice(0, separatorIndex).trim();
    const value = parseEnvValue(trimmed.slice(separatorIndex + 1));

    if (!key) {
      return entries;
    }

    entries.push([key, value]);
    return entries;
  }, []);
}

export function loadProjectEnv(target = process.env, rootDir = process.cwd()) {
  for (const fileName of PROJECT_ENV_FILES) {
    const filePath = path.join(rootDir, fileName);
    if (!fs.existsSync(filePath)) {
      continue;
    }

    const entries = parseEnvFile(fs.readFileSync(filePath, 'utf8'));
    for (const [key, value] of entries) {
      if (target[key] == null || target[key] === '') {
        target[key] = value;
      }
    }
  }

  return target;
}

export function ensureSetupEnvNodeOptions(nodeOptions = '') {
  const normalized = String(nodeOptions ?? '')
    .replace(LEGACY_SETUP_ENV_IMPORT_FLAG, '')
    .replace(SETUP_ENV_IMPORT_FLAG, '')
    .trim();

  if (!normalized) {
    return SETUP_ENV_IMPORT_FLAG;
  }

  return `${normalized} ${SETUP_ENV_IMPORT_FLAG}`.trim();
}

loadProjectEnv();
process.env.NODE_OPTIONS = ensureSetupEnvNodeOptions(process.env.NODE_OPTIONS);
