import React from 'react';
import { FaFilter } from 'react-icons/fa'; // React icons for filter icon
import Image from 'next/image';
const Main = () => {
    return (
        <div className='w-full h-auto bg-[#FFFFFF] font-["Helvetica Neue"] flex flex-wrap justify-between items-center px-4 lg:px-8 mb-2 mt-8'>
            {/* Left Side */}
            <div className='font-bold tracking-wide'>
                <h1 className='text-lg md:text-xl lg:text-2xl'>New (500)</h1>
            </div>

            {/* Right Side */}
            <div className='flex items-center space-x-4 mt-2 md:mt-0'>
                {/* Hide Filter with Icon */}
                <div className='flex items-center'>
                    <Image src="/filtericon.png" alt="" height={16} width={16} className='mr-2'/>
                    <span className='text-sm md:text-base'>Hide Filter</span>
                </div>

                {/* Sort By Dropdown */}
                <div>
                    <select className='text-sm md:text-base border border-gray-300 rounded px-2 py-1'>
                        <option value="sortby">Sort By</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Main;
