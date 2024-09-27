import React from 'react'
import UrlForm from './UrlForm'

function SubmitUrl({vCardData , onChange}:any) {

    return (
        <>
            <div className='order-2 lg:order-3 mt-5 w-full pb-4'>
                <div className='text-xl flex flex-col lg:ml-[74px] ml-12'>
                    <p>Submit URL</p>
                    <div className='md:pr-10 pr-12 ml-3'>
                        <input type="url" name="firstName" value={vCardData.firstName} onChange={onChange} className='mt-2 md:max-w-[650px] lg:max-w-[710px] max-w-[700px] mx-auto text-lg rounded-lg border-[2px] border-gray-200  py-2 px-8 duration-500 ' placeholder='https//:' required />
                        <p className={` text-sm text-gray-500 mt-5`}>Your QR code will open this URL.
                        </p>
                        <div className='pt-[1px] bg-gray-200 my-7 lg:mr-16 mr-24'>
                        </div>
                        <UrlForm />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubmitUrl