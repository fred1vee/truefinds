export type CurrencyDirection = "cny-to-azn" | "azn-to-cny";

type ValidNumberResult =
  | {
      error: null;
      value: number;
    }
  | {
      error: string;
      value: null;
    };

export function parsePositiveNumber(
  rawValue: string,
  fieldName: string,
): ValidNumberResult {
  if (!rawValue.trim()) {
    return {
      error: `${fieldName} is required.`,
      value: null,
    };
  }

  const parsedValue = Number(rawValue);

  if (!Number.isFinite(parsedValue)) {
    return {
      error: `Enter a valid ${fieldName.toLowerCase()}.`,
      value: null,
    };
  }

  if (parsedValue <= 0) {
    return {
      error: `${fieldName} must be greater than zero.`,
      value: null,
    };
  }

  return {
    error: null,
    value: parsedValue,
  };
}

export function calculateShippingEstimate(
  weightKilograms: number,
  aznPerKilogram: number,
) {
  return weightKilograms * aznPerKilogram;
}

export function convertCurrency(
  amount: number,
  direction: CurrencyDirection,
  cnyToAznRate: number,
) {
  return direction === "cny-to-azn"
    ? amount * cnyToAznRate
    : amount / cnyToAznRate;
}

export function validateTrackingNumber(rawValue: string) {
  const normalizedValue = rawValue.trim();

  if (!normalizedValue) {
    return {
      error: "Tracking number is required.",
      value: null,
    };
  }

  if (!/^[A-Za-z0-9][A-Za-z0-9-]{5,39}$/.test(normalizedValue)) {
    return {
      error: "Enter a valid tracking number using 6–40 letters, numbers, or hyphens.",
      value: null,
    };
  }

  return {
    error: null,
    value: normalizedValue.toUpperCase(),
  };
}
