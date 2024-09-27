
import React from 'react'


type BooleanType={
   bool: boolean
}

function Heading({bool}:BooleanType) {
  return (
    <div className='flex justify-center ml-2  '>
      <p className={`md:text-[30px] text-[23px] text-gray-700 font-semibold ${bool?'':'text-gray-50'}`}>
        Trusted by your favorite companies
      </p>
    </div>
  )
}

export default Heading