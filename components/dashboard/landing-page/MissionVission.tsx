"use client";
import React from "react";
import missionIcon from "@/assets/image/mission-vission/missionIcon.svg";
import missionBg from "@/assets/image/mission-vission/missionBg.svg";
import vissionIcon from "@/assets/image/mission-vission/vissionIcon.svg";
import VissionBg from "@/assets/image/mission-vission/visionBg.svg";
import commitmentIcon from "@/assets/image/mission-vission/commitmentIcon.svg";
import commitmentBg from "@/assets/image/mission-vission/commitmentBg.svg";
import completeCareBanner from "@/assets/image/landing-page/completeCareBanner.svg";
import MissionVissionCard from "./MissionVissionCard";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionSubHeading from "@/components/ui/SectionSubHeading";
import Eyebrow from "@/components/ui/Eyebrow";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const cardData = [
  {
    icon: missionIcon,
    backgroundImage: missionBg,
    title: "Mission",
    description:
      "Undertaking to endow with a comfortable lifestyle carried by health, safety and beauty.",
  },
  {
    icon: vissionIcon,
    backgroundImage: VissionBg,
    title: "Vision",
    description:
      "Ensuring a meaningful balance of the satisfaction of its consumers employees and other stakeholders",
  },
  {
    icon: commitmentIcon,
    backgroundImage: commitmentBg,
    title: "Commitment",
    description: "To provide the best quality products to our customers",
  },
];

const MissionVission = () => {
  return (
    <section className="bg-brand-navy px-3 py-3 sm:px-6 sm:py-6 lg:px-10 lg:py-10">
      <div
        className="relative overflow-hidden rounded-[2rem] bg-cover bg-center py-16 sm:rounded-[2.5rem] sm:py-20 lg:py-28"
        style={{ backgroundImage: `url(${completeCareBanner.src})` }}
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-navy/40 via-transparent to-brand-navy/60" />
        <div className="container relative space-y-4">
          <Reveal>
            <Eyebrow variant="dark">What drives us</Eyebrow>
          </Reveal>
          <SectionHeading bgVarient="dark">Our Guiding Principles</SectionHeading>
          <SectionSubHeading bgVarient="dark">Mission, Vision & Commitment</SectionSubHeading>

          <Stagger className="grid gap-5 pt-8 md:grid-cols-3 md:gap-6" stagger={0.15}>
            {cardData.map((item, index) => (
              <StaggerItem key={index} className="h-full">
                <MissionVissionCard data={item} index={index} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
};

export default MissionVission;
