import React from 'react';
import Image from 'next/image';

interface FullWidthImageProps {
  src: string;
  alt: string;
  topText?: string;
  bottomText: string;
}

const FullWidthImage: React.FC<FullWidthImageProps> = ({ src, alt, topText, bottomText }) => {
  return (
    <div className="relative w-full my-12 mx-4">
      {topText && (
        <div className="flex justify-center items-center mt-8 mb-6">
          <h2 className="text-black text-xl md:text-2xl">{topText}</h2>
        </div>
      )}
      <div className="relative h-[627.06px]">
        <Image src={src} alt={alt} fill objectFit="cover" className="w-full h-full" />
      </div>
      <div className="flex justify-center items-center mt-8 mb-32 ">
        <p className="text-[#111111] text-[16px] md:text-lg w-[497.15px] h-[44px] text-center">{bottomText}</p>
      </div>
    </div>
  );
};

export default FullWidthImage;
