'use client'
import React, { useContext, useState } from 'react'
import { MyContext } from '../../Context/context'
import { motion, Variants } from 'framer-motion'
import { FaArrowsRotate, FaLock, FaChartLine, FaInfinity, FaCheck, FaXmark } from 'react-icons/fa6'
import { IoMdStats, IoMdRefresh } from 'react-icons/io'
import { MdOutlineQrCodeScanner } from 'react-icons/md'
import { FaEdit } from 'react-icons/fa'

function DynamicVSStaticQR() {
  const bool = useContext(MyContext);
  const [activeTab, setActiveTab] = useState<'dynamic' | 'static'>('dynamic');

  const features = {
    dynamic: [
      { name: "Editable Content", icon: FaEdit, description: "Update QR content anytime", status: true },
      { name: "Real-time Tracking", icon: FaChartLine, description: "Track scans in real-time", status: true },
      { name: "Analytics Dashboard", icon: IoMdStats, description: "Detailed scan analytics", status: true },
      { name: "Geo-location Data", icon: FaArrowsRotate, description: "See where scans come from", status: true },
      { name: "Device Statistics", icon: MdOutlineQrCodeScanner, description: "Track device types", status: true },
      { name: "Expiry Date", icon: FaInfinity, description: "Set QR code expiry", status: true },
    ],
    static: [
      { name: "Editable Content", icon: FaEdit, description: "Can't change after creation", status: false },
      { name: "Real-time Tracking", icon: FaChartLine, description: "Basic scan count only", status: false },
      { name: "Analytics Dashboard", icon: IoMdStats, description: "Limited analytics", status: false },
      { name: "Geo-location Data", icon: FaArrowsRotate, description: "No location tracking", status: false },
      { name: "Device Statistics", icon: MdOutlineQrCodeScanner, description: "No device tracking", status: false },
      { name: "Expiry Date", icon: FaInfinity, description: "No expiry option", status: false },
    ]
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className={`
      relative py-16 md:py-20
      ${bool ? 'bg-gradient-to-b from-gray-50 to-white' : 'bg-gradient-to-b from-gray-900 to-black'}
      transition-colors duration-300
    `}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 md:mb-12"
          >
            <span className={`
              inline-block text-xs font-semibold uppercase tracking-wider
              bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent
              mb-3
            `}>
              QR Code Types
            </span>
            <h2 className={`
              text-2xl md:text-3xl lg:text-4xl font-bold
              ${bool ? 'text-gray-800' : 'text-white'}
            `}>
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                Dynamic
              </span>
              {' '}vs{' '}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Static
              </span>
              {' '}QR Codes
            </h2>
            <p className={`
              text-sm md:text-base mt-3 max-w-2xl mx-auto
              ${bool ? 'text-gray-500' : 'text-gray-400'}
            `}>
              The outcome of both are pretty similar. They have their differences when it comes to
              changes, updates, stats, and tracking.
            </p>
          </motion.div>

          {/* Toggle Switch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex justify-center mb-8 md:mb-12"
          >
            <div className={`
              relative inline-flex p-1 rounded-2xl
              ${bool ? 'bg-gray-200' : 'bg-gray-700'}
            `}>
              <button
                onClick={() => setActiveTab('dynamic')}
                className={`
                  px-6 md:px-8 py-2.5 rounded-xl text-sm md:text-base font-medium
                  transition-all duration-300
                  ${activeTab === 'dynamic'
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/30'
                    : bool ? 'text-gray-600 hover:text-gray-800' : 'text-gray-400 hover:text-white'}
                `}
              >
                <span className="flex items-center space-x-2">
                  <IoMdRefresh className={`${activeTab === 'dynamic' ? 'animate-spin-slow' : ''}`} />
                  <span>Dynamic</span>
                </span>
              </button>
              <button
                onClick={() => setActiveTab('static')}
                className={`
                  px-6 md:px-8 py-2.5 rounded-xl text-sm md:text-base font-medium
                  transition-all duration-300
                  ${activeTab === 'static'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/30'
                    : bool ? 'text-gray-600 hover:text-gray-800' : 'text-gray-400 hover:text-white'}
                `}
              >
                <span className="flex items-center space-x-2">
                  <FaLock />
                  <span>Static</span>
                </span>
              </button>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          >
            {features[activeTab].map((feature) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.name}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className={`
                    p-5 md:p-6 rounded-2xl
                    transition-all duration-300
                    ${bool
                      ? 'bg-white hover:shadow-xl border border-gray-100'
                      : 'bg-gray-800 hover:shadow-xl border border-gray-700'}
                    ${feature.status
                      ? 'hover:border-green-400/50'
                      : 'hover:border-red-400/50 opacity-60'}
                  `}
                >
                  <div className="flex items-start space-x-4">
                    {/* Icon */}
                    <div className={`
                      w-10 h-10 md:w-12 md:h-12 rounded-xl
                      flex items-center justify-center flex-shrink-0
                      ${feature.status
                        ? 'bg-gradient-to-br from-green-500 to-emerald-500'
                        : 'bg-gradient-to-br from-gray-400 to-gray-500'}
                      text-white text-base md:text-lg
                    `}>
                      <Icon />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className={`
                          text-sm md:text-base font-semibold
                          ${bool ? 'text-gray-800' : 'text-white'}
                        `}>
                          {feature.name}
                        </h4>
                        {feature.status ? (
                          <FaCheck className="text-green-500 flex-shrink-0 ml-2" />
                        ) : (
                          <FaXmark className="text-red-500 flex-shrink-0 ml-2" />
                        )}
                      </div>
                      <p className={`
                        text-xs md:text-sm mt-1
                        ${bool ? 'text-gray-500' : 'text-gray-400'}
                      `}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Comparison Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className={`
              mt-8 md:mt-12 p-4 md:p-6 rounded-2xl text-center
              ${bool
                ? 'bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100'
                : 'bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600'}
            `}
          >
            <p className={`
              text-sm md:text-base
              ${bool ? 'text-gray-700' : 'text-gray-300'}
            `}>
              💡 <span className="font-medium">Pro Tip:</span> Use{' '}
              <span className="text-green-500 font-semibold">Dynamic QR</span> codes for marketing campaigns
              and <span className="text-blue-500 font-semibold">Static QR</span> codes for permanent assets.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default DynamicVSStaticQR