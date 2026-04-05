import { NextResponse } from 'next/server';
import { exec } from 'node:child_process';
import { promisify } from 'node:util';

import {
  buildScriptCommand,
  getScriptRegistryEntry,
  recordScriptHistory,
} from '@/lib/dev/executionVisibility';

const execAsync = promisify(exec);

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

interface RunScriptRequest {
  scriptId?: string;
}

interface RunScriptResponse {
  scriptId: string;
  success: boolean;
  output: string;
  error: string | null;
  duration: number;
}

function jsonError(
  scriptId: string,
  error: string,
  status: number
): NextResponse<RunScriptResponse> {
  return NextResponse.json(
    {
      scriptId,
      success: false,
      output: '',
      error,
      duration: 0,
    },
    { status }
  );
}

export async function POST(request: Request) {
  if (process.env.NODE_ENV !== 'development') {
    return jsonError('', 'Execution API is available in development only.', 404);
  }

  const payload = (await request.json()) as RunScriptRequest;
  const scriptId = payload.scriptId?.trim();

  if (!scriptId) {
    return jsonError('', 'Missing script id.', 400);
  }

  const script = getScriptRegistryEntry(scriptId);
  if (!script) {
    return jsonError(scriptId, `Unknown script id: ${scriptId}`, 404);
  }

  if (!script.runnable) {
    return jsonError(
      scriptId,
      `${script.name} is listed for visibility only and is not runnable from the dashboard.`,
      400
    );
  }

  const command = buildScriptCommand(script);
  if (!command) {
    return jsonError(scriptId, `No executable command could be derived for ${script.name}.`, 400);
  }

  const startedAt = Date.now();

  try {
    const { stdout, stderr } = await execAsync(command, {
      cwd: process.cwd(),
      env: process.env,
      maxBuffer: 8 * 1024 * 1024,
      timeout: scriptId === 'dev-server' ? 15_000 : 120_000,
      shell: process.env.SHELL || '/bin/zsh',
    });

    const duration = Date.now() - startedAt;
    const output = [stdout, stderr].filter(Boolean).join('\n').trim();

    recordScriptHistory({
      scriptId: script.id,
      name: script.name,
      intent: script.intent,
      group: script.group,
      status: 'success',
      duration,
      lastRun: new Date().toISOString(),
    });

    return NextResponse.json({
      scriptId: script.id,
      success: true,
      output,
      error: null,
      duration,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Script execution failed.';
    const failed = error as { stdout?: string; stderr?: string };
    const duration = Date.now() - startedAt;
    const output = [failed.stdout, failed.stderr].filter(Boolean).join('\n').trim();

    recordScriptHistory({
      scriptId: script.id,
      name: script.name,
      intent: script.intent,
      group: script.group,
      status: 'error',
      duration,
      lastRun: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        scriptId: script.id,
        success: false,
        output,
        error: message,
        duration,
      },
      { status: 500 }
    );
  }
}
