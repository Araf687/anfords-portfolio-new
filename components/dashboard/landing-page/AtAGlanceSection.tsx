import React from "react";
import leafTransparentImg from "@/assets/image/landing-page/leafTransparentLogo.svg";
import AtAGlanceCard from "./AtAGlanceCard";
import Image from "next/image";
import bg1 from "@/assets/image/landing-page/at-a-glance1.svg";
import bg2 from "@/assets/image/landing-page/at-a-glance2.svg";
import bg3 from "@/assets/image/landing-page/at-a-glance3.svg";
import bg4 from "@/assets/image/landing-page/at-a-glance4.svg";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionSubHeading from "@/components/ui/SectionSubHeading";

const AtAGlanceSection = () => {
  const cards = [
    {
      heading1: "15 +",
      heading2: "Years",
      description: "of sustainable business in Bangladesh",
      backgroundImage: bg1,
    },
    {
      heading1: "13 +",
      heading2: "Products",
      description: "range offered with excellence.",
      backgroundImage: bg2,
    },
    {
      heading1: "08",
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

  return (
    <Section
      className="bg-gray-100 [background-size:350px_350px] "
      bgImage={leafTransparentImg}
      bgPosition="right"
    >
     
      <SectionHeading>Anfords Bangladesh at a Glance</SectionHeading>
      <SectionSubHeading>Key Milestones and Impact</SectionSubHeading>
      <div className="flex flex-wrap justify-center gap-5 pt-3">
        {cards.map((item, index) => (
          <AtAGlanceCard data={item} key={index} />
        ))}
      </div>
    </Section>
  );
};

export default AtAGlanceSection;
