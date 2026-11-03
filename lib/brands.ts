import { ProductCardProps } from "@/types/data";

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
