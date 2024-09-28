import React from 'react'

type IsBool={
  isOpacity:boolean,
  scanTrack: string
}

function ScanTrack(props:IsBool) {
  return (
    <>
      <div className='mt-8 md:ml-8 ml'>
        <a className={`bg-gray-800  text-white font-bold  rounded ${props.isOpacity ? 'cursor-pointer':'cursor-not-allowed'} text-center xl:px-[60px] lg:px-[92px] md:px-24 px-24 py-3`}>{props.scanTrack}</a>
      </div>
    </>
  )
}

export default ScanTrack