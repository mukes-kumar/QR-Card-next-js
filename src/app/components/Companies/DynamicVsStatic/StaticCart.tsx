// StaticCart.tsx
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaArrowRight, FaLock, FaEye, FaDownload, FaMobileAlt, FaQrcode } from 'react-icons/fa'

type cart = {
  staticN: string,
  DesStatic: string,
  ShortStaticN: string
  bool: boolean
}

function StaticCart({ staticN, DesStatic, ShortStaticN, bool }: cart) {
  const features = [
    { icon: FaQrcode, label: "Permanent", desc: "Never changes" },
    { icon: FaEye, label: "Basic Stats", desc: "Scan count" },
    { icon: FaDownload, label: "Offline Use", desc: "No internet needed" },
    { icon: FaMobileAlt, label: "Universal", desc: "Works everywhere" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      whileHover={{ y: -8 }}
      className="group h-full"
    >
      <Link href="/staticQr" className="block h-full">
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
              bg-gradient-to-r from-blue-500 to-purple-500 text-white
              shadow-lg shadow-blue-500/30
            `}>
              {staticN}
            </span>
          </div>

          {/* Image */}
          <div className="px-4 md:px-6">
            <div className="relative">
              <Image
                src='/Image1/static.png'
                className="w-full h-auto object-contain"
                width={480}
                height={300}
                alt='Static QR Code'
              />
              {/* Lock icon overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-blue-500/20 backdrop-blur-sm rounded-full p-3">
                  <FaLock className="text-blue-500 text-2xl" />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 md:p-6 pt-2">
            <h3 className={`
              text-xl md:text-2xl font-bold mb-3
              ${bool ? 'text-gray-800' : 'text-white'}
              group-hover:text-blue-500 transition-colors
            `}>
              {DesStatic}
            </h3>

            <p className={`
              text-sm md:text-base leading-relaxed
              ${bool ? 'text-gray-600' : 'text-gray-300'}
            `}>
              With {ShortStaticN} QR Codes you can create a customized landing page for your QR Code
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
                    <div className="text-blue-500 text-sm">
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
  )
}

export default StaticCart