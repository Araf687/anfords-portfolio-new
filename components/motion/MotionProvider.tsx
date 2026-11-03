"use client";
import { MotionConfig } from "framer-motion";
import React from "react";

// Respect the visitor's OS "reduce motion" setting for every framer animation
const MotionProvider = ({ children }: { children: React.ReactNode }) => {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
};

export default MotionProvider;
