"use client";

import ProductCard from "@/components/dashboard/card/ProductCard";
import { allProducts } from "@/helpers/data/all-products-data";
import { Brand, ProductCardProps } from "@/types/data";
import React, { useState } from "react";
import allProductBanner from "@/assets/image/sliders/allProductGroup2.png";
import Image from "next/image";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionSubHeading from "@/components/ui/SectionSubHeading";
import SectionDescription from "@/components/ui/SectionDescription";
import { allBrands } from "@/lib/constants";

const AllProducts = () => {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const onSelectBrand = (selectedBrandId: string) => {
    setSelectedBrand(selectedBrandId === "all" ? null : selectedBrandId);
  };

  const filteredProducts = allProducts.filter((product: ProductCardProps) => {
    const matchesBrand = selectedBrand
      ? product.brand_id.toString() === selectedBrand
      : true;
    const matchesSearch = searchTerm
      ? product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
      : true;

    return matchesBrand && matchesSearch;
  });

  return (
    <div>
      <div className="relative h-[72vh]">
        <Image
          src={allProductBanner}
          alt="all products image"
          fill
          className="object-cover"
        />
      </div>

      <Section style={{ paddingTop: 60 }}>
        <div className="space-y-6">
          <SectionHeading>Explore Our Products By Brands</SectionHeading>
          <SectionSubHeading>
            Discover Top Brands & Their Products
          </SectionSubHeading>
          <SectionDescription>
            Find all your favorite brands in one place! Browse through our wide
            selection of top-quality products from leading brands. Click on any
            brand to explore its full range of offerings and discover the
            perfect products for you.
          </SectionDescription>

          {/* Brand Selection */}
          <div className="flex flex-wrap items-center">
            {allBrands.map((item: Brand, brandIndex) => {
              const isSelected = selectedBrand === `${item.id}`;

              return (
                <div
                  key={brandIndex}
                  onClick={() => onSelectBrand(`${item.id}`)}
                  className={`relative group w-[170px] h-[110px] cursor-pointer rounded-md transition-all duration-300"
                  }`}
                >
                  {/* Gray Image (Default) */}
                  <Image
                    src={item.image.gray}
                    alt={item.brandName}
                    height={110}
                    className={`absolute inset-0 transition-opacity duration-300 ${
                      isSelected ? "opacity-0" : "opacity-100"
                    }`}
                  />

                  {/* Color Image (Shown when selected) */}
                  <Image
                    src={item.image.color}
                    alt={item.brandName}
                    height={110}
                    className={`absolute inset-0 transition-opacity duration-300 ${
                      isSelected
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>
{/* 
        <SectionHeading>
          {selectedBrand && selectedBrand !== "all"
            ? allBrands.find((item: any) => item.id === parseInt(selectedBrand))
                ?.brandName + " Products"
            : "All Products"}
        </SectionHeading> */}
        {/* Product Grid */}
        <div className="grid mt-4 gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
      </Section>
    </div>
  );
};

export default AllProducts;
