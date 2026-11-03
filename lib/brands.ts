import { ProductCardProps } from "@/types/data";
import { allBrands } from "@/lib/constants";
import { allProducts } from "@/helpers/data/all-products-data";

// brands flagged `hide` in constants are left off the site, along with their products
export const visibleBrands = allBrands.filter((b) => !b.hide);
const visibleBrandIds = new Set(visibleBrands.map((b) => b.id.toString()));
const brandRank = new Map(visibleBrands.map((b, i) => [b.id.toString(), i]));
// products follow the brand order, so oral care leads every product list too
export const visibleProducts = allProducts
  .filter((p: ProductCardProps) => visibleBrandIds.has(p.brand_id.toString()))
  .sort((a: ProductCardProps, b: ProductCardProps) => brandRank.get(a.brand_id.toString())! - brandRank.get(b.brand_id.toString())!);

// Each sub-brand's own pack colour, used only as tints behind its products
export const brandAccent: Record<string, string> = {
  "1": "#F2B705", // Envy – turmeric yellow
  "2": "#3FA34D", // English – herbal green
  "3": "#A24BB5", // Sleek – lavender
  "4": "#005AAA", // Mediplus – Anfords blue
  "5": "#1C8FD6", // Mediplus Gel – fluoride blue
  "6": "#E2373F", // Mediplus DS – red
  "7": "#1FA34A", // Brush Up – mint green
  "8": "#2E9EFF", // Every Day – sky
};

export const getBrandAccent = (id: number | Number) => brandAccent[id.toString()] ?? "#005AAA";

// pick up to 3 products spread across the range so a brand's variety shows
export const pickProducts = (list: ProductCardProps[]) => {
  if (list.length <= 3) return list;
  return [list[0], list[Math.floor(list.length / 2)], list[list.length - 1]];
};
