import React from 'react'
import SacnnerButton from './SacnnerButton'
// import QRCode from 'qrcode';
// import { QRCodeReader } from 'js-qrcode';
// import { VCard } from 'js-vcard';
// import '../QrGenerator.css'; // Create a CSS file for styling
import Image from 'next/image';



function ScannerHerosection({ isOpacity, vCardString ,bool}:any) {


  return (
    <>

      <div className={`h-auto order-3 lg:order-2 md:border-l-[1px] border-gray-300 flex justify-center ${bool?'':'border-gray-950'}`}>
        <div className='ml-0 md:ml10  h-auto order-3 lg:order-2 md:border-l-1 border-gray-300 flex justify-center mr-0'>
          <div className={`${isOpacity ? 'opacity-[1]' : 'opacity-[0.3]'} max-w-[500]`}>
            <div className='flex justify-center items-center m-8 lg:ml-8 border-2 border-gray-400  p-3'>

              <div className="qr-generator-container ">
                <div className="input-fields">


                </div>
                <div className="qr-code">
                  {/* <QRCode value={vCardString} size={250} level={"H"}
                  /> */}
                  <Image className={`w-[103px] mt-5 h-8 ml-[24px]  `}

                    src='/Image1/logo-title.png' // Path to the image file
                    alt="Descriptive image alt text" // Alt text for accessibility
                    width={100} // Image width in pixels
                    height={100} // Image height in pixels

                  />
                </div>
              </div>
            </div>
            <div>

              <SacnnerButton isOpacity={isOpacity} />


            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default ScannerHerosection