import Link from 'next/link'
import React from 'react'
// import img1 from '.../Image1/static.png';
import Image from 'next/image';



type cart = {
  staticN: string,
  DesStatic: string,
  ShortStaticN: string
  bool:boolean
}


function StaticCart({staticN, DesStatic , ShortStaticN ,bool} : cart) {
  return (
    <>
    
      <div className='flex max-w-[100%] relative'>
        <Link href='/staticQr' className={`hover:mt-[-4px] delay-200 relative transition-all shadow-sm border border-[#f3f7fa] flex flex-col  `}>
          <div className='pl-[32px] pb-[48px] px-[17px] md:px-[32px] pt-[24px] block'>
            <span className="text-center px-2 py-[2px] rounded-xl text-sm	 text-[#fff] bg-[rgb(0,90,212)]">{staticN}</span>
            <div>
            <Image src='/Image1/static.png' className={`block ml-auto mr-auto max-w-[90%] h-auto border-none" alt='Not visible mt-7 ${bool?'':''}`} width={480} height={200} alt='static'/>
            </div>
            <h5 className={`text-2xl mb-[16px] font-semibold   mt-7  ${bool?'text-black':'text-gray-400'}`}>{DesStatic}</h5>

            <p className={`text-[#66799e]  mb-0 font-sans text-[20px] font-light`}>
              With {ShortStaticN} Qr Codes you can create a customized landing page for your QR Code that can be changed and updated whenever you want no matter if the QR Code is created or even if it went public.
              <br />
              <br />
              {ShortStaticN} Qr Codes also give you statistics of how many people scanned your QR Codes, from where and on what date.
              <br />
              <br />
              This QR Code type is most used by business owners (restaurants, gyms, clothing stores, etc.), artists, influencers, and non-developers users.
            </p>
          </div>
        </Link>
      </div>
    </>
  )
}

export default StaticCart