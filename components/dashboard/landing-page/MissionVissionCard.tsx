"use client";
import Image, { StaticImageData } from "next/image";
import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

// Glass card with a subtle 3D tilt that follows the pointer
const MissionVissionCard = ({
  data,
  index,
}: {
  data: {
    icon: StaticImageData;
    backgroundImage: StaticImageData;
    title: string;
    description: string;
  };
  index: number;
}) => {
  const { icon, backgroundImage, title, description } = data;
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [6, -6]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-6, 6]), { stiffness: 200, damping: 20 });
  const px = useTransform(mx, (v) => v * 100);
  const py = useTransform(my, (v) => v * 100);
  const glow = useMotionTemplate`radial-gradient(400px circle at ${px}% ${py}%, rgba(46,158,255,0.18), transparent 60%)`;

  return (
    <motion.div
      ref={ref}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return;
        const r = ref.current!.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width);
        my.set((e.clientY - r.top) / r.height);
      }}
      onPointerLeave={() => {
        mx.set(0.5);
        my.set(0.5);
      }}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className="group relative h-full overflow-hidden rounded-3xl border border-[#3888E8]/60 bg-white p-7 text-brand-text shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)] sm:p-8"
    >
      <motion.div style={{ background: glow }} className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      {/* Background Image Positioned at Bottom-Right */}
      <div className="pointer-events-none absolute bottom-0 right-0 w-[38%] opacity-80 transition-transform duration-700 group-hover:scale-110">
        <Image src={backgroundImage} alt="" className="h-full w-full object-contain" />
      </div>

      {/* Content */}
      <div className="relative z-10 space-y-4 tracking-wide">
        <div className="flex items-start justify-between">
          <div className="grid h-20 w-20 place-items-center rounded-2xl bg-brand-mist transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105">
            <Image src={icon} alt="" className="object-contain" height={56} />
          </div>
          <span className="text-5xl font-semibold text-slate-100 transition-colors duration-500 group-hover:text-brand-sky/20">
            0{index + 1}
          </span>
        </div>
        <h3 className="text-2xl font-semibold text-brand-mid">{title}</h3>
        <p className="max-w-[85%] text-[15px] leading-relaxed text-slate-600">{description}</p>
      </div>
    </motion.div>
  );
};

export default MissionVissionCard;
