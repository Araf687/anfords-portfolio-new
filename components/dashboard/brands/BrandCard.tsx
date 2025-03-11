"use client";
import { Brand } from "@/types/data";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const BrandCard = ({ item }: { item: Brand }) => {
  const router = useRouter();
  return (
    <div
      className="relative bg-white w-full h-[150px] cursor-pointer  rounded-lg overflow-hidden transition-all hover:duration-500 shadow hover:shadow-lg "
      onClick={() => router.push("/brands/" + item.id)}
    >
      {/* Color Image (Shown on Hover) */}
      <Image
        src={item.image.color}
        alt={item.brandName}
        height={150}
        className="absolute inset-0 mx-auto my-auto object-contain transition-opacity duration-300"
      />
    </div>
  );
};

export default BrandCard;
