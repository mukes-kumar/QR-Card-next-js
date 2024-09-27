'use client'

import Link from 'next/link';
import React, { useContext } from 'react'
import { AiOutlineMessage } from "react-icons/ai";
import { PiArrowFatLineUpFill } from "react-icons/pi";
import { MyContext } from '../Context/context';
import { FaAddressCard } from "react-icons/fa";
import { MdPropaneTank } from "react-icons/md";
import { PiSpeakerSimpleHighFill } from "react-icons/pi";


function QuickRespose() {
  const bool = useContext(MyContext)
  return (
    <>

      <div className={`text-[#fff] lg:relative lg:pt-[112px] lg:pb-[144px]  block ${bool ? 'bg-[#11ab7c]' : 'bg-gray-900'}`}>
        <div className='min-w-[380px] md:max-w-[920px] lg:max-w-[1450px]  pr-[px] pl-[px] mr-auto'>
          <div className='items-center flex flex-wrap mx-[14px] md:ml-[50px] lg:ml-[100px]'>
            <div className='flex flex-col max-w-[100%] relative w-[100%] pr-[px] '>
              <span className='text-slate-200 font-normal block mb-[20px] mt-20 text-2xl'>What are QR Codes?
              </span>

              <h2 className='text-[#fff] font-sans font-bold mb-[20px] text-[36px] md:text-[45px]'>QR Codes stands for Quick Response
              </h2>
              <p className='text-[16px] lg:text-[25px] font-sans text-slate-200'>
                They were created in 1994 by Denso Wave to track vehicles during manufacturing. They quickly gain popularity when it spread to smartphones.
                <br />
                You can now even scan QR Codes from your phone camera.
                <br />
                <br />I will break down some of the benefits from using QR Codes and the most requested QR Codes .<br />
                <strong className='text-[#fff]' >features.</strong>
              </p>
            </div>

            <Link href='/' className='text-[#fff] bg-[#005ad4] border-[#005ad4] relative transition-all rounded-[16px] px-4 pr-8 py-4 mt-2 text-[20px]'>Generate QR Code
              <span className='absolute left-44 text-white text-3xl'>
                <PiArrowFatLineUpFill />
              </span>
            </Link>

            <div className={`mt-[48px] grid md:grid-cols-2 space-x-4 space-y-3 max-w-[100%]  relative w-[100%] mr-2 md:ml-8 ml-1 pb-32 `}>

              <div className={`card rounded-lg shadow-md px-6 md:px-12 py-7 md:py-20 mb-2 ${bool ? 'bg-white' : 'bg-gray-950'}`}>
                <span className={`${bool ? 'text-slate-500' : 'text-green-300'} text-[70px] flex justify-center`}>
                  <AiOutlineMessage />
                </span>

                <h2 className={`text-4xl font-bold  mb-4 mt-12 flex justify-center flex-col ${bool ? 'text-gray-600' : 'text-gray-300'} `}>
                  Gather Feedback
                </h2>
                <p className={`${bool ? 'text-gray-600' : 'text-gray-300'}  mb-2 text-xl mt-10`}>
                  You can ask users to give some feedback when they scan the QR Code.</p>

              </div>

              <div className={`card rounded-lg shadow-md px-6 md:px-12 py-7 md:py-20 mb-2 ${bool ? 'bg-white' : 'bg-gray-950'}`}>
                <span className={`${bool ? 'text-slate-500' : 'text-green-300'} text-[70px] flex justify-center`}>
                  <FaAddressCard />
                </span>

                <h2 className={`text-4xl font-bold  mb-4 mt-12 flex justify-center flex-col ${bool ? 'text-gray-600' : 'text-gray-300'} `}>
                  Describe your Business
                </h2>
                <p className={`${bool ? 'text-gray-600' : 'text-gray-300'}  mb-2 text-xl mt-10`}>
                  You can redirect your clients to some instruction page for your business when they scan the QR Code.</p>

              </div>
              <div className={`card rounded-lg shadow-md px-6 md:px-12 py-7 md:py-20 mb-2 ${bool ? 'bg-white' : 'bg-gray-950'}`}>
                <span className={`${bool ? 'text-slate-500' : 'text-green-300'} text-[70px] flex justify-center`}>
                  <MdPropaneTank />
                </span>
                <h2 className={`text-4xl font-bold  mb-4 mt-12 flex justify-center flex-col ${bool ? 'text-gray-600' : 'text-gray-300'} `}>
                  Profile Cards
                </h2>
                <p className={`${bool ? 'text-gray-600' : 'text-gray-300'}  mb-2 text-xl mt-10`}>
                  Physical profile cards are every day more rare and digital profile cards are a great alternative.</p>

              </div>
              <div className={`card rounded-lg shadow-md px-6 md:px-12 py-7 md:py-20 mb-2 ${bool ? 'bg-white' : 'bg-gray-950'}`}>
                <span className={`${bool ? 'text-slate-500' : 'text-green-300'} text-[70px] flex justify-center`}>
                  <PiSpeakerSimpleHighFill />
                </span>
                <h2 className={`text-4xl font-bold  mb-4 mt-12 flex justify-center flex-col ${bool ? 'text-gray-600' : 'text-gray-300'} `}>
                  Promote Events & Discounts
                </h2>
                <p className={`${bool ? 'text-gray-600' : 'text-gray-300'}  mb-2 text-xl mt-10`}>
                  You can promote any event or give discount codes when people scan the QR Code.</p>

              </div>



            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuickRespose