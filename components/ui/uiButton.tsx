import React from 'react';
import { Button } from './button';
import Image from 'next/image';
import leafIcon from "@/assets/image/landing-page/leafIcon.svg";

const uiButton = () => {
    return (
        <Button className="flex items-center bg-[#1263AD] rounded-full px-7 py-6 text-white transition-all duration-300 hover:bg-[#0E5290] hover:scale-105">
        <Image src={leafIcon} alt="leaf" className="mr-2" height={25} />
        All Products
        
      </Button>
    );
};

export default uiButton;