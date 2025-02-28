import React from "react";
import leafTransparentImg from "@/assets/image/landing-page/leafTransparentLogo.svg";
import AtAGlanceCard from "./AtAGlanceCard";
import Image from "next/image";
import bg1 from "@/assets/image/landing-page/at-a-glance1.svg"
import bg2 from "@/assets/image/landing-page/at-a-glance2.svg"
import bg3 from "@/assets/image/landing-page/at-a-glance3.svg"
import bg4 from "@/assets/image/landing-page/at-a-glance4.svg"

const AtAGlanceSection = () => {
  const cards = [
    {
      heading1: "15 +",
      heading2: "Years",
      description: "of sustainable business in Bangladesh",
      backgroundImage:bg1
    },
    {
      heading1: "13 +",
      heading2: "Products",
      description: "range offered with excellence.",
      backgroundImage:bg2
    },
    {
      heading1: "08",
      heading2: "Brands",
      description: "in operation delivering quality services.",
      backgroundImage:bg3
    },
    {
      heading1: "8/10",
      heading2: "Bangladeshi",
      description: "homes rely on our brands & products every day.",
      backgroundImage:bg4
    },
  ];

  return (
    <div className=" w-full px-6 py-12 md:py-20 lg:py-28  bg-gray-100 flex justify-center">
      {/* Content Section */}
      <div className=" max-w-7xl mx-auto space-y-6">
        <h1 className="text-3xl md:text-5xl lg:text-6xl text-[#206CB1]">
          Anfords Bangladesh at a Glance
        </h1>
        <p className="text-lg md:text-2xl lg:text-4xl text-[#333333]">
          Key Milestones and Impact
        </p>

        {/* Cards Section */}
        <div className="flex flex-wrap justify-center md:justify-start gap-5">
          {cards.map((item, index) => (
            <AtAGlanceCard data={item} key={index} />
          ))}
        </div>
      </div>
      <div className="px-2">
        <Image src={leafTransparentImg} alt="leaf-img" height={380} />
      </div>
    </div>
  );
};

export default AtAGlanceSection;
