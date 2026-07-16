"use client";

import { useCallback, useSyncExternalStore } from "react";

import {
  getCompletedLessonKeysServerSnapshot,
  getCompletedLessonKeysSnapshot,
  getTutorialProgressHydrationServerSnapshot,
  getTutorialProgressHydrationSnapshot,
  markTutorialLessonCompleted,
  subscribeToTutorialProgress,
} from "../state/tutorial-progress-store";

export function useTutorialProgress() {
  const completedLessonKeys = useSyncExternalStore(
    subscribeToTutorialProgress,
    getCompletedLessonKeysSnapshot,
    getCompletedLessonKeysServerSnapshot,
  );
  const isHydrated = useSyncExternalStore(
    subscribeToTutorialProgress,
    getTutorialProgressHydrationSnapshot,
    getTutorialProgressHydrationServerSnapshot,
  );
  const isLessonCompleted = useCallback(
    (lessonKey: string) => completedLessonKeys.includes(lessonKey),
    [completedLessonKeys],
  );

  return {
    completedLessonKeys,
    isHydrated,
    isLessonCompleted,
    markLessonCompleted: markTutorialLessonCompleted,
  };
}
