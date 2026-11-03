"use client";
import * as React from "react";
import BrandSection from "@/components/dashboard/landing-page/BrandSection";
import HeroSection from "@/components/dashboard/landing-page/HeroSection";
import AtAGlanceSection from "@/components/dashboard/landing-page/AtAGlanceSection";
import MissionVission from "@/components/dashboard/landing-page/MissionVission";
import AboutAnfords from "@/components/dashboard/landing-page/AboutAnfords";
import TaglineBand from "@/components/dashboard/landing-page/TaglineBand";
import ProductShowcase from "@/components/dashboard/landing-page/ProductShowcase";

export default function Home() {
  const exploreRef = React.useRef<HTMLDivElement>(null);
  const onClickExploreBTN = () => {
    exploreRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <main className="flex min-h-screen w-full flex-col">
      <HeroSection exploreFunc={onClickExploreBTN} />

      <div ref={exploreRef} className="scroll-mt-0">
        <TaglineBand />
      </div>

      {/* Our brand Section */}
      <BrandSection />

      <AboutAnfords />
      {/* Anfords at a glance  */}
      <AtAGlanceSection />

      <MissionVission />
      {/* Anfords product mockup  */}
      <ProductShowcase />
    </main>
  );
}
