import React from 'react'
import NavBar from '../components/navbar/navbar'
import BenefitsQR from '../components/Companies/BenefitsQR'
import FooterSection from '../components/Footer/FooterSection'
import QRCodeType from '../components/HowToUseSection/QRCodeType'

function page() {
  return (
    <>
        <BenefitsQR title={'Dynamic QR Codes'} mt={'pt-40'} />
        <QRCodeType />
        <FooterSection />
    </>
  )
}

export default page