import React from "react";
import ContactSection from "./landing-page/ContactSection";
import Image from "next/image";
import footerImg from "@/assets/image/footer/footerImage.png";

const Footer: React.FC = () => {
  return (
    <>
    <Image src={footerImg} alt="leaf-icon" />
      <ContactSection />
    </>
  );
};

export default Footer;
