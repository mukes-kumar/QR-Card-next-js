'use client'
import React, {useContext} from 'react'
// import mobileIcon from './assets/mobile-icon.jpg';
import { FaMobileAlt } from "react-icons/fa";
import { IoBarChartSharp } from "react-icons/io5";
import { IoIosColorPalette, IoLogoBuffer } from "react-icons/io";
import { MyContext } from '../components/Context/context';
import { FaPlus } from "react-icons/fa6";
import { FaLongArrowAltUp } from "react-icons/fa";


function Milions() {

  const bool = useContext(MyContext)
  const productName = [
    { name: "QR Codes Generated", m:'1.5M' },
    { name: "Visits to QR Codes" ,m:'12M' },
    { name: "Users", m:'750K'},
    { name: "Dynamic QR Codes", m: '1.3M' },
  ];

  return (
    <>

      <div className={`pt-24 pb-4 ${bool?'bg-white':'bg-gray-950'}`}>
        <div className={`m-5`}>
          <div className={`max-w-[950px] md:max-w-[850px] lg:max-w-[1060px] mx-auto flex md:flex-row flex-col  shadow-xl  ${bool ?'border-[1px]':''}`}>
            {
              productName.map((name) => (
                <div key={name.name} className={`p-9 shadow-sm  flex  justify-around items-center space-y-10 ${bool ?'':'border-[1px] border-gray-900'}`}>
                  <div className='items-center'>
                    <div className='flex items-center justify-center'>
                      
                    </div>
                    <h5 className={`mb-2 text-lg  tracking-tight text-gray-700 ${bool?'':'text-slate-100 shadow-xl'}`}>{name.name}</h5>
                       <div className='flex'>
                       <p className={` text-[35px]  ${bool ? 'text-green-600' : 'text-blue-300'} flex`}>
                        <FaLongArrowAltUp />
                      </p>
                        <p className='text-3xl text-blue-600'>{name.m}</p>
                       <p className={`mt-2 text-[24px]  ${bool ? 'text-blue-800' : 'text-blue-300'} flex`}>
                        <FaPlus/>
                      </p>
                       </div>
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

export default Milions