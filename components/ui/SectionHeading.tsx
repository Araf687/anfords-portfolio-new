"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { WordReveal } from "@/components/motion/Reveal";

// Brand heading: every word in blue, last word in green, revealed word by word
const SectionHeading = ({
  children,
  bgVarient = "light",
  className,
  as: Tag = "h2",
}: {
  children: string;
  bgVarient?: "dark" | "light";
  className?: string;
  as?: "h1" | "h2" | "h3";
}) => {
  const isLight = bgVarient === "light";
  return (
    <Tag
      className={cn(
        "text-balance text-[2rem] font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl",
        className
      )}
    >
      <WordReveal
        text={children.replace(/\s+/g, " ").trim()}
        wordClassName={(_, i, total) =>
          i === total - 1
            ? isLight
              ? "text-brand-green"
              : "text-brand-mint"
            : isLight
            ? "text-brand-mid"
            : "text-brand-sky"
        }
      />
    </Tag>
  );
};

export default SectionHeading;
