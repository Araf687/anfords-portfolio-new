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
import FadeIn from "@/components/gsap/FadeIn";


export default function Home() {
  const animation = React.useRef();
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
              <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
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
        {/* Product Feature Section */}
        <section className="max-w-6xl mx-auto my-10">
          <SectionHeading title="Product Feature" />
          <section>
            <FadeIn stagger={0.2} x={100} ref={animation}>
              {cardData.map((card, index) => (
                <AboutCard key={index} data={card} />
              ))}
            </FadeIn>
          </section>
        </section>

        {/* Our Products Section */}
        <section className="bg-blue-50 p-6 sm:p-8 md:p-10">
          <SectionHeading title="Our Products" />
          <section className="max-w-6xl mx-auto my-10">
            <Carousel className="w-full">
              <CarouselContent className="-ml-1">
                {allProducts.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-1 basis-2/3 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 rounded-lg"
                  >
                    <div className="p-1">
                      <Card className="h-full relative overflow-hidden">
                        <CardContent className="flex aspect-square bg-white items-center justify-center p-4 sm:p-6 md:p-10 relative">
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
                            <h3 className="text-white text-lg sm:text-xl text-center mb-2 sm:mb-4 px-2">
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

        {/* Mission, Vision, and Commitment Section */}
        <section className="my-10">
          <section className="max-w-6xl mx-auto">
            <div className="flex flex-wrap p-6 sm:p-8 md:p-10">
              <div className="w-full sm:w-1/2 md:w-1/3 text-center mb-6 md:mb-0">
                <Image
                  src={mission}
                  height={90}
                  width={90}
                  alt="icon-mission"
                  className="mx-auto mb-4"
                />
                <div>
                  <p className="text-lg sm:text-xl font-semibold">Mission</p>
                  <p className="text-gray-600">
                    To provide the best quality products to our customers
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 text-center mb-6 md:mb-0">
                <Image
                  src={vision}
                  height={90}
                  width={90}
                  alt="icon-vision"
                  className="mx-auto mb-4"
                />
                <div>
                  <p className="text-lg sm:text-xl font-semibold">Vision</p>
                  <p className="text-gray-600">
                    To be the best in the industry
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/3 text-center">
                <Image
                  src={commitment}
                  height={90}
                  width={90}
                  alt="icon-commitments"
                  className="mx-auto mb-4"
                />
                <div>
                  <p className="text-lg sm:text-xl font-semibold">Commitment</p>
                  <p className="text-gray-600">
                    To provide the best quality products to our customers
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>

        {/* Contact Us Section */}
        <section className="relative h-[350px] sm:h-[450px] md:h-[550px] w-full">
          <Image
            src={contactUsBg}
            alt="bg"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-white text-center">
              <p className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 sm:mb-4">
                Contact Us
              </p>
              <p className="text-md sm:text-lg mb-2">
                Have any questions? We are here to talk!
              </p>
              <p className="text-md sm:text-lg">Let us know your queries</p>
              <Link href="/contact-us">
                <p className="font-bold text-[#1f2937] mt-2"> Contact Us</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </main>
  );
}
