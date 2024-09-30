'use client'
import React, { useContext } from 'react'
import { MyContext } from '../Context/context';
import Link from 'next/link';

interface MyComponentProps {
  // handleQrCode: () => void;
  isOpenQR: boolean
}

function OpenProduct({ isOpenQR }: MyComponentProps) {

  const myObject = [{
    name: 'Feature',
    id: 1,
    link: '/features'
  },
  {
    name:'QR Code',
    id: 2,
    link: '/qr_code'
  },
  {
    name: 'Contact',
    id: 3,
    link: '/contact'
  }
];

  const bool = useContext(MyContext);
  return (
    <div className={`lg:absolute z-10 lg:mt-10 mt-3 lg:bg-white w-22 origin-top-right rounded-md ml-7   ${isOpenQR ? 'show' : 'hidden'} 
      focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
      <div className="py-2 space-y-3" role="none">
        {
          myObject.map((items) => (
            <>
            <Link key={items.id} href={items.link} className="text-gray-500 px-4 py-2 text-lg leading-5 hover:text-gray-700 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out flex gap-1">
            <span >{items.name}</span>
            </Link>
            <div className={`py-[1px] ${bool? 'bg-gray-300':'bg-slate-900'} `}></div>
            </>
          ))
        }

        

      </div>
    </div>
  )
}

export default OpenProduct