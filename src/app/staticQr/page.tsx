import React from 'react'
import NavBar from '../components/navbar/navbar'
import BenefitsQR from '../components/Companies/BenefitsQR'
import FooterSection from '../components/Footer/FooterSection'
import QRCodeType from '../components/HowToUseSection/QRCodeType'

function page() {
  return (
    <>
        <NavBar/>
        <BenefitsQR title={'Static QR Codes'} mt={'mt-40'} />
        <QRCodeType />
        <FooterSection />
        </>
  )
}

export default page