import type {
  TrackingService,
  TrackingServiceResult,
} from "./tracking-service";

const unavailableMessage =
  "Live tracking is not connected yet. A real carrier provider will be added later.";

export const mockDisabledTrackingProvider: TrackingService = {
  trackParcel({ trackingNumber }): Promise<TrackingServiceResult> {
    return Promise.resolve({
      message: unavailableMessage,
      status: "unavailable",
      trackingNumber,
    });
  },
};
