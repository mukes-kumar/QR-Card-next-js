'use client'
import React, { useContext } from 'react'
import { MyContext } from '../../Context/context'




function DynamicVSStaticQR() {
  const bool = useContext(MyContext);
  return (
    <>
       <div className={`relative pb-[224px] ${bool? 'bg-gray-100':'bg-slate-950'}`}>
         <div className='w-[100%] pr-[15px] pl-[15px] mr-auto ml-auto '>
             <div className='flex flex-wrap flex-col  justify-center text-center'>
                <div className='text-[#2a354f] items-center mt-16 mb-8'>
                   <h2 className='text-[#2a354f] font-sans mt-[32px] md:text-4xl text-3xl md:text-md space-x-3'>
                   <strong style={{color: "rgb(21, 169, 124)"}}>Dynamic</strong> vs
                   <strong className='' style={{color: "rgb(21, 169, 124)"}}>Static</strong> QR Codes
                   </h2>
                   
                </div>
                <p className='text-[#66799e] mb-[24px] md:text[15px] text-[px] font-sans ml-4'>The outcome of both are pretty similar. They have their differences when it comes to changes, updates, stats, track.</p>
             </div>
         </div>
       </div>
    </>
  )
}

export default DynamicVSStaticQR