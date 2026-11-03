import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";

const SectionSubHeading = ({
  children,
  className,
  bgVarient = "light",
}: {
  children: ReactNode;
  className?: string;
  bgVarient?: string;
}) => {
  return (
    <Reveal delay={0.15}>
      <p
        className={cn(
          "text-lg font-light sm:text-2xl lg:text-[2rem] lg:leading-tight",
          bgVarient === "light" ? "text-brand-text" : "text-white/90",
          className
        )}
      >
        {children}
      </p>
    </Reveal>
  );
};

export default SectionSubHeading;
