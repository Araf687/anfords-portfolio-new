import React from "react";
import ContactSection from "./landing-page/ContactSection";
import Image from "next/image";
import footerImg from "@/assets/image/footer/footerImage2.png";
import brandLogo from "@/assets/image/footer/brandLogo.png";
import { allBrands } from "@/lib/constants";
import { Brand, ProductCardProps } from "@/types/data";
import { allProducts } from "@/helpers/data/all-products-data";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <>
      <div
        className="w-full min-h-[630px] bg-no-repeat bg-center bg-contain sm:bg-cover"
        style={{
          backgroundImage: `url(${footerImg.src})`,
        }}
      >
        {/* Brand Logo */}
        <div className="flex justify-center pt-10 pb-6">
          <Image src={brandLogo} alt="Brand Logo" height={60} />
        </div>

        {/* Product Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-8 py-4">
          {allBrands.map((brandItem: Brand) => (
            <div key={brandItem.id.toString()}>
              <p className="font-semibold text-white mb-2 text-base sm:text-lg">
                {brandItem.brandName}
              </p>
              <ul className="space-y-1">
                {allProducts
                  .filter(
                    (product: ProductCardProps) =>
                      product.brand_id === brandItem.id
                  )
                  .map((productItem: ProductCardProps) => (
                    <Link
                      key={productItem.id}
                      href={`/products/${productItem.id}`}
                      className="text-white hover:underline"
                    >
                      <li className="text-sm text-white pb-1">
                        {productItem.product_name}
                      </li>
                    </Link>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <ContactSection />
    </>
  );
};

export default Footer;
