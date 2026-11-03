import { allProducts } from "@/helpers/data/all-products-data";
import { allBrands } from "@/lib/constants";
import { ProductCardProps } from "@/types/data";

// lowercase and drop spaces/punctuation so "every day", "EveryDay" and "everyday" all match
const normalize = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "");

const brandNameById = new Map(allBrands.map((b) => [b.id.toString(), b.brandName]));

// Each product is searchable by its own name, its brand_name and the brand's display name
const index = allProducts.map((product: ProductCardProps) => ({
  product,
  name: normalize(product.product_name),
  haystack: normalize(
    [product.product_name, product.brand_name, brandNameById.get(product.brand_id.toString()) ?? ""].join(" ")
  ),
}));

// Every word in the query must match somewhere; hits on the product name rank first
export const searchProducts = (query: string): ProductCardProps[] => {
  const words = query.split(/\s+/).map(normalize).filter(Boolean);
  if (!words.length) return allProducts;

  return index
    .filter((entry) => words.every((w) => entry.haystack.includes(w)))
    .sort((a, b) => Number(words.some((w) => b.name.includes(w))) - Number(words.some((w) => a.name.includes(w))))
    .map((entry) => entry.product);
};
