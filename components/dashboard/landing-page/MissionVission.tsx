import React from "react";
import leafTransparentImg from "@/assets/image/landing-page/leafTransparentLogo.svg";
import missionIcon from "@/assets/image/mission-vission/missionIcon.svg";
import missionBg from "@/assets/image/mission-vission/missionBg.svg";
import vissionIcon from "@/assets/image/mission-vission/vissionIcon.svg";
import VissionBg from "@/assets/image/mission-vission/visionBg.svg";
import commitmentIcon from "@/assets/image/mission-vission/commitmentIcon.svg";
import commitmentBg from "@/assets/image/mission-vission/commitmentBg.svg";
import MissionVissionCard from "./MissionVissionCard";
import Section from "@/components/ui/Section";
import completeCareBanner from "@/assets/image/landing-page/completeCareBanner.svg";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionSubHeading from "@/components/ui/SectionSubHeading";

const MissionVission = () => {
  const cardData = [
    {
      icon: missionIcon,
      backgroundImage: missionBg,
      title: "Mission",
      description:
        "   Undertaking to endow with a comfortable lifestyle carried by health, safety and beauty.",
    },
    {
      icon: vissionIcon,
      backgroundImage: VissionBg,
      title: "Vission",
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
  return (
    <div className="p-16 bg-[#001F4E]">
      <Section className="bg-cover bg-center" bgImage={completeCareBanner}>
        <SectionHeading bgVarient="dark">Our Guiding Principles</SectionHeading>
        <SectionSubHeading bgVarient="dark">
          Mission, Vision & Commitment
        </SectionSubHeading>

        <div className="grid md:grid-cols-3 gap-8 pt-2">
          {cardData.map((item, index) => (
            <MissionVissionCard key={index} data={item} />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default MissionVission;
