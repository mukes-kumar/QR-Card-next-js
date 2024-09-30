'use client'
import { useContext } from 'react'
import FooterSection from '../components/Footer/FooterSection'
import QRCodeType from '../components/HowToUseSection/QRCodeType'
import { MyContext } from '../components/Context/context'
import StaticQR from './QRbox'


function Page() {

  const bool = useContext(MyContext)
  return (
    <>
        <div className={`mt-4 pt-24 ${bool?'bg-white text-teal-700':'bg-black text-slate-300'} `}>
          <div className='flex flex-wrap items-center'>
             <div className='ml-8 md:ml-20 space-y-8'>
                <h2 className={`font-semibold mb-[24px] font-serif text-3xl md:text-4xl ${bool?'text-gray-700':'text-gray-100'}`}>Static QR Codes
                </h2>
                <p className='text-[17px] '>Static QR Codes on the other hand can t be changed or updated once created and went public.
                </p>
                <p className='text-[17px] '>Also, static QR Codes do NOT give you statistics of how many people scanned your QR Codes, from where and on what date.
                </p>

                <p className='text-[17px] '>This QR Code type is most used by developers and users who can create an url (landing page) for themselves.</p>

              <StaticQR />
             </div>
             

          </div>
       </div>
        <QRCodeType title="QR Code Types"/>
        <FooterSection />
        </>
  )
}

export default Page