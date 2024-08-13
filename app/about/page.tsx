import React from 'react'
import Image from "next/image";
import logo from "@/assets/image/logo.png";

function About(): React.JSX.Element {

    return (
        <main className="mx-20 mt-10 grid grid-cols-12 gap-2">
            <div className="col-span-9">
                <h1 className="scroll-m-20 py-3 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    About Us
                </h1>
                <h5 className="scroll-m-20 py-3 text-lg mt-4 text-gray-500">
                    ANFORDS, a consumer goods company with some of the most recognizable brand names under its portfolio
                    functions on the foundation of understanding and meeting consumer needs.
                </h5>

                <h5 className="scroll-m-20 py-3 text-lg mt-4 text-gray-500">
                    The company initially started as a pharmaceutical but switched to the production of FMCG products in
                    the 1980s. By the 1990s, it launched its very first gel toothpaste by the name of Crystal Toothpase
                    in Bangladesh. The product was met by a huge success and ANFORDS since then has built a legacy of
                    quality and natural products for over 30 years.
                </h5>


                <h5 className="scroll-m-20 py-3 text-lg mt-4 text-gray-500">
                    In 2003, ANFORDS added another success to its increasing list of quality products, namely Doctor
                    Toothpaste followed by Mr. White in 2004, which was launched under three variants much to the
                    delight of consumers.
                </h5>


                <h5 className="scroll-m-20 py-3 text-lg mt-4 text-gray-500">
                    By 2011 ANFORDS yet again did what it does best, which was to introduce an innovative toothpaste in
                    the local market called NEXERA. It was the only toothpaste to include cloves as an active
                    ingredient. By early 2019 the organization launched one of the leading online fragrance brands in
                    Bangladesh called ARTÉ Cosmetics which introduced a range of 8 SKUs in the perfume category that
                    caters to both genders and also offers unisex fragrance at affordable prices.
                </h5>


                <h5 className="scroll-m-20 py-3 text-lg mt-4 text-gray-500">
                    Currently, the focus of ANFORDS is to improve the lives of its consumers and add meaning to it
                    through its brands. The company has spread its operations to three different continents and is
                    bringing meaning to countless households.
                </h5>
            </div>
            <div className="col-span-3 flex justify-center items-center">

                    <Image src={logo} alt={'logo'} />

            </div>


        </main>
    )
}

export default About
