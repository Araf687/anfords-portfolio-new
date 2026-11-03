"use client";
import { animate, useInView, useReducedMotion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

// Animates the leading number of a label like "30 +", "08" or "8/10",
// keeping any prefix padding and suffix exactly as written.
const CountUp = ({
  value,
  className,
  duration = 1.8,
}: {
  value: string;
  className?: string;
  duration?: number;
}) => {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const width = match ? match[1].length : 0;
  const suffix = match ? match[2] : "";

  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView || !match) return;
    if (reduceMotion) {
      setCurrent(target);
      return;
    }
    const controls = animate(0, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setCurrent(Math.round(v)),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, target, duration, reduceMotion]);

  if (!match) return <span className={className}>{value}</span>;

  return (
    <span ref={ref} className={className} aria-label={value}>
      <span aria-hidden className="tabular-nums">
        {current.toString().padStart(width, "0")}
        {suffix}
      </span>
    </span>
  );
};

export default CountUp;
