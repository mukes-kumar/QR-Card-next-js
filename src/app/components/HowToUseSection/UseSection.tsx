import React from 'react'
import { TbHandFinger } from "react-icons/tb";
import { LiaArrowUpSolid } from "react-icons/lia";
import Link from 'next/link';


type TypeBoolean={
  bool: boolean
}

function UseSection({bool}:TypeBoolean) {
  return (
    <>
      <div className={`py-[80px] ${bool?'bg-white text-[#2a354f]':'bg-gray-950 text-slate-300'}`}>
        <div className=' pr-[15px] pl-[15px] mr-auto ml-auto md:max-w-[720px] max-w-[400px]'>
          <div className='mb-[3rem] flex flex-wrap justify-center'>
            <div className='relative pr-4 pl-4 items-center text-center mt-16'>
              <span className="shadow-lg hover:bg-green-700 cursor-pointer text-center px-2 py-[3px] rounded-xl text-sm	font-bold text-[#fff] mb-[1.5rem] bg-[#11ab7c] inline-block ">How to Use</span>
            
              <p className='font-sans md:text-[28px] text-[28px] mb-[32px] '>
                Creating QR Codes with QR.io is pretty simple, create an account and use our QR Code Generator to create unlimited dynamic & static QR Codes.
              </p>
            </div>
          </div>
          <span className='absolute md:left-[448px] left-[200px] text-white text-4xl'>
          <LiaArrowUpSolid />
          </span>
          <Link href='/' className="bg-blue-500 text-white md:text-2xl text-xl  px-10 md:px-20 ml-10 py-8">Generate QR Code 
          </Link>
        </div>
      </div>
    </>
  )
}

export default UseSection