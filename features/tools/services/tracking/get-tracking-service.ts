import "server-only";

import { mockDisabledTrackingProvider } from "./mock-disabled-tracking-provider";
import type { TrackingService } from "./tracking-service";

export function getTrackingService(): TrackingService {
  return mockDisabledTrackingProvider;
}
