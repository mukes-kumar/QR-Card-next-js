import React from 'react'
import BtnDonwload from './BtnDonwload'
import ScanTrack from './ScanTrack';


type Str = {
  
  isOpacity:boolean
}

function SacnnerButton({isOpacity}:Str) {

  const png = "Download";
  const PNG1 = "PNG";
  
  return (
    <>
      <div className='pb-8'>
        <div className='flex justify-center'>
          <BtnDonwload isOpacity={isOpacity} png={png} PNG1={PNG1} />
          <BtnDonwload isOpacity={isOpacity} png={'Download'} PNG1={'SVG'} />
        </div>
        <ScanTrack isOpacity={isOpacity} scanTrack={'Track number of scans'} />
      </div>
    </>
  )
}

export default SacnnerButton