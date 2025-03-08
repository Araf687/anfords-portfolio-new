import React from "react";
import { Button } from "./button";
import Image from "next/image";
import leafIcoWhite from "@/assets/image/landing-page/leafIcon.svg";
import leafIconBluish from "@/assets/icons/landing-page/leafBlueColor.svg";

interface UiButtonProps {
  children: string;
  varient?: "dark" | "light";
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const UiButton: React.FC<UiButtonProps> = ({
  children,
  varient = "dark",
  onClick,
  type = "button",
}) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      className={`flex flex-row justify-between items-center gap-x-3 ${
        varient === "dark"
          ? "bg-[#1263AD]  text-white"
          : "bg-[white]  text-[#1263AD]"
      } rounded-full px-7 py-6 transition-all duration-300 hover:${
        varient === "dark" ? "bg-[#0E5290]" : "bg-gray-100"
      } hover:scale-105`}
    >
      <p>
        {children} {varient}
      </p>

      {varient === "dark" ? (
        <Image src={leafIcoWhite} alt="leaf" height={25} width={25} />
      ) : (
        <Image src={leafIconBluish} alt="leaf" height={25} width={25} />
      )}
    </Button>
  );
};

export default UiButton;
