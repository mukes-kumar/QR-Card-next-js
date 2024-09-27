import React from 'react'
import { CiLight } from "react-icons/ci";
import { MdNightlight } from "react-icons/md";
function ChangeColorButton({ bool, handleColor, open }:any) {
  return (
    <>
      <div className={`${open === false ? 'show' : 'hidden'} flex justify-center items-center py-[2px]  text-white rounded font-bold cursor-pointer sm:px-2  px-4 text-md absolute lg:right-56 sm:right-64 right-48 top-0`}>
        <button onClick={handleColor} className={`mt-5  text-2xl `}>
          <span className={`${bool ? 'hidden' : 'show'} text-white`}><CiLight />
          </span>
          <span className={`${bool ? 'show' : 'hidden'} text-black`}><MdNightlight /> 
          </span>
        </button>
      </div>
    </>
  )
}

export default ChangeColorButton