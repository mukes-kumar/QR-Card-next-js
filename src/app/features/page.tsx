'use client'
import React, { Component } from 'react'
import QuickRespose from '../components/HowToUseSection/QuickRespose'
import FooterSection from '../components/Footer/FooterSection'

export class page extends Component {
  render() {
    return (
      <>
         <div className='mt-8'>
         <QuickRespose />
         <FooterSection />
         </div>
      </>
    )
  }
}

export default page
