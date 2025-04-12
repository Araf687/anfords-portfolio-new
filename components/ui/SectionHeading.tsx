import React from "react";

const SectionHeading = ({
  children,
  bgVarient = "light",
  className,
}: {
  children: string;
  bgVarient?: "dark" | "light";
  className?: string;
}) => {
  const words = children.split(" ");
  const lastWord = words.pop(); // Extracts the last word
  const restOfText = words.join(" "); // Joins the remaining words

  return (
    <>
      <h2 className={"text-xl md:text-5xl lg:text-6xl text-[#206CB1] "+className}>
        <span className={`${
            bgVarient === "light" ? "text-[#206CB1]" : "text-[#2E9EFF]"
          }`}>{restOfText} </span>
        <span
          className={`${
            bgVarient === "light" ? "text-[#00A85A]" : "text-[#00DD76]"
          }`}
        >
          {lastWord}
        </span>
      </h2>
    </>
  );
};

export default SectionHeading;
