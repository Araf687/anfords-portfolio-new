"use client";
import ProductCard from "@/components/dashboard/card/ProductCard";
import Section from "@/components/ui/Section";
import SectionDescription from "@/components/ui/SectionDescription";
import SectionHeading from "@/components/ui/SectionHeading";
import { allProducts } from "@/helpers/data/all-products-data";
import { allBrands } from "@/lib/constants";
import { Brand, Product } from "@/types/data";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const SingleBrand = ({ params }: { params: { brandId: string } }) => {
  const [brandData, setBrandData] = useState<Brand>();
  const [productListByBrand, setProductListByBrand] = useState<
    Product[] | null
  >(null);

  useEffect(() => {
    const brand = allBrands.find(
      (brand) => brand.id.toString() === params.brandId
    );
    setBrandData(brand);
    const productByBrand = allProducts.filter(
      (item: Product) => item.brand_id === brand?.id
    );
    setProductListByBrand(productByBrand);
  }, [params.brandId]);

  return (
    <div className="py-10 px-16">
      {brandData && (
        <div className="space-y-6">
         <SectionHeading>{`About ${brandData.brandName || ""}`}</SectionHeading>


          <SectionDescription>{brandData?.longDescription}</SectionDescription>
        </div>
      )}
      <div>
        {brandData ? (
          <div className="flex justify-center border-b-4 border-fuchsia-800 my-10">
            <Image src={brandData.image.color} alt={brandData.brandName} />
          </div>
        ) : (
          <p>Brand not found</p>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productListByBrand?.map((item, index) => (
            <ProductCard key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleBrand;
