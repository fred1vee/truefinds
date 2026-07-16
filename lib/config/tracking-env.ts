import "server-only";

export type TrackingEnvironment = {
  apiBaseUrl: string | undefined;
  apiKey: string | undefined;
};

export function getTrackingEnvironment(): TrackingEnvironment {
  return {
    apiBaseUrl: process.env.TRACKING_API_BASE_URL,
    apiKey: process.env.TRACKING_API_KEY,
  };
}
