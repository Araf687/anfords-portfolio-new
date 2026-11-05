"use client";
import React, { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Smile } from "lucide-react";
import hero from "@/assets/image/landing-page/hero.png";
import heroCollage from "@/assets/image/landing-page/heroCollage.png";
import toothbrush from "@/assets/image/products/toothbrush/toothbrush.png";
import dentalFloss from "@/assets/image/products/dental floss/dentalfloss.png";
import UiButton from "@/components/ui/uiButton";
import Eyebrow from "@/components/ui/Eyebrow";
import { WordReveal } from "@/components/motion/Reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

// A card laid over an empty slot in the collage. Slots are % of the collage image and
// sizes are in cqw, so the card scales exactly like the baked-in cards around it.
const CollageCard = ({
  left,
  top,
  className,
  children,
}: {
  left: string;
  top: string;
  className?: string;
  children: React.ReactNode;
}) => (
  <div
    style={{ left, top }}
    className={`absolute flex h-[34.4%] w-[14.66%] flex-col overflow-hidden rounded-[2.1cqw] shadow-[0.8cqw_0.8cqw_1.6cqw_rgba(0,0,0,0.45)] ${className ?? ""}`}
  >
    {children}
  </div>
);

// product cutout card: shot on a lit brand-blue backdrop, name and stars below
const ProductSlot = ({ left, top, src, alt, title }: { left: string; top: string; src: StaticImageData; alt: string; title: string }) => (
  <CollageCard
    left={left}
    top={top}
    className="items-center justify-end bg-[linear-gradient(160deg,#2E9EFF_0%,#005AAA_45%,#001F4E_100%)] pb-[1.6cqw]"
  >
    <div className="absolute left-1/2 top-[38%] h-[70%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/25 blur-[2cqw]" />
    <Image
      src={src}
      alt={alt}
      sizes="200px"
      className="absolute left-1/2 top-[6%] h-auto w-[105%] max-w-none -translate-x-1/2 drop-shadow-[0_1cqw_1cqw_rgba(0,0,0,0.35)]"
    />
    <p className="relative text-[1.55cqw] font-semibold italic leading-none text-white">{title}</p>
    <p className="relative mt-[0.6cqw] text-[1.45cqw] leading-none tracking-[0.1em] text-white">★★★★★</p>
  </CollageCard>
);

// The collage artwork plus the cards laid over its cleared slots. Rendered twice by the
// stage (left and right halves) so the empty middle can be trimmed.
const Collage = ({ hidden }: { hidden?: boolean }) => (
  <>
    <Image
      src={heroCollage}
      alt={hidden ? "" : "Anfords products, customer reviews and highlights"}
      priority
      sizes="(min-width: 1400px) 1320px, 100vw"
      className="relative h-auto w-full drop-shadow-[0_30px_40px_rgba(0,0,0,0.35)]"
    />
    {/* oral care cards over the collage's cleared slots */}
    {/* the photo's lettering is blurred out in the image; this label replaces "1M+ Customers" */}
    <div className="absolute left-[1.04%] top-[24.7%] flex h-[34.4%] w-[14.66%] items-end justify-center overflow-hidden rounded-[2.1cqw] bg-[linear-gradient(to_bottom,transparent_45%,rgba(0,31,78,0.75)_100%)] pb-[2cqw]">
      <p className="text-center text-[2.3cqw] font-bold uppercase leading-[1.05] text-white">
        Happy
        <br />
        <span className="text-[1.75cqw] tracking-[0.04em]">Customers</span>
      </p>
    </div>
    <ProductSlot left="19.5%" top="39.16%" src={dentalFloss} alt="Mediplus dental floss" title="Dental Floss" />
    <CollageCard
      left="65.84%"
      top="39.16%"
      className="justify-between bg-[linear-gradient(160deg,#1F416A_0%,#001F4E_100%)] p-[1.5cqw] ring-1 ring-white/10"
    >
      <span className="grid h-[3.2cqw] w-[3.2cqw] place-items-center rounded-full bg-brand-green text-white">
        <Smile className="h-[60%] w-[60%]" />
      </span>
      <p className="text-[1.3cqw] font-medium leading-[1.35] text-white">
        Healthy teeth, fresh breath and a confident smile, every single day.
      </p>
      <p className="text-[1.15cqw] font-semibold leading-tight text-brand-mint">Mediplus Oral Hygiene</p>
    </CollageCard>
    <ProductSlot left="84.3%" top="24.7%" src={toothbrush} alt="Mediplus toothbrushes" title="Gum Care" />
  </>
);

