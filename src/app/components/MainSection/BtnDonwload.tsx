'use client'
import React, { useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { FaDownload } from 'react-icons/fa';

interface BtnDonwloadProps {
  qrRef: React.RefObject<HTMLDivElement>;
  url: string;
  qrSettings?: {
    fgColor: string;
    bgColor: string;
    size: number;
    shape: string;
    logo: string | null;
    logoSize: number;
  };
}

function BtnDonwload({ qrRef, url, qrSettings }: BtnDonwloadProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const downloadQR = () => {
    // Create a canvas to combine QR code with logo
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    // Get QR code as image
    const qrCanvas = document.createElement('canvas');
    QRCodeCanvas({
      value: url,
      size: qrSettings?.size || 300,
      level: 'H',
      includeMargin: true,
      fgColor: qrSettings?.fgColor || '#000000',
      bgColor: qrSettings?.bgColor || '#ffffff',
      imageSettings: qrSettings?.logo ? {
        src: qrSettings.logo,
        height: qrSettings.logoSize || 60,
        width: qrSettings.logoSize || 60,
        excavate: true
      } : undefined
    }, qrCanvas);

    // Set canvas size
    canvas.width = qrSettings?.size || 300;
    canvas.height = qrSettings?.size || 300;

    // Draw QR code
    const qrImage = new Image();
    qrImage.onload = () => {
      ctx.drawImage(qrImage, 0, 0);

      // Draw logo if exists
      if (qrSettings?.logo) {
        const logo = new Image();
        logo.onload = () => {
          const logoSize = qrSettings.logoSize || 60;
          const center = (qrSettings.size || 300) / 2;
          ctx.drawImage(logo, center - logoSize / 2, center - logoSize / 2, logoSize, logoSize);

          // Download
          const link = document.createElement('a');
          link.download = 'qrcode.png';
          link.href = canvas.toDataURL('image/png');
          link.click();
        };
        logo.src = qrSettings.logo;
      } else {
        // Download without logo
        const link = document.createElement('a');
        link.download = 'qrcode.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
      }
    };
    qrImage.src = qrCanvas.toDataURL('image/png');
  };

  return (
    <button
      onClick={downloadQR}
      className="flex items-center space-x-2 px-6 py-3 mt-4 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105"
    >
      <FaDownload />
      <span>Download PNG</span>
    </button>
  );
}

export default BtnDonwload;