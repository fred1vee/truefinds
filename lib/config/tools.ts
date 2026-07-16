export type ShippingCarrierId = "starex" | "expargo";

export type ShippingTariff = {
  aznPerKilogram: number;
  id: ShippingCarrierId;
  name: string;
};

// PLACEHOLDER: Replace through the future admin-controlled tools configuration.
export const PLACEHOLDER_SHIPPING_TARIFFS: readonly ShippingTariff[] = [
  {
    aznPerKilogram: 8.5,
    id: "starex",
    name: "Starex",
  },
  {
    aznPerKilogram: 7.9,
    id: "expargo",
    name: "Expargo",
  },
];

// PLACEHOLDER: Replace with the approved daily rate from the future data layer.
export const PLACEHOLDER_CNY_TO_AZN_RATE = 0.4;
