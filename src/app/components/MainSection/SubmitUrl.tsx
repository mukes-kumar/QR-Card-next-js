'use client'
import React, { useRef } from 'react'
import { QRCodeCanvas } from 'qrcode.react';
import BtnDonwload from './BtnDonwload';

interface MyComponentProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    vCardData: {
        firstName: string;
        url: string;
    }
};  

function SubmitUrl({vCardData ,onChange}:MyComponentProps) {
    const qrRef = useRef<HTMLDivElement>(null);
    const isValidUrl = vCardData.firstName && isValidHttpUrl(vCardData.firstName);

    function isValidHttpUrl(string: string) {
        try {
            const url = new URL(string);
            return url.protocol === 'http:' || url.protocol === 'https:';
        } catch (error) {
            console.error('Invalid URL:', error);
            return false;
        }
    }

    return (
        <>
            <div className='order-2 lg:order-3 mt-5 w-full pb-4'>
                <div className='text-xl flex flex-col lg:ml-[74px] ml-12'>
                    <p>Submit URL</p>
                    <div className='md:pr-10 pr-12 ml-3'>
                        <input 
                            type="url" 
                            name="firstName" 
                            value={vCardData.firstName} 
                            onChange={onChange} 
                            className='mt-2 md:max-w-[650px] lg:max-w-[710px] max-w-[700px] mx-auto text-lg rounded-lg border-[2px] border-gray-200 py-2 px-8 duration-500 focus:border-blue-500 focus:outline-none' 
                            placeholder='https://example.com' 
                            required 
                        />
                        <p className='text-sm text-gray-500 mt-5'>
                            Your QR code will open this URL.
                        </p>
                        <div className='pt-[1px] bg-gray-200 my-7 lg:mr-16 mr-24'></div>
                        
                        {/* QR Code Display Section */}
                        {isValidUrl ? (
                            <div className='flex flex-col items-center mt-8'>
                                <p className='text-lg font-semibold mb-4'>Your QR Code:</p>
                                <div ref={qrRef} className='bg-white p-4 rounded-lg shadow-lg'>
                                    <QRCodeCanvas
                                        value={vCardData.firstName}
                                        size={300}
                                        level="H"
                                        includeMargin={true}
                                        fgColor="#000000"
                                        bgColor="#ffffff"
                                    />
                                </div>
                                <p className='text-xs text-gray-500 mt-4'>Scan this QR code with any QR code reader</p>
                                <BtnDonwload qrRef={qrRef} url={vCardData.firstName} />
                            </div>
                        ) : (
                            <div className='text-center mt-8'>
                                <p className='text-sm text-gray-400'>Enter a valid URL to generate QR Code</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubmitUrl