import ProductCard from "@/components/dashboard/card/ProductCard";
import { allProducts } from "@/helpers/data/all-products-data";
import { Brand, ProductCardProps } from "@/types/data";
import React, { useRef } from "react";
import allProductBanner from "@/assets/image/sliders/alProductGroup.png";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Select } from "@radix-ui/react-select";
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { allBrands } from "@/lib/constants";

const AllProducts = () => {
  const searchInputRef=useRef(null)
  const onSelectBrand=()=>{

  }
  const onChangeSearchInput=()=>{
    
  }
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
      <div className="max-w-6xl mx-auto pb-10 px-4">
        {/* <p className="font-semibold text-xl my-5">All Products</p> */}
        <div className="flex justify-between items-center mb-10">
          <div className="w-2/3">
            <Input
              type="text"
              className="w-full"
              placeholder="Write Product name to search.."
            />
          </div>
          <div>
            {" "}
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a Brand" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Brands</SelectLabel>
                  {allBrands &&
                    allBrands.map((item: Brand, index: number) => (
                      <SelectItem key={index} value={`item.id`}>
                        {item.brandName}
                      </SelectItem>
                    ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
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
