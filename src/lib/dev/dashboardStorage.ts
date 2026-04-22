import type { PriorityItem } from './system-report';

export type StoredActionState = {
  inProgress: string[];
  completed: string[];
  dismissed: string[];
  focusMode: boolean;
};

export const DASHBOARD_STORAGE_KEY = 'mindwp:operator-dashboard:v2';
export const MAX_WORKING_SET = 3;

function getEmptyStoredActionState(): StoredActionState {
  return { inProgress: [], completed: [], dismissed: [], focusMode: false };
}

export function priorityKey(priority: PriorityItem) {
  return `${priority.level}:${priority.type}:${priority.route ?? 'system'}:${priority.message}`;
}

export function sanitizeStoredActionState(
  state: StoredActionState,
  validKeys: Set<string>
): StoredActionState {
  return {
    inProgress: state.inProgress.filter(key => validKeys.has(key)).slice(0, MAX_WORKING_SET),
    completed: state.completed.filter(key => validKeys.has(key)),
    dismissed: state.dismissed.filter(key => validKeys.has(key)),
    focusMode: state.focusMode,
  };
}

export function loadStoredState(validKeys: Set<string>): StoredActionState {
  try {
    const raw = window.localStorage.getItem(DASHBOARD_STORAGE_KEY);
    if (!raw) {
      return getEmptyStoredActionState();
    }

    const parsed = JSON.parse(raw) as Partial<StoredActionState>;
    return sanitizeStoredActionState(
      {
        inProgress: parsed.inProgress ?? [],
        completed: parsed.completed ?? [],
        dismissed: parsed.dismissed ?? [],
        focusMode: parsed.focusMode === true,
      },
      validKeys
    );
  } catch {
    return getEmptyStoredActionState();
  }
}

export function persistStoredState(state: StoredActionState, validKeys: Set<string>) {
  const nextState = sanitizeStoredActionState(state, validKeys);
  window.localStorage.setItem(DASHBOARD_STORAGE_KEY, JSON.stringify(nextState));
  return nextState;
}
