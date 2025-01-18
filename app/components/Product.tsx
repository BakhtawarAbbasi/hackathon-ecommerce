import React from 'react';
import ProductImage from './ProductImage';
import Link from 'next/link';

interface ProductProps {
  productName: string;
  status: string;
  category: string;
  color: string;
  price: string;
  image: string;
}

const Product: React.FC<ProductProps> = ({ productName, status, category, color, price, image }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <Link href="/ProductDetails">
        <ProductImage src={image} alt={"product image"} />
      </Link>
      <h3 className="mt-4 font-semibold text-amber-800">{status}</h3>
      <h3 className=" font-semibold">{productName}</h3>
      <p className="text-gray-600">{category}</p>
      <p className="text-gray-600 mb-1">{color}</p>
      <p className="text-red-500 font-bold">${price}</p>
    </div>
  );
};

export default Product;
