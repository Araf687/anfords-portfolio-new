"use client";
import { motion, Variants } from "framer-motion";
import React from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

type Direction = "up" | "down" | "left" | "right" | "none";

const offset = (direction: Direction, distance: number) => {
  switch (direction) {
    case "up":
      return { y: distance };
    case "down":
      return { y: -distance };
    case "left":
      return { x: distance };
    case "right":
      return { x: -distance };
    default:
      return {};
  }
};

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: Direction;
  distance?: number;
  as?: "div" | "section" | "li" | "span";
}

// Fades + slides its children in the first time they scroll into view
export const Reveal = ({
  children,
  className,
  delay = 0,
  duration = 0.8,
  direction = "up",
  distance = 40,
  as = "div",
}: RevealProps) => {
  const Component = motion[as];
  return (
    <Component
      className={className}
      initial={{ opacity: 0, ...offset(direction, distance) }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </Component>
  );
};

const containerVariants = (stagger: number, delay: number): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

// Parent that staggers any <StaggerItem> children as the group enters view
export const Stagger = ({
  children,
  className,
  stagger = 0.1,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}) => (
  <motion.div
    className={className}
    variants={containerVariants(stagger, delay)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-60px" }}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div className={className} variants={itemVariants}>
    {children}
  </motion.div>
);

// Splits a line into words that rise up one after another
export const WordReveal = ({
  text,
  className,
  wordClassName,
  delay = 0,
  stagger = 0.06,
  animateOnMount = false,
}: {
  text: string;
  className?: string;
  wordClassName?: (word: string, index: number, total: number) => string;
  delay?: number;
  stagger?: number;
  animateOnMount?: boolean;
}) => {
  const words = text.split(" ");
  const trigger = animateOnMount
    ? { animate: "show" }
    : { whileInView: "show", viewport: { once: true, margin: "-60px" } };
  return (
    <motion.span
      className={className}
      variants={containerVariants(stagger, delay)}
      initial="hidden"
      {...trigger}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span
          key={i}
          aria-hidden
          className="inline-block overflow-hidden pb-[0.12em] align-bottom"
        >
          <motion.span
            className={`inline-block ${wordClassName?.(word, i, words.length) ?? ""}`}
            variants={{
              hidden: { y: "110%" },
              show: { y: "0%", transition: { duration: 0.8, ease: EASE } },
            }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};
