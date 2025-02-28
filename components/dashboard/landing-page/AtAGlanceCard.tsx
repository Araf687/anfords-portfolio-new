import Image, { StaticImageData } from "next/image";
import React from "react";

const AtAGlanceCard = ({
  data,
}: {
  data: {
    heading1: string;
    heading2: string;
    description: string;
    backgroundImage: StaticImageData;
  };
}) => {
  const { heading1, heading2, description, backgroundImage } = data;

  return (
    <div className="relative p-4 w-[14rem] h-[16rem] rounded-lg text-center text-white flex flex-col justify-center items-center bg-[#014787] overflow-hidden">
      {/* Background Image Positioned at Bottom-Right */}
      <div className="absolute bottom-0 right-0 w-[60%] opacity-80">
        <Image
          src={backgroundImage}
          alt="background"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 tracking-wide space-y-1">
        <h3 className="text-3xl mb-2 font-semibold">{heading1}</h3>
        <h3 className="text-xl font-semibold">{heading2}</h3>
        <p className="text-sm ">{description}</p>
      </div>
    </div>
  );
};

export default AtAGlanceCard;
