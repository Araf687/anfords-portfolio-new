import { StaticImageData } from "next/image";

// Define the type for card data
export type AboutCardProps = {
  image: StaticImageData; // Type imported images correctly
  title: string;
  description: string;

};

export interface ProductCardProps {
  id: number;
  product_name: string;
  image: StaticImageData; // Allow either a URL string or an imported image
  description: string;
  rating: string;
  width?:number|undefined;
}
