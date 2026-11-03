import ProductCard from "@/components/dashboard/card/ProductCard";
import { visibleBrands, visibleProducts } from "@/lib/brands";
import SectionHeading from "@/components/ui/SectionHeading";
import UiButton from "@/components/ui/uiButton";
import { Product } from "@/types/data";
import Image from "next/image";
import BrandLogo from "@/components/ui/BrandLogo";
import Link from "next/link";
import React from "react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import BrandHero from "@/components/dashboard/brands/BrandHero";

// The data opens most descriptions with a styled lead paragraph; lift it into the hero
const splitLead = (html = "") => {
  const m = html.match(/^\s*<p style="[^"]*">([\s\S]*?)<\/p>/);
  return m ? { lead: m[1].trim(), body: html.slice(m[0].length) } : { lead: undefined, body: html };
};

// some lists number their items by hand ("1. Kills lice…"); the bullet chips already mark each item
const stripManualNumbers = (html: string) => html.replace(/<li>(\s*)\d+\.\s*/g, "<li>$1");

const SingleBrand = ({ params }: { params: { brandId: string } }) => {
  const brandData = visibleBrands.find((brand) => brand.id.toString() === params.brandId);

  if (!brandData) {
    return (
      <div className="container flex min-h-[70vh] flex-col items-center justify-center gap-6 pt-28 text-center">
        <p className="text-2xl font-semibold text-brand-navy">Brand not found</p>
        <UiButton href="/brands">Explore Our Brands</UiButton>
      </div>
    );
  }

  const productListByBrand = visibleProducts.filter((item: Product) => item.brand_id === brandData.id);
  const otherBrands = visibleBrands.filter((b) => b.id !== brandData.id);

  const { lead, body: rawBody } = splitLead(brandData.longDescription);
  const body = stripManualNumbers(rawBody);

  return (
    <div className="bg-white">
      <BrandHero brand={brandData} products={productListByBrand} lead={lead} />

      <section id="story" className="container scroll-mt-28 py-14 sm:py-20">
        <Reveal direction="none" duration={1}>
          <div className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5">
            <Image src={brandData.banner} alt={`${brandData.brandName} banner`} className="h-auto w-full" sizes="100vw" />
          </div>
        </Reveal>
        <Reveal delay={0.1} className="mx-auto mt-12 max-w-4xl sm:mt-16">
          <div dangerouslySetInnerHTML={{ __html: body }} className="rich-text"></div>
        </Reveal>
      </section>

      {productListByBrand.length > 0 && (
        <section id="products" className="scroll-mt-20 bg-brand-mist py-14 sm:py-20">
          <div className="container space-y-8">
            <SectionHeading className="text-center sm:text-5xl">{`${brandData.brandName} Products`}</SectionHeading>
            {/* flex-wrap + centred so a brand with one or two products doesn't sit stranded on the left */}
            <Stagger className="flex flex-wrap justify-center gap-5 sm:gap-6">
              {productListByBrand.map((item) => (
                <StaggerItem
                  key={item.id}
                  className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)]"
                >
                  <ProductCard data={item} />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      <section className="container py-12">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Explore Our Brands</p>
        {/* vertical padding gives hovered chips room to lift without being clipped by the scroller */}
        <div className="no-scrollbar -mx-5 flex gap-3 overflow-x-auto px-5 py-3">
          {otherBrands.map((b) => (
            <Link
              key={b.id.toString()}
              href={`/brands/${b.id}`}
              aria-label={b.brandName}
              className="flex h-20 shrink-0 items-center rounded-2xl border border-slate-200 bg-white px-6 transition-all hover:-translate-y-0.5 hover:border-brand-sky hover:shadow-lg"
            >
              <BrandLogo brand={b} size={28} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SingleBrand;
