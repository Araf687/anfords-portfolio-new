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
import img1 from "@/assets/image/sliders/sleekbg3.png";
import img2 from "@/assets/image/sliders/envy1.png";
import img3 from "@/assets/image/sliders/foam.png";
import img4 from "@/assets/image/sliders/mediplusGroup3.png";
import img5 from "@/assets/image/sliders/allProductGroup2.png";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import mission from "@/assets/icons/bullseye.png";
import vision from "@/assets/icons/supervision.png";
import commitment from "@/assets/icons/partnership.png";
import contactUsBg from "@/assets/image/contact us/contact2.jpg";

import Image from "next/image";
import { cardData } from "@/helpers/data/about-card-data";
import { AboutCard } from "@/components/dashboard/card/AboutCard";
import SectionHeading from "@/components/dashboard/heading/SectionHeading";

import Link from "next/link";
import FadeIn from "@/components/gsap/FadeIn";
import BrandSection from "@/components/dashboard/landing-page/BrandSection";

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
          {[img5, img1, img2, img3, img4].map((item, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full h-[72vh] md:h-[400px] lg:h-[78vh]">
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
        {/* <div className="w-full h-[78vh] backdrop-blur-xs absolute top-0">
                </div> */}
      </Carousel>

      <main className="w-full">
        {/* Product Feature Section */}
        <section className="max-w-6xl mx-auto p-10 my-10">
          <SectionHeading title="What We Provide?" color="#06a950" />
          <section>
            <FadeIn stagger={0.2} x={100} ref={animation}>
              {cardData.map((card, index) => (
                <AboutCard key={index} data={card} />
              ))}
            </FadeIn>
          </section>
        </section>

        {/* Our Products Section */}
        <BrandSection />

        {/* Mission, Vision, and Commitment Section */}
        <section className="my-10">
          <section className="max-w-6xl mx-auto text-black">
            <div className="flex flex-wrap p-6  sm:p-8 md:p-10">
              <div className="w-full sm:w-1/2 p-4 md:w-1/3 text-center mb-6 md:mb-0">
                <Image
                  src={mission}
                  height={100}
                  width={100}
                  alt="icon-mission"
                  className="mx-auto mb-4"
                />
                <div>
                  <p className="text-lg sm:text-2xl font-semibold mb-3">
                    Mission
                  </p>
                  <p>
                  Undertaking to endow with a comfortable lifestyle
                  carried by health, safety and beauty.
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 p-4 text-center mb-6 md:mb-0">
                <Image
                  src={vision}
                  height={100}
                  width={100}
                  alt="icon-vision"
                  className="mx-auto mb-4"
                />
                <div>
                  <p className="text-lg sm:text-2xl font-semibold mb-3">
                    Vision
                  </p>
                  <p>
                  Ensuring a meaningful balance of the satisfaction of its consumers employees and other
                  stakeholders
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-4 text-center">
                <Image
                  src={commitment}
                  height={100}
                  width={100}
                  alt="icon-commitments"
                  className="mx-auto mb-4"
                />
                <div>
                  <p className="text-lg sm:text-2xl font-semibold mb-3">
                    Commitment
                  </p>
                  <p>
                    To provide the best quality products to our customers
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>

        {/* Contact Us Section */}
        <section className="relative h-[40vh] sm:h-[40vh] md:h-[70vh] w-full">
          <Image
            src={contactUsBg}
            alt="bg"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
            
          />
          <div className="absolute inset-0 bg-black bg-opacity-35 flex items-center justify-center">
            <div className="text-white text-center">
              <p className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 sm:mb-4">
                Contact Us
              </p>
              <p className="text-md sm:text-lg mb-2">
                Have any questions? We are here to talk!
              </p>
              <p className="text-md sm:text-lg">Let us know your queries</p>
              <Link href="/contact-us">
                <p className="font-bold text-blue-800 mt-2 hover:underline"> Contact Us</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </main>
  );
}
