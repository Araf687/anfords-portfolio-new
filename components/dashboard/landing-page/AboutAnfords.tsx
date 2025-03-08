import React from "react";
import aboutMockUp from "@/assets/image/about-us/mockup.svg";
import map from "@/assets/image/about-us/map.svg";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionSubHeading from "@/components/ui/SectionSubHeading";
import SectionDescription from "@/components/ui/SectionDescription";

const AboutAnfords = () => {
  return (
    <Section
      className="bg-[#1F416A] [background-size:350px_350px]"
      bgImage={map}
    >
      <SectionHeading>About Anfords</SectionHeading>
      <SectionSubHeading className="text-white">Bangladesh</SectionSubHeading>
      <SectionDescription className="text-white">
        Welcome to Anfords Bangladesh, a distinguished and trusted name in the
        industry, committed to delivering high-quality consumer products that
        enhance and enrich everyday life. With an unwavering dedication to
        excellence, continuous innovation, and superior customer satisfaction,
        we have established ourselves as a benchmark in the market. Our brand
        stands as a testament to integrity, quality, and progressive
        advancement, ensuring that our consumers receive only the best.
      </SectionDescription>
    </Section>
  );
};

export default AboutAnfords;
