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
  const router=useRouter();
  return (
    <div>
      <section className="bg-gray-50 p-6 sm:p-8 md:p-10">
        <SectionHeading title="Our Products" />
        <section className="max-w-6xl mx-auto my-10">
          <Carousel className="w-full">
            <CarouselContent className="ml-1">
              {allProducts.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 basis-2/3 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 rounded-lg"
                 
                >
                  <div className="h-[40vh] border border-rounded">
                    <div className=" flex justify-center items-center w-full h-full overflow-hidden rounded-lg">
                      <Image
                        src={item.image}
                        alt={`Slide ${index + 1}`}
                        // layout="fill"
                        // objectFit="cover"
                        height={100}
                        width={item?.width}
                        className="transition-transform duration-1000 transform hover:scale-150 mb-0"
                        onClick={()=>{router.push("/products/"+item.id)}}
                      />
                      
                    </div>
                    <p className="bg-red-100">{item.product_name}</p>
                    

                    {/* Overlay Content */}
                    {/* <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 rounded-lg">
                          <h3 className="text-white text-lg sm:text-xl text-center mb-2 sm:mb-4 px-2">
                            {item?.product_name}
                          </h3>
                          <Link
                            href={`/products/${item?.id}`}
                            className={buttonVariants({ variant: "outline" })}
                          >
                            View details
                          </Link>
                        </div> */}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
      </section>
    </div>
  );
};

export default BrandSection;
