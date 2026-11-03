import BrandCard from "@/components/dashboard/brands/BrandCard";
import { visibleBrands } from "@/lib/brands";
import PageHero from "@/components/ui/PageHero";
import UiButton from "@/components/ui/uiButton";
import { Brand } from "@/types/data";
import ProductShowcase from "@/components/dashboard/landing-page/ProductShowcase";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

import React from "react";

const BrandPage = () => {
  return (
    <>
      <PageHero
        crumb="Brands"
        eyebrow="Our Brands"
        title="Explore Our Brands"
        subtitle="Discover Top Brands & Their Products"
        description="Find all your favorite brands in one place! Browse through our wide selection of top-quality products from leading brands. Click on any brand to explore its full range of offerings and discover the perfect products for you."
      >
        <UiButton varient="light" href="/products/all">
          All Products
        </UiButton>
      </PageHero>

      <section className="bg-brand-mist py-14 sm:py-20">
        <Stagger className="container grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4" stagger={0.07}>
          {visibleBrands.map((item: Brand) => (
            <StaggerItem key={item.id.toString()}>
              <BrandCard item={item} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <ProductShowcase />
    </>
  );
};

export default BrandPage;
