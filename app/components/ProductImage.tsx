import React from 'react';
import Image from 'next/image';

interface ProductImageProps {
  src: string;
  alt: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ src, alt }) => {
  return <Image src={src} alt={alt} width={278.4} height={278.4} className="object-cover w-full h-auto" />;
};

export default ProductImage;
``