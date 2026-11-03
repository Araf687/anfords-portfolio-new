import React from "react";
import Image from "next/image";
import AboutHeroArt from "@/components/about/AboutHeroArt";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionSubHeading from "@/components/ui/SectionSubHeading";
import Eyebrow from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { ABOUT_TEXT } from "@/lib/content";
import AtAGlanceSection from "@/components/dashboard/landing-page/AtAGlanceSection";

import missionIcon from "@/assets/image/mission-vission/missionIcon.svg";
import missionBg from "@/assets/image/mission-vission/missionBg.svg";
import vissionIcon from "@/assets/image/mission-vission/vissionIcon.svg";
import VissionBg from "@/assets/image/mission-vission/visionBg.svg";
import commitmentIcon from "@/assets/image/mission-vission/commitmentIcon.svg";
import commitmentBg from "@/assets/image/mission-vission/commitmentBg.svg";

const cardData = [
  {
    icon: missionIcon,
    backgroundImage: missionBg,
    title: "Mission",
    description:
      "At Anfords Bangladesh, our mission is to deliver superior quality products that cater to the evolving needs of our consumers. We aim to build long-lasting relationships with our customers by ensuring reliability, affordability, and innovation in every product we offer.",
  },
  {
    icon: vissionIcon,
    backgroundImage: VissionBg,
    title: "Vision",
    description:
      "We envision becoming a market leader by continuously evolving and adapting to the latest trends. Our goal is to establish a strong brand presence, maintaining our legacy of trust and excellence in every household in Bangladesh.",
  },
  {
    icon: commitmentIcon,
    backgroundImage: commitmentBg,
    title: "Commitment",
    description:
      "At Anfords Bangladesh, we are committed to providing our customers with the best quality products while maintaining the highest ethical standards. Our dedication extends beyond just products—we prioritize customer satisfaction, environmental responsibility, and continuous innovation to ensure a better future.",
  },
];

const About = () => {
  return (
    <>
      <PageHero
        crumb="About Us"
        title="About Anfords"
        subtitle="Bangladesh"
        description={ABOUT_TEXT}
        visual={<AboutHeroArt className="h-auto w-full" />}
      />

      <section className="relative overflow-hidden bg-white py-16 sm:py-24">
        <div className="container space-y-4">
          <Reveal>
            <Eyebrow>What drives us</Eyebrow>
          </Reveal>
          <SectionHeading>Our Guiding Principles</SectionHeading>
          <SectionSubHeading>Mission, Vision & Commitment</SectionSubHeading>

          {/* Alternating editorial rows */}
          <div className="space-y-6 pt-10 sm:space-y-8">
            {cardData.map((item, index) => {
              const { icon, backgroundImage, title, description } = item;
              const flip = index % 2 === 1;
              return (
                <Reveal key={title} direction={flip ? "left" : "right"}>
                  <article
                    className={`group relative grid items-center gap-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-brand-mist p-7 transition-shadow duration-500 hover:shadow-[0_30px_60px_-30px_rgba(0,90,170,0.4)] sm:p-10 lg:gap-14 lg:p-14 ${
                      flip ? "md:grid-cols-[1fr_200px]" : "md:grid-cols-[200px_1fr]"
                    }`}
                  >
                    <Image
                      src={backgroundImage}
                      alt=""
                      className={`pointer-events-none absolute bottom-0 w-48 opacity-60 transition-transform duration-700 group-hover:scale-110 ${flip ? "left-0" : "right-0"}`}
                    />
                    <div
                      className={`relative grid h-32 w-32 place-items-center rounded-3xl bg-white shadow-lg sm:h-40 sm:w-40 ${
                        flip ? "md:order-2 md:justify-self-end" : ""
                      }`}
                    >
                      <Image src={icon} alt="" height={96} className="object-contain transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="relative space-y-4">
                      <span className="text-sm font-semibold text-brand-green">0{index + 1}</span>
                      <h3 className="text-3xl font-semibold text-brand-mid sm:text-4xl">
                        Our <span className="text-brand-green">{title}</span>
                      </h3>
                      <p className="max-w-3xl text-[15px] leading-relaxed text-slate-600 md:text-base">{description}</p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <AtAGlanceSection />
    </>
  );
};

export default About;
