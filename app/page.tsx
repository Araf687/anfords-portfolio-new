"use client";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// images import
import img1 from "@/assets/image/slider1.jpg";
import img2 from "@/assets/image/slider2.jpg";
import img3 from "@/assets/image/slider3.jpg";
import storeIcon from "@/assets/icons/store-location.png";
import contactUS from "@/assets/icons/contact-us.png";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import mission from "@/assets/icons/mission2.png";
import vision from "@/assets/icons/vision.png";
import commitment from "@/assets/icons/commitments2.png";
import contactUsBg from "@/assets/image/contact us/contact-us3.jpg";

import Image from "next/image";
import { cardData } from "@/helpers/data/about-card-data";
import { AboutCard } from "@/components/dashboard/card/AboutCard";
import SectionHeading from "@/components/dashboard/heading/SectionHeading";
import Footer from "@/components/dashboard/footer";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { allProducts } from "@/helpers/data/all-products-data";
import { Button, buttonVariants } from "@/components/ui/button";

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
            <Carousel className="w-full">
              <CarouselContent className="-ml-1 ">
                {allProducts.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-1 md:basis-1/2 lg:basis-1/3 rounded-lg"
                  >
                    <div className="p-1">
                      <Card className="h-full relative overflow-hidden">
                        <CardContent className="flex aspect-square bg-white items-center justify-center p-10 relative">
                          {/* Container for the image and zoom effect */}
                          <div className="relative w-full h-full overflow-hidden rounded-lg">
                            <Image
                              src={item?.image}
                              alt={`Slide ${index + 1}`}
                              layout="fill"
                              objectFit="cover"
                              className="transition-transform duration-300 transform hover:scale-105"
                            />
                          </div>

                          {/* Overlay Content */}
                          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 rounded-lg">
                            <h3 className="text-white text-xl text-center mb-4 px-2">
                              {item?.product_name}
                            </h3>
                            <Link
                              href={`/products/${item?.id}`}
                              className={buttonVariants({ variant: "outline" })}
                            >
                              View details
                            </Link>
                          </div>
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

        {/* mission vision and commitment section  */}
        <section className="my-10">
          <section className="max-w-6xl mx-auto">
            <div className="flex p-10">
              <div className="w-1/3 text-center">
                <div>
                  {" "}
                  <Image
                    src={mission}
                    height={90}
                    width={90}
                    alt="icon-mission"
                    className="mx-auto mb-4"
                  />
                </div>
                <div>
                  <p className="text-[20px] font-semibold">Mission</p>
                  <p className="text-gray-600">
                    To provide the best quality products to our customers
                  </p>
                </div>
              </div>
              <div className="w-1/3 text-center">
                <Image
                  src={vision}
                  height={90}
                  width={90}
                  alt="icon-vision"
                  className="mx-auto mb-4"
                />
                <div>
                  <p className="text-[20px] font-semibold">Vision</p>
                  <p className="text-gray-600">
                    To be the best in the industry
                  </p>
                </div>
              </div>
              <div className="w-1/3 text-center">
                <div>
                  {" "}
                  <Image
                    src={commitment}
                    height={90}
                    width={90}
                    alt="icon-commitments"
                    className="mx-auto mb-4"
                  />
                </div>
                <div>
                  <p className="text-[20px] font-semibold">Commitment</p>
                  <p className="text-gray-600">
                    To provide the best quality products to our customers
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>

        {/* contact us section */}
        <section className="relative h-[550px] w-full">
          s
          <Image src={contactUsBg} alt="bg" layout="fill" objectFit="cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-white">
              <p className="text-3xl font-semibold mb-4">Contact Us</p>
              <p className="text-lg">Have any question? We are here to talk!</p>
              <p className="text-lg">Let us know your queries</p>
              <Link href="/contact-us">
                <p className="font-bold text-[#1f2937] mt-1"> Contact Us</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </main>
  );
}