const HeroSection = ({ exploreFunc }: { exploreFunc: () => void }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  // Scroll choreography: text drifts up and fades, product stage swells from its base
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const stageScale = useTransform(scrollYProgress, [0, 0.6], [1, 1.06]);
  const collageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={ref} className="relative isolate overflow-hidden bg-brand-mist">
      {/* product collage, softly masked so the copy stays readable */}
      <motion.div
        style={{ y: collageY }}
        className="absolute inset-x-0 top-0 -z-10 h-[75%] [mask-image:linear-gradient(to_bottom,#000_55%,transparent)]"
      >
        <Image
          src={hero}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top opacity-30 [mask-image:radial-gradient(ellipse_70%_55%_at_50%_35%,transparent_45%,#000_100%)]"
        />
      </motion.div>
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-[460px] w-[460px] animate-blob rounded-full bg-brand-sky/25 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 top-40 -z-10 h-[420px] w-[420px] animate-blob rounded-full bg-brand-mint/20 blur-[120px] [animation-delay:-8s]" />

      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="container relative flex flex-col items-center pb-10 pt-32 text-center sm:pt-40 lg:pt-44"
      >
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <Eyebrow variant="solid" className="normal-case tracking-wide">
            Oral Hygiene · Hair Care · Skin Care
          </Eyebrow>
        </motion.div>

        <h1 className="mt-6 max-w-5xl text-balance text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-brand-text sm:text-6xl lg:text-[5.5rem]">
          <WordReveal
            text="Be good to your smile."
            animateOnMount
            delay={0.15}
            wordClassName={(w) =>
              w === "smile." ? "bg-gradient-to-r from-brand-blue via-brand-sky to-brand-green bg-clip-text text-transparent" : ""
            }
          />
        </h1>
        <p className="mt-4 text-xl font-light text-brand-text sm:text-3xl lg:text-[2.4rem]">
          <WordReveal text="Brush it, love it, share it every day." animateOnMount delay={0.45} stagger={0.04} />
        </p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: EASE }}
          className="mt-6 max-w-xl text-[15px] leading-relaxed text-slate-600 sm:text-lg"
        >
          From toothpaste and toothbrushes to dental floss, Anfords Bangladesh
          brings premium oral hygiene to families across Bangladesh.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: EASE }}
          className="mt-9"
        >
          <UiButton onClick={exploreFunc}>Explore More</UiButton>
        </motion.div>
      </motion.div>

      {/* Product stage – the blue arc from the original design, now alive */}
      <motion.div
        initial={{ opacity: 0, y: 120 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5, ease: EASE }}
        className="relative -mb-[2px] mt-4 w-full"
      >
        <motion.div
          style={{ scale: stageScale }}
          className="relative origin-bottom overflow-hidden rounded-t-[50%_120px] bg-[linear-gradient(to_bottom,#005AAA_0%,#0a4f9c_45%,#001F4E_100%)] px-6 pb-6 pt-12 sm:px-4 sm:rounded-t-[50%_220px] sm:pb-8 sm:pt-20 lg:rounded-t-[50%_300px]"
        >
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-50 [mask-image:linear-gradient(to_bottom,#000_40%,transparent_90%)]" />
          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[60%] -translate-x-1/2 rounded-full bg-brand-sky/40 blur-[100px]" />
          {/* Two copies of the collage, each showing one side, so the empty centre of the artwork
              shrinks. --k is the share of the collage each side keeps (smaller = tighter gap). */}
          <div className="mx-auto flex w-full max-w-[1160px] [--k:0.39] sm:[--k:0.42] lg:[--k:0.44]">
            {[0, 1].map((half) => (
              <div key={half} aria-hidden={half === 1} className="w-1/2 overflow-x-clip">
                <div
                  style={{ width: "calc(100% / var(--k))", marginLeft: half ? "calc(100% - 100% / var(--k))" : 0 }}
                  className="relative [container-type:inline-size]"
                >
                  <Collage hidden={half === 1} />
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={exploreFunc}
            aria-label="Scroll to next section"
            className="absolute left-1/2 top-[38%] hidden -translate-x-1/2 flex-col items-center gap-3 text-white/80 transition-colors hover:text-white sm:flex"
          >
            <span className="grid h-20 w-20 place-items-center rounded-full border border-white/30 backdrop-blur-sm lg:h-24 lg:w-24">
              <ArrowDown className="animate-bounce" />
            </span>
            <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
