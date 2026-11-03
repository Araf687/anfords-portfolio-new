"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import anfordsProductMockup from "@/assets/image/landing-page/anfordsProductMockup.svg";

// Closing product line-up: zooms gently into place as it scrolls in
const ProductShowcase = () => {
  return (
    <section className="overflow-hidden bg-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.88, y: 60 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={anfordsProductMockup}
          alt="Anfords product family – oral hygiene, hair care and skin care"
          loading="lazy"
          className="h-auto w-full"
        />
      </motion.div>
    </section>
  );
};

export default ProductShowcase;
