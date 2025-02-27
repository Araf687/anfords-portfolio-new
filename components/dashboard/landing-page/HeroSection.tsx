import React from "react";
import hero from "@/assets/image/landing-page/hero.svg";
import groupMockUp from "@/assets/image/landing-page/groupMockUp.svg";
import leafIcon from "@/assets/image/landing-page/leafIcon.svg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChevronRight, Leaf } from "lucide-react";

const HeroSection = () => {
  return (
    <div
      className="w-full h-[1000px] bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{ backgroundImage: `url(${hero.src})` }}
    >
      {/* First content with rounded bottom */}
      <div className="h-[1708px] rounded-full bg-[#F1F2F6] mb-2 shadow-lg text-center text-black absolute left-[-132px] top-[-1313px] w-[1780px] left-0 right-0">
        <div className="max-w-6xl mx-auto mt-[1330px] text-[#333333] space-y-3">
          <span className="flex justify-center">
            <div className="bg-[#00A252] flex items-center text-sm gap-1 py-[2px] px-3 text-white font-semibold rounded-full mb-3">
              <Leaf size={17} />
              Natural Products
            </div>
          </span>
          <h4 className="text-6xl">Be good to your skin.</h4>
          <h4 className="text-[38px]">You will wear it everyday for you.</h4>
          <div className="flex justify-center">
            <p className="text-[20px] w-[630px] text-center mt-2">
              Anfords Bangladesh brings you premium quality oral and personal
              care products, trusted by millions worldwide.
            </p>
          </div>
        </div>
      </div>
      {/* First content with rounded bottom */}
      <div className="h-[1708px] rounded-full bg-[#F1F2F6] mb-2 shadow-lg absolute left-[-132px] bottom-[-1113px] w-[1780px] left-0 right-0">
        {/* Content of the first section */}
       <div className="flex justify-center items-center ">
        <Image src={groupMockUp} alt="group-mockup" height={450} className="mt-[105px]"/>
       </div>
      </div>
      <div className="z-100 absolute top-[37%] left-[44%]">
        <Button className="flex items-center rounded-full p-6">
          <Image src={leafIcon} alt="leaf" className="mr-2" height={25} />
          Explore More
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
