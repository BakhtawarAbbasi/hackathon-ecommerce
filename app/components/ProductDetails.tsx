import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProductDetailPage: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-[137px] w-full max-w-[1200px]">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/item1.png"
            alt="Nike Air Force 1 PLT.AF.ORM"
            width={653}
            height={653}
            className="rounded-lg w-full h-auto"
          />
        </div>

        {/* Details Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <h1 className="text-2xl lg:text-3xl font-bold mb-4">Nike Air Force 1 PLT.AF.ORM</h1>

          <p className="text-base lg:text-lg mb-6">
            Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.
          </p>

          <p className="text-xl lg:text-2xl font-bold mb-4">₹8,695.00</p>

          <Link href="/cart">
            <button className="bg-[#111111] text-[#FFFFFF] py-2 px-6 rounded-full hover:bg-gray-800 w-full sm:w-auto">
              Add To Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
