'use client'
import React, { useContext } from 'react'
import BenefitsBelow from './BenefitsBelow'
import ScanMePic from './ScanMePic'
import { MyContext } from '../Context/context'
import { motion } from 'framer-motion'
import { FaChartLine, FaMobileAlt, FaCode, FaUsers, FaClock, FaShieldAlt } from 'react-icons/fa'

type TitleType = {
   title: string
}

function BenefitsQR({ title }: TitleType) {
   const bool = useContext(MyContext)

   // Animation variants
   const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            staggerChildren: 0.2
         }
      }
   }

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
   }

   const stats = [
      { icon: FaChartLine, value: "10K+", label: "Scans per day", color: "from-blue-500 to-blue-600" },
      { icon: FaUsers, value: "50K+", label: "Active users", color: "from-green-500 to-green-600" },
      { icon: FaClock, value: "99.9%", label: "Uptime", color: "from-purple-500 to-purple-600" },
      { icon: FaShieldAlt, value: "100%", label: "Secure", color: "from-orange-500 to-orange-600" },
   ]

   return (
      <div className={`
         pt-16 md:pt-20 pb-12 md:pb-16
         ${bool ? 'bg-gradient-to-b from-white to-gray-50' : 'bg-gradient-to-b from-gray-900 to-black'}
         transition-colors duration-300
      `}>
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                  {/* Left Column - Content */}
                  <motion.div
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true, margin: "-50px" }}
                     variants={containerVariants}
                     className="space-y-6 md:space-y-8 order-2 lg:order-1"
                  >
                     {/* Header */}
                     <motion.div variants={itemVariants}>
                        <span className={`
                           inline-block text-xs font-semibold uppercase tracking-wider
                           bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent
                           mb-2
                        `}>
                           Why Choose QR.io
                        </span>
                        <h2 className={`
                           text-2xl md:text-3xl lg:text-4xl font-bold
                           ${bool ? 'text-gray-800' : 'text-white'}
                        `}>
                           Track Your{' '}
                           <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                              {title}
                           </span>
                           {' '}Performance
                        </h2>
                     </motion.div>

                     {/* Description */}
                     <motion.div variants={itemVariants} className="space-y-3">
                        <p className={`
                           text-sm md:text-base leading-relaxed
                           ${bool ? 'text-gray-600' : 'text-gray-300'}
                        `}>
                           By using QR.io you will be able keep track of how many people scan your{' '}
                           <span className={bool ? 'text-blue-600 font-medium' : 'text-blue-400 font-medium'}>
                              {title}
                           </span>
                           , from where and on what date.
                        </p>
                        <p className={`
                           text-sm md:text-base leading-relaxed
                           ${bool ? 'text-gray-600' : 'text-gray-300'}
                        `}>
                           Also for those non-developers you can create fully customized landing pages for your{' '}
                           <span className={bool ? 'text-blue-600 font-medium' : 'text-blue-400 font-medium'}>
                              {title}
                           </span>
                           . No Coding Required!
                        </p>
                     </motion.div>

                     {/* Stats Grid */}
                     <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 pt-2"
                     >
                        {stats.map((stat) => {
                           const Icon = stat.icon
                           return (
                              <div
                                 key={stat.label}
                                 className={`
                                    p-3 md:p-4 rounded-xl text-center
                                    ${bool
                                       ? 'bg-white shadow-md border border-gray-100'
                                       : 'bg-gray-800 shadow-lg border border-gray-700'}
                                    transition-all duration-300
                                    hover:scale-105 hover:shadow-xl
                                 `}
                              >
                                 <div className={`
                                    w-8 h-8 md:w-10 md:h-10 rounded-lg
                                    flex items-center justify-center mx-auto
                                    bg-gradient-to-br ${stat.color}
                                    text-white text-sm md:text-base
                                    mb-2
                                 `}>
                                    <Icon />
                                 </div>
                                 <div className={`
                                    text-lg md:text-xl font-bold
                                    ${bool ? 'text-gray-800' : 'text-white'}
                                 `}>
                                    {stat.value}
                                 </div>
                                 <div className={`
                                    text-[10px] md:text-xs
                                    ${bool ? 'text-gray-500' : 'text-gray-400'}
                                 `}>
                                    {stat.label}
                                 </div>
                              </div>
                           )
                        })}
                     </motion.div>

                     {/* Benefits Below */}
                     <motion.div variants={itemVariants}>
                        <BenefitsBelow bool={bool} />
                     </motion.div>
                  </motion.div>

                  {/* Right Column - Image */}
                  <motion.div
                     initial={{ opacity: 0, scale: 0.9 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5 }}
                     className="order-1 lg:order-2 flex justify-center lg:justify-end"
                  >
                     <div className={`
                        relative w-full max-w-md lg:max-w-lg
                        rounded-2xl overflow-hidden
                        ${bool
                           ? 'bg-gradient-to-br from-blue-50 to-purple-50 shadow-xl'
                           : 'bg-gradient-to-br from-gray-800 to-gray-700 shadow-xl'}
                        p-4 md:p-6
                     `}>
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>

                        <div className="relative z-10">
                           <ScanMePic />
                        </div>
                     </div>
                  </motion.div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default BenefitsQR