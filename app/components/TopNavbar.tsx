import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TopNavbar = () => {
    return (
        <div className="w-full h-[28.8px] bg-[#CCCCCC] flex justify-between items-center px-8">
            {/* Left Side (Logo) */}
            <div className="flex items-center ">
                <Image src="/Toplogo.png" alt="Logo" width={20} height={20} />
            </div>

            {/* Right Side (Links) */}
            <div className="flex items-center space-x-4 text-sm text-[#111111]">
                <Link href="/" className="hover:underline">
                    Find a Store
                </Link>
                <span>|</span>
                <Link href="/" className="hover:underline">
                    Help
                </Link>
                <span>|</span>
                <Link href="/" className="hover:underline">
                    Join Us
                </Link>
                <span>|</span>
                <Link href="/" className="hover:underline">
                    Sign In
                </Link>
            </div>
        </div>
    );
};

export default TopNavbar;
