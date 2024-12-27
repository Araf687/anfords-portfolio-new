'use client';

import ProductCard from "@/components/dashboard/card/ProductCard";
import { allProducts } from "@/helpers/data/all-products-data";
import { Brand, ProductCardProps } from "@/types/data";
import React, { useState } from "react";
import allProductBanner from "@/assets/image/sliders/alProductGroup.png";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { allBrands } from "@/lib/constants";

const AllProducts = () => {
  const [brandList] = useState(allBrands); // Brand options
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null); // Selected brand
  const [searchTerm, setSearchTerm] = useState<string>(""); // Search term for input

  const onSelectBrand = (selectedBrandId: string) => {
    setSelectedBrand(selectedBrandId === "all" ? null : selectedBrandId);
    console.log("Selected Brand ID:", selectedBrandId);
  };

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Filter products based on selected brand and search term
  const filteredProducts = allProducts.filter((product: ProductCardProps) => {
    const matchesBrand = selectedBrand ? product.brand_id.toString() === selectedBrand : true;
    const matchesSearch = searchTerm
      ? product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
      : true;

    return matchesBrand && matchesSearch;
  });

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
        <p className="font-semibold text-xl my-5">All Products</p>
        <div className="flex justify-between items-center mb-5">
          <div className="w-2/3">
            <Input
              type="text"
              className="w-full"
              placeholder="Write Product name to search.."
              value={searchTerm}
              onChange={onChangeSearchInput}
            />
          </div>
          <div>
            <Select onValueChange={onSelectBrand}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a Brand" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Brands</SelectLabel>
                  <SelectItem value="all">All</SelectItem>
                  {brandList.map((item: Brand, index: number) => (
                    <SelectItem key={index} value={`${item.id}`}>
                      {item.brandName}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item: ProductCardProps, index: number) => (
              <ProductCard data={item} key={index} />
            ))
          ) : (
            <div className="h-[40vh] col-span-full flex justify-center items-center">
              <p className="font-semibold">No Items to show</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
