import React, { ReactNode } from "react";

const SectionSubHeading = ({
  children,
  className,
  bgVarient="light",
}: {
  children: ReactNode;
  className?: string;
  bgVarient?: string;
}) => {
  return (
    <p
      className={`${className} text-lg md:text-2xl lg:text-4xl ${
        bgVarient === "light" ? "text-[#333333]" : "text-white"
      }`}
    >
      {children}
    </p>
  );
};

export default SectionSubHeading;
