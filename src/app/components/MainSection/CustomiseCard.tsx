'use client'
import React, { useContext } from 'react'
import { MyContext } from '../Context/context';
import { FaMobileAlt } from "react-icons/fa";
import { IoBarChartSharp } from "react-icons/io5";
import { IoIosColorPalette, IoLogoBuffer } from "react-icons/io";
import { motion } from 'framer-motion';

function CustomiseCard() {
  const bool = useContext(MyContext)

  const productName = [
    {
      name: "Customized Mobile Pages",
      icon: FaMobileAlt,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      darkBg: "dark:bg-blue-900/20",
      description: "Mobile-optimized QR pages"
    },
    {
      name: "Track QR Codes",
      icon: IoBarChartSharp,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      darkBg: "dark:bg-green-900/20",
      description: "Real-time analytics"
    },
    {
      name: "Choose Color & Shape",
      icon: IoIosColorPalette,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      darkBg: "dark:bg-purple-900/20",
      description: "Full customization options"
    },
    {
      name: "Add Logos to QR Codes",
      icon: IoLogoBuffer,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      darkBg: "dark:bg-orange-900/20",
      description: "Brand your QR codes"
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <div className={`
      pt-20 md:pt-24 pb-8 md:pb-12
      ${bool ? 'bg-gradient-to-b from-gray-50 to-white' : 'bg-gradient-to-b from-gray-900 to-black'}
      transition-colors duration-300
    `}>
      {/* Section Header */}
      <div className="text-center mb-8 md:mb-12 px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`
            text-2xl md:text-3xl lg:text-4xl font-bold mb-3
            ${bool ? 'text-gray-800' : 'text-white'}
          `}
        >
          QR Code{' '}
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Customization
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`
            text-sm md:text-base max-w-2xl mx-auto
            ${bool ? 'text-gray-500' : 'text-gray-400'}
          `}
        >
          Powerful features to customize and track your QR codes
        </motion.p>
      </div>

      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className={`
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6
            max-w-7xl mx-auto
          `}
        >
          {productName.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className={`
                  group relative overflow-hidden
                  rounded-2xl p-6 md:p-8
                  transition-all duration-300
                  ${bool
                    ? 'bg-white hover:shadow-2xl border border-gray-100'
                    : 'bg-gray-800 hover:shadow-2xl border border-gray-700'}
                  shadow-lg hover:shadow-xl
                  cursor-pointer
                `}
              >
                {/* Decorative gradient blob */}
                <div className={`
                  absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0
                  group-hover:opacity-10 transition-opacity duration-500
                  ${item.bgColor} ${item.darkBg}
                `}></div>

                {/* Icon Container */}
                <div className="relative z-10">
                  <div className={`
                    w-14 h-14 md:w-16 md:h-16 rounded-2xl
                    flex items-center justify-center
                    bg-gradient-to-br ${item.color}
                    text-white text-2xl md:text-3xl
                    shadow-lg transform transition-all duration-300
                    group-hover:scale-110 group-hover:rotate-6
                    ${bool ? 'shadow-blue-500/30' : 'shadow-blue-500/20'}
                  `}>
                    <Icon />
                  </div>

                  {/* Content */}
                  <div className="mt-4 md:mt-5">
                    <h3 className={`
                      text-base md:text-lg font-semibold
                      ${bool ? 'text-gray-800' : 'text-white'}
                      group-hover:text-blue-500 transition-colors duration-300
                    `}>
                      {item.name}
                    </h3>
                    <p className={`
                      text-xs md:text-sm mt-1.5
                      ${bool ? 'text-gray-500' : 'text-gray-400'}
                    `}>
                      {item.description}
                    </p>
                  </div>

                  {/* Learn More Link */}
                  <div className="mt-4">
                    <span className={`
                      text-xs font-medium
                      text-blue-500 hover:text-blue-600
                      flex items-center space-x-1
                      opacity-0 group-hover:opacity-100
                      transform translate-x-[-10px] group-hover:translate-x-0
                      transition-all duration-300
                    `}>
                      <span>Learn More</span>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Hover gradient overlay */}
                <div className={`
                  absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                  transition-opacity duration-300 pointer-events-none
                  ${bool
                    ? 'bg-gradient-to-br from-blue-50/30 to-purple-50/30'
                    : 'bg-gradient-to-br from-blue-900/10 to-purple-900/10'}
                `}></div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}

export default CustomiseCard