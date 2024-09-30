'use client'
import Link from 'next/link';
import React from 'react'
import { IoMdCube } from "react-icons/io";
import { PiArrowsLeftRightDuotone } from "react-icons/pi";

interface MyComponentProps {
  // handleQrCode: () => void;
  isOpenQR : boolean
}

function QrOpen({isOpenQR}: MyComponentProps) {
  return (
    <div className={`lg:absolute z-10 lg:mt-10 mt-3 lg:bg-white w-22 origin-top-right rounded-md ml-7   ${isOpenQR ? 'show':'hidden'} 
      focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
      <div className="py-2 space-y-3" role="none">

        <Link href="/dynamicQr" className="text-gray-500 px-4 py-2 text-xl leading-5 hover:text-gray-600 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out flex gap-1">
        <IoMdCube className='text-green-700'/>  <span>Static
        Item</span>
        </Link>
        <span className='text-[12px] pl-9 text-green-700'>Looking for answers? Ask us</span>
        
        <div className='py-[1px] bg-gray-300'></div>

        <Link href="/staticQr" className="text-gray-500 px-4 py-2 text-xl leading-5 hover:text-gray-600 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out flex gap-1">
          <PiArrowsLeftRightDuotone className='text-blue-600 font-bold text-xl'/>
          <span>Dynamic
          Item</span></Link>
          <span className='text-[12px] pl-10 text-green-700'>Examples and guides</span>

      </div>
    </div>
  )
}

export default QrOpen