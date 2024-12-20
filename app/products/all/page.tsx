import ProductCard from "@/components/dashboard/card/ProductCard";
import { allProducts } from "@/helpers/data/all-products-data";
import { ProductCardProps } from "@/types/main";
import React from "react";

const AllProducts = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto mb-10">
        <p className="font-semibold text-xl my-5">All Products</p>
        <div className="container mx-auto">
          <div className="grid grid-cols-4 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xs:grid-cols-1">
            {allProducts &&
              allProducts.map((item: ProductCardProps, index: number) => (
                <ProductCard data={item} key={index} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
