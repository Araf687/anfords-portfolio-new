import React from "react";

const SectionHeading = ({
  children,
  bgVarient = "light",
}: {
  children: string;
  bgVarient?: "dark" | "light";
}) => {
  const words = children.split(" ");
  const lastWord = words.pop(); // Extracts the last word
  const restOfText = words.join(" "); // Joins the remaining words

  return (
    <>
      <h2 className="text-3xl md:text-5xl lg:text-6xl text-[#206CB1] ">
        {restOfText}{" "}
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
