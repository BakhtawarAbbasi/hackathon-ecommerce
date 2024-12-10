import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const ProductDetailPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center px-4">
      <div className="p-8 pt-20 rounded-lg w-[1200px] h-[1125px] flex gap-[137px]">
        <div className="w-1/2 pr-4">
          <Image src="/item1.png" alt="Nike Air Force 1 PLT.AF.ORM" width={653} height={653} className="rounded-lg" />
        </div>
        <div className="pl-4 w-[376px] h-[1041px]">
          <h1 className="text-3xl font-bold mb-4">Nike Air Force 1 PLT.AF.ORM</h1>
          
          <p className="mb-6">
            Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.
          </p>

          <p className="text-2xl font-bold mb-4">₹8,695.00</p>
          
          <Link href="/cart">
          <button className="bg-[#111111] text-[#FFFFFF] py-2 px-4 rounded-full hover:bg-gray-800">Add To Cart</button>
         </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
