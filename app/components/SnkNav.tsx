import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SnkNav = () => {
  return (
    <div className="w-full h-[28.8px] bg-[#FFFFFF] flex justify-between items-center px-8">
    {/* Left Side (Logo) */}
    <div className="flex items-center text-[#757575] text-sm">
      <Link href='/'><p>Visit Nike.com</p></Link>
    </div>

    {/* Right Side (Links) */}
    <div className="flex items-center space-x-4 text-sm text-[#111111] ">
        <Link href="/" className="hover:underline">
            Join/Log in
        </Link>
        <span>|</span>
        <Link href="/" className="hover:underline">
            Help
        </Link>
        <span></span>
        <Link href="/" className="hover:underline">
            <Image src="/cart.png" alt='' height={19.2} width={19.2}/>
        </Link>
        <Link href="/" className="hover:underline">
            <Image src="/icon.png" alt='' height={19.2} width={19.2}/>
        </Link>
        <Link href="/" className="hover:underline">
         India
        </Link>
    </div>
</div>
  )
}

export default SnkNav
