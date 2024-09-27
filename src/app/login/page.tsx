'use client'
import { useContext } from 'react';
// import React, { useState } from 'react'
// import NavBar from '../components/navbar/navbar'
// import { MyContext } from '../components/Context/context';
import LoginPage from './LogInPage';
import { MyContext } from '../components/Context/context';



function Page() {

  const bool = useContext(MyContext)
  return (
    <>
        
        <div className=''>
          <LoginPage />

        </div>
    </>
  )
}

export default Page