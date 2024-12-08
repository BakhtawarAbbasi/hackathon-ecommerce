import React from 'react';

const categories = [
  'Best Selling Products',
  'Best Shoes',
  'New Basketball Shoes',
  'New Football Shoes',
  'New Men\'s Shoes',
  'New Running Shoes',
  'Best Men\'s Shoes',
  'New Jordan Shoes',
  'Best Women\'s Shoes',
  'Best Training & Gym',
];

const RelatedCategories: React.FC = () => {
  return (
    <div className="py-8 px-8 lg:ml-64">
      <h2 className="text-2xl font-bold mb-4 border-t-2 mt-4 pt-8">Related Categories</h2>
      <div className="flex flex-wrap gap-2 ">
        {categories.map((category, index) => (
          <button
            key={index}
            className=" text-[#111111] py-2 px-4 rounded-full hover:bg-gray-100 transition border border-[#CCCCCC]"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RelatedCategories;

