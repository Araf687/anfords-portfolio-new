"use client";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import img1 from "@/assets/image/slider1.jpg";
import img2 from "@/assets/image/slider2.jpg";
import img3 from "@/assets/image/slider3.jpg";
import storeIcon from "@/assets/icons/store-location.png";
import contactUS from "@/assets/icons/contact-us.png";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

import Image from "next/image";
import { cardData } from "@/helpers/data/about-card-data";
import { AboutCard } from "@/components/dashboard/card/AboutCard";
import SectionHeading from "@/components/dashboard/heading/SectionHeading";
import Footer from "@/components/dashboard/footer";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  const plugin = React.useRef(Autoplay({ delay: 3000 }));

  const autoplayOptions = { delay: 3000 }; // Auto-scroll delay in milliseconds
  const emblaRef = React.useRef(null);
  const [embla] = useEmblaCarousel({ loop: true }, [Autoplay(autoplayOptions)]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Carousel className="w-full" plugins={[plugin.current]}>
        <CarouselContent>
          {[img1, img2, img3].map((item, index) => (
            <CarouselItem key={index}>
              <div className="relative bg-black-100 w-full h-[400px]">
                {" "}
                {/* Adjust height as needed */}
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
      </Carousel>

      <main className="w-full">
        {/* //page body  */}
        <section className="max-w-6xl mx-auto my-10">
          <SectionHeading title="Product Feature" />
          <section className="grid grid-cols-4 gap-4">
            {cardData.map((card, index) => (
              <AboutCard key={index} data={card} />
            ))}
          </section>
        </section>

        {/* Our product section */}
        <section className="bg-blue-50 p-10">
          <SectionHeading title="Our Products" />
          <section className="max-w-6xl mx-auto my-10">
            {" "}
            <Carousel className="w-full">
              <CarouselContent className="-ml-1">
                {[img1, img1, img2, img2, img3].map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-1 md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <Card className="h-full">
                        <CardContent className="flex aspect-square bg-white items-center justify-center p-10 relative">
                          <Image
                            src={item}
                            alt={`Slide ${index + 1}`}
                            layout="fill"
                            objectFit="cover" // Ensure the image covers the entire card area
                            className="rounded-lg"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </section>
        </section>

        {/* contact section  */}
        <section>
          <section className="max-w-6xl mx-auto my-20">
            <div className="flex">
              <div className="w-1/2">
                <div className="flex items-center gap-2">
                  <Image
                    src={storeIcon}
                    height={100}
                    width={100}
                    alt="icon-store"
                  />
                  <div>

                    <p className="text-[20px] font-semibold">Store Location</p>
                    <p className="text-gray-600">New Eskaton, karwan bazar</p>
                    <p className="text-gray-600">Dhaka</p>
                  </div>
                </div>
              </div>
              <div className="w-1/2">
                <div className="flex items-center gap-2">
                  {" "}
                  <Image
                    src={contactUS}
                    height={100}
                    width={100}
                    alt="icon-store"
                  />{" "}
                  <div>
                    <p className="text-[20px] font-semibold">Contact Us</p>
                    <p className="text-gray-600">Have any question? We are here to talk! </p>
                    <p className="text-gray-600">Let us know your queries</p>
                    <Link href="#"><p className="font-bold text-blue-700"> Contact Us</p></Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

       
      </main>
    </main>
  );
}
