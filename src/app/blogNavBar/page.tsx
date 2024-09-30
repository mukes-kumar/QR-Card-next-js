import React from 'react'

function page() {
  return (
    <>
      {/* <div classNameName='mt-16 pt-16'>
        <div classNameName='ml-16'>
          <h1 classNameName='text-4xl'>QR.io Blog
          </h1>
          <p classNameName='mt-3'>
            Learn more about QR Codes
          </p>
        </div>
      </div> */}

      <nav className="flex items-center justify-between px-4 py-2">
        <div className="items-center mt-16 pt-16 ml-16">
          <a href="#" className="text-4xl mr-4">QR.io Blog</a>
          <p className='mt-3'>
            Learn more about QR Codes
          </p>
        </div>

        <div className='mt-10'>
          
          <div className="relative">
            <input type="text" className="px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white" placeholder="Search" />
          </div>

          <div className="flex items-center space-x-4 space-y-7">
            <a href="#" className="hover:text-gray-200">Option 1</a>
            <a href="#" className="hover:text-gray-200">Option 2</a>
            <a href="#" className="hover:text-gray-200">Option 3</a>
            <a href="#" className="hover:text-gray-200">Option 4</a>
            <a href="#" className="hover:text-gray-200">Option 5</a>

          </div>
        </div>

      </nav>
    </>
  )
}

export default page