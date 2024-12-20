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

function About(): React.JSX.Element {
  const logo2ref = useRef(null);
  const storyImageref = useRef(null);
  const storyImageContentref = useRef(null);

  useEffect(() => {
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
      const storyImageElement = storyImageref.current as HTMLDivElement;
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
    const headline = storyImageContentref.current?.children[0];
    const contentP = headline?.nextSibling;
    tl.from(
      headline,
      1,
      { x: 1000, opacity: 0, ease: "power4.out" },
      "start"
    ).from(contentP, 3, { x: 1000, opacity: 0, ease: "power4.out" }, "start");
  }, []);

  return (
    <div>
      <section className="bg-gray-50">
        <section className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between py-16 mb-10 px-4 sm:px-6">
          <div className="text-center lg:text-left w-full lg:w-2/3">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-gray-600 text-lg text-justify">
              ANFORDS, a consumer goods company with some of the most
              recognizable brand names under its portfolio functions on the
              foundation of understanding and meeting consumer needs.
            </p>
          </div>
          <div className="mt-8 lg:mt-0 lg:ml-12 flex justify-center lg:justify-end items-center space-x-4">
            <Image
              src={logo1}
              alt="Logo 1"
              width={100}
              height={60}
              className="rounded-lg"
            />
            <Image
              ref={logo2ref}
              src={logo2}
              alt="Logo 2"
              className="rounded-lg"
              width={55}
              height={55}
            />
            <Image
              src={logo3}
              alt="Logo 3"
              width={100}
              height={60}
              className="rounded-lg"
            />
          </div>
        </section>
      </section>

      <main className="px-4 sm:px-6 md:px-8 lg:px-0 max-w-6xl mx-auto grid gap-8 sm:gap-10 grid-cols-1 md:grid-cols-2">
        <div className="flex items-center">
          <div ref={storyImageref} className="h-full w-full overflow-hidden">
            <Image
              src={ourStory}
              alt="Our Story"
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>
        </div>
        <div className="flex items-center">
          <div ref={storyImageContentref}>
            <h2 className="text-2xl font-semibold text-gray-800">Our Story</h2>
            <p className="mt-2 text-gray-600 text-justify">
              The company initially started as a pharmaceutical but switched to
              the production of FMCG products in the 1980s. By the 1990s, it
              launched its very first gel toothpaste by the name of Crystal
              Toothpaste in Bangladesh. The product was met by huge success, and
              ANFORDS has since then built a legacy of quality and natural
              products for over 30 years.
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Our Goal</h2>
            <p className="mt-2 text-gray-600 text-justify">
              ANFORDS added another success to its list of quality products,
              namely Doctor Toothpaste in 2003, followed by Mr. White in 2004,
              which was launched under three variants, much to the delight of
              consumers.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={goal}
            alt="Our Goal"
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>
      </main>

      <section className="mt-6 mb-8 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl text-center text-gray-800 mb-10">
            Anfords By The Numbers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-lg bg-white p-10 text-center flex flex-col items-center">
              <Image src={factory} alt="factory" height={100} width={100} />
              <h3 className="text-2xl text-[#213343] font-bold mt-4">
                3 Factories
              </h3>
            </div>
            <div className="rounded-lg bg-white p-10 text-center flex flex-col items-center">
              <Image src={employees} alt="employees" height={100} width={100} />
              <h3 className="text-2xl text-[#213343] font-bold mt-4">
                1300+ Employees
              </h3>
            </div>
            <div className="rounded-lg bg-white p-10 text-center flex flex-col items-center">
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
