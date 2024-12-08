import React from 'react';
import Image from 'next/image';

interface CartImageProps {
  src: string;
  alt: string;
}

const CartImage: React.FC<CartImageProps> = ({ src, alt }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4">
      <Image src={src} alt={alt} layout="responsive" width={150} height={150} className="object-cover" />
    </div>
  );
};

export default CartImage;
