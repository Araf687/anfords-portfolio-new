import { StaticImageData } from "next/image";
import React, { ReactNode, CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  bgImage?: StaticImageData;
  bgPosition?: string; // Accepts values like 'center', 'top', 'bottom', etc.
  style?: CSSProperties; // Ensure style is correctly typed as CSSProperties
  id?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  className = "",
  innerClassName = "",
  bgImage,
  bgPosition = "center",
  style = {},
  id,
}) => {
  return (
    <section
      id={id}
      className={cn("relative py-16 sm:py-20 lg:py-28", className)}
      style={{
        backgroundImage: bgImage ? `url(${bgImage.src})` : undefined, // Use bgImage.src for StaticImageData
        backgroundPosition: bgPosition, // Dynamically set background position
        backgroundRepeat: "no-repeat",
        ...style, // Spread additional styles
      }}
    >
      <div className={cn("container relative space-y-6", innerClassName)}>
        {children}
      </div>
    </section>
  );
};

export default Section;
