"use server";

import { getTrackingService } from "../services/tracking/get-tracking-service";
import type { TrackingActionResult } from "../services/tracking/tracking-service";

function validateTrackingNumber(rawValue: string) {
  const normalizedValue = rawValue.trim();

  if (!normalizedValue) {
    return {
      error: "Tracking number is required.",
      value: null,
    };
  }

  if (!/^[A-Za-z0-9][A-Za-z0-9-]{5,39}$/.test(normalizedValue)) {
    return {
      error:
        "Enter a valid tracking number using 6–40 letters, numbers, or hyphens.",
      value: null,
    };
  }

  return {
    error: null,
    value: normalizedValue.toUpperCase(),
  };
}

export async function trackParcel(
  trackingNumber: string,
): Promise<TrackingActionResult> {
  const validation = validateTrackingNumber(trackingNumber);

  if (validation.error || validation.value === null) {
    return {
      message: validation.error ?? "Enter a valid tracking number.",
      status: "invalid",
      trackingNumber: null,
    };
  }

  const trackingService = getTrackingService();

  return trackingService.trackParcel({
    trackingNumber: validation.value,
  });
}
