'use client'
import React, {useContext} from 'react'
import { MyContext } from '../Context/context';

// import mobileIcon from './assets/mobile-icon.jpg';
import { FaMobileAlt } from "react-icons/fa";
import { IoBarChartSharp } from "react-icons/io5";
import { IoIosColorPalette, IoLogoBuffer } from "react-icons/io";


function CustomiseCard() {

  const bool = useContext(MyContext)
  const productName = [
    { name: "Customized Mobile Pages", icon: FaMobileAlt },
    { name: "Track QR Codes", icon: IoBarChartSharp },
    { name: "Choose Color & Shape", icon: IoIosColorPalette },
    { name: "Add Logos to QR Codes", icon: IoLogoBuffer },
  ];

  return (
    <>

      <div className={`pt-24 pb-4 ${bool?'bg-slate-100':'bg-black'}`}>
        <div className={`m-5`}>
          <div className={`max-w-[950px] md:max-w-[850px] lg:max-w-[1060px] mx-auto flex md:flex-row flex-col  shadow-xl  ${bool ?'border-[1px]':''}`}>
            {
              productName.map((name) => (
                <div key={name.name} className={`p-9 shadow-sm  flex  justify-around items-center space-y-10 ${bool ?'':'border-[1px] border-gray-950'}`}>
                  <div className='items-center'>
                    <div className='flex items-center justify-center'>
                      <span className={` text-[35px]  ${bool ? 'text-green-800' : 'text-blue-300'}`}>
                        <name.icon />
                      </span>
                    </div>
                    <h5 className={`mb-2 text-lg  tracking-tight text-gray-700 ${bool?'':'text-slate-100 shadow-xl'}`}>{name.name}</h5>
                  </div>
                </div>
              ))
            }

          </div>
        </div>
      </div>
    </>
  )
}

export default CustomiseCard