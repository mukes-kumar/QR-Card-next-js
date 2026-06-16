'use client'
import React, { useRef, useState, useContext } from 'react'
import { QRCodeCanvas } from 'qrcode.react';
import BtnDonwload from './BtnDonwload';
import { MyContext } from '../Context/context';
import { FaPalette, FaShapes, FaImage, FaDownload, FaEye, FaUndo } from 'react-icons/fa';
import { IoColorPalette, IoShapes, IoLogoBuffer } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';

interface MyComponentProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    vCardData: {
        firstName: string;
        url: string;
    }
};

interface QRColorState {
    fgColor: string;
    bgColor: string;
    size: number;
    shape: 'square' | 'circle' | 'rounded';
    logo: string | null;
    logoSize: number;
}

function SubmitUrl({ vCardData, onChange }: MyComponentProps) {
    const qrRef = useRef<HTMLDivElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const bool = useContext(MyContext);

    // QR Customization State
    const [qrSettings, setQrSettings] = useState<QRColorState>({
        fgColor: '#000000',
        bgColor: '#ffffff',
        size: 300,
        shape: 'square',
        logo: null,
        logoSize: 60
    });

    const [showCustomizer, setShowCustomizer] = useState(false);
    const [previewLogo, setPreviewLogo] = useState<string | null>(null);

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

    // Handle color changes
    const handleColorChange = (type: 'fg' | 'bg', color: string) => {
        setQrSettings(prev => ({
            ...prev,
            [type === 'fg' ? 'fgColor' : 'bgColor']: color
        }));
    };

    // Handle size change
    const handleSizeChange = (size: number) => {
        setQrSettings(prev => ({ ...prev, size }));
    };

    // Handle shape change
    const handleShapeChange = (shape: 'square' | 'circle' | 'rounded') => {
        setQrSettings(prev => ({ ...prev, shape }));
    };

    // Handle logo upload
    const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const logoUrl = event.target?.result as string;
                setPreviewLogo(logoUrl);
                setQrSettings(prev => ({ ...prev, logo: logoUrl }));
            };
            reader.readAsDataURL(file);
        }
    };

    // Remove logo
    const removeLogo = () => {
        setPreviewLogo(null);
        setQrSettings(prev => ({ ...prev, logo: null }));
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    // Reset all settings
    const resetSettings = () => {
        setQrSettings({
            fgColor: '#000000',
            bgColor: '#ffffff',
            size: 300,
            shape: 'square',
            logo: null,
            logoSize: 60
        });
        setPreviewLogo(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    // Get QR Code with logo overlay
    const getQRCodeWithLogo = () => {
        if (!isValidUrl) return null;

        return (
            <div className="relative inline-block">
                <QRCodeCanvas
                    value={vCardData.firstName}
                    size={qrSettings.size}
                    level="H"
                    includeMargin={true}
                    fgColor={qrSettings.fgColor}
                    bgColor={qrSettings.bgColor}
                    imageSettings={qrSettings.logo ? {
                        src: qrSettings.logo,
                        height: qrSettings.logoSize,
                        width: qrSettings.logoSize,
                        excavate: true
                    } : undefined}
                />
            </div>
        );
    };

    // Shape selector component
    const ShapeSelector = ({ active, onClick }: { active: boolean; onClick: () => void }) => (
        <button
            onClick={onClick}
            className={`
                w-10 h-10 rounded-lg border-2 transition-all duration-200
                ${active
                    ? 'border-blue-500 bg-blue-500/10'
                    : bool ? 'border-gray-300 hover:border-gray-400' : 'border-gray-600 hover:border-gray-500'}
                flex items-center justify-center
            `}
        >
            <div className={`w-6 h-6 rounded-sm ${active ? 'bg-blue-500' : bool ? 'bg-gray-400' : 'bg-gray-500'}`} />
        </button>
    );

    return (
        <div className="mt-5 w-full pb-4">
            <div className="text-xl flex flex-col lg:ml-[74px] ml-12">
                <div className="flex items-center justify-between">
                    <p className={bool ? 'text-gray-800' : 'text-white'}>Submit URL</p>
                    <button
                        onClick={() => setShowCustomizer(!showCustomizer)}
                        className={`
                            flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium
                            transition-all duration-200
                            ${bool
                                ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:shadow-lg hover:shadow-blue-500/30'
                                : 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:shadow-lg hover:shadow-blue-500/30'}
                        `}
                    >
                        <FaPalette />
                        <span>{showCustomizer ? 'Hide' : 'Customize'} QR</span>
                    </button>
                </div>

                <div className='md:pr-10 pr-12 ml-3'>
                    <input
                        type="url"
                        name="firstName"
                        value={vCardData.firstName}
                        onChange={onChange}
                        className={`
                            mt-2 md:max-w-[650px] lg:max-w-[710px] max-w-[700px] mx-auto 
                            text-lg rounded-lg border-[2px] py-2 px-8 
                            duration-500 focus:border-blue-500 focus:outline-none
                            ${bool
                                ? 'bg-white border-gray-200 text-gray-800'
                                : 'bg-gray-800 border-gray-700 text-white placeholder-gray-400'}
                        `}
                        placeholder='https://example.com'
                        required
                    />
                    <p className='text-sm text-gray-500 mt-5'>
                        Your QR code will open this URL.
                    </p>
                    <div className='pt-[1px] bg-gray-200 dark:bg-gray-700 my-7 lg:mr-16 mr-24'></div>

                    {/* QR Code Display Section */}
                    {isValidUrl ? (
                        <div className='flex flex-col items-center mt-8'>
                            {/* QR Code with Customization */}
                            <div className='bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg'>
                                {getQRCodeWithLogo()}
                            </div>

                            <p className='text-xs text-gray-500 mt-4'>Scan this QR code with any QR code reader</p>

                            {/* Download Button with Customization */}
                            <BtnDonwload
                                qrRef={qrRef}
                                url={vCardData.firstName}
                                qrSettings={qrSettings}
                            />
                        </div>
                    ) : (
                        <div className='text-center mt-8'>
                            <p className='text-sm text-gray-400'>Enter a valid URL to generate QR Code</p>
                        </div>
                    )}
                </div>
            </div>

            {/* QR Customizer Panel */}
            <AnimatePresence>
                {showCustomizer && isValidUrl && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`
                            mt-6 p-6 rounded-2xl border
                            ${bool
                                ? 'bg-gray-50 border-gray-200'
                                : 'bg-gray-800 border-gray-700'}
                            overflow-hidden
                        `}
                    >
                        <div className="flex items-center justify-between mb-4">
                            <h3 className={`font-semibold ${bool ? 'text-gray-800' : 'text-white'}`}>
                                QR Code Customizer
                            </h3>
                            <button
                                onClick={resetSettings}
                                className="flex items-center space-x-1 text-sm text-blue-500 hover:text-blue-600 transition-colors"
                            >
                                <FaUndo />
                                <span>Reset</span>
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Left Column - Colors & Shape */}
                            <div className="space-y-4">
                                {/* Foreground Color */}
                                <div>
                                    <label className={`text-sm font-medium ${bool ? 'text-gray-700' : 'text-gray-300'}`}>
                                        Foreground Color
                                    </label>
                                    <div className="flex items-center space-x-3 mt-1">
                                        <input
                                            type="color"
                                            value={qrSettings.fgColor}
                                            onChange={(e) => handleColorChange('fg', e.target.value)}
                                            className="w-12 h-12 rounded-lg cursor-pointer border-2 border-gray-200 dark:border-gray-600"
                                        />
                                        <input
                                            type="text"
                                            value={qrSettings.fgColor}
                                            onChange={(e) => handleColorChange('fg', e.target.value)}
                                            className={`
                                                px-3 py-2 rounded-lg text-sm border
                                                ${bool
                                                    ? 'bg-white border-gray-200 text-gray-800'
                                                    : 'bg-gray-700 border-gray-600 text-white'}
                                            `}
                                        />
                                    </div>
                                </div>

                                {/* Background Color */}
                                <div>
                                    <label className={`text-sm font-medium ${bool ? 'text-gray-700' : 'text-gray-300'}`}>
                                        Background Color
                                    </label>
                                    <div className="flex items-center space-x-3 mt-1">
                                        <input
                                            type="color"
                                            value={qrSettings.bgColor}
                                            onChange={(e) => handleColorChange('bg', e.target.value)}
                                            className="w-12 h-12 rounded-lg cursor-pointer border-2 border-gray-200 dark:border-gray-600"
                                        />
                                        <input
                                            type="text"
                                            value={qrSettings.bgColor}
                                            onChange={(e) => handleColorChange('bg', e.target.value)}
                                            className={`
                                                px-3 py-2 rounded-lg text-sm border
                                                ${bool
                                                    ? 'bg-white border-gray-200 text-gray-800'
                                                    : 'bg-gray-700 border-gray-600 text-white'}
                                            `}
                                        />
                                    </div>
                                </div>

                                {/* Size */}
                                <div>
                                    <label className={`text-sm font-medium ${bool ? 'text-gray-700' : 'text-gray-300'}`}>
                                        Size: {qrSettings.size}px
                                    </label>
                                    <input
                                        type="range"
                                        min="150"
                                        max="400"
                                        step="10"
                                        value={qrSettings.size}
                                        onChange={(e) => handleSizeChange(parseInt(e.target.value))}
                                        className="w-full mt-1"
                                    />
                                </div>
                            </div>

                            {/* Right Column - Shape & Logo */}
                            <div className="space-y-4">
                                {/* Shape Selection */}
                                <div>
                                    <label className={`text-sm font-medium ${bool ? 'text-gray-700' : 'text-gray-300'}`}>
                                        Shape
                                    </label>
                                    <div className="flex space-x-3 mt-1">
                                        {['square', 'rounded', 'circle'].map((shape) => (
                                            <button
                                                key={shape}
                                                onClick={() => handleShapeChange(shape as any)}
                                                className={`
                                                    px-4 py-2 rounded-lg text-sm font-medium
                                                    transition-all duration-200
                                                    ${qrSettings.shape === shape
                                                        ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                                                        : bool
                                                            ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}
                                                `}
                                            >
                                                {shape.charAt(0).toUpperCase() + shape.slice(1)}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Logo Upload */}
                                <div>
                                    <label className={`text-sm font-medium ${bool ? 'text-gray-700' : 'text-gray-300'}`}>
                                        Logo
                                    </label>
                                    <div className="flex items-center space-x-3 mt-1">
                                        <input
                                            ref={fileInputRef}
                                            type="file"
                                            accept="image/*"
                                            onChange={handleLogoUpload}
                                            className="hidden"
                                        />
                                        <button
                                            onClick={() => fileInputRef.current?.click()}
                                            className={`
                                                flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium
                                                transition-all duration-200
                                                ${bool
                                                    ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}
                                            `}
                                        >
                                            <FaImage />
                                            <span>Upload Logo</span>
                                        </button>
                                        {previewLogo && (
                                            <button
                                                onClick={removeLogo}
                                                className="text-sm text-red-500 hover:text-red-600 transition-colors"
                                            >
                                                Remove
                                            </button>
                                        )}
                                    </div>
                                    {previewLogo && (
                                        <div className="mt-2">
                                            <img
                                                src={previewLogo}
                                                alt="Logo preview"
                                                className="w-16 h-16 object-contain rounded-lg border border-gray-200 dark:border-gray-600"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default SubmitUrl