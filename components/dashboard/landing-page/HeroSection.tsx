"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import hero from "@/assets/image/landing-page/hero.png";
import groupMockUp from "@/assets/image/landing-page/groupMockUp.png";
import UiButton from "@/components/ui/uiButton";
import Eyebrow from "@/components/ui/Eyebrow";
import { WordReveal } from "@/components/motion/Reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

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
            Natural Products
          </Eyebrow>
        </motion.div>

        <h1 className="mt-6 max-w-5xl text-balance text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-brand-text sm:text-6xl lg:text-[5.5rem]">
          <WordReveal
            text="Be good to your skin."
            animateOnMount
            delay={0.15}
            wordClassName={(w) =>
              w === "skin." ? "bg-gradient-to-r from-brand-blue via-brand-sky to-brand-green bg-clip-text text-transparent" : ""
            }
          />
        </h1>
        <p className="mt-4 text-xl font-light text-brand-text sm:text-3xl lg:text-[2.4rem]">
          <WordReveal text="You will wear it everyday for you." animateOnMount delay={0.45} stagger={0.04} />
        </p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: EASE }}
          className="mt-6 max-w-xl text-[15px] leading-relaxed text-slate-600 sm:text-lg"
        >
          Anfords Bangladesh brings you premium quality oral and personal care
          products, trusted by millions worldwide.
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
        className="relative -mb-[2px] mt-4 ml-[-20%] w-[140%] sm:ml-0 sm:w-full"
      >
        <motion.div
          style={{ scale: stageScale }}
          className="relative origin-bottom overflow-hidden rounded-t-[50%_120px] bg-[linear-gradient(to_bottom,#005AAA_0%,#0a4f9c_45%,#001F4E_100%)] px-4 pb-6 pt-12 sm:rounded-t-[50%_220px] sm:pb-8 sm:pt-20 lg:rounded-t-[50%_300px]"
        >
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-50 [mask-image:linear-gradient(to_bottom,#000_40%,transparent_90%)]" />
          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[60%] -translate-x-1/2 rounded-full bg-brand-sky/40 blur-[100px]" />
          <Image
            src={groupMockUp}
            alt="Anfords products, customer reviews and highlights"
            priority
            sizes="(min-width: 1400px) 1320px, 140vw"
            className="relative mx-auto h-auto w-full max-w-[1320px] drop-shadow-[0_30px_40px_rgba(0,0,0,0.35)]"
          />

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
