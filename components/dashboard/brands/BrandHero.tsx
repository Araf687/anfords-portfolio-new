"use client";
import React from "react";
import Image from "next/image";
import BrandLogo from "@/components/ui/BrandLogo";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ChevronRight, Leaf } from "lucide-react";
import { Brand, ProductCardProps } from "@/types/data";
import { getBrandAccent, pickProducts } from "@/lib/brands";
import UiButton from "@/components/ui/uiButton";

const EASE = [0.22, 1, 0.36, 1] as const;

// resting fan positions for 1–3 product shots on the stage
const fan = {
  1: [{ x: "0%", y: "0%", r: 0, w: "78%" }],
  2: [
    { x: "-22%", y: "4%", r: -8, w: "62%" },
    { x: "22%", y: "-2%", r: 7, w: "62%" },
  ],
  3: [
    { x: "-36%", y: "6%", r: -12, w: "52%" },
    { x: "36%", y: "4%", r: 12, w: "52%" },
    { x: "0%", y: "-4%", r: 0, w: "58%" },
  ],
} as const;

const BrandHero = ({
  brand,
  products,
  lead,
}: {
  brand: Brand;
  products: ProductCardProps[];
  lead?: string;
}) => {
  const accent = getBrandAccent(brand.id);
  const shown = pickProducts(products);
  const layout = fan[Math.max(1, shown.length) as 1 | 2 | 3];

  // gentle pointer parallax on the product stage (desktop only, springs back on leave)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 20 });
  const sy = useSpring(my, { stiffness: 120, damping: 20 });
  const stageX = useTransform(sx, (v) => v * 18);
  const stageY = useTransform(sy, (v) => v * 18);
  const orbX = useTransform(sx, (v) => v * -26);
  const orbY = useTransform(sy, (v) => v * -26);

  return (
    <section
      style={{ "--accent": accent } as React.CSSProperties}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return;
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onPointerLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      className="relative isolate overflow-hidden bg-[linear-gradient(170deg,color-mix(in_srgb,var(--accent)_16%,white)_0%,#ffffff_55%,#F1F2F6_100%)] pb-14 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36"
    >
      {/* ambient layers */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-dark [mask-image:radial-gradient(ellipse_at_70%_40%,#000_10%,transparent_70%)]" />
      <div className="pointer-events-none absolute -left-40 -top-20 -z-10 h-[420px] w-[420px] animate-blob rounded-full bg-[var(--accent)] opacity-[0.14] blur-[120px]" />

      <div className="container grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-8">
        {/* copy */}
        <div className="relative z-10 order-2 lg:order-1">
          <motion.nav
            aria-label="Breadcrumb"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8 hidden items-center gap-1.5 text-sm text-slate-500 lg:flex"
          >
            <Link href="/" className="transition-colors hover:text-brand-blue">Home</Link>
            <ChevronRight size={14} />
            <Link href="/brands" className="transition-colors hover:text-brand-blue">Brands</Link>
            <ChevronRight size={14} />
            <span className="font-medium text-brand-navy">{brand.brandName}</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="mb-7 inline-flex rounded-2xl bg-white px-6 py-4 shadow-[0_18px_40px_-20px_rgba(0,31,78,0.35)] ring-1 ring-slate-100 sm:px-7 sm:py-5"
          >
            <BrandLogo brand={brand} size={48} priority />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="mb-4 flex flex-wrap items-center gap-x-2.5 gap-y-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"
          >
            <span className="h-2 w-2 rounded-full bg-[var(--accent)] ring-4 ring-[color-mix(in_srgb,var(--accent)_20%,transparent)]" />
            {brand.brandName} · Anfords Bangladesh
            {products.length > 0 && (
              <span className="whitespace-nowrap rounded-full bg-white px-2.5 py-0.5 text-[11px] tracking-normal text-brand-navy ring-1 ring-slate-200">
                {products.length} {products.length === 1 ? "Product" : "Products"}
              </span>
            )}
          </motion.p>

          <h1 className="text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-brand-navy sm:text-5xl xl:text-6xl">
            {brand.description.split(" ").map((w, i) => (
              <span key={i} className="inline-block overflow-hidden pb-1 align-bottom">
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + i * 0.06, ease: EASE }}
                >
                  {w}&nbsp;
                </motion.span>
              </span>
            ))}
          </h1>

          {lead && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55, ease: EASE }}
              className="mt-5 max-w-lg text-lg leading-relaxed text-slate-600 sm:text-xl"
            >
              {lead}
            </motion.p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
            className="mt-9 flex flex-wrap items-center gap-2 sm:gap-3"
          >
            {products.length > 0 && <UiButton href="#products">View Products</UiButton>}
            <a
              href="#story"
              className="group hidden h-[52px] items-center gap-2 rounded-full px-5 text-sm sm:inline-flex font-semibold text-brand-navy ring-1 ring-slate-300 transition-colors hover:bg-white hover:ring-brand-blue"
            >
              Read More
              <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
            </a>
          </motion.div>

        </div>

        {/* product stage */}
        <div className="relative order-1 mx-auto aspect-square w-full max-w-[260px] sm:max-w-[460px] lg:order-2 lg:max-w-[560px]">
          <motion.div style={{ x: orbX, y: orbY }} className="absolute inset-[6%]">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: EASE }}
              className="h-full w-full rounded-full bg-[radial-gradient(circle_at_35%_30%,#ffffff_0%,color-mix(in_srgb,var(--accent)_22%,white)_45%,color-mix(in_srgb,var(--accent)_45%,white)_100%)] shadow-[inset_0_-30px_60px_-20px_color-mix(in_srgb,var(--accent)_40%,transparent),0_50px_100px_-40px_color-mix(in_srgb,var(--accent)_70%,transparent)]"
            />
          </motion.div>
          <motion.div
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, rotate: 360 }}
            transition={{ opacity: { duration: 1 }, rotate: { duration: 60, repeat: Infinity, ease: "linear" } }}
            className="absolute inset-0 rounded-full border border-dashed border-[color-mix(in_srgb,var(--accent)_35%,transparent)]"
          />

          <motion.div style={{ x: stageX, y: stageY }} className="absolute inset-0">
            <div className="absolute bottom-[14%] left-1/2 h-6 w-1/2 -translate-x-1/2 rounded-[50%] bg-slate-900/20 blur-xl" />
            {shown.map((p, i) => {
              const pos = layout[i];
              return (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 80, rotate: 0 }}
                  animate={{ opacity: 1, y: 0, rotate: pos.r }}
                  transition={{ duration: 1.1, delay: 0.35 + i * 0.12, ease: EASE }}
                  style={{ left: "50%", top: "50%", width: pos.w, zIndex: i === shown.length - 1 ? 3 : 1 }}
                  className="absolute"
                >
                  {/* offset lives on the wrapper; the float keyframes own the image's transform */}
                  <div style={{ transform: `translate(calc(-50% + ${pos.x}), calc(-50% + ${pos.y}))` }}>
                    <Image
                      src={p.image}
                      alt={i === shown.length - 1 ? p.product_name : ""}
                      width={369}
                      height={280}
                      priority
                      sizes="(min-width: 1024px) 30vw, 60vw"
                      style={{ animationDelay: `${-i * 1.6}s` }}
                      className="h-auto w-full animate-float drop-shadow-[0_30px_30px_rgba(15,23,42,0.25)]"
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1, ease: EASE }}
            className="absolute bottom-[4%] left-0 z-10 flex items-center gap-2 rounded-full bg-white/90 py-1.5 pl-1.5 pr-3.5 text-xs font-semibold sm:bottom-[8%] sm:left-[2%] sm:py-2 sm:pl-2 sm:pr-4 sm:text-sm text-brand-navy shadow-xl ring-1 ring-slate-100 backdrop-blur"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-green text-white">
              <Leaf size={16} />
            </span>
            Health, Safety and Beauty
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandHero;
