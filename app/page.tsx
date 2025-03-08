"use client";
import * as React from "react";
import Image from "next/image";
import anfordsProductMockup from "@/assets/image/landing-page/anfordsProductMockup.svg";
import completeCareBanner from "@/assets/image/landing-page/completeCareBanner.svg";
import { cardData } from "@/helpers/data/about-card-data";
import BrandSection from "@/components/dashboard/landing-page/BrandSection";
import HeroSection from "@/components/dashboard/landing-page/HeroSection";
import AtAGlanceSection from "@/components/dashboard/landing-page/AtAGlanceSection";
import CompleteCareCard from "@/components/dashboard/landing-page/CompleteCareCard";
import ContactSection from "@/components/dashboard/landing-page/ContactSection";
import MissionVission from "@/components/dashboard/landing-page/MissionVission";

import leafIcon1 from "@/assets/icons/landing-page/leaf1.svg";
import AboutAnfords from "@/components/dashboard/landing-page/AboutAnfords";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />

      <div className="bg-[#005AAA] w-full flex flex-col items-center gap-3 justify-center pb-8">
        <Image src={leafIcon1} alt="leaf-icon" />
        <div className="text-center text-white space-y-1 relative">
          {/* Heading with left & right horizontal lines */}
          <div className="relative text-lg font-semibold uppercase flex items-center justify-center">
            <span className="before:content-[''] before:block before:h-[1.6px] before:bg-white before:flex-1 before:mr-4"></span>
            <p>HEALTH, SAFETY AND BEAUTY</p>
            <span className="after:content-[''] after:block after:h-[1.6px] after:bg-white after:flex-1 after:ml-4"></span>
          </div>

          {/* Subtext below */}
          <p className="relative z-10">
            Be everywhere, do everything, and never fail to satisfy the
            customer.
          </p>
        </div>
      </div>

      <main className="w-full">
        {/* Our brand Section */}
        <BrandSection />

        <AboutAnfords />
        {/* Anfords at a glance  */}
        <AtAGlanceSection />

        {/* complete care section  */}
        {/* <div className="p-20 bg-[#001F4E] tracking-wide">
          <div
            className="w-full bg-cover bg-center bg-no-repeat relative overflow-hidden "
            style={{ backgroundImage: `url(${completeCareBanner.src})` }}
          >
            <div className="p-14 space-y-6 text-white tracking-wide">
              <h3 className="text-6xl text-[#2E9EFF]">
                Complete <span className="text-[#00DD76]">Care</span>
              </h3>
              <h3 className="text-4xl">
                Nourish Your Skin, Smile Bright, and Strengthen Your Hair
              </h3>
              <p>
                Take care of your skin, smile, and hair with our premium
                products. From glowing skin to strong teeth and healthy hair,
                we’ve got you covered. Look and feel your best every day!
              </p>
              <div className="flex gap-4 justify-between items-center pt-10">
                {cardData.map((item, index) => (
                  <CompleteCareCard key={index} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div> */}

        <MissionVission />
        {/* Anfords product mockup  */}
        <Image
          src={anfordsProductMockup}
          alt="anfordsProductMockup"
          loading="lazy"
          className="w-full"
        />

      
      </main>
    </main>
  );
}
