"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AboutHeroArt from "@/components/about/AboutHeroArt";
import map from "@/assets/image/about-us/map.png";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionSubHeading from "@/components/ui/SectionSubHeading";
import SectionDescription from "@/components/ui/SectionDescription";
import UiButton from "@/components/ui/uiButton";
import Eyebrow from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { ABOUT_TEXT } from "@/lib/content";


const AboutAnfords = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const mapY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <div ref={ref} className="relative">
      <Section
        className="overflow-hidden bg-brand-ink text-white"
        innerClassName="grid items-center gap-14 lg:grid-cols-2 lg:gap-20"
      >
        <motion.div
          style={{ y: mapY, backgroundImage: `url(${map.src})` }}
          className="pointer-events-none absolute inset-0 bg-[length:340px_420px] bg-[left_10%_center] bg-no-repeat opacity-40"
        />
        <div className="pointer-events-none absolute -right-20 top-0 h-96 w-96 rounded-full bg-brand-sky/20 blur-[120px]" />

        <div className="relative space-y-6">
          <Reveal>
            <Eyebrow variant="dark">Who we are</Eyebrow>
          </Reveal>
          <div className="space-y-2">
            <SectionHeading bgVarient="dark">About Anfords</SectionHeading>
            <SectionSubHeading bgVarient="dark">Bangladesh</SectionSubHeading>
          </div>
          <SectionDescription className="text-white/75">{ABOUT_TEXT}</SectionDescription>
          <Reveal delay={0.35}>
            <UiButton varient="light" href="/about">
              See More
            </UiButton>
          </Reveal>
        </div>

        <Reveal direction="left" className="relative">
          <motion.div style={{ y: imgY }} className="relative mx-auto max-w-[240px] sm:max-w-xs">
            <AboutHeroArt className="w-full" />
          </motion.div>
        </Reveal>
      </Section>
    </div>
  );
};

export default AboutAnfords;
