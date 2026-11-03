"use client";
import React from "react";
import { visibleBrands } from "@/lib/brands";
import Image from "next/image";
import BrandLogo from "@/components/ui/BrandLogo";
import Link from "next/link";
import leafIcon1 from "@/assets/icons/landing-page/leaf1.svg";
import Marquee from "@/components/motion/Marquee";
import { Reveal, WordReveal } from "@/components/motion/Reveal";

// "Health, Safety and Beauty" statement + scrolling strip of every brand logo
const TaglineBand = () => {
  return (
    <section className="relative overflow-hidden bg-brand-navy text-white">
      <div className="container relative flex flex-col items-center pb-16 pt-6 text-center sm:pb-20 sm:pt-8">
        <Reveal direction="none">
          <Image src={leafIcon1} alt="" className="h-12 w-auto animate-float" />
        </Reveal>

        <Reveal delay={0.1} className="mt-6 flex w-full max-w-3xl items-center gap-4 sm:gap-6">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-white/60" />
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-mint sm:text-base">
            Health, Safety and Beauty
          </p>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-white/60" />
        </Reveal>

        <p className="mt-6 max-w-4xl text-balance text-2xl font-light leading-snug sm:text-4xl lg:text-5xl">
          <WordReveal
            text="Be everywhere, do everything, and never fail to satisfy the customer."
            stagger={0.05}
            wordClassName={(w) =>
              w.startsWith("satisfy") || w.startsWith("customer") ? "font-medium text-brand-sky" : ""
            }
          />
        </p>
      </div>

      <div className="relative border-t border-white/10 bg-white py-6 sm:py-8">
        <Marquee duration={35}>
          {visibleBrands.map((brand) => (
            <Link
              key={brand.id.toString()}
              href={`/brands/${brand.id}`}
              className="group relative mx-6 grid shrink-0 place-items-center transition-transform duration-300 hover:scale-110 sm:mx-10"
              aria-label={brand.brandName}
            >
              <BrandLogo brand={brand} variant="gray" size={30} className="opacity-70 transition-opacity duration-300 group-hover:opacity-0" />
              <BrandLogo brand={brand} size={30} className="absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Link>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default TaglineBand;
