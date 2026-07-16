export type SpreadsheetProduct = {
  category: string;
  id: string;
  marketplace: string;
  price: string;
  priceCny: string;
  productUrl: string;
  title: string;
};

// PLACEHOLDER: Replace with each product's verified Pinduoduo URL
// when product management is connected to the admin panel or database.
const placeholderPinduoduoUrl = "https://mobile.yangkeduo.com/";

export const spreadsheetProducts: SpreadsheetProduct[] = [
  {
    category: "Hoodies",
    id: "product-01",
    marketplace: "Pinduoduo",
    price: "24.90 AZN",
    priceCny: "¥103.00",
    productUrl: placeholderPinduoduoUrl,
    title: "Product placeholder 01",
  },
  {
    category: "T-Shirts",
    id: "product-02",
    marketplace: "Pinduoduo",
    price: "12.50 AZN",
    priceCny: "¥51.80",
    productUrl: placeholderPinduoduoUrl,
    title: "Product placeholder 02",
  },
  {
    category: "Pants",
    id: "product-03",
    marketplace: "Pinduoduo",
    price: "21.90 AZN",
    priceCny: "¥90.60",
    productUrl: placeholderPinduoduoUrl,
    title: "Product placeholder 03",
  },
  {
    category: "Shoes",
    id: "product-04",
    marketplace: "Pinduoduo",
    price: "32.00 AZN",
    priceCny: "¥132.40",
    productUrl: placeholderPinduoduoUrl,
    title: "Product placeholder 04",
  },
  {
    category: "Accessories",
    id: "product-05",
    marketplace: "Pinduoduo",
    price: "8.90 AZN",
    priceCny: "¥36.80",
    productUrl: placeholderPinduoduoUrl,
    title: "Product placeholder 05",
  },
  {
    category: "Jackets",
    id: "product-06",
    marketplace: "Pinduoduo",
    price: "38.50 AZN",
    priceCny: "¥159.30",
    productUrl: placeholderPinduoduoUrl,
    title: "Product placeholder 06",
  },
  {
    category: "Hoodies",
    id: "product-07",
    marketplace: "Pinduoduo",
    price: "26.90 AZN",
    priceCny: "¥111.30",
    productUrl: placeholderPinduoduoUrl,
    title: "Product placeholder 07",
  },
  {
    category: "Shoes",
    id: "product-08",
    marketplace: "Pinduoduo",
    price: "29.90 AZN",
    priceCny: "¥123.70",
    productUrl: placeholderPinduoduoUrl,
    title: "Product placeholder 08",
  },
];

export function getSpreadsheetProductById(productId: string) {
  return spreadsheetProducts.find((product) => product.id === productId);
}
