"use client"
import React, { useState } from 'react';
import Product from './Product';
import Sidebar from './Sidebar';
import Categary from './Categary';

const products = [
  {
    name: 'Nike Air Force 1 Mid ’07',
    category: "Shoes",
    color: '1 Colour',
    price: '$10,795.00',
    image: '/item1.png'
  },
  {
    name: 'Nike Court Vision Low Next Nature',
    category: "Shoes",
    color: '1 Colour',
    price: '$4,995.00',
    image: '/item2.png',
  },
  {
    name: 'Nike Air Force 1 PLT.AF.ORM',
    category: "Shoes",
    color: '1 Colour',
    price: '$8,695.00',
    image: '/item3.png',
  },
  {
    name: 'Nike Air Force 1 React',
    category: "Shoes",
    color: '1 Colour',
    price: '$13,295.00',
    image: '/item4.png',
  },
  {
    name: 'Air Jordan 1 Elevate Low',
    category: "Shoes",
    color: '1 Colour',
    price: '$11,895.00',
    image: '/item5.png',
  },
  {
    name: 'Nike Standard Issue',
    category: "Sports Bras",
    color: '1 Colour',
    price: '$2,895.00',
    image: '/item6.png',
  },
  {
    name: 'Nike Dunk Low Retro SE',
    category: "Shoes",
    color: '1 Colour',
    price: '$2,895.00',
    image: '/item7.png',
  },
  {
    name: 'Nike Dri-FIT UV Hyverse',
    category: "Sports Bras",
    color: '1 Colour',
    price: '$2,895.00',
    image: '/item8.png',
  },
  {
    name: 'Nike Court Vision Low',
    category: "Shoes",
    color: '1 Colour',
    price: '$2,895.00',
    image: '/item9.png',
  },
  {
    name: 'Nike Dri-FIT Ready',
    category: "Shoes",
    color: '1 Colour',
    price: '$2,895.00',
    image: '/item10.png',
  },
  {
    name: 'Nike One Leak Protection: Period',
    category: "Shoes",
    color: '1 Colour',
    price: '$2,895.00',
    image: '/item11.png',
  },
  {
    name: 'Nike Air Force 1 LV8 3',
    category: "Sports Bras",
    color: '1 Colour',
    price: '$2,895.00',
    image: '/item12.png',
  },
  {
    name: 'Nike Blazer Low Platform',
    category: "Shoes",
    color: '1 Colour',
    price: '$2,895.00',
    image: '/item13.png',
  },
  {
    name: 'Nike Court Legacy Lift',
    category: "Shoes",
    color: '1 Colour',
    price: '$2,895.00',
    image: '/item14.png',
  },
  {
    name: 'Nike Dri-FIT UV Miler',
    category: "Sports Bras",
    color: '1 Colour',
    price: '$2,895.00',
    image: '/item15.png',
  },
  {
    name: 'Nike Alate All U',
    category: "Shoes",
    color: '1 Colour',
    price: '$2,895.00',
    image: '/item16.png',
  },
  {
    name: 'Nike Swoosh',
    category: "Sports Bar",
    color: '1 Colour',
    price: '$2,895.00',
    image: '/item17.png',
  },
  {
    name: 'Nike Dri-FIT Run Division Rise 365',
    category: "Sports Bar",
    color: '1 Colour',
    price: '$2,895.00',
    image: '/item18.png',
  },
  {
    name: 'Nike Dri-FIT Challenger',
    category: "Trousers & Tights",
    color: '1 Colour',
    price: '$2,895.00',
    image: '/items19.png',
  },
  {
    name: 'Nike Outdoor Play',
    category: "Hoodies & Sweatshirts",
    color: '1 Colour',
    price: '$2,895.00',
    image: '/item20.png',
  },
  {
    name: 'Nike Air Max SYSTM',
    category: "Sports Bar",
    color: '1 Colour',
    price: '$2,895.00',
    image: '/item21.png',
  },
  {
    name: 'Nike Blazer Low 77 Jumbo',
    category: "Sports Bar",
    color: '1 Colour',
    price: '$2,895.00',
    image: '/item22.png',
  },
  {
    name: 'Nike SB Zoom Janoski OG+',
    category: "Shoes",
    color: '1 Colour',
    price: '$2,895.00',
    image: '/item23.png',
  },
  {
    name: 'Nike Sportswear Trend',
    category: "Skirts & Dresses",
    color: '1 Colour',
    price: '$2,895.00',
    image: '/item24.png',
  },
  {
    name: 'Nike SB Force 58',
    category: "Shoes",
    color: '1 Colour',
    price: '$2,895.00',
    image: '/item25.png',
  },
  {
    name: 'Nike Dri-FIT Challenger 21',
    category: "Shoes",
    color: '1 Colour',
    price: '$2,895.00',
    image: '/item26.png',
  },
  {
    name: 'Nike Dri-FIT Run Division Challenger',
    category: "Trousers & Tights",
    color: '1 Colour',
    price: '$2,895.00',
    image: '/item27.png',
  },
  {
    name: 'Nike Dri-FIT Totality',
    category: "Trousers & Tights",
    color: '1 Colour',
    price: '$2,895.00',
    image: '/item28.png',
  },
  {
    name: 'Nike Air',
    category: "Hoodies & Sweatshirts",
    color: '1 Colour',
    price: '$2,895.00',
    image: '/item29.png',
  },
  {
    name: 'Sustainable Materials',
    category: "Tops & T-Shirts",
    color: '1 Colour',
    price: '$2,895.00',
    image: '/item30.png',
  },
  {
    name: 'Nike Sportswear',
    category: "Tops & T-Shirts",
    color: '1 Colour',
    price: '$2,895.00',
    image: '/item31.png',
  },
  {
    name: 'Nike Sportswear12',
    category: "Jackets",
    color: '1 Colour',
    price: '$2,895.00',
    image: '/item20.png',
  },
  {
    name: 'Nike Sportswear152',
    category: "Shorts",
    color: '1 Colour',
    price: '$2,895.00',
    image: '/item27.png',
  },
  {
    name: 'Nike Sportswear112',
    category: "Shorts",
    color: '1 Colour',
    price: '$2,895.00',
    image: '/items19.png',
  },
  {
    name: 'Nike Sportswear122',
    category: "Accessories & Equipment",
    color: '1 Colour',
    price: '$2,895.00',
    image: '/item32.png',
  },
  {
    name: 'Nike Sportswear122de',
    category: "Accessories & Equipment",
    color: '1 Colour',
    price: '$2,895.00',
    image: '/item33.png',
  },
];


const ProductList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter((product) => product.category === selectedCategory);

  return (
    <><div className="flex flex-col md:flex-row px-4 md:px-8">
      {/* Sidebar */}
      <Sidebar setSelectedCategory={setSelectedCategory} />

      {/* Product Grid */}
      <main className="flex-1 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Product key={product.name} {...product} />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-600">
            No products available in this category.
          </div>
        )}
      </main>

    </div>
    <div>
        <Categary />
      </div></>
  );
};

export default ProductList;
