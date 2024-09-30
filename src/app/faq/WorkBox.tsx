'use client'
import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import FooterSection from '../components/Footer/FooterSection';



function WorkBox() {

  const [rotatePlusOne, setRotatePlusOne] = useState(false);
  const [rotatePlusTwo, setRotatePlusTwo] = useState(false);
  const [rotatePlusThree, setRotatePlusThree] = useState(false);
  const [rotatePlusFour, setRotatePlusFour] = useState(false);
  const [rotatePlusFive, setRotatePlusFive] = useState(false);
  const [rotatePlusSix, setRotatePlusSix] = useState(false);
  const [rotatePlusSeven, setRotatePlusSeven] = useState(false);


  const handlePlusOne = () => {
    setRotatePlusOne(!rotatePlusOne)
  }

  const handlePlusTwo = ()=>{
    setRotatePlusTwo(!rotatePlusTwo)
  }

  const handlePlusThree = ()=>{
    setRotatePlusThree(!rotatePlusThree)
  }

  const handlePlusFour = () => {
    setRotatePlusFour(!rotatePlusFour);
  };
  
  const handlePlusFive = () => {
    setRotatePlusFive(!rotatePlusFive);
  };

  const handlePlusSix = () => {
    setRotatePlusSix(!rotatePlusSix);
  };
  const handlePlusSeven = () => {
    setRotatePlusSeven(!rotatePlusSeven);
  };

  return (
    <>
      <div className="flex items-center border border-gray-300 lg:mx-40 sm:mx-10 mx-10 md:mx-28 py-4 rounded-xl mb-4">
        <div className='w-full'>
          <div onClick={handlePlusOne} className={`cursor-pointer flex w-full justify-between text-lg`}>
            <div className={`${rotatePlusOne?'text-green-500':''} hover:text-green-500 text-center pl-5 `}>Your Text Here
            </div>
            <div><FaPlus className={``}
              style={{ transform: rotatePlusOne ? 'rotate(140deg)' : 'rotate(0deg)' }} /></div>
          </div>
          <div className={`pl-5 mt-5 ${rotatePlusOne ? 'show' : 'hidden'} text-gray-400`}>
            Start using our premium features by getting a 7-day free trial. The trial gets you access to all of our premium features for 7 days. If during these 7 days you decide you like the service, you can go ahead and choose a plan.
          </div>
        </div>
      </div>

      <div className="flex items-center border border-gray-300 lg:mx-40 sm:mx-10 mx-10 md:mx-28 py-4 rounded-xl mb-4">
        <div className='w-full'>
          <div onClick={handlePlusTwo} className={`cursor-pointer flex w-full justify-between text-lg`}>
            <div className={`${rotatePlusTwo?'text-green-500':''} hover:text-green-500 text-center pl-5 `}>Is there a free trial?
            </div>
            <div><FaPlus className={``}
              style={{ transform: rotatePlusTwo ? 'rotate(140deg)' : 'rotate(0deg)' }} /></div>
          </div>
          <div className={`pl-5 mt-5 ${rotatePlusTwo ? 'show' : 'hidden'} text-gray-400`}>
          Absolutely, the free trial lasts 7 days and you can create dynamic and static QR Codes. Static QR Codes will continue to work after the free trial expires.
          </div>
        </div>
      </div>

      <div className="flex items-center border border-gray-300 lg:mx-40 sm:mx-10 mx-10 md:mx-28 py-4 rounded-xl mb-4">
        <div className='w-full'>
          <div onClick={handlePlusThree} className={`cursor-pointer flex w-full justify-between text-lg`}>
            <div className={`${rotatePlusThree?'text-green-500':''} hover:text-green-500 text-center pl-5 `}>How long until I get my QR Codes?
            </div>
            <div><FaPlus className={``}
              style={{ transform: rotatePlusThree ? 'rotate(140deg)' : 'rotate(0deg)' }} /></div>
          </div>
          <div className={`pl-5 mt-5 ${rotatePlusThree ? 'show' : 'hidden'} text-gray-400`}>
          As soon as you pay for the product, Your customized QR Codes will be already created in your dashboard. The process takes less than a minute!
          </div>
        </div>
      </div>

      <div className="flex items-center border border-gray-300 lg:mx-40 sm:mx-10 mx-10 md:mx-28 py-4 rounded-xl mb-4">
        <div className='w-full'>
          <div onClick={handlePlusFour} className={`cursor-pointer flex w-full justify-between text-lg`}>
            <div className={`${rotatePlusFour?'text-green-500':''} hover:text-green-500 text-center pl-5 `}>What currency am I billed in?
            </div>
            <div><FaPlus className={``}
              style={{ transform: rotatePlusFour ? 'rotate(140deg)' : 'rotate(0deg)' }} /></div>
          </div>
          <div className={`pl-5 mt-5 ${rotatePlusFour ? 'show' : 'hidden'} text-gray-400`}>
          You will be billed in $USD regardless of where your business is located.
          </div>
        </div>
      </div>

      <div className="flex items-center border border-gray-300 lg:mx-40 sm:mx-10 mx-10 md:mx-28 py-4 rounded-xl mb-4">
        <div className='w-full'>
          <div onClick={handlePlusFive} className={`cursor-pointer flex w-full justify-between text-lg`}>
            <div className={`${rotatePlusFive?'text-green-500':''} hover:text-green-500 text-center pl-5 `}>What are the requirements to get my QR Codes?
            </div>
            <div><FaPlus className={``}
              style={{ transform: rotatePlusFive ? 'rotate(140deg)' : 'rotate(0deg)' }} /></div>
          </div>
          <div className={`pl-5 mt-5 ${rotatePlusFive ? 'show' : 'hidden'} text-gray-400`}>
          You will need to tell us a couple of things like which Color & Shape you want for your QR Code, which QR Code type, and some other information that will allow us to create a compliant QR Code for you.
          </div>
        </div>
      </div>

      <div className="flex items-center border border-gray-300 lg:mx-40 sm:mx-10 mx-10 md:mx-28 py-4 rounded-xl mb-4">
        <div className='w-full'>
          <div onClick={handlePlusSix} className={`cursor-pointer flex w-full justify-between text-lg`}>
            <div className={`${rotatePlusSix?'text-green-500':''} hover:text-green-500 text-center pl-5 `}>Can I change my plan?
            </div>
            <div><FaPlus className={``}
              style={{ transform: rotatePlusSix ? 'rotate(140deg)' : 'rotate(0deg)' }} /></div>
          </div>
          <div className={`pl-5 mt-5 ${rotatePlusSix ? 'show' : 'hidden'} text-gray-400`}>
          Yes, you can upgrade, downgrade, or cancel your plan at anytime from the dashboard or visiting https://qr.io/cancel-subscription. If you need help changing your account, reach out to us using our email (support@qr.io).
          </div>
        </div>
      </div>

      <div className="flex items-center border border-gray-300 lg:mx-40 sm:mx-10 mx-10 md:mx-28 py-4 rounded-xl mb-4">
        <div className='w-full'>
          <div onClick={handlePlusSeven} className={`cursor-pointer flex w-full justify-between text-lg`}>
            <div className={`${rotatePlusSeven?'text-green-500':''} hover:text-green-500 text-center pl-5 `}>What are my payment options?
            </div>
            <div><FaPlus className={``}
              style={{ transform: rotatePlusSeven ? 'rotate(140deg)' : 'rotate(0deg)' }} /></div>
          </div>
          <div className={`pl-5 mt-5 ${rotatePlusSeven ? 'show' : 'hidden'} text-gray-400`}>
          You can either pay with credit card or any debit card you want! All our payments are secured by Stripe.

          </div>
        </div>
      </div>
      <FooterSection/>
    </>
  )
}

export default WorkBox