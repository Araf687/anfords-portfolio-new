import React from "react";
import aboutMockUp from "@/assets/image/about-us/mockup.svg";
import map from "@/assets/image/about-us/map.png";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionSubHeading from "@/components/ui/SectionSubHeading";
import SectionDescription from "@/components/ui/SectionDescription";

import Image from "next/image";
import UiButton from "@/components/ui/uiButton";

const AboutAnfords = () => {
  return (
    <Section
      className="bg-[# 1F416A] [background-size:320px_400px] flex gap-20 items-center"
      bgImage={map}
    >
      <div className="space-y-8">
        <SectionHeading bgVarient="dark">About Anfords</SectionHeading>
        <SectionSubHeading bgVarient="dark">Bangladesh</SectionSubHeading>
        <SectionDescription className="text-white">
          Welcome to Anfords Bangladesh, a distinguished and trusted name in the
          industry, committed to delivering high-quality consumer products that
          enhance and enrich everyday life. With an unwavering dedication to
          excellence, continuous innovation, and superior customer satisfaction,
          we have established ourselves as a benchmark in the market. Our brand
          stands as a testament to integrity, quality, and progressive
          advancement, ensuring that our consumers receive only the best.
        </SectionDescription>
        <UiButton
          varient="light"
          onClick={() => {
            console.log("asd");
          }}
        >
          See More
        </UiButton>
      </div>
      <Image src={aboutMockUp} alt="about-section-mockup" height={370}/>
    </Section>
  );
};

export default AboutAnfords;
