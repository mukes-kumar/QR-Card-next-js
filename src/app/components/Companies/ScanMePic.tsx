import React from 'react'
import img1 from '../Image1/growth.png'


type TitleType={
  bool: boolean
}

function ScanMePic({bool}:TitleType) {
  return (
    <>
       <div className='mt-[48px] flex max-w-[100%]  pr-[15px] pl-[15px] mb-20'>
         <img src="/Image1/growth.png" alt='not'/>
       </div>
    </>
  )
}

export default ScanMePic