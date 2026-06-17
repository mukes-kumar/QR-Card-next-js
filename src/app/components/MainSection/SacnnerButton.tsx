import React from 'react'
import BtnDonwload from './BtnDonwload'
import ScanTrack from './ScanTrack';


type Str = {
  isOpacity: boolean
}

function SacnnerButton({ isOpacity }: Str) {



  return (
    <>
      <div className='pb-8'>
        <div className='flex justify-center'>
          <BtnDonwload isOpacity={isOpacity} url='' qrSettings={undefined} />
          <BtnDonwload isOpacity={isOpacity} url='' qrSettings={undefined} />
        </div>
        <ScanTrack isOpacity={isOpacity} scanTrack={'Track number of scans'} />
      </div>
    </>
  )
}

export default SacnnerButton