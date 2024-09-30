'use client'
import React, { useContext } from 'react'
import { MyContext } from '../components/Context/context'
import WorkBox from './WorkBox'

function Page() {

  const bool= useContext(MyContext)
  return (
    <>
      <div className={`pt-36 ${bool?'':'bg-slate-900 text-slate-200'}`}>
           <div className='text-center'>
              <h1 className={`text-center md:text-4xl text-3xl font-serif font-bold  ${bool?'text-green-600':'text-gray-300'}`}>Frequently asked questions
              </h1>
              <p className='my-16 text-xl  font-serif text-gray-600 md:px-28 px-10'>Here’s what you need to know about your QR.io license, based on the questions we are asked the most.</p>
           </div>
           <WorkBox/>
      </div>
    </>
  )
}

export default Page