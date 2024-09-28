'use client'
import React, { useContext } from 'react'
import BenefitsQR from '../components/Companies/BenefitsQR'
import FooterSection from '../components/Footer/FooterSection'
import QRCodeType from '../components/HowToUseSection/QRCodeType'
import { MyContext } from '../components/Context/context'




function Page() {

  const bool = useContext(MyContext)
  return (
    <>
        <BenefitsQR title={'Dynamic QR Codes'} mt={'pt-40'} />
        <QRCodeType bool={bool} title="QR Code Types"/>
        <FooterSection />
    </>
  )
}

export default Page