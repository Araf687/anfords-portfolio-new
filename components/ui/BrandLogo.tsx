import Image from "next/image";
import React from "react";
import { Brand } from "@/types/data";
import { cn } from "@/lib/utils";

// The brand SVGs sit on a 170×110 canvas with lots of empty margin, so at small
// sizes the mark itself shrinks to a sliver. These are the measured bounds of the
// artwork (x, y, w, h in canvas px, with a little breathing room) used to crop it.
const CANVAS = { w: 170, h: 110 };
const artBounds: Record<string, [number, number, number, number]> = {
  "1": [41, 26, 100, 67], // Envy
  "2": [29, 39, 124, 47], // English
  "3": [40, 33, 102, 56], // Sleek
  "4": [22, 43, 138, 40], // Mediplus
  "5": [10, 45, 160, 34], // Mediplus Gel
  "6": [10, 43, 160, 37], // Mediplus DS
  "7": [15, 44, 150, 34], // Brush Up
  "8": [21, 43, 138, 36], // Every Day
};

// Renders a brand logo cropped to its artwork. `size` is the height a typical
// 3:1 wordmark gets; other logos are scaled to the same visual area, so a near-
// square mark (Envy) isn't dwarfed by a long one (Mediplus Gel).
const BrandLogo = ({
  brand,
  size = 40,
  variant = "color",
  className,
  imgClassName,
  priority,
}: {
  brand: Brand;
  size?: number;
  variant?: "color" | "gray";
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}) => {
  const [x, y, w, h] = artBounds[brand.id.toString()] ?? [0, 0, CANVAS.w, CANVAS.h];
  const height = Math.round(size * Math.sqrt(3 / (w / h)));

  return (
    <span
      className={cn("relative block shrink-0 overflow-hidden", className)}
      style={{ height, aspectRatio: `${w} / ${h}` }}
    >
      <Image
        src={brand.image[variant]}
        alt={brand.brandName}
        priority={priority}
        className={cn("absolute max-w-none", imgClassName)}
        style={{
          width: `${(CANVAS.w / w) * 100}%`,
          height: `${(CANVAS.h / h) * 100}%`,
          left: `${(-x / w) * 100}%`,
          top: `${(-y / h) * 100}%`,
        }}
      />
    </span>
  );
};

export default BrandLogo;
