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
  productCardBg:StaticImageData;
  image: StaticImageData; // Assuming `mediplusToothpaste` is the path or URL of the image
  shortDescription: string; // HTML as string
  longDescription: string; // HTML as string
  rating: string; // It's a string, but you may want to consider changing it to `number` if it should be numeric
  width: number;
  height?: number | undefined; // Explicitly allowing `undefined`
  titleColor?:string
  descriptionSideImg:StaticImageData;
  banner:StaticImageData;
};


export interface Brand {
  id:Number;
  brandName: string;
  description: string;
  longDescription?: string; // HTML as string
  href: string;
  image:{gray:StaticImageData,color:StaticImageData}
}

export interface Product {
  id: number;
  brand_id: number;
  brand_name: string;
  productCardBg:StaticImageData;
  product_name: string;
  image: StaticImageData; // Assuming `toothpaste` is a string (URL or path to image)
  shortDescription: string;
  longDescription: string;
  rating: string; // Could be `number`, but keeping it as `string` based on your data
  width: number;
  height?: number; // Optional since it's `undefined`
  descriptionSideImg:StaticImageData;
  banner:StaticImageData;
};
