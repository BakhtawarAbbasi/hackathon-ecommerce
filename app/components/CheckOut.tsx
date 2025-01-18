import Image from 'next/image';
import React from 'react';

const CheckoutPage = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto p-6 flex flex-col lg:flex-row gap-10 lg:w-[880px] xl:w-[880px] h-auto">
      <div className="w-full lg:w-2/3 p-4">
        {/* Text Section */}
        <div>
          <h2 className="text-xl text-[#111111] font-bold mb-2">How would you like to get your order?</h2>
          <p className='text-[#757575] text-[15px]'>
            Customs regulation for India require a copy of the recipient&apos;s KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information.
            <a href="#" className="text-blue-600 ml-1">Learn More</a>
          </p>
        </div>
        {/* Form Section */}
        <form className="space-y-6 mt-6 p-4">
          <div>
            <select className="mt-1 block border-gray-800 rounded-md w-full lg:w-[440px] h-[56px]">
              <option>Deliver it</option>
            </select>
          </div>
          <p className='font-bold'>Enter your name and address:</p>
          <div className='w-full lg:w-[440px]'>
            <input className="mt-4 block h-[56px] border border-[#CCCCCC] p-2 w-full rounded-md shadow-sm" type="text" placeholder='First Name' />
            <input className="mt-4 block h-[56px] border border-[#CCCCCC] p-2 w-full rounded-md shadow-sm" type="text" placeholder='Last Name' />
            <input className="mt-4 block h-[56px] border border-[#CCCCCC] p-2 w-full rounded-md shadow-sm" type="text" placeholder='Address Line 1' />
            <input className="mt-4 block h-[56px] border border-[#CCCCCC] p-2 w-full rounded-md shadow-sm" type="text" placeholder='Address Line 2' />
            <input className="mt-4 block h-[56px] border border-[#CCCCCC] p-2 w-full rounded-md shadow-sm" type="text" placeholder='Address Line 3' />

            <div className='flex flex-col lg:flex-row lg:gap-4'>
              <input className="mt-4 h-[56px] border border-[#CCCCCC] p-2 rounded-md shadow-sm w-full lg:w-[211px]" type="text" placeholder='Postal' />
              <input className="mt-4 h-[56px] border border-[#CCCCCC] p-2 rounded-md shadow-sm w-full lg:w-[211px]" type="text" placeholder='Locality' />
            </div>

            <div className='flex flex-col lg:flex-row lg:gap-4'>
              <input className="mt-4 h-[56px] border border-[#CCCCCC] p-2 rounded-md shadow-sm w-full lg:w-[211px]" type="text" placeholder='State/Territory' />
              <select className="mt-4 h-[56px] border border-[#CCCCCC] p-2 rounded-md shadow-sm w-full lg:w-[211px]">
                <option>India</option>
              </select>
            </div>
            <p className='mt-3'>Save this address to my profile</p>
          </div>
          <div>
            <h1 className='font-bold py-6'>What&apos;s your contact information?</h1>
            <input className="mt-4 block h-[56px] border border-[#CCCCCC] p-2 w-full rounded-md shadow-sm" type="text" placeholder='Email' />
            <p className='text-[#757575] text-[11px] pl-2 mt-1'>A confirmation email will be sent after checkout.</p>
            <input className="mt-4 block h-[56px] border border-[#CCCCCC] p-2 w-full rounded-md shadow-sm" type="text" placeholder='Phone' />
            <p className='text-[#757575] text-[11px] pl-2 mt-1'>A carrier might contact you to confirm delivery.</p>
          </div>
          <div>
            <h1>What&apos;s your PAN?</h1>
            <input className="mt-4 block h-[56px] border border-[#CCCCCC] p-2 w-full rounded-md shadow-sm" type="text" placeholder='PAN' />
            <p className='text-[#757575] text-[11px] pl-2 mt-1'>Enter your PAN to enable payment with UPI Net Banking or local card methods.</p>
          </div>
          <div>
            <input type="checkbox" className="mr-2 my-4" />
            <label className="text-sm font-medium">Save PAN details to Nike Profile</label>
          </div>
          <div>
            <input type="checkbox" className="mr-2 my-4" />
            <label className="text-sm font-medium">I have read and consent to eShopWorld processing my information in accordance with the Privacy Statement and Cookie Policy. eShopWorld is a trusted Nike partner.</label>
          </div>
          <button type="submit" className="w-full bg-[#F5F5F5] h-[60px] text-[#757575] hover:bg-slate-200 py-2 rounded-full">Continue</button>

          <div className='w-full flex flex-col gap-[28px]'>
            <p className='border-y border-gray-300 h-[57px] p-3 text-[#757575]'>Delivery</p>
            <p className='border-y border-gray-300 h-[57px] p-3 text-[#757575]'>Shipping</p>
            <p className='border-y border-gray-300 h-[57px] p-3 text-[#757575]'>Billing</p>
            <p className='border-y border-gray-300 h-[57px] p-3 text-[#757575]'>Payments</p>
          </div>
        </form>
      </div>
      <div className="w-full lg:w-1/3 p-4">
        {/* Order Summary */}
        <h2 className="text-xl font-bold mb-4 w-full">Order Summary</h2>
        <ul className="space-y-2">
          <li className="flex justify-between text-[#8D8D8D]">
            <span>Subtotal:</span>
            <span>₹20,890.00</span>
          </li>
          <li className="flex justify-between text-[#8D8D8D]">
            <span>Delivery/Shipping:</span>
            <span>Free</span>
          </li>
          <li className="flex justify-between font-bold border-y border-[#E5E5E5] h-[54px] pt-4">
            <span>Total:</span>
            <span>₹20,890.00</span>
          </li>
        </ul>
        <p className="mt-4 text-[9px]">(The total reflects the price of your order, including all duties and taxes.)</p>
        <p className="mt-4 font-bold">Arrives Mon, 27 Mar - Wed, 12 Apr</p>

        {/* Images and Text */}
        <div className="flex mt-6">
          <Image src="/checkout1.png" width={80} height={80} alt="Nike Dri-FIT ADV TechKnit Ultra Men&apos;s Short-Sleeve Running Top" className="mr-4" />
          <div>
            <p>Nike Dri-FIT ADV TechKnit Ultra Men&apos;s Short-Sleeve Running Top</p>
            <p className='text-[#8D8D8D]'>Qty 1</p>
            <p className='text-[#8D8D8D]'>Size L</p>
            <p className='text-[#8D8D8D]'>₹3,895.00</p>
          </div>
        </div>
        <div className="flex mt-4">
          <Image src="/checkout2.png" width={80} height={80} alt="Nike Air Max 97 SE Men&apos;s Shoes" className="mr-4" />
          <div>
            <p>Nike Air Max 97 SE Men&apos;s Shoes</p>
            <p className='text-[#8D8D8D]'>Qty 1</p>
            <p className='text-[#8D8D8D]'>Size UK 8</p>
            <p className='text-[#8D8D8D]'>₹16,995.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
