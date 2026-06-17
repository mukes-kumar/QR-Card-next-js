import React from 'react'
import { LiaArrowUpSolid } from "react-icons/lia";
import { FaArrowRight, FaRocket, FaUserPlus, FaQrcode, FaInfinity } from "react-icons/fa";
// import { GiClick } from "react-icons/gi";
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

type TypeBoolean = {
  bool: boolean
}

function UseSection({ bool }: TypeBoolean) {
  const steps = [
    {
      icon: FaUserPlus,
      title: "Create Account",
      description: "Sign up for free in seconds",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FaQrcode,
      title: "Generate QR",
      description: "Choose your QR code type",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: FaInfinity,
      title: "Customize",
      description: "Add colors, logos & more",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: FaRocket,
      title: "Launch",
      description: "Share & track performance",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants: Variants = {
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
      py-16 md:py-20 lg:py-24
      ${bool ? 'bg-gradient-to-b from-white to-gray-50' : 'bg-gradient-to-b from-gray-900 to-black'}
      transition-colors duration-300
    `}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* How to Use Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <span className={`
              inline-block px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold
              bg-gradient-to-r from-green-500 to-emerald-500 text-white
              shadow-lg shadow-green-500/30
              hover:shadow-xl hover:shadow-green-500/40 transition-shadow
            `}>
              How to Use
            </span>
          </motion.div>

          {/* Main Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className={`
              text-xl md:text-2xl lg:text-3xl font-bold leading-relaxed
              ${bool ? 'text-gray-800' : 'text-white'}
            `}>
              Creating QR Codes with{' '}
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                QR.io
              </span>
              {' '}is pretty simple
            </h2>
            <p className={`
              text-sm md:text-base mt-3
              ${bool ? 'text-gray-600' : 'text-gray-400'}
            `}>
              Create an account and use our QR Code Generator to create unlimited dynamic & static QR Codes.
            </p>
          </motion.div>

          {/* Steps Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8 md:mb-12"
          >
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  variants={itemVariants}
                  whileHover={{
                    y: -4,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  className={`
                    relative p-4 md:p-5 rounded-2xl text-center
                    transition-all duration-300
                    ${bool
                      ? 'bg-white shadow-md hover:shadow-xl border border-gray-100'
                      : 'bg-gray-800 shadow-md hover:shadow-xl border border-gray-700'}
                  `}
                >
                  {/* Step Number */}
                  <div className={`
                    absolute -top-2 -right-2
                    w-6 h-6 rounded-full
                    flex items-center justify-center
                    text-xs font-bold text-white
                    bg-gradient-to-br ${step.color}
                    shadow-lg
                  `}>
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className={`
                    w-12 h-12 md:w-14 md:h-14 rounded-xl
                    flex items-center justify-center mx-auto
                    bg-gradient-to-br ${step.color}
                    text-white text-lg md:text-xl
                    shadow-lg
                    mb-3
                  `}>
                    <Icon />
                  </div>

                  {/* Title */}
                  <h4 className={`
                    text-sm md:text-base font-semibold
                    ${bool ? 'text-gray-800' : 'text-white'}
                  `}>
                    {step.title}
                  </h4>

                  {/* Description */}
                  <p className={`
                    text-xs md:text-sm mt-1
                    ${bool ? 'text-gray-500' : 'text-gray-400'}
                  `}>
                    {step.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center relative"
          >
            {/* Arrow indicator */}
            <div className="relative inline-block">
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [-8, 8, -8] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut"
                }}
                className={`
                  absolute -top-10 left-1/2 -translate-x-1/2
                  text-3xl md:text-4xl
                  ${bool ? 'text-green-500' : 'text-green-400'}
                `}
              >
                <LiaArrowUpSolid />
              </motion.div>

              <Link
                href="/"
                className={`
                  inline-flex items-center space-x-2 md:space-x-3
                  px-6 md:px-8 lg:px-10 py-3 md:py-4
                  rounded-xl md:rounded-2xl
                  text-base md:text-lg lg:text-xl font-medium
                  bg-gradient-to-r from-blue-500 to-purple-500
                  text-white
                  shadow-lg shadow-blue-500/30
                  hover:shadow-xl hover:shadow-blue-500/40
                  hover:scale-105
                  transition-all duration-300
                  group
                `}
              >
                <span>Generate QR Code</span>
                <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Trust indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-4 md:mt-6 flex items-center justify-center space-x-4 md:space-x-6"
            >
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className={`
                        w-6 h-6 md:w-8 md:h-8 rounded-full
                        flex items-center justify-center text-xs font-medium
                        ${bool
                          ? 'bg-gray-200 text-gray-600'
                          : 'bg-gray-700 text-gray-300'}
                        border-2 ${bool ? 'border-white' : 'border-gray-800'}
                      `}
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span className={`
                  text-xs md:text-sm
                  ${bool ? 'text-gray-500' : 'text-gray-400'}
                `}>
                  Trusted by 50K+ users
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default UseSection