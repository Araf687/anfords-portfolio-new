"use client";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import img1 from "@/assets/image/slider1.jpg";
import img2 from "@/assets/image/slider2.jpg";
import img3 from "@/assets/image/slider3.jpg";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { cardData } from "@/helpers/data/about-card-data";
import { AboutCard } from "@/components/dashboard/card/AboutCard";

export default function Home() {
  const plugin = React.useRef(Autoplay({ delay: 3000 }));
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Carousel className="w-full" plugins={[plugin.current]}>
        <CarouselContent>
          {[img1, img2, img3].map((item, index) => (
            <CarouselItem key={index}>
              <div className="relative bg-black-100 w-full h-[400px]"> {/* Adjust height as needed */}
                <Image
                  src={item}
                  alt={`Slide ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* //page body  */}
        <section className="max-w-6xl mx-auto my-10">
          <section className="grid grid-cols-4 gap-4">
            {cardData.map((card, index) => (
              <AboutCard key={index} data={card}/>
            ))}
          </section>

        </section>

      </Carousel>
    </main>
  );
}
