import { StaticImageData } from 'next/image';
import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  bgImage?: StaticImageData;
  bgPosition?: string; // Accepts values like 'center', 'top', 'bottom', etc.
}

const Section: React.FC<SectionProps> = ({ children, className, bgImage, bgPosition = 'center' }) => {
  return (
    <div
      className={`md:py-20 lg:py-28 px-16 space-y-6 ${className}`}
      style={{
        backgroundImage: bgImage ? `url(${bgImage.src})` : undefined, // Use bgImage.src for StaticImageData
        backgroundPosition: bgPosition, // Dynamically set background position
        backgroundRepeat: 'no-repeat',
      }}
    >
      {children}
    </div>
  );
};

export default Section;
