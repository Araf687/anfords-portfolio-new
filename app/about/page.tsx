import React from "react";
import Image from "next/image";
import logo from "@/assets/image/logo.png";
import ourStory from "@/assets/image/about-us/our-story.jpg";
import goal from "@/assets/image/about-us/goal3.jpg";
import factory from "@/assets/icons/factory.png";
import customers from "@/assets/icons/customers.svg";
import employees from "@/assets/icons/employees.svg";

function About(): React.JSX.Element {
    return (
        <div>
            <section className="bg-gray-50">
                <section className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between py-16">
                    <div className="text-center lg:text-left w-1/2">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
                        <p className="text-gray-600 text-lg text-justify">
                            ANFORDS, a consumer goods company with some of the most
                            recognizable brand names under its portfolio functions on the
                            foundation of understanding and meeting consumer needs.
                        </p>
                    </div>
                    <div className="mt-8 lg:mt-0 lg:ml-12 w-1/2">
                        <Image
                            src={logo} // Update with your image path
                            alt="About Us Image"
                            width={500}
                            height={400}
                            className="rounded-lg object-cover"
                        />
                    </div>
                </section>
            </section>

            <main className="mx-20 mt-10 grid grid-cols-12 max-w-6xl mx-auto pb-10 gap-10">
                <div className="col-span-6 flex items-center">
                    <Image
                        src={ourStory} // Update with your image path
                        alt="About Us Image"
                        className="rounded-lg object-cover w-full h-full"
                    />
                </div>
                <div className="col-span-6 flex items-center">
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800">Our Story</h2>
                        <h5 className="scroll-m-20 py-3 mt-2 text-gray-600 text-justify">
                            The company initially started as a pharmaceutical but switched to
                            the production of FMCG products in the 1980s. By the 1990s, it
                            launched its very first gel toothpaste by the name of Crystal
                            Toothpaste in Bangladesh. The product was met by huge success, and
                            ANFORDS has since then built a legacy of quality and natural
                            products for over 30 years. In 2003, ANFORDS added another success
                            to its increasing list of quality products, namely Doctor
                            Toothpaste, followed by Mr. White in 2004, which was launched
                            under three variants, much to the delight of consumers.
                        </h5>
                    </div>
                </div>
                <div className="col-span-6 flex items-center">
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800">Our Goal</h2>
                        <h5 className="scroll-m-20 py-3 mt-2 text-gray-600 text-justify">
                            The company initially started as a pharmaceutical but switched to
                            the production of FMCG products in the 1980s. By the 1990s, it
                            launched its very first gel toothpaste by the name of Crystal
                            Toothpaste in Bangladesh. The product was met by huge success, and
                            ANFORDS has since then built a legacy of quality and natural
                            products for over 30 years. In 2003, ANFORDS added another success
                            to its increasing list of quality products, namely Doctor
                            Toothpaste, followed by Mr. White in 2004, which was launched
                            under three variants, much to the delight of consumers.
                        </h5>
                    </div>
                </div>
                <div className="col-span-6 flex justify-center items-center">
                    <Image
                        src={goal} // Update with your image path
                        alt="About Us Image"
                        className="rounded-lg object-cover w-full h-full"
                    />
                </div>
            </main>

            <section className="bg-gray-50">
                <div className="max-w-6xl mx-auto p-10">
                    <h2 className="text-4xl text-center font-bold text-gray-800 mb-10">
                        Anfords By The Numbers
                    </h2>
                    <div className="grid grid-cols-3 gap-6">
                        <div className="rounded-lg bg-white p-10 text-center flex flex-col items-center shadow">
                            <Image src={factory} alt="factory" height={100} width={100} />
                            <h3 className="text-2xl text-[#213343] font-bold mt-4">3 Factories</h3>
                        </div>
                        <div className="rounded-lg bg-white p-10 text-center flex flex-col items-center shadow">
                            <Image src={employees} alt="factory" height={100} width={100} />
                            <h3 className="text-2xl text-[#213343] font-bold mt-4">1300+ Employees</h3>
                        </div>
                        <div className="rounded-lg bg-white p-10 text-center flex flex-col items-center shadow">
                            <Image src={customers} alt="factory" height={100} width={100} />
                            <h3 className="text-2xl text-[#213343] font-bold mt-4">228,000+ Customers</h3>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}

export default About;
