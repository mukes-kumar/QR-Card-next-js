import React from 'react'
import DynamicVSStaticQR from '../components/Companies/DynamicVsStatic/DynamicVSStaticQR'
import DynamicCart from '../components/Companies/DynamicVsStatic/DynamicCart';
import FooterSection from '../components/Footer/FooterSection';

function page() {

  const name= 'DYNAMIC';
  const DesName='Dynamic QR Codes Explains'
  const ShortName='Dynamic'

  return (
    <div>QR Code Page
      <DynamicVSStaticQR />
      <DynamicCart name={name} DesName={DesName} ShortName={ShortName}/>
      <FooterSection />
    </div>
  )
}

export default page