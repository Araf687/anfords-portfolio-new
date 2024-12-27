"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import logo1 from "@/assets/image/logo1.png";
import logo2 from "@/assets/image/logo2_extra.png";
import logo3 from "@/assets/image/logo3.png";
import ourStory from "@/assets/image/about-us/our-story.jpg";
import goal from "@/assets/image/about-us/goal3.jpg";
import factory from "@/assets/icons/factory.png";
import customers from "@/assets/icons/customers.svg";
import employees from "@/assets/icons/employees.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function About(): React.JSX.Element {
const logo2ref = useRef<HTMLImageElement>(null);
  const storyImageref = useRef<HTMLDivElement>(null);
  const storyImageContentref = useRef<HTMLDivElement>(null);
  const goalsImageRef = useRef<HTMLDivElement>(null);
  const goalsContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Logo animation
    gsap.to(logo2ref.current, {
      rotation: "+=360",
      duration: 1.5,
      repeat: -1,
      ease: "none",
    });

    // Story image animation
    const tl = gsap.timeline();
    if (storyImageref.current) {
      const storyImageElement = storyImageref.current;
      tl.from(
        storyImageElement,
        {
          duration: 1.2,
          x: -1280,
          ease: "power1.out",
        },
        "start"
      ).from(
        storyImageElement.firstElementChild,
        2,
        {
          scale: 1.7,
          ease: "power1.out",
        },
        "0.5"
      );
    }

    // Story content animation
    const headline = storyImageContentref.current?.children[0] as HTMLElement;
    const contentP = storyImageContentref.current?.children[1] as HTMLElement;
    tl.from(
      headline,
      0.5,
      { x: 1000, opacity: 0, duration: 0.6, ease: "power1.out" },
      "start"
    ).from(contentP, 3, { x: 1000, opacity: 0, ease: "power4.out" }, "start");

    // Goal image animation
    if (goalsImageRef.current) {
      const goalImageElement = goalsImageRef.current;
      gsap.from(goalImageElement, {
        duration: 1.5,
        x: 1280,
        ease: "power4.out",
        scrollTrigger: {
          trigger: goalImageElement,
          start: "top 80%",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <div>
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                About Us
              </h2>
              <p
                className="text-gray-600 text-lg text-justify"
                id="about_us_quote"
              >
                ANFORDS, a consumer goods company with some of the most
                recognizable brand names under its portfolio functions on the
                foundation of understanding and meeting consumer needs.
              </p>
            </div>
            <div className="flex justify-center items-center  gap-1.5">
              <Image
                src={logo1}
                alt="About Us Image"
                width={150}
                height={100}
                className="rounded-lg xs:w-10"
              />
              <Image
                ref={logo2ref}
                src={logo2}
                alt="About Us Image"
                style={{ width: "55px", height: "55px" }}
                className="rounded-lg xs:w-10"
              />
              <Image
                src={logo3}
                alt="About Us Image"
                width={150}
                height={100}
                className="rounded-lg xs:w-10 mb-2"
              />
            </div>
          </div>
        </div>
      </section>

      <main className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        {/* Image Section */}
        <div className="lg:col-span-6 flex items-center">
          <div ref={storyImageref} className="w-full">
            <Image
              src={ourStory}
              alt="Our Story Image"
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="lg:col-span-6 flex items-center">
          <div ref={storyImageContentref}>
            <h2 className="text-2xl font-semibold text-gray-800">Our Story</h2>
            <p className="scroll-m-20 py-3 mt-2 text-gray-600 text-justify">
              The company initially started as a pharmaceutical but switched to
              the production of FMCG products in the 1980s. By the 1990s, it
              launched its very first gel toothpaste by the name of Crystal
              Toothpaste in Bangladesh. The product was met by huge success, and
              ANFORDS has since then built a legacy of quality and natural
              products for over 30 years. In 2003, ANFORDS added another success
              to its increasing list of quality products, namely Doctor
              Toothpaste, followed by Mr. White in 2004, which was launched
              under three variants, much to the delight of consumers.
            </p>
          </div>
        </div>
      </main>

      <main className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        {/* Content Section */}
        <div className="lg:col-span-6 flex items-center">
          <div ref={goalsContentRef}>
            <h2 className="text-2xl font-semibold text-gray-800">Our Goal</h2>
            <p className="scroll-m-20 py-3 mt-2 text-gray-600 text-justify">
              The company initially started as a pharmaceutical but switched to
              the production of FMCG products in the 1980s. By the 1990s, it
              launched its very first gel toothpaste by the name of Crystal
              Toothpaste in Bangladesh. The product was met by huge success, and
              ANFORDS has since then built a legacy of quality and natural
              products for over 30 years. In 2003, ANFORDS added another success
              to its increasing list of quality products, namely Doctor
              Toothpaste, followed by Mr. White in 2004, which was launched
              under three variants, much to the delight of consumers.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:col-span-6 flex justify-center items-center">
          <div ref={goalsImageRef} className="w-full">
            <Image
              src={goal}
              alt="Our Goal Image"
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>
        </div>
      </main>

      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto p-10">
          <h2 className="text-4xl text-center font-bold text-gray-800 mb-10">
            Anfords By The Numbers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-lg bg-white p-10 text-center flex flex-col items-center shadow">
              <Image src={factory} alt="factory" height={100} width={100} />
              <h3 className="text-2xl text-[#213343] font-bold mt-4">
                3 Factories
              </h3>
            </div>
            <div className="rounded-lg bg-white p-10 text-center flex flex-col items-center shadow">
              <Image src={employees} alt="employees" height={100} width={100} />
              <h3 className="text-2xl text-[#213343] font-bold mt-4">
                1300+ Employees
              </h3>
            </div>
            <div className="rounded-lg bg-white p-10 text-center flex flex-col items-center shadow">
              <Image src={customers} alt="customers" height={100} width={100} />
              <h3 className="text-2xl text-[#213343] font-bold mt-4">
                228,000+ Customers
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
