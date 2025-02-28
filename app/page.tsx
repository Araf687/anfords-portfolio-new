"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// images import

import img2 from "@/assets/image/sliders/envy1.png";
import img3 from "@/assets/image/sliders/foam.png";
import img4 from "@/assets/image/sliders/mediplusGroup3.png";
import img5 from "@/assets/image/sliders/allProductGroup2.png";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import mission from "@/assets/icons/bullseye.png";
import vision from "@/assets/icons/supervision.png";
import commitment from "@/assets/icons/partnership.png";
import contactUsBg from "@/assets/image/contact us/contact2.jpg";

import Image from "next/image";
import anfordsProductMockup from "@/assets/image/landing-page/anfordsProductMockup.svg";
import completeCareBanner from "@/assets/image/landing-page/completeCareBanner.svg";
import { cardData } from "@/helpers/data/about-card-data";
import { AboutCard } from "@/components/dashboard/card/AboutCard";
import SectionHeading from "@/components/dashboard/heading/SectionHeading";

import Link from "next/link";
import FadeIn from "@/components/gsap/FadeIn";
import BrandSection from "@/components/dashboard/landing-page/BrandSection";
import HeroSection from "@/components/dashboard/landing-page/HeroSection";
import AtAGlanceSection from "@/components/dashboard/landing-page/AtAGlanceSection";
import CompleteCareCard from "@/components/dashboard/landing-page/CompleteCareCard";
import ContactSection from "@/components/dashboard/landing-page/ContactSection";
import MissionVission from "@/components/dashboard/landing-page/MissionVission";

export default function Home() {
  const animation = React.useRef();
  const plugin = React.useRef(Autoplay({ delay: 3000 }));

  const autoplayOptions = { delay: 3000 }; // Auto-scroll delay in milliseconds
  const emblaRef = React.useRef(null);
  const [embla] = useEmblaCarousel({ loop: true }, [Autoplay(autoplayOptions)]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />

      <main className="w-full">
        {/* Our brand Section */}
        <BrandSection />

        {/* Anfords at a glance  */}
        <AtAGlanceSection />

        {/* Anfords product mockup  */}
        <Image
          src={anfordsProductMockup}
          alt="anfordsProductMockup"
          loading="lazy"
          className="w-full"
        />

        {/* complete care section  */}
        <div className="p-20 bg-[#001F4E] tracking-wide">
          <div
            className="w-full bg-cover bg-center bg-no-repeat relative overflow-hidden "
            style={{ backgroundImage: `url(${completeCareBanner.src})` }}
          >
            <div className="p-14 space-y-6 text-white tracking-wide">
                <h3 className="text-6xl text-[#2E9EFF]">Complete <span className="text-[#00DD76]">Care</span></h3>
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
        </div>

        <MissionVission />

        {/* Contact Us Section */}
        <ContactSection />
      </main>
    </main>
  );
}
