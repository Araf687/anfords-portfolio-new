// "use client";
// import Image from "next/image";
// import React from "react";
// import SectionHeading from "../heading/SectionHeading";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import { Card, CardContent } from "@/components/ui/card";
// import { allProducts } from "@/helpers/data/all-products-data";
// import Link from "next/link";
// import { buttonVariants } from "@/components/ui/button";
// import { useRouter } from "next/navigation";

// const BrandSection = () => {
//   const router = useRouter();
//   return (
//     <div>
//       <section className="bg-[#eef9fb] p-6 sm:p-8 md:p-10">
//         <SectionHeading title="Our Products" />
//         <section className="max-w-6xl mx-auto my-10">
//           <Carousel className="w-full relative">
//             <CarouselContent className="ml-1">
//               {allProducts.map((item, index) => (
//                 <CarouselItem
//                   key={index}
//                   className="pl-1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 rounded-lg"
//                 >
//                   <div className="h-[40vh] border border-rounded">
//                     <div className="flex justify-center items-center w-full h-full overflow-hidden rounded-lg">
//                       <Image
//                         src={item.image}
//                         alt={`Slide ${index + 1}`}
//                         height={100}
//                         width={item?.width}
//                         className="transition-transform duration-1000 transform hover:scale-150 mb-0"
//                         onClick={() => {
//                           router.push("/products/" + item.id);
//                         }}
//                       />
//                     </div>
//                     <p className="bg-red-100">{item.product_name}</p>
//                   </div>
//                 </CarouselItem>
//               ))}
//             </CarouselContent>

//             {/* Position Previous and Next Buttons */}
//             <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 md:left-6 lg:left-8 z-10" />
//             <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 md:right-6 lg:right-8 z-10" />
//           </Carousel>
//         </section>
//       </section>
//     </div>
//   );
// };

// export default BrandSection;
// import { Button } from "@/components/ui/button";

// import Image from "next/image";
// import React from "react";
// import leafIcon from "@/assets/image/landing-page/leafIcon.svg";
// import { ChevronRight } from "lucide-react";

// const BrandSection = () => {
//   return (
//     <div className="px-6 py-12 md:py-20 lg:py-28  space-y-6">
//       <h2 className="text-6xl text-[#206CB1]">Explore Our Brands</h2>
//       <h4 className="text-4xl text-[#333333]">
//         Discover Top Brands & Their Products
//       </h4>

//       <div className="flex items-top gap-10 tracking-wide">
//         <p>
//           Find all your favorite brands in one place! Browse through our wide
//           selection of top-quality products from leading brands. Click on any
//           brand to explore its full range of offerings and discover the perfect
//           products for you.
//         </p>{" "}
//         <Button className="flex items-center bg-[#1263AD] rounded-full px-7 py-6 text-white transition-all duration-300 hover:bg-[#0E5290] hover:scale-105">
//           <Image src={leafIcon} alt="leaf" className="mr-2" height={25} />
//           All Products
//           <ChevronRight />
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default BrandSection;

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import leafIcon from "@/assets/image/landing-page/leafIcon.svg";
import { ChevronRight } from "lucide-react";
import { allBrands } from "@/lib/constants";
import { Brand } from "@/types/data";

const BrandSection = () => {
  return (
    <div className="px-6 py-16 md:py-24 lg:py-32 space-y-6 max-w-7xl mx-auto">
      {/* Title Section */}
      <h2 className="text-3xl md:text-5xl lg:text-6xl text-[#206CB1] ">
        Explore Our <span className="text-[#00A85A]">Brands</span>
      </h2>
      <h4 className="text-lg md:text-2xl lg:text-4xl text-[#333333]">
        Discover Top Brands & Their Products
      </h4>

      <div className="flex items-top gap-10 tracking-wide">
        <p>
          Find all your favorite brands in one place! Browse through our wide
          selection of top-quality products from leading brands. Click on any
          brand to explore its full range of offerings and discover the perfect
          products for you.
        </p>{" "}
        <Button className="flex items-center bg-[#1263AD] rounded-full px-7 py-6 text-white transition-all duration-300 hover:bg-[#0E5290] hover:scale-105">
          <Image src={leafIcon} alt="leaf" className="mr-2" height={25} />
          All Products
          <ChevronRight />
        </Button>
      </div>
      <div className="flex items-center gap-4 pt-10">
        {allBrands.map((item: Brand, brandIndex) => (
          <div
            key={brandIndex}
            className="relative group w-[170px] h-[110px] cursor-pointer"
          >
            {/* Gray Image (Default) */}
            <Image
              src={item.image.gray}
              alt={item.brandName}
              height={110}
              className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
            />

            {/* Color Image (Shown on Hover) */}
            <Image
              src={item.image.color}
              alt={item.brandName}
              height={110}
              className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandSection;
