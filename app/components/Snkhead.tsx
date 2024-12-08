import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
const Snkhead = () => {


        return (
            <div className="w-full h-[48px] bg-[#FFFFFF] flex justify-between items-center px-4 lg:px-8 border-[1px] border-gray-300">
            {/* Left Side (Logo) */}
            <div className="flex items-center">
                <Image src="/snkLogo.png" alt="Nike Logo" width={30} height={30} />
            </div>

            {/* Center Links for Desktop */}
            <div className="hidden lg:flex items-center space-x-6 text-sm text-[#111111] font-medium">
                <Link href="/" className="hover:text-gray-500 hover:underline">
                   Feed
                </Link>
                <Link href="/" className="hover:text-gray-500 hover:underline">
                    in Stock
                </Link>
                <Link href="/" className="hover:text-gray-500 hover:underline">
                    Upcoming
                </Link>
               
            </div>

            {/* Right Side (Icons) */}
            <div className="flex items-center space-x-4 h-[23px]">
               

                {/* Heart Icon */}
                <Image src="/snk-icon.png" alt="Favorites" width={20} height={20} />

              

          </div>     
            </div>
        )
    }

    export default Snkhead
