import ProductCard from "@/components/dashboard/card/ProductCard";
import { allProducts } from "@/helpers/data/all-products-data";
import { ProductCardProps } from "@/types/main";
import React from "react";

const AllProducts = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <p className="font-semibold text-xl my-5">All Products</p>
        <div className="grid grid-cols-4 gap-6">
          {allProducts &&
            allProducts.map((item: ProductCardProps, index: number) => (
              <ProductCard data={item} key={index} />
            ))}
        </div>
      </div>
    </>
  );
};

export default AllProducts;
