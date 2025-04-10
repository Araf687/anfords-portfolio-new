import React from "react";
import ContactSection from "./landing-page/ContactSection";
import Image from "next/image";
import footerImg from "@/assets/image/footer/footerImage2.png";
import brandLogo from "@/assets/image/footer/brandLogo.png";
import Section from "../ui/Section";
import { allBrands } from "@/lib/constants";
import { Brand, Product } from "@/types/data";
import { allProducts } from "@/helpers/data/all-products-data";

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
      className="w-full h-[700px] p-5"
    >
      <div className="flex justify-center py-10">
        <Image src={brandLogo} alt="Brand Logo" height={60} />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3 md:grid-cols-3 px-8">
        {allBrands.map((brandItem: Brand) => (
          <div key={brandItem.id.toString()} >
            <p className="font-semibold text-white">{brandItem.brandName}</p>
            <ul className=" space-y-1">
              {allProducts
                .filter(product => product.brand_id === brandItem.id)
                .map(productItem => (
                  <li key={productItem.id}>{productItem.product_name}</li>
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
