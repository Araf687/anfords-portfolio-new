import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";

const SectionDescription = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <Reveal delay={0.25}>
      <p
        className={cn(
          "max-w-3xl text-[15px] leading-relaxed tracking-wide text-slate-600 md:text-base",
          className
        )}
      >
        {children}
      </p>
    </Reveal>
  );
};

export default SectionDescription;
