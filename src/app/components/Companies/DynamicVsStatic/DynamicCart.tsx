// DynamicCart.tsx
'use client'
import React, { useContext } from 'react'
import StaticCart from './StaticCart'
import Link from 'next/link'
import Image from 'next/image';
import { MyContext } from '../../Context/context';
import { motion } from 'framer-motion'
import { FaArrowRight, FaChartLine, FaEdit, FaGlobe, FaUsers, FaClock } from 'react-icons/fa'

type cart = {
  name: string,
  DesName: string,
  ShortName: string
}

function DynamicCart({ name, DesName, ShortName }: cart) {
  const staticN = 'STATIC';
  const DesStatic = 'Static QR Codes Explained'
  const ShortStaticN = 'Static'
  const bool = useContext(MyContext)

  const features = [
    { icon: FaEdit, label: "Editable Content", desc: "Update anytime" },
    { icon: FaChartLine, label: "Real-time Stats", desc: "Track performance" },
    { icon: FaGlobe, label: "Global Tracking", desc: "Location data" },
    { icon: FaUsers, label: "Audience Insights", desc: "User analytics" },
  ]

  return (
    <div className={`
      py-16 md:py-20
      ${bool ? 'bg-gradient-to-b from-gray-50 to-white' : 'bg-gradient-to-b from-gray-900 to-black'}
      transition-colors duration-300
    `}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Dynamic QR Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Link href="/dynamicQr" className="block h-full">
                <div className={`
                  h-full rounded-2xl overflow-hidden
                  transition-all duration-300
                  ${bool
                    ? 'bg-white shadow-xl hover:shadow-2xl border border-gray-100'
                    : 'bg-gray-800 shadow-xl hover:shadow-2xl border border-gray-700'}
                `}>
                  {/* Badge */}
                  <div className="p-4 md:p-6 pb-0">
                    <span className={`
                      inline-block px-3 py-1 rounded-full text-xs font-semibold
                      bg-gradient-to-r from-green-500 to-emerald-500 text-white
                      shadow-lg shadow-green-500/30
                    `}>
                      {name}
                    </span>
                  </div>

                  {/* Image */}
                  <div className="px-4 md:px-6">
                    <div className="relative">
                      <Image
                        src='/Image1/dynamic.png'
                        className="w-full h-auto object-contain"
                        width={500}
                        height={300}
                        alt='Dynamic QR Code'
                      />
                      {/* Animated overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 md:p-6 pt-2">
                    <h3 className={`
                      text-xl md:text-2xl font-bold mb-3
                      ${bool ? 'text-gray-800' : 'text-white'}
                      group-hover:text-blue-500 transition-colors
                    `}>
                      {DesName}
                    </h3>

                    <p className={`
                      text-sm md:text-base leading-relaxed
                      ${bool ? 'text-gray-600' : 'text-gray-300'}
                    `}>
                      With {ShortName} QR Codes you can create a customized landing page for your QR Code
                      that can be changed and updated whenever you want no matter if the QR Code is
                      created or even if it went public.
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-2 mt-4">
                      {features.map((feature, idx) => {
                        const Icon = feature.icon
                        return (
                          <div
                            key={idx}
                            className={`
                              flex items-center space-x-2 p-2 rounded-lg
                              ${bool
                                ? 'bg-gray-50'
                                : 'bg-gray-700/50'}
                            `}
                          >
                            <div className="text-green-500 text-sm">
                              <Icon />
                            </div>
                            <div>
                              <div className={`
                                text-xs font-medium
                                ${bool ? 'text-gray-700' : 'text-gray-300'}
                              `}>
                                {feature.label}
                              </div>
                              <div className="text-[10px] text-gray-400">
                                {feature.desc}
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>

                    {/* Learn More */}
                    <div className="mt-4 flex items-center space-x-2 text-blue-500 font-medium text-sm group-hover:text-blue-600 transition-colors">
                      <span>Learn More</span>
                      <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Static QR Card */}
            <StaticCart
              staticN={staticN}
              DesStatic={DesStatic}
              ShortStaticN={ShortStaticN}
              bool={bool}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DynamicCart