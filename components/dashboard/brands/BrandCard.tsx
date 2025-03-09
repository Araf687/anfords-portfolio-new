"use client";
import { Brand } from "@/types/data";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const BrandCard = ({ item }:{item:Brand}) => {
    const router=useRouter();
  return (
    <div
      className="relative group w-full h-[130px] cursor-pointer border-2 border-gray-300 rounded-lg overflow-hidden transition-all duration-300 hover:border-[#001F4E]"
        onClick={() => router.push("/brands/" + item.id)}
    >
      {/* Gray Image (Default) */}
      <Image
        src={item.image.gray}
        alt={item.brandName}
        width={170}
        height={130}
        className="absolute inset-0 mx-auto my-auto object-contain transition-opacity duration-300 group-hover:opacity-0"
      />

      {/* Color Image (Shown on Hover) */}
      <Image
        src={item.image.color}
        alt={item.brandName}
        width={170}
        height={130}
        className="absolute inset-0 mx-auto my-auto object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </div>
  );
};

export default BrandCard;
