import { ProductCardProps } from "@/types/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductCardComponentProps {
  data: ProductCardProps;
}

const ProductCard: React.FC<ProductCardComponentProps> = ({ data }) => {
  const { id, product_name, image, width, rating, titleColor, productCardBg } =
    data;
  return (
    <>
      <div
        className="h-[395px] w-full flex items-center justify-center relative" // Ensure full width and fixed height
        style={{
          backgroundImage: productCardBg
            ? `url(${productCardBg.src})`
            : undefined,
           
          backgroundSize: "cover", // Ensure the background image covers the full width and height of the div
         
          backgroundRepeat: "no-repeat", // Prevents repeating the background image
        }}
      >
        <div className="group flex flex-col space-y-8 items-center transition duration-500 ease-out relative z-10 w-full">
          {/* Glassmorphism effect on product name with full width */}
          <p
            className={`w-full font-bold ${
              titleColor ? `text-[${titleColor}]` : "text-sky-800"
            } text-center text-lg backdrop-blur-md bg-white/20 p-2 rounded`}
          >
            {product_name}
          </p>

          <div>
            <Image
              src={image}
              alt={product_name || "Product image"}
              className="w-[250px] object-contain transition-transform duration-500 ease-out group-hover:scale-125"
            />
          </div>

          <p className="text-center text-sm font-semibold bg-sky-700 py-2 px-4 rounded-full">
            <Link href={`/products/${id}`} className="text-white">
              View more
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
