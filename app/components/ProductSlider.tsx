"use client";
import React, { useState } from "react";
import Image from "next/image";

interface Product {
    src: string;
    alt: string;
    name: string;
    category: string;
    price: string;
}

const products: Product[] = [
    {
        src: "/slide1.png",
        alt: "Jordan Why Not .6 PF",
        name: "Jordan Why Not .6 PF",
        category: "Women's Shoes",
        price: "₹13,995.00",
    },
    {
        src: "/slide2.png",
        alt: "Zion 2 PF",
        name: "Zion 2 PF",
        category: "Men's Basketball Shoes",
        price: "₹10,795.00",
    },
    {
        src: "/slide3.png",
        alt: "Air Jordan 1 Mid SE",
        name: "Air Jordan 1 Mid SE",
        category: "Men's Shoes",
        price: "₹12,295.00",
    },
    {
        src: "/item2.png",
        alt: "Air Jordan 4",
        name: "Air Jordan 4",
        category: "Women's Shoes",
        price: "₹14,295.00",
    },
    {
        src: "/item3.png",
        alt: "Air Jordan 11",
        name: "Air Jordan 11",
        category: "Men's Shoes",
        price: "₹15,995.00",
    },
];

const ProductSlider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
    };

    return (
        <div className="relative w-full p-4 h-[604px]">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-[22px] text-[#111111] lg:mx-2">Best of Air Max</h2>
                <div className="flex space-x-2 lg:my-2">
                    <p className="text-center pt-2">shop</p>
                    <button
                        onClick={prevSlide}
                        className="bg-[#E5E5E5] w-10 h-10 text-center p-2 rounded-full shadow-md"
                    >
                        &lt;
                    </button>
                    <button
                        onClick={nextSlide}
                        className="bg-[#E5E5E5] w-10 h-10 text-center p-2 rounded-full shadow-md"
                    >
                        &gt;
                    </button>
                </div>
            </div>
            <div className="flex justify-center items-center w-full overflow-hidden">
                {products.slice(currentIndex, currentIndex + 3).map((product, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-full sm:w-1/3 max-w-[400px] px-2 transition-transform duration-300"
                    >
                        <div className="relative h-[400px]">
                            <Image
                                src={product.src}
                                alt={product.alt}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                            />
                        </div>
                        <div className="flex justify-start gap-36">
                        <h3 className="text-sm text-[#111111] font-bold mt-2">
                            {product.name}
                        </h3>
                        <p className="text-sm text-[#111111] font-semibold mt-2">
                            {product.price}
                        </p>
                        </div>
                        <p className="text-sm text-[#757575]">{product.category}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductSlider;
