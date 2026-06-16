'use client'
import Link from 'next/link';
import React, { useContext } from 'react'
import { AiOutlineMessage } from "react-icons/ai";
import { PiArrowFatLineUpFill } from "react-icons/pi";
import { MyContext } from '../Context/context';
import { FaAddressCard } from "react-icons/fa";
import { MdPropaneTank } from "react-icons/md";
import { PiSpeakerSimpleHighFill } from "react-icons/pi";
import { motion } from 'framer-motion';
import { FaArrowRight, FaQrcode, FaClock, FaMobileAlt } from 'react-icons/fa';

function QuickRespose() {
  const bool = useContext(MyContext)

  const features = [
    {
      icon: AiOutlineMessage,
      title: "Gather Feedback",
      description: "You can ask users to give some feedback when they scan the QR Code.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FaAddressCard,
      title: "Describe your Business",
      description: "You can redirect your clients to some instruction page for your business when they scan the QR Code.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: MdPropaneTank,
      title: "Profile Cards",
      description: "Physical profile cards are every day more rare and digital profile cards are a great alternative.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: PiSpeakerSimpleHighFill,
      title: "Promote Events & Discounts",
      description: "You can promote any event or give discount codes when people scan the QR Code.",
      color: "from-orange-500 to-orange-600"
    }
  ];

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
      py-16 md:py-20 lg:py-24
      ${bool ? 'bg-gradient-to-b from-green-600 to-green-700' : 'bg-gradient-to-b from-gray-900 to-black'}
      transition-colors duration-300
    `}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left mb-8 md:mb-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <span className={`
                  inline-block px-3 py-1 rounded-full text-xs font-semibold
                  bg-white/20 text-white backdrop-blur-sm
                  mb-4
                `}>
                  What are QR Codes?
                </span>
                <h2 className={`
                  text-2xl md:text-3xl lg:text-4xl font-bold text-white
                  leading-tight
                `}>
                  QR Codes stands for{' '}
                  <span className="text-yellow-300">
                    Quick Response
                  </span>
                </h2>
                <p className="text-white/80 text-sm md:text-base lg:text-lg mt-4 leading-relaxed">
                  They were created in 1994 by Denso Wave to track vehicles during manufacturing.
                  They quickly gain popularity when it spread to smartphones.
                  <br />
                  You can now even scan QR Codes from your phone camera.
                  <br /><br />
                  I will break down some of the benefits from using QR Codes and the most requested QR Codes{' '}
                  <strong className="text-white">features.</strong>
                </p>
              </div>

              {/* Right side - Quick Stats */}
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {[
                  { icon: FaQrcode, label: "QR Codes", value: "15+", color: "from-blue-400 to-blue-500" },
                  { icon: FaClock, label: "Since", value: "1994", color: "from-green-400 to-green-500" },
                  { icon: FaMobileAlt, label: "Scan Rate", value: "99%", color: "from-purple-400 to-purple-500" },
                  { icon: FaArrowRight, label: "Daily Scans", value: "10M+", color: "from-orange-400 to-orange-500" },
                ].map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className={`
                        p-4 md:p-5 rounded-2xl text-center
                        bg-white/10 backdrop-blur-sm
                        border border-white/20
                        hover:bg-white/20 transition-all duration-300
                      `}
                    >
                      <div className={`
                        w-10 h-10 md:w-12 md:h-12 rounded-xl
                        flex items-center justify-center mx-auto
                        bg-gradient-to-br ${stat.color}
                        text-white text-lg md:text-xl
                        mb-2
                      `}>
                        <Icon />
                      </div>
                      <div className="text-xl md:text-2xl font-bold text-white">
                        {stat.value}
                      </div>
                      <div className="text-xs md:text-sm text-white/70">
                        {stat.label}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex justify-center md:justify-start mb-12 md:mb-16"
          >
            <Link
              href="/"
              className={`
                inline-flex items-center space-x-2 md:space-x-3
                px-6 md:px-8 py-3 md:py-4
                rounded-xl md:rounded-2xl
                text-base md:text-lg font-medium
                bg-white text-green-600
                shadow-lg shadow-black/20
                hover:shadow-xl hover:shadow-black/30
                hover:scale-105
                transition-all duration-300
                group
              `}
            >
              <span>Generate QR Code</span>
              <PiArrowFatLineUpFill className="transform group-hover:translate-y-[-4px] transition-transform" />
            </Link>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  whileHover={{
                    y: -8,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  className={`
                    group relative
                    p-6 md:p-8 rounded-2xl
                    transition-all duration-300
                    bg-white/10 backdrop-blur-sm
                    border border-white/20
                    hover:bg-white/20
                    hover:shadow-2xl
                    cursor-pointer
                    overflow-hidden
                  `}
                >
                  {/* Decorative gradient */}
                  <div className={`
                    absolute -top-20 -right-20 w-40 h-40 rounded-full
                    bg-gradient-to-br ${feature.color}
                    opacity-0 group-hover:opacity-10
                    transition-opacity duration-500
                  `}></div>

                  {/* Icon */}
                  <div className={`
                    w-14 h-14 md:w-16 md:h-16 rounded-2xl
                    flex items-center justify-center
                    bg-gradient-to-br ${feature.color}
                    text-white text-2xl md:text-3xl
                    shadow-lg
                    transform transition-all duration-300
                    group-hover:scale-110 group-hover:rotate-6
                    mb-4
                  `}>
                    <Icon />
                  </div>

                  {/* Content */}
                  <h3 className={`
                    text-lg md:text-xl font-bold text-white
                    mb-2
                    group-hover:text-yellow-300 transition-colors
                  `}>
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/70 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Learn more indicator */}
                  <div className="mt-4 flex items-center space-x-1 text-white/50 group-hover:text-white/80 transition-colors">
                    <span className="text-xs">Learn more</span>
                    <FaArrowRight className="text-xs transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default QuickRespose