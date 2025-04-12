"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import leafIcon from "@/assets/image/landing-page/leafIcon.svg";
import { ChevronRight } from "lucide-react";
import { allBrands } from "@/lib/constants";
import { Brand } from "@/types/data";
import Section from "@/components/ui/Section";
import { useRouter } from "next/navigation";


const BrandSection = () => {
  const router=useRouter()
  return (
    <Section>
      {/* Title Section */}
      <h2 className="text-3xl md:text-5xl lg:text-6xl text-[#206CB1] ">
        Explore Our <span className="text-[#00A85A]">Brands</span>
      </h2>
      <h4 className="text-lg md:text-2xl lg:text-4xl text-[#333333]">
        Discover Top Brands & Their Products
      </h4>

      <div className="flex items-top gap-10 tracking-wide">
        <p>
          Find all your favorite brands in one place! Browse through our wide
          selection of top-quality products from leading brands. Click on any
          brand to explore its full range of offerings and discover the perfect
          products for you.
        </p>{" "}
        <Button onClick={()=>router.push("/products/all")} className="flex items-center bg-[#1263AD] rounded-full px-7 py-6 text-white transition-all duration-300 hover:bg-[#0E5290] hover:scale-105">
          <Image src={leafIcon} alt="leaf" className="mr-2" height={25} />
          All Products
          <ChevronRight />
        </Button>
      </div>
      <div className="flex items-center gap-4 pt-10">
        {allBrands.map((item: Brand, brandIndex) => (
          <div
            key={brandIndex}
            className="relative group w-[170px] h-[110px] cursor-pointer"
          >
            {/* Gray Image (Default) */}
            <Image
              src={item.image.gray}
              alt={item.brandName}
              height={110}
              className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
            />

            {/* Color Image (Shown on Hover) */}
            <Image
              src={item.image.color}
              alt={item.brandName}
              height={110}
              className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default BrandSection;
