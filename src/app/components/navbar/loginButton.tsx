import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link';

function LoginButton() {
  return (
    <>
      <div className={`flex space-x-4 mt-3 md:ml-20 lg:ml-44 ml-36`}>

        <div className={`hidden md:flex px-3 py-[3px] justify-center items-center bg-yellow-500 text-black rounded font-bold text-md absolute md:right-6 right-8 top-4 cursor-pointer $`}>
          <FaArrowRight />
          <Link href="/login" className=''>Log In
          </Link>
        </div>
      </div>
    </>
  )
}

export default LoginButton