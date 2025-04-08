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
    <>
      {brandData && (
        <Image src={brandData.banner} alt="banner" className="mb-2" />
      )}
      <div className="pb-10 px-16">
        {brandData && (
          <div className="space-y-6">
            <div className="flex flex-col items-center">
              <Image src={brandData.image.color} alt={brandData.brandName} />
              <p className="text-center text-3xl mb-5 font-bold text-[#393880]">
                {brandData.description}
              </p>
            </div>

            <div
              dangerouslySetInnerHTML={{
                __html: brandData.longDescription || "",
              }}
              className="max-w-5xl mx-auto space-y-4 lg:text-lg"
            ></div>
          </div>
        )}
        <div>
         {brandData && (
           <SectionHeading className="text-center my-10">
             {`${brandData.brandName} Products`}
           </SectionHeading>
         )}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productListByBrand?.map((item, index) => (
              <ProductCard key={index} data={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBrand;
