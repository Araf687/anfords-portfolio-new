"use client";
import Image from "next/image";
import React from "react";
import SectionHeading from "../heading/SectionHeading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { allProducts } from "@/helpers/data/all-products-data";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const BrandSection = () => {
  const router = useRouter();
  return (
    <div>
      <section className="bg-[#eef9fb] p-6 sm:p-8 md:p-10">
        <SectionHeading title="Our Products" />
        <section className="max-w-6xl mx-auto my-10">
          <Carousel className="w-full relative">
            <CarouselContent className="ml-1">
              {allProducts.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 rounded-lg"
                >
                  <div className="h-[40vh] border border-rounded">
                    <div className="flex justify-center items-center w-full h-full overflow-hidden rounded-lg">
                      <Image
                        src={item.image}
                        alt={`Slide ${index + 1}`}
                        height={100}
                        width={item?.width}
                        className="transition-transform duration-1000 transform hover:scale-150 mb-0"
                        onClick={() => {
                          router.push("/products/" + item.id);
                        }}
                      />
                    </div>
                    <p className="bg-red-100">{item.product_name}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Position Previous and Next Buttons */}
            <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 md:left-6 lg:left-8 z-10" />
            <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 md:right-6 lg:right-8 z-10" />
          </Carousel>
        </section>
      </section>
    </div>
  );
};

export default BrandSection;
