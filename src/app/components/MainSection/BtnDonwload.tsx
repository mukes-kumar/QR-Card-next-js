'use client'
import React from 'react'
import { FaDownLong } from "react-icons/fa6";

type QrDownloadProps = {
  qrRef: React.RefObject<HTMLDivElement>;
  url: string;
  isOpacity?: never;
  png?: never;
  PNG1?: never;
};

type LegacyBtnProps = {
  isOpacity: boolean;
  png: string;
  PNG1: string;
  qrRef?: never;
  url?: never;
};

type BtnDownloadProps = QrDownloadProps | LegacyBtnProps;

function isQrDownloadProps(props: BtnDownloadProps): props is QrDownloadProps {
  return 'qrRef' in props && props.qrRef !== undefined;
}

function BtnDonwload(props: BtnDownloadProps) {
  const handleDownload = async () => {
    if (!isQrDownloadProps(props)) return;

    const { qrRef } = props;
    if (!qrRef || !qrRef.current) return;

    try {
      const canvas = qrRef.current.querySelector('canvas');
      if (!canvas) {
        alert('QR Code not found');
        return;
      }

      canvas.toBlob((blob) => {
        if (!blob) {
          alert('Unable to create image');
          return;
        }

        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `QR-Code-${Date.now()}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);
      });
    } catch (error) {
      console.error('Error downloading QR code:', error);
      alert('Error downloading QR code');
    }
  };

  if (!isQrDownloadProps(props)) {
    return (
      <div className='mt-6 flex mx-3'>
        <div className='flex'>
          <button
            className={`bg-blue-500 ${props.isOpacity ? 'opacity-100' : 'opacity-40 cursor-not-allowed'} w-auto text-white font-bold md:py-3 py-2 md:px-8 px-4 sm:text-sm text-lg lg:px-8 rounded text-center md:py-4 md:px-4 transition-colors duration-300 flex items-center gap-2`}
            disabled={!props.isOpacity}
          >
            <FaDownLong />
            <span>{props.png}</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='mt-6 flex mx-3'>
      <div className='flex'>
        <button
          onClick={handleDownload}
          className='bg-blue-500 hover:bg-blue-600 w-auto text-white font-bold md:py-3 py-2 md:px-8 px-4 sm:text-sm text-lg lg:px-8 rounded text-center md:py-4 md:px-4 transition-colors duration-300 flex items-center gap-2'
        >
          <FaDownLong />
          <span>Download PNG</span>
        </button>
      </div>
    </div>
  )
}

export default BtnDonwload