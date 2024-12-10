import React from 'react';
import ProductImage from './ProductImage';
import Link from 'next/link';
interface ProductProps {
  name: string;
  category: string;
  color: string;
  price: string;
  image: string;
}

const Product: React.FC<ProductProps> = ({ name, category, color, price, image }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg w-[278.4px] h-[426.4px]">
      <Link href='/ProductDetails'><ProductImage src={image} alt={name} /></Link>
      <h3 className="mt-4 font-semibold">{name}</h3>
      <p className="text-gray-600">{category}</p>
      <p className="text-gray-600">{color}</p>
      <p className="text-red-500 font-bold">{price}</p>
    </div>
  );
};

export default Product;
