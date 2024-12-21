import ProductCard from "@/components/dashboard/card/ProductCard";
import { allProducts } from "@/helpers/data/all-products-data";
import { ProductCardProps } from "@/types/main";
import React from "react";
import allProductBanner from "@/assets/image/sliders/alProductGroup.png";
import Image from "next/image";

const AllProducts = () => {
  return (
    <div className="space-y-6">
  <div className="relative h-[78vh]">
    <Image 
      src={allProductBanner} 
      alt="all products image" 
      fill 
      className="object-cover" 
    />
  </div>
  <div className="max-w-6xl mx-auto px-4">
    <p className="font-semibold text-xl my-5">All Products</p>
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {allProducts &&
        allProducts.map((item: ProductCardProps, index: number) => (
          <ProductCard data={item} key={index} />
        ))}
    </div>
  </div>
</div>

  );
};

export default AllProducts;
