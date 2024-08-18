import React from "react";

interface SectionHeadingProps {
  title: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title }) => {
  return (
    <div className="text-center mb-7">
      <h1 className="text-3xl text-[#1f2937] font-semibold mb-2">{title}</h1>
      <div className="h-[5px] bg-[#1f2937] mx-auto w-[6%] rounded"></div>
    </div>
  );
};

export default SectionHeading;
