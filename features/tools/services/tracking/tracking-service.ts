export type TrackingStatus =
  | "unavailable"
  | "pending"
  | "in_transit"
  | "delivered"
  | "exception";

export type TrackParcelRequest = {
  trackingNumber: string;
};

export type TrackingServiceResult = {
  message: string;
  status: TrackingStatus;
  trackingNumber: string;
};

export type TrackingActionResult =
  | TrackingServiceResult
  | {
      message: string;
      status: "invalid";
      trackingNumber: null;
    };

export interface TrackingService {
  trackParcel(request: TrackParcelRequest): Promise<TrackingServiceResult>;
}
