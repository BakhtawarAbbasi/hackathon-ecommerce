import React from "react";
import Image from "next/image";
import Link from "next/link";
const Cart: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FFFFFF] flex items-center justify-center py-8 px-4">
      <main className="container mx-auto max-w-6xl bg-[#FFFFFF] p-4 md:p-6 ">

        {/* Free Delivery Banner */}
        <div className="bg-[#F7F7F7] flex flex-col md:flex-row md:items-center lg:pl-8 p-3 md:p-4 mb-6 text-center">
          <p className="text-sm text-gray-700">Free Delivery</p>
          <span className="font-semibold text-xs md:ml-4">
            Applies to orders of ₹14,000.00 or more.{" "}
            <a href="#" className="text-[#111111] underline">
              View details
            </a>
          </span>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Bag Section */}
          <section className="flex-1">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Bag</h2>

            {/* Product 1 */}
            <div className="border-b pb-4 mb-4 flex items-start">
              <Image
                src="/cart1.png"
                alt="Product 1"
                width={100}
                height={100}
                className="object-cover rounded"
              />
              <div className="ml-4 flex-grow">
                <h3 className="text-sm md:text-lg text-[#111111] font-semibold">
                  Nike Dri-FIT ADV TechKnit Ultra
                </h3>
                <p className="text-[#757575] text-xs md:text-sm">
                  Men&apos;s Short-Sleeve Running Top
                </p>
                <p className="text-[#757575] text-xs md:text-sm">
                  Ashen Slate/Cobalt Bliss
                </p>
                <div className="flex text-xs md:text-sm text-[#757575] mt-1">
                  <p className="mr-4">Size: L</p>
                  <p>Quantity: 1</p>
                </div>
                <div className="flex mt-3 space-x-2">
                  <Image
                    src="/gh.png"
                    alt="Favorites"
                    width={16}
                    height={16}
                    className="cursor-pointer"
                  />
                  <Image
                    src="/delete-icon.png"
                    alt="Delete"
                    width={16}
                    height={16}
                    className="cursor-pointer"
                  />
                </div>
              </div>
              <p className="text-[#111111] font-semibold text-sm md:text-base">
                MRP: ₹3,895.00
              </p>
            </div>

            {/* Product 2 */}
            <div className="border-b pb-4 flex items-start">
              <Image
                src="/cart2.png"
                alt="Product 2"
                width={100}
                height={100}
                className="object-cover rounded"
              />
              <div className="ml-4 flex-grow">
                <h3 className="font-semibold text-sm md:text-lg text-[#111111]">
                  Nike Air Max 97 SE
                </h3>
                <p className="text-xs md:text-sm text-[#757575]">
                  Men&apos;s Shoes
                </p>
                <p className="text-xs md:text-sm text-[#757575]">
                  Flat Pewter/Light Bone/Black/White
                </p>
                <div className="flex text-xs md:text-sm mt-1">
                  <p className="mr-4">Size: 8</p>
                  <p>Quantity: 1</p>
                </div>
                <div className="flex mt-3 space-x-2">
                  <Image
                    src="/gh.png"
                    alt="Favorites"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/delete-icon.png"
                    alt="Delete"
                    width={16}
                    height={16}
                  />
                </div>
              </div>
              <p className="font-semibold text-sm md:text-base text-[#111111]">
                MRP: ₹16,995.00
              </p>
            </div>


          </section>

          {/* Summary Section */}
          <aside className="w-full md:w-1/3 bg-[#FFFFFF] p-4">
            <h2 className="font-bold text-lg mb-4">Summary</h2>
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>₹20,890.00</span>
            </div>
            <div className="flex justify-between text-sm my-2">
              <span>Estimated Delivery & Handling</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between text-sm font-semibold">
              <span>Total</span>
              <span>₹20,890.00</span>
            </div>
            <Link href="/CheckOut">
              <button className="w-full bg-black text-white text-sm py-2 rounded-full mt-4">
                Member Checkout
              </button>
            </Link>
          </aside>
        </div>


      </main>
    </div>
  );
};

export default Cart;
