export const TUTORIAL_PROGRESS_STORAGE_KEY =
  "truefinds:tutorial-progress";

const emptyCompletedLessonKeys: readonly string[] = [];
const listeners = new Set<() => void>();

let completedLessonKeys: readonly string[] = emptyCompletedLessonKeys;
let isHydrated = false;

function emitChange() {
  listeners.forEach((listener) => listener());
}

function parseCompletedLessonKeys(value: string | null): readonly string[] {
  if (!value) {
    return emptyCompletedLessonKeys;
  }

  try {
    const parsedValue: unknown = JSON.parse(value);

    if (!Array.isArray(parsedValue)) {
      return emptyCompletedLessonKeys;
    }

    return [
      ...new Set(
        parsedValue.filter((item): item is string => typeof item === "string"),
      ),
    ];
  } catch {
    return emptyCompletedLessonKeys;
  }
}

function readCompletedLessonKeys() {
  if (typeof window === "undefined") {
    return emptyCompletedLessonKeys;
  }

  try {
    return parseCompletedLessonKeys(
      window.localStorage.getItem(TUTORIAL_PROGRESS_STORAGE_KEY),
    );
  } catch {
    return emptyCompletedLessonKeys;
  }
}

function writeCompletedLessonKeys(nextKeys: readonly string[]) {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.setItem(
      TUTORIAL_PROGRESS_STORAGE_KEY,
      JSON.stringify(nextKeys),
    );
  } catch {
    // Keep in-memory progress available if persistent storage is unavailable.
  }
}

function handleStorageChange(event: StorageEvent) {
  if (event.key !== TUTORIAL_PROGRESS_STORAGE_KEY) {
    return;
  }

  completedLessonKeys = parseCompletedLessonKeys(event.newValue);
  emitChange();
}

function initializeTutorialProgress() {
  if (isHydrated || typeof window === "undefined") {
    return;
  }

  completedLessonKeys = readCompletedLessonKeys();
  isHydrated = true;
  window.addEventListener("storage", handleStorageChange);
  emitChange();
}

export function subscribeToTutorialProgress(listener: () => void) {
  listeners.add(listener);
  initializeTutorialProgress();

  return () => {
    listeners.delete(listener);
  };
}

export function getCompletedLessonKeysSnapshot() {
  return completedLessonKeys;
}

export function getCompletedLessonKeysServerSnapshot() {
  return emptyCompletedLessonKeys;
}

export function getTutorialProgressHydrationSnapshot() {
  return isHydrated;
}

export function getTutorialProgressHydrationServerSnapshot() {
  return false;
}

export function markTutorialLessonCompleted(lessonKey: string) {
  if (typeof window === "undefined") {
    return;
  }

  initializeTutorialProgress();

  if (completedLessonKeys.includes(lessonKey)) {
    return;
  }

  completedLessonKeys = [...completedLessonKeys, lessonKey];
  writeCompletedLessonKeys(completedLessonKeys);
  emitChange();
}
