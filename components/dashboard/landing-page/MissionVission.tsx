import React from "react";
import leafTransparentImg from "@/assets/image/landing-page/leafTransparentLogo.svg";
import missionIcon from "@/assets/image/mission-vission/missionIcon.svg";
import missionBg from "@/assets/image/mission-vission/missionBg.svg";
import vissionIcon from "@/assets/image/mission-vission/vissionIcon.svg";
import VissionBg from "@/assets/image/mission-vission/visionBg.svg";
import commitmentIcon from "@/assets/image/mission-vission/commitmentIcon.svg";
import commitmentBg from "@/assets/image/mission-vission/commitmentBg.svg";
import MissionVissionCard from "./MissionVissionCard";

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
    <div
      style={{ backgroundImage: `url(${leafTransparentImg.src})` }}
      className=" bg-no-repeat [background-size:350px_350px] [background-position:calc(100%-100px)_center]"
    >
      <div className="p-[80px] space-y-6">
        <h3 className="text-6xl text-[#206CB1]">
          Our Guiding <span className="text-[#00A85A]">Principles</span>
        </h3>
        <h3 className="text-4xl">Mission, Vision & Commitment</h3>
        <div className="grid md:grid-cols-3 gap-8 pt-4">
          {cardData.map((item, index) => (
            <MissionVissionCard key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MissionVission;
