import Image from 'next/image'
import React from 'react'


type cart = {
  name: string,
  DesName: string
}

function Cart({ name, DesName }: cart) {

  return (
    <>
      <a href='/static' className='hover:mt-[-4px] delay-200 relative transition-all shadow-sm border border-[#f3f7fa] flex flex-col bg-[#fff] '>
        <div className='pl-[3rem] pb-[3rem] px-[3rem] pt-[1.5rem] block'>
          <span className="text-center px-2 py-[2px] rounded-xl text-sm	 text-[#fff] bg-[rgb(0,90,212)]">{name}</span>
          <div>
            <Image src='/Image1/static.png' className="block ml-auto mr-auto max-w-[100%] h-auto border-none" alt='Not visible' width={100} height={100} />
          </div>
          <h5 className='mb-[1rem] font-semibold text-lg text-[#2a354f] mt-7'>{DesName}</h5>

          <p className='text-[#66799e] mb-0 font-sans text-[1rem] font-light'>
            With {name} Qr Codes you can create a customized landing page for your QR Code that can be changed and updated whenever you want no matter if the QR Code is created or even if it went public.
            <br />
            <br />
            {name} Qr Codes also give you statistics of how many people scanned your QR Codes, from where and on what date.
            <br />
            <br />
            This QR Code type is most used by business owners (restaurants, gyms, clothing stores, etc.), artists, influencers, and non-developers users.
          </p>
        </div>
      </a>
    </>
  )
}

export default Cart