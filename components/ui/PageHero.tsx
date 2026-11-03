"use client";
import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Eyebrow from "./Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

// Shared header for inner pages: breadcrumb, animated heading, optional visual
const PageHero = ({
  eyebrow,
  title,
  subtitle,
  description,
  crumb,
  image,
  imageAlt = "",
  visual,
  children,
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description?: React.ReactNode;
  crumb: string;
  image?: StaticImageData;
  imageAlt?: string;
  visual?: React.ReactNode; // static artwork in place of the animated image

  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-brand-navy pb-16 pt-32 text-white sm:pb-20 sm:pt-40 lg:pb-28",
        className
      )}
    >
      {/* ambient light */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60 mask-fade-b" />
      <div className="pointer-events-none absolute -left-32 top-10 h-[420px] w-[420px] animate-blob rounded-full bg-brand-blue/50 blur-[110px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-[360px] w-[360px] animate-blob rounded-full bg-brand-green/25 blur-[110px] [animation-delay:-6s]" />

      <div
        className={cn(
          "container relative grid items-center gap-12",
          (image || visual) && "lg:grid-cols-[1.1fr_0.9fr]"
        )}
      >
        <div className="space-y-6">
          <Reveal direction="none" duration={0.6}>
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-white/60">
              <Link href="/" className="transition-colors hover:text-white">
                Home
              </Link>
              <ChevronRight size={14} />
              <span className="text-white">{crumb}</span>
            </nav>
          </Reveal>
          {eyebrow && (
            <Reveal delay={0.05}>
              <Eyebrow variant="dark">{eyebrow}</Eyebrow>
            </Reveal>
          )}
          <SectionHeading as="h1" bgVarient="dark">
            {title}
          </SectionHeading>
          {subtitle && (
            <Reveal delay={0.15}>
              <p className="text-xl font-light text-white/90 sm:text-2xl lg:text-3xl">{subtitle}</p>
            </Reveal>
          )}
          {description && (
            <Reveal delay={0.25}>
              <div className="max-w-2xl text-[15px] leading-relaxed text-white/70 md:text-base">
                {description}
              </div>
            </Reveal>
          )}
          {children && <Reveal delay={0.35}>{children}</Reveal>}
        </div>

        {visual && <div className="relative mx-auto w-full max-w-[220px] sm:max-w-[260px] lg:max-w-xs">{visual}</div>}

        {image && !visual && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="absolute inset-6 rounded-[2.5rem] bg-gradient-to-tr from-brand-blue to-brand-sky opacity-40 blur-3xl" />
            <Image
              src={image}
              alt={imageAlt}
              priority
              className="relative h-auto w-full animate-float drop-shadow-2xl"
              sizes="(min-width: 1024px) 40vw, 90vw"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PageHero;
