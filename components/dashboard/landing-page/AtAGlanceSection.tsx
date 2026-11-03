"use client";
import React from "react";
import Image from "next/image";
import leafTransparentImg from "@/assets/image/landing-page/leafTransparentLogo.svg";
import AtAGlanceCard from "./AtAGlanceCard";
import bg1 from "@/assets/image/landing-page/at-a-glance1.svg";
import bg2 from "@/assets/image/landing-page/at-a-glance2.svg";
import bg3 from "@/assets/image/landing-page/at-a-glance3.svg";
import bg4 from "@/assets/image/landing-page/at-a-glance4.svg";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionSubHeading from "@/components/ui/SectionSubHeading";
import Eyebrow from "@/components/ui/Eyebrow";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { visibleBrands, visibleProducts } from "@/lib/brands";

// product and brand counts come from the data, so hiding a brand updates them
const count = (n: number) => n.toString().padStart(2, "0");

const cards = [
  {
    heading1: "15 +",
    heading2: "Years",
    description: "of sustainable business in Bangladesh",
    backgroundImage: bg1,
  },
  {
    heading1: count(visibleProducts.length),
    heading2: "Products",
    description: "range offered with excellence.",
    backgroundImage: bg2,
  },
  {
    heading1: count(visibleBrands.length),
    heading2: "Brands",
    description: "in operation delivering quality services.",
    backgroundImage: bg3,
  },
  {
    heading1: "8/10",
    heading2: "Bangladeshi",
    description: "homes rely on our brands & products every day.",
    backgroundImage: bg4,
  },
];

const AtAGlanceSection = () => {
  return (
    <Section className="overflow-hidden bg-brand-mist">
      <Image
        src={leafTransparentImg}
        alt=""
        className="pointer-events-none absolute -right-10 -top-10 w-72 animate-float opacity-70 sm:w-96"
      />
      <div className="relative space-y-4">
        <Reveal>
          <Eyebrow>Impact</Eyebrow>
        </Reveal>
        <SectionHeading>Anfords Bangladesh at a Glance</SectionHeading>
        <SectionSubHeading>Key Milestones and Impact</SectionSubHeading>
      </div>

      {/* Bento: the 8/10 households stat leads, the rest support it */}
      <Stagger className="relative grid gap-4 pt-6 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:grid-rows-2">
        <StaggerItem className="sm:col-span-2 lg:row-span-2">
          <AtAGlanceCard data={cards[3]} featured />
        </StaggerItem>
        {cards.slice(0, 3).map((item, index) => (
          <StaggerItem key={index} className={index === 0 ? "sm:col-span-2" : ""}>
            <AtAGlanceCard data={item} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
};

export default AtAGlanceSection;
