import { StaticImageData } from "next/image";

// Define the type for card data
export type AboutCardProps = {
  image: StaticImageData; // Type imported images correctly
  title: string;
  description: string;
  width?:number;
  height?:number
};

export interface ProductCardProps {
  id: number;
  brand_id: number;
  brand_name: string;
  product_name: string;
  image: StaticImageData; // Assuming `mediplusToothpaste` is the path or URL of the image
  shortDescription: string; // HTML as string
  longDescription: string; // HTML as string
  rating: string; // It's a string, but you may want to consider changing it to `number` if it should be numeric
  width: number;
  height?: number | undefined; // Explicitly allowing `undefined`
};


export interface Brand {
  id:Number;
  brandName: string;
  description: string;
  href: string;
  image:{gray:StaticImageData,color:StaticImageData}
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
