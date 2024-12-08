"use client"
import React, { useState } from 'react';
import ImageCard from './ImageCard';

const initialImages = [
  { src: '/images/sneak1.png', alt: 'Sneaker 1' },
  { src: '/images/sneak2.png', alt: 'Sneaker 2' },
  { src: '/images/sneak3.png', alt: 'Sneaker 3' },
  { src: '/images/sneak4.png', alt: 'Sneaker 4' },
  { src: '/images/sneak5.png', alt: 'Sneaker 5' },
  { src: '/images/sneak6.png', alt: 'Sneaker 6' },
  { src: '/images/sneak7.png', alt: 'Sneaker 7' },
  { src: '/images/sneak8.png', alt: 'Sneaker 8' },
  { src: '/images/sneak9.png', alt: 'Sneaker 9' },
  { src: '/images/sneak10.png', alt: 'Sneaker 10' },
  { src: '/images/sneak11.png', alt: 'Sneaker 11' },
  { src: '/images/sneak12.png', alt: 'Sneaker 12' },
];

const allImages = [
  ...initialImages,
  { src: '/images/sneak13.png', alt: 'Sneaker 12' },
  { src: '/images/sneak14.png', alt: 'Sneaker 12' },
  { src: '/images/sneak15.png', alt: 'Sneaker 12' },
  { src: '/images/sneak16.png', alt: 'Sneaker 12' },
  { src: '/images/sneak17.png', alt: 'Sneaker 12' },
  { src: '/images/sneak18.png', alt: 'Sneaker 12' },
  { src: '/images/sneak1.png', alt: 'Sneaker 12' },
  { src: '/images/sneak4.png', alt: 'Sneaker 12' },
  { src: '/images/sneak19.png', alt: 'Sneaker 12' },
  { src: '/images/sneak20.png', alt: 'Sneaker 12' },
  { src: '/images/sneak21.png', alt: 'Sneaker 12' },
  { src: '/images/sneak5.png', alt: 'Sneaker 12' },
  { src: '/images/sneak7.png', alt: 'Sneaker 12' },
];

const ImageGrid: React.FC = () => {
  const [visibleImages, setVisibleImages] = useState(initialImages);

  const loadMoreImages = () => {
    setVisibleImages(allImages.slice(0, visibleImages.length + 4));
  };

  return (
    <div className="container mx-auto px-4 py-8 mb-32">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {visibleImages.map((image, index) => (
          <ImageCard key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
      {visibleImages.length < allImages.length && (
        <div className="flex justify-center mt-8">
          <button 
            onClick={loadMoreImages} 
            className="bg-[#FFFFFF] text-[#111111] px-4 py-2 rounded "
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageGrid;
