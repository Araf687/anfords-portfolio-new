import { StaticImageData } from "next/image";

// Define the type for card data
export type AboutCardProps = {
    image: StaticImageData; // Type imported images correctly
    title: string;
    description: string;
  };