import React from 'react'
import Image from 'next/image'




function ScanMePic() {
  return (
    <>
       <div className='mt-[48px] flex justify-center items-center mx-auto max-w-[500px] text-center pr-[15px] pl-[25px] mb-20'>
         <Image src="/Image1/growth.png" alt='not'width={900} height={100}/>
       </div>
    </>
  )
}

export default ScanMePic