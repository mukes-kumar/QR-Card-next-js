'use client'
import React , {useContext} from 'react'
import BenefitsBelow from './BenefitsBelow'
import ScanMePic from './ScanMePic'
import { MyContext } from '../Context/context'

type TitleType={
   title: string
   mt: string
}

function BenefitsQR({title,mt}:TitleType) {
   const bool = useContext(MyContext)

  return (
     <>
       <div className={`${mt} pt-16 ${bool?'bg-white text-teal-700':'bg-black text-slate-300'} `}>
          <div className='flex flex-wrap items-center'>
             <div className='ml-8 md:ml-20 space-y-8'>
                <h2 className={`font-semibold mb-[24px] font-serif text-3xl md:text-4xl ${bool?'text-gray-700':'text-gray-100'}`}>{title}
                </h2>
                <p className='text-[17px] '>By using QR.io you will be able keep track of how many people scan your {title}, from where and on what date.</p>

                <p className='text-[17px] '>Also for those non-developers you can create fully customized landing pages for your {title}. No Coding Required!</p>

                <BenefitsBelow bool={bool}/>
             </div>
             <div>
                <ScanMePic />
             </div>

          </div>
       </div>
     </>
  )
}

export default BenefitsQR