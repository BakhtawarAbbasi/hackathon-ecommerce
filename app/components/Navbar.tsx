"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="w-full h-[48px] bg-[#FFFFFF] flex justify-between items-center px-4 lg:px-8">
            {/* Left Side (Logo) */}
            <div className="flex items-center">
                <Image src="/vector.png" alt="Nike Logo" width={30} height={30} />
            </div>

            {/* Center Links for Desktop */}
            <div className="hidden lg:flex items-center space-x-6 text-sm text-[#111111] font-medium">
                <Link href="/" className="hover:text-gray-500">
                    New & Featured
                </Link>
                <Link href="/men" className="hover:text-gray-500">
                    Men
                </Link>
                <Link href="/" className="hover:text-gray-500">
                    Women
                </Link>
                <Link href="/" className="hover:text-gray-500">
                    Kids
                </Link>
                <Link href="/" className="hover:text-gray-500">
                    Sale
                </Link>
                <Link href="/SNKRS" className="hover:text-gray-500">
                    SNKRS
                </Link>
            </div>

            {/* Right Side (Icons) */}
            <div className="flex items-center space-x-4 h-[23px]">
                {/* Search for Desktop */}
                <div className="hidden sm:flex items-center bg-[#F5F5F5] rounded-full px-4 py-2">
                    <Image src="/search.png" alt="Search Icon" width={16} height={16} />
                    <input
                        type="text"
                        placeholder="Search"
                        className="ml-2 bg-transparent outline-none text-sm text-[#555]"
                    />
                </div>

                {/* Heart Icon */}
                <Image src="/gh.png" alt="Favorites" width={20} height={20} />

                {/* Cart Icon */}
                <Link href="/cart"><Image src="/jk.png" alt="Cart" width={20} height={20} /></Link>

                {/* Mobile Menu Icon */}
                <button
                    onClick={toggleMenu}
                    className="block lg:hidden text-[#111111]"
                >
                    {!isMenuOpen ? (
                        <Image
                            src="/menu.png"
                            alt="Hamburger Menu"
                            width={30}
                            height={30}
                        />
                    ) : (
                        <Image
                            src="/close.jpg"
                            alt="Close Menu"
                            width={30}
                            height={30}
                        />
                    )}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="absolute top-[48px] left-0 w-full bg-white shadow-md lg:hidden">
                    <div className="flex flex-col items-start space-y-2 px-4 py-4 text-sm text-[#111111] font-medium">
                        <Link href="/" className="hover:text-gray-500" onClick={toggleMenu}>
                            New & Featured
                        </Link>
                        <Link href="/" className="hover:text-gray-500" onClick={toggleMenu}>
                            Men
                        </Link>
                        <Link href="/" className="hover:text-gray-500" onClick={toggleMenu}>
                            Women
                        </Link>
                        <Link href="/" className="hover:text-gray-500" onClick={toggleMenu}>
                            Kids
                        </Link>
                        <Link href="/" className="hover:text-gray-500" onClick={toggleMenu}>
                            Sale
                        </Link>
                        <Link href="/" className="hover:text-gray-500" onClick={toggleMenu}>
                            SNKRS
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
