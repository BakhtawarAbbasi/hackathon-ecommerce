import React from 'react';

const CartDetails: React.FC = () => {
  return (
    <div className="p-4 md:p-8 text-[#111111]">
      <h1 className="text-[21.6px] mb-2">Nike Air Max 97 SE</h1>
      <h2 className="text-[12px] mb-2">Men's Shoes</h2>
      <p className="text-[12px] font-bold">₹18,495.00</p>
      <p className=" text-[#757575] text-[12px]">incl. of taxes</p>
      <p className='text-[#757575] text-[12px] mb-6'>(Also includes all applicable duties)</p>

      <h3 className="text-lg font-semibold mb-2">Select Size</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mb-4">
        {['UK 6', 'UK 6.5', 'UK 7', 'UK 8', 'UK 8.5', 'UK 9', 'UK 9.5', 'UK 10', 'UK 11', 'UK 12', 'UK 13', 'UK 14'].map(size => (
          <button key={size} className="border p-2 hover:border-gray-500">{size}</button>
        ))}
      </div>
          <div className='flex flex-col items-center'>
      <button className="bg-[#111111] text-[#FFFFFF] w-[300.8px] h-[50.4px] px-4 py-2 rounded-full hover:bg-gray-600 mb-4">Add to Bag</button>
      <button className="bg-[#FFFFFF] text-[#111111] border border-black w-[300.8px] h-[50.4px] px-4 py-2 rounded-full mb-4">Favouite</button>
      </div>

      <div className="mt-10">
        <p className="mb-2 mt-12">Layer upon layer of Nike Air Max 97 innovation, fashion, and history combine to create a look that lets you push your style full speed ahead. Full-length Nike Air cushioning lets you ride in first-class comfort.</p>
        <p><strong>Colour Shown:</strong> Pure Platinum/White/Obsidian/Black</p>
        <p><strong>Style:</strong> DV2627-001</p>
        <p><strong>Country/Region of Origin:</strong> India</p>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-2">Delivery & Returns</h3>
        <p className="mb-2">Free delivery for Nike Members.</p>
        <p className="mb-2">Free standard delivery on orders over ₹14,000.00.</p>
        <p>Orders are processed and delivered Monday–Friday (excluding public holidays).</p>
      </div>
    </div>
  );
};

export default CartDetails;
