import React from "react";
import ContactSection from "./landing-page/ContactSection";
import Image from "next/image";
import footerImg from "@/assets/image/footer/footerImage2.png";
import brandLogo from "@/assets/image/footer/brandLogo.png";
import Section from "../ui/Section";
import { allBrands } from "@/lib/constants";
import { Brand, Product, ProductCardProps } from "@/types/data";
import { allProducts } from "@/helpers/data/all-products-data";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${footerImg.src})`,
          backgroundSize: "contain", // show full image
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full h-[582.5px]"
      >
        <div className="flex justify-center py-10">
          <Image src={brandLogo} alt="Brand Logo" height={60} />
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 px-8">
          {allBrands.map((brandItem: Brand) => (
            <div key={brandItem.id.toString()}>
              <p className="font-semibold text-white mb-2">
                {brandItem.brandName}
              </p>
              <ul className=" space-y-1">
                {allProducts
                  .filter((product:ProductCardProps) => product.brand_id === brandItem.id)
                  .map((productItem:ProductCardProps) => (
                    <Link
                      key={productItem.id}
                      href={`/products/${productItem.id}`}
                      className="text-white hover:underline"
                    >
                      {" "}
                      <li className="text-white text-sm pb-1">
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
