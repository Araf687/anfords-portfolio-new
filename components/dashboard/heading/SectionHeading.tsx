import React from "react";

interface SectionHeadingProps {
  title: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title }) => {
  return (
    <div className="text-center mb-7">
      <h1 className="text-3xl font-semibold mb-2">{title}</h1>
      <div className="h-[5px] bg-gray-800 mx-auto w-[6%] rounded"></div>
    </div>
  );
};

export default SectionHeading;
