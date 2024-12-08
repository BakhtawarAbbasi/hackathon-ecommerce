import React from 'react';
import Image from 'next/image';

interface ImageCardProps {
  src: string;
  alt: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <Image src={src} alt={alt} layout="responsive" width={300} height={300} className="object-cover" />
    </div>
  );
};

export default ImageCard;
