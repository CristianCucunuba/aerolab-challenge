import { Product } from "../types";

export const sortCatalogByLowerPrice = (
  productA: Product,
  productB: Product
) => {
  return productA.cost - productB.cost;
};

export const sortCatalogByHighestPrice = (
  productA: Product,
  productB: Product
) => {
  return productB.cost - productA.cost;
};
