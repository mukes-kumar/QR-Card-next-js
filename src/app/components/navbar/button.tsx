"use click"

import Link from 'next/link';
import {  FaUserPlus } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
// import { Link, useNavigate } from 'react-router-dom'

type TypeBool ={
  open: boolean
}

function Button(props:TypeBool) {
  return (
    <>
      <div className={`flex space-x-4 mt-3 md:ml-20 lg:ml-44 ml-36`}>
        
        <div className={`hidden lg:flex px-3 py-[3px] justify-center items-center bg-yellow-500 text-black rounded font-bold text-md absolute md:right-6 right-8 top-4 cursor-pointer hover:bg-yellow-600 hover:text-gray-50 $`}>
        <FaArrowRight />
        
          <Link href="/login" className=''>Log In</Link>
        </div>

        <div className={`${props.open === false ? 'show' : 'hidden'} flex justify-center items-center py-[2px] bg-blue-600 text-white rounded font-bold cursor-pointer sm:px-2  px-4 text-md absolute md:right-32 right-20 top-4 hover:bg-blue-900`}>
        <FaUserPlus />
          <Link href="/signup" className='text-center'>Sign Up</Link>
        </div>
      </div>
    </>
  )
}

export default Button