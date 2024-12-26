import { StaticImageData } from "next/image";

// Define the type for card data
export type AboutCardProps = {
  image: StaticImageData; // Type imported images correctly
  title: string;
  description: string;
};

export interface ProductCardProps {
  id: number;
  brand_name:string;
  product_name: string;
  image: StaticImageData | string; // Allow either a URL string or an imported image
  shortDescription: string;
  longDescription:string;
  rating: string;
  width?: number | undefined;
  height?:number |undefined;
}

export interface Brand {
  id:Number;
  brandName: string;
  description: string;
  href: string;
}

export interface Product {
  id: number;
  product_name: string;
  image: StaticImageData; // Assuming 'sleek' is a string URL or file path
  shortDescription: string; // Can include HTML tags
  longDescription: string; // Plain text or with special formatting like bullets
  rating: string | number; // Depending on how you handle ratings (as a string or number)
  width?: number |undefined; // Assumed to represent the width as a numeric value
};
