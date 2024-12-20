import React from "react";

interface SectionHeadingProps {
  title: string;
  color?:string
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title,color }) => {
  return (
    <div className="text-center mb-7">
      <h1 className={`text-3xl ${color?`text-[${color}]`:"text-black"} mb-2`}>{title}</h1>
      <div className="h-[2px] bg-black mx-auto w-[3%] rounded"></div>
    </div>
  );
};

export default SectionHeading;
