'use client'
import React, { useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { FaDownload } from 'react-icons/fa';

interface BtnDonwloadProps {
  qrRef?: React.RefObject<HTMLDivElement>;
  url?: string;
  isOpacity?: boolean;
  png?: string;
  PNG1?: string;
  qrSettings?: {
    fgColor: string;
    bgColor: string;
    size: number;
    shape: string;
    logo: string | null;
    logoSize: number;
  };
}

function BtnDonwload({ url = '', qrSettings, png = 'Download', PNG1 = 'PNG' }: BtnDonwloadProps) {
  const hiddenQrRef = useRef<HTMLDivElement>(null);

  console.log(png);
  const downloadQR = () => {
    const size = qrSettings?.size || 300;

    // Create canvas for final output
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    // Get the QR code canvas from hidden div
    const hiddenDiv = hiddenQrRef.current;
    if (!hiddenDiv) return;

    const qrCanvas = hiddenDiv.querySelector('canvas');
    if (!qrCanvas) return;

    // Draw QR code
    ctx.drawImage(qrCanvas, 0, 0, size, size);

    // Draw logo if exists
    if (qrSettings?.logo) {
      const logo = new Image();
      logo.onload = () => {
        const logoSize = qrSettings.logoSize || 60;
        const center = size / 2;
        ctx.drawImage(logo, center - logoSize / 2, center - logoSize / 2, logoSize, logoSize);

        // Download
        const link = document.createElement('a');
        link.download = 'qrcode.png';
        link.href = canvas.toDataURL('image/png');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
      logo.src = qrSettings.logo;
    } else {
      // Download without logo
      const link = document.createElement('a');
      link.download = 'qrcode.png';
      link.href = canvas.toDataURL('image/png');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <>
      {/* Hidden QR code for download */}
      <div ref={hiddenQrRef} style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}>
        <QRCodeCanvas
          value={url}
          size={qrSettings?.size || 300}
          level={'H'}
          includeMargin={true}
          fgColor={qrSettings?.fgColor || '#000000'}
          bgColor={qrSettings?.bgColor || '#ffffff'}
          imageSettings={qrSettings?.logo ? {
            src: qrSettings.logo,
            height: qrSettings.logoSize || 60,
            width: qrSettings.logoSize || 60,
            excavate: true
          } : undefined}
        />
      </div>

      <button
        onClick={downloadQR}
        className="flex items-center space-x-2 px-6 py-3 mt-4 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105"
      >
        <FaDownload />
        <span>{png} {PNG1}</span>
      </button>
    </>
  );
}

export default BtnDonwload;