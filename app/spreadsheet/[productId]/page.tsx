import { notFound } from "next/navigation";

import {
  getSpreadsheetProductById,
  ProductDetailsPage,
  spreadsheetProducts,
} from "@/features/spreadsheet";

type ProductDetailsRouteProps = {
  params: Promise<{
    productId: string;
  }>;
};

export function generateStaticParams() {
  return spreadsheetProducts.map((product) => ({
    productId: product.id,
  }));
}

export default async function ProductDetailsRoute({
  params,
}: ProductDetailsRouteProps) {
  const { productId } = await params;
  const product = getSpreadsheetProductById(productId);

  if (!product) {
    notFound();
  }

  return <ProductDetailsPage product={product} />;
}
