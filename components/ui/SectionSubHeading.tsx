import React, { ReactNode } from "react";

const SectionSubHeading = ({ children,className }: { children: ReactNode,className?:string }) => {
  return <p className={`${className} text-4xl`}>{children}</p>;
};

export default SectionSubHeading;
