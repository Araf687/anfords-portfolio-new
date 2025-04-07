import { ProductCardProps } from "@/types/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductCardComponentProps {
  data: ProductCardProps;
}

const ProductCard: React.FC<ProductCardComponentProps> = ({ data }) => {
  const { id, product_name, image, titleColor, productCardBg } = data;

  return (
    <div
    className="h-[395px] w-full flex items-center justify-center relative"
    style={{
      backgroundImage: productCardBg ? `url(${productCardBg.src})` : undefined,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}
  >
    <div className="group flex flex-col space-y-8 items-center transition duration-500 ease-out relative z-10 w-[250px]">
      {/* Glassmorphism effect on product name */}
      <p
        className="font-semibold text-center lg:min-w-[327px] text-lg backdrop-blur-md bg-white/20 p-2 rounded"
        style={{ color: titleColor || "#041e59" }}
      >
        {product_name}
      </p>
  
      <div>
        <Image
          src={image}
          alt={product_name || "Product image"}
          className="object-contain transition-transform duration-500 ease-out group-hover:scale-125"
          width={250}
          height={250}
        />
      </div>
  
      <p className="text-center text-sm font-semibold bg-[#041e59] py-2 px-4 rounded-full">
        <Link href={`/products/${id}`} className="text-white">
          View more
        </Link>
      </p>
    </div>
  </div>
  
  );
};

export default ProductCard;
