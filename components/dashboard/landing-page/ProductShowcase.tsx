"use client";
import React from "react";
import Image from "next/image";
import logo from "@/assets/image/logo.svg";
import { visibleProducts } from "@/lib/brands";
import { ProductCardProps } from "@/types/data";

// The pack shots sit on a 368×280 canvas with wide transparent margins. These are the
// measured bounds of each product (x, y, w, h in canvas px), used to crop to the pack.
const CANVAS = { w: 368, h: 280 };
const packBounds: Record<number, [number, number, number, number]> = {
  5: [153, 13, 60, 247], // Sleek Lavender
  12: [78, 25, 209, 250], // Mediplus Dental Floss
  10: [15, 48, 332, 180], // Mediplus DS
  14: [144, 5, 81, 269], // Every Day Sensitive
  17: [23, 49, 322, 170], // Mediplus Toothpaste
  16: [134, 3, 100, 277], // English Shampoo
  15: [125, 0, 122, 280], // Mediplus Toothbrush
  13: [144, 5, 82, 268], // Every Day Lime
};

// Same composition as the original illustrated line-up, now with real products.
// x/y are the pack's centre and h its height, all in % of the stage; r is the tilt.
// Mediplus DS takes the slot the Envy soap had.
const lineup = [
  { id: 5, x: 13.2, y: 51, h: 40, r: -15 },
  { id: 12, x: 23.5, y: 36, h: 19, r: -10 },
  { id: 10, x: 25.5, y: 73, h: 15, r: -20 },
  { id: 14, x: 34.2, y: 40, h: 36, r: 8 },
  { id: 17, x: 72.5, y: 27, h: 16, r: -25 },
  { id: 16, x: 64.5, y: 65, h: 27, r: 20 },
  { id: 15, x: 76.4, y: 70, h: 28, r: 0 },
  { id: 13, x: 86.5, y: 52.7, h: 38, r: 15 },
];

const productById = new Map(visibleProducts.map((p: ProductCardProps) => [p.id, p]));
const shown = lineup.flatMap((spot) => {
  const product = productById.get(spot.id);
  return product ? [{ ...spot, product, bounds: packBounds[spot.id] }] : [];
});

// A pack shot cropped to the product; fills its parent, whose aspect ratio must match
const Pack = ({ product, bounds, sizes }: { product: ProductCardProps; bounds: number[]; sizes: string }) => {
  const [x, y, w, h] = bounds;
  return (
    <span className="relative block h-full w-full overflow-hidden">
      <Image
        src={product.image}
        alt={product.product_name}
        sizes={sizes}
        className="absolute max-w-none"
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

const ProductShowcase = () => {
  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20 lg:py-0">
      {/* desktop: products scattered around the wordmark */}
      <div className="relative mx-auto hidden aspect-[1920/731] w-full max-w-[1920px] lg:block">
        <div className="absolute left-1/2 top-[48%] z-10 w-[17%] -translate-x-1/2 -translate-y-1/2">
          <Image src={logo} alt="Anfords – oral hygiene, hair care and skin care" className="h-auto w-full" />
        </div>

        {shown.map((spot) => (
          <div
            key={spot.id}
            style={{
              left: `${spot.x}%`,
              top: `${spot.y}%`,
              height: `${spot.h}%`,
              aspectRatio: `${spot.bounds[2]} / ${spot.bounds[3]}`,
              transform: `translate(-50%, -50%) rotate(${spot.r}deg)`,
            }}
            className="absolute drop-shadow-[0_24px_20px_rgba(15,23,42,0.22)]"
          >
            <Pack product={spot.product} bounds={spot.bounds} sizes="25vw" />
          </div>
        ))}
      </div>

      {/* mobile & tablet: wordmark first, then a tilted grid */}
      <div className="container lg:hidden">
        <Image src={logo} alt="Anfords – oral hygiene, hair care and skin care" className="mx-auto h-auto w-[260px] sm:w-[320px]" />
        <div className="mt-10 grid grid-cols-4 items-center gap-x-3 gap-y-8">
          {shown.map((spot) => (
            <div
              key={spot.id}
              className="mx-auto h-20 max-w-full drop-shadow-[0_14px_12px_rgba(15,23,42,0.2)] sm:h-28"
              style={{ aspectRatio: `${spot.bounds[2]} / ${spot.bounds[3]}`, transform: `rotate(${spot.r / 2}deg)` }}
            >
              <Pack product={spot.product} bounds={spot.bounds} sizes="25vw" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
