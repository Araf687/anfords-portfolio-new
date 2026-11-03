import { Brand, ProductCardProps } from "@/types/data";
import Image from "next/image";
import BrandLogo from "@/components/ui/BrandLogo";
import Link from "next/link";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { getBrandAccent, pickProducts, visibleProducts } from "@/lib/brands";

// Fan layout for 1–3 products: resting and hover positions
const fan = {
  1: [{ x: "0%", r: "0deg", hx: "0%", hr: "-4deg" }],
  2: [
    { x: "-20%", r: "-7deg", hx: "-30%", hr: "-11deg" },
    { x: "20%", r: "7deg", hx: "30%", hr: "11deg" },
  ],
  3: [
    { x: "-34%", r: "-11deg", hx: "-46%", hr: "-15deg" },
    { x: "34%", r: "11deg", hx: "46%", hr: "15deg" },
    { x: "0%", r: "0deg", hx: "0%", hr: "0deg" },
  ],
} as const;

const BrandCard = ({ item, className }: { item: Brand; className?: string }) => {
  const products = visibleProducts.filter((p: ProductCardProps) => p.brand_id === item.id);
  const shown = pickProducts(products);
  const layout = fan[(Math.max(1, shown.length) as 1 | 2 | 3)];
  const accent = getBrandAccent(item.id);

  return (
    <Link
      href={"/brands/" + item.id}
      style={{ "--accent": accent } as React.CSSProperties}
      className={cn(
        "group relative flex aspect-[4/5] flex-col overflow-hidden rounded-[28px] bg-white border border-slate-200 p-6 transition-[transform,box-shadow,border-color] duration-500 ease-out hover:-translate-y-2 hover:border-[color-mix(in_srgb,var(--accent)_45%,white)] hover:shadow-[0_0_0_1px_color-mix(in_srgb,var(--accent)_15%,transparent),0_40px_70px_-35px_var(--accent)] sm:p-7",
        className
      )}
    >
      {/* tinted wash + glow that blooms on hover */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(160deg,color-mix(in_srgb,var(--accent)_14%,white)_0%,white_65%)]" />
      <div className="pointer-events-none absolute left-1/2 top-[55%] h-[70%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)] opacity-[0.12] blur-3xl transition-all duration-700 group-hover:scale-110 group-hover:opacity-25" />

      {/* header */}
      <div className="relative flex items-start justify-between gap-3">
        {/* logo artwork ships on a white plate; multiply drops it onto the tint */}
        <BrandLogo brand={item} size={34} imgClassName="mix-blend-multiply" />
        <span className="rounded-full bg-white/80 px-2.5 py-1 text-[11px] font-semibold text-slate-500 ring-1 ring-slate-200/80 backdrop-blur">
          {products.length} {products.length === 1 ? "Product" : "Products"}
        </span>
      </div>

      {/* product stage */}
      <div className="relative my-2 flex-1">
        <div className="absolute bottom-[8%] left-1/2 h-4 w-2/3 -translate-x-1/2 rounded-[50%] bg-slate-900/15 blur-md transition-all duration-500 group-hover:w-3/4 group-hover:bg-slate-900/10" />
        {shown.map((p, i) => {
          const pos = layout[i];
          return (
            <div
              key={p.id}
              style={
                {
                  "--x": pos.x,
                  "--r": pos.r,
                  "--hx": pos.hx,
                  "--hr": pos.hr,
                  zIndex: i === shown.length - 1 ? 3 : 1,
                } as React.CSSProperties
              }
              className={cn(
                "absolute inset-0 m-auto flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] [transform:translateX(var(--x))_rotate(var(--r))] group-hover:[transform:translateX(var(--hx))_rotate(var(--hr))_translateY(-6%)]",
                shown.length === 1 ? "w-[92%]" : shown.length === 2 ? "w-[70%]" : "w-[60%]"
              )}
            >
              <Image
                src={p.image}
                alt={i === shown.length - 1 ? p.product_name : ""}
                width={369}
                height={280}
                sizes="(min-width: 1024px) 20vw, 60vw"
                className="h-auto w-full object-contain drop-shadow-[0_18px_18px_rgba(15,23,42,0.18)]"
              />
            </div>
          );
        })}
      </div>

      {/* footer */}
      <div className="relative flex items-end justify-between gap-4">
        <div className="min-w-0">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
            {item.brandName}
          </p>
          <p className="mt-1 line-clamp-2 min-h-[2.6em] text-[15px] font-medium leading-snug text-brand-navy">
            {item.description}
          </p>
        </div>
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-brand-navy shadow-sm ring-1 ring-slate-200 transition-all duration-500 group-hover:rotate-45 group-hover:bg-brand-blue group-hover:text-white group-hover:ring-brand-blue">
          <ArrowUpRight size={18} />
        </span>
      </div>
    </Link>
  );
};

export default BrandCard;
