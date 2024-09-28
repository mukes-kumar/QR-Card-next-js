import React from 'react'
import { FaLink, FaSms, FaWhatsapp, FaWifi, } from "react-icons/fa";
import { MdEmail, MdOutlineMenu, MdCall } from "react-icons/md";

import { BsFillPersonVcardFill, BsCalendar2EventFill } from "react-icons/bs";
import Link from 'next/link';

type TypeBoolean ={
  title: string,
  bool: boolean
} 

function QRCodeType({title, bool}:TypeBoolean) {

  const items = [
    {
      contact: [
        {
          name: 'Link',
          Des: 'Link to any Website URL',
          icon: FaLink 
        },
        {
          name: 'E-mail',
          Des: 'Send an email',
          icon: MdEmail
        },
        {
          name: 'Text',
          Des: 'Share Text',
          icon: MdOutlineMenu
        },
        {
          name: 'Call',
          Des: 'Make a call',
          icon: MdCall
        },
        {
          name: 'SMS',
          Des: 'Send message',
          icon: FaSms
        },
        {
          name: 'Whatsapp',
          Des: 'Send whatsapp message',
          icon: FaWhatsapp
        },
        {
          name: 'WiI-FI',
          Des: 'Connect to WI-FI',
          icon: FaWifi
        },
        {
          name: 'Vcard',
          Des: 'Save a contact to the phone scanning',
          icon: BsFillPersonVcardFill
        },
        {
          name: 'Event',
          Des: 'Invite people to your event',
          icon: BsCalendar2EventFill
        },
      ]
    }
  ]

  
  return (
    <>
      <div className={`relative pt-[80px] pb-[80px] block ${bool?'bg-white':'bg-black text-gray-100'}`}>
        <div className='w-[100%] pr-[15px] pl-[15px] ml-auto mr-auto'>
          <h2 className={`font-serif font-semibold mb-[16px] text-[32px] text-[#2a354f] text-center ${bool?'':' text-gray-200'}`}>{title}</h2>
          <div className='text-center'>
            <p className={`text-[#66799e] text-[16px] mb-[22.4px] font-normal font-serif ${bool?'':' text-gray-300'}`}>Different QR Code types you can use for Static QR Codes.
            </p>
          </div>
          <div className='ml-0 md:ml-10 grid md:grid-cols-2 lg:grid-cols-3 space-x-4 space-y-3 mr-2'>
          {

            items.map((e,) => {
              return (
                <>
                  {
                    e.contact.map((e,) => {
                      return (
                        <>
                          <div className='grid '>
                            <div className={`card border-2 border-gray-300 rounded-lg p-4  pb-8 space-y-7 ${bool?'':'border-gray-900'}`}>
                              <div className="mt-2 text-center text-gray-500 ">
                                
                              </div>
                              <div className="flex items-center justify-center">
                              <div className=''>
                                  <span className='text-4xl text-green-700'>
                                    <e.icon />
                                  </span>
                                </div>
                                <h2 className=" text-center text-2xl font-semibold">{e.name}</h2>
                              </div>
                              <p className={`text-[#66799e] ${bool?'':' text-gray-300'} text-center text-[23px]`}>{e.Des}</p>
                              <div className="mt-4">
                                <Link href='/' className="bg-blue-500 text-white text-2xl  px-[90px] md:px-20 ml-6 py-2">Choose</Link>
                              </div>
                            </div>
                          </div>
                        </>
                      )
                    })
                  }
                </>
              )
            })
          }
          </div>
        </div>
      </div>
    </>
  )
}

export default QRCodeType