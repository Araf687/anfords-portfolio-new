import React from "react";
import { visibleBrands, visibleProducts } from "@/lib/brands";
import Image from "next/image";
import Link from "next/link";
import ContactSection from "./landing-page/ContactSection";
import brandLogo from "@/assets/image/footer/brandLogo.png";
import { Brand, ProductCardProps } from "@/types/data";
import { Reveal } from "@/components/motion/Reveal";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="relative overflow-hidden bg-brand-blue">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />

        <div className="container relative py-14 sm:py-20">
          {/* Brand Logo */}
          <Reveal className="flex justify-center pb-10 sm:pb-14">
            <Image src={brandLogo} alt="Anfords – Oral hygiene, hair care, skin care" height={60} className="h-12 w-auto sm:h-[60px]" />
          </Reveal>

          {/* Product Grid */}
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-x-12 lg:gap-x-24 lg:gap-y-16">
            {visibleBrands.map((brandItem: Brand, i) => (
              <Reveal key={brandItem.id.toString()} delay={i * 0.04}>
                <Link
                  href={`/brands/${brandItem.id}`}
                  className="mb-3 inline-block text-base font-semibold text-white transition-colors hover:text-brand-mint sm:text-lg"
                >
                  {brandItem.brandName}
                </Link>
                <ul className="space-y-2">
                  {visibleProducts
                    .filter((product: ProductCardProps) => product.brand_id === brandItem.id)
                    .map((productItem: ProductCardProps) => (
                      <li key={productItem.id}>
                        <Link
                          href={`/products/${productItem.id}`}
                          className="group inline-flex items-center gap-2 text-[13px] text-white/75 transition-colors hover:text-white sm:text-sm"
                        >
                          <span className="h-px w-0 bg-brand-mint transition-all duration-300 group-hover:w-3" />
                          {productItem.product_name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <ContactSection />
    </footer>
  );
};

export default Footer;
