import React from 'react'
import BenefitsQR from '../components/Companies/BenefitsQR'
import Milions from './Milions'
import FooterSection from '../components/Footer/FooterSection'

function page() {
  return (
    <>
      <div className='pt-[70px]'>
        <BenefitsQR title={'Benefits from QR.io'} />
        <Milions />
        <FooterSection/>
      </div>
    </>
  )
}

export default page