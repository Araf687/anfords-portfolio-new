import BrandCard from "@/components/dashboard/brands/BrandCard";
import Section from "@/components/ui/Section";
import SectionDescription from "@/components/ui/SectionDescription";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionSubHeading from "@/components/ui/SectionSubHeading";
import { allBrands } from "@/lib/constants";
import { Brand } from "@/types/data";
import Image from "next/image";
import anfordsProductMockup from "@/assets/image/landing-page/anfordsProductMockup.svg";

import React from "react";

const BrandPage = () => {
  return (
    <>
    <Image src={anfordsProductMockup} alt=""/>
      <Section className="bg-blue-100">
        <SectionHeading>Explore Our Brands</SectionHeading>
        <SectionSubHeading>
          Discover Top Brands & Their Products
        </SectionSubHeading>
        <SectionDescription>
          Find all your favorite brands in one place! Browse through our wide
          selection of top-quality products from leading brands. Click on any
          brand to explore its full range of offerings and discover the perfect
          products for you.
        </SectionDescription>
        <div className="grid grid-cols-4 gap-4 pt-10">
          {allBrands.map((item: Brand, brandIndex) => (
            <BrandCard item={item} key={brandIndex} />
          ))}
        </div>
      </Section>
    </>
  );
};

export default BrandPage;
