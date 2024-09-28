import React from 'react'
import { FaDownLong } from "react-icons/fa6";

type TypeBool ={
  png: string,
  PNG1: string,
  isOpacity: boolean
}

function BtnDonwload({isOpacity, png , PNG1}: TypeBool) {
  return (
    <>
      <div className='mt-2 flex mx-3'>
        <div className='flex'>
          <a className={`bg-blue-500 w-auto text-white font-bold md:py-3 py-2 md:px-8 px-4 sm:text-sm text-lg lg:px-8 rounded  ${isOpacity ? 'cursor-pointer':'cursor-not-allowed'} text-center md:py-4 md:px-4`}>
            <span className='flex'>
              <FaDownLong />
              {png}<br />
              {PNG1}
            </span>
          </a>
        </div>
      </div>
    </>
  )
}

export default BtnDonwload