"use client";

import React from "react";
import { visibleBrands } from "@/lib/brands";
import { Brand } from "@/types/data";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionSubHeading from "@/components/ui/SectionSubHeading";
import SectionDescription from "@/components/ui/SectionDescription";
import UiButton from "@/components/ui/uiButton";
import Eyebrow from "@/components/ui/Eyebrow";
import BrandCard from "@/components/dashboard/brands/BrandCard";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const BrandSection = () => {
  return (
    <Section className="overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark mask-fade-b" />
      <div className="relative grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
        <div className="space-y-5">
          <Reveal>
            <Eyebrow>Our Brands</Eyebrow>
          </Reveal>
          {/* Title Section */}
          <SectionHeading>Explore Our Brands</SectionHeading>
          <SectionSubHeading>Discover Top Brands & Their Products</SectionSubHeading>
        </div>
        <div className="space-y-6 lg:pb-2">
          <SectionDescription>
            Find all your favorite brands in one place! Browse through our wide
            selection of top-quality products from leading brands. Click on any
            brand to explore its full range of offerings and discover the perfect
            products for you.
          </SectionDescription>
          <Reveal delay={0.3}>
            <UiButton href="/products/all">All Products</UiButton>
          </Reveal>
        </div>
      </div>

      {/* swipeable row on phones, grid from tablet up */}
      <Stagger
        stagger={0.08}
        className="no-scrollbar relative -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-6 pt-8 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 lg:grid-cols-4"
      >
        {visibleBrands.map((item: Brand) => (
          <StaggerItem key={item.id.toString()} className="w-[78%] shrink-0 snap-center sm:w-auto">
            <BrandCard item={item} />
          </StaggerItem>
        ))}
      </Stagger>
      <p className="text-center text-xs text-slate-400 sm:hidden">Swipe to see all brands →</p>
    </Section>
  );
};

export default BrandSection;
