import Image, { StaticImageData } from "next/image";
import React from "react";
import CountUp from "@/components/motion/CountUp";
import { cn } from "@/lib/utils";

const AtAGlanceCard = ({
  data,
  featured = false,
}: {
  data: {
    heading1: string;
    heading2: string;
    description: string;
    backgroundImage: StaticImageData;
  };
  featured?: boolean;
}) => {
  const { heading1, heading2, description, backgroundImage } = data;

  return (
    <div
      className={cn(
        "group relative flex h-full min-h-[220px] flex-col justify-between overflow-hidden rounded-3xl p-6 text-white transition-all duration-500 hover:-translate-y-1 sm:p-8",
        featured
          ? "bg-gradient-to-br from-brand-blue to-brand-navy shadow-[0_30px_60px_-25px_rgba(0,90,170,0.7)]"
          : "border border-[#08569E] bg-[#014787] hover:shadow-[0_25px_50px_-25px_rgba(0,90,170,0.7)]"
      )}
    >
      {/* Background Image Positioned at Bottom-Right */}
      <div className="pointer-events-none absolute -bottom-4 -right-4 w-[55%] opacity-60 transition-transform duration-700 group-hover:-rotate-6 group-hover:scale-110">
        <Image src={backgroundImage} alt="" className="h-full w-full object-contain" />
      </div>
      <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-brand-sky/20 blur-3xl" />

      {/* Content */}
      <div className="relative">
        <span className="inline-block h-1 w-10 rounded-full bg-brand-mint transition-all duration-500 group-hover:w-16" />
      </div>
      <div className="relative space-y-2 tracking-wide">
        <CountUp
          value={heading1}
          className={cn("block font-semibold leading-none", featured ? "text-6xl sm:text-7xl lg:text-8xl" : "text-5xl sm:text-6xl")}
        />
        <h3 className="text-xl font-semibold text-brand-mint">{heading2}</h3>
        <p className="max-w-[16rem] text-sm text-white/75">{description}</p>
      </div>
    </div>
  );
};

export default AtAGlanceCard;
