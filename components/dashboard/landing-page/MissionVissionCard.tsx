import Image, { StaticImageData } from "next/image";
import React from "react";

const MissionVissionCard = ({
  data,
}: {
  data: {
    icon: StaticImageData;
    backgroundImage: StaticImageData;
    title: string;
    description: string;
  };
}) => {
  const { icon, backgroundImage, title, description } = data;

  return (
    <div className="relative p-4 flex-wrap rounded-lg border border-[#3888E8] bg-white border-2 overflow-hidden">
      {/* Background Image Positioned at Bottom-Right */}
      <div className="absolute bottom-0 right-0 w-[30%] opacity-80">
        <Image
          src={backgroundImage}
          alt="background"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 tracking-wide space-y-3">
        <Image
          src={icon}
          alt="icon"
          className="object-contain"
          height={70}
        />
        <h3 className="text-2xl">{title}</h3>
        <p className="text-sm ">{description}</p>
      </div>
    </div>
  );
};

export default MissionVissionCard;
