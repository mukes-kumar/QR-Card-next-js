"use client"
import React, { useContext, useState } from 'react'
import SubmitUrl from './SubmitUrl';
import ScannerHerosection from './ScannerHerosection';
import { IoMdMenu } from "react-icons/io";
import { FaLink, FaSms, FaWifi, FaFilePdf, FaMobileAlt, FaImages, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { BsPersonVcard, BsCalendarEventFill } from "react-icons/bs";
import { GrPaypal } from "react-icons/gr";
import { RiVideoFill } from "react-icons/ri";
import { IoShareSocialSharp, IoGridOutline } from "react-icons/io5";
// import { TbCategory } from "react-icons/tb";
import Link from 'next/link';
import { MyContext } from '../Context/context';
import { motion, AnimatePresence } from 'framer-motion';

interface VCardData {
  firstName: string;
  url: string;
}

function HeroSection() {
  const [isOpacity, setIsOpacity] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [vCardData, setVCardData] = useState<VCardData>({
    firstName: '',
    url: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setVCardData({ ...vCardData, [name]: value });
    setIsOpacity(!isOpacity);
  };

  const bool = useContext(MyContext);

  // All items with categories
  const allItems = [
    { name: "Link", link: "/link", icon: FaLink, category: "Basic", color: "#3B82F6" },
    { name: "E-mail", link: "/email", icon: MdEmail, category: "Basic", color: "#EF4444" },
    { name: "Text", link: "/text", icon: IoMdMenu, category: "Basic", color: "#6B7280" },
    { name: "Call", link: "/call", icon: BiSolidPhoneCall, category: "Basic", color: "#22C55E" },
    { name: "SMS", link: "/sms", icon: FaSms, category: "Basic", color: "#8B5CF6" },
    { name: "V-Card", link: "/v-card", icon: BsPersonVcard, category: "Advanced", color: "#6366F1" },
    { name: "WhatsApp", link: "/whatsapp", icon: FaWhatsapp, category: "Advanced", color: "#25D366" },
    { name: "WI-FI", link: "/wi-fi", icon: FaWifi, category: "Advanced", color: "#06B6D4" },
    { name: "PayPal", link: "/paypall", icon: GrPaypal, category: "Advanced", color: "#0070BA" },
    { name: "Event", link: "/event", icon: BsCalendarEventFill, category: "Advanced", color: "#EC4899" },
    { name: "PDF", link: "/pdf", icon: FaFilePdf, category: "Media", color: "#DC2626" },
    { name: "APP", link: "/app", icon: FaMobileAlt, category: "Media", color: "#374151" },
    { name: "Images", link: "/images", icon: FaImages, category: "Media", color: "#A855F7" },
    { name: "Video", link: "/video", icon: RiVideoFill, category: "Media", color: "#F43F5E" },
    { name: "Social Media", link: "/social-media", icon: IoShareSocialSharp, category: "Media", color: "#3B82F6" },
  ];

  const categories = ['All', 'Basic', 'Advanced', 'Media'];

  const filteredItems = activeCategory === 'All'
    ? allItems
    : allItems.filter(item => item.category === activeCategory);

  return (
    <div className={`w-full min-h-screen ${bool ? 'bg-gradient-to-br from-slate-50 to-blue-50/30' : 'bg-gradient-to-br from-slate-900 to-gray-900'} transition-colors duration-300`}>
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-4 md:py-6">
        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`
            max-w-7xl mx-auto mt-14 md:mt-16 lg:mt-20
            rounded-3xl shadow-2xl overflow-hidden
            ${bool
              ? 'bg-white/90 backdrop-blur-xl border border-white/50'
              : 'bg-gray-800/90 backdrop-blur-xl border border-gray-700/50'}
          `}
        >
          {/* Header with gradient */}
          <div className={`
            px-4 sm:px-6 md:px-8 py-4 md:py-5
            ${bool
              ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100/50'
              : 'bg-gradient-to-r from-gray-700 to-gray-800 border-b border-gray-600/50'}
          `}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h1 className={`
                  text-xl md:text-2xl font-bold
                  ${bool ? 'text-gray-800' : 'text-white'}
                `}>
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    QR Code
                  </span>{' '}
                  Solutions
                </h1>
                <p className={`
                  text-xs md:text-sm
                  ${bool ? 'text-gray-500' : 'text-gray-400'}
                `}>
                  Choose from 15+ QR code types
                </p>
              </div>

              {/* Category Filter Chips */}
              <div className="flex flex-wrap gap-1.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`
                      px-3 py-1.5 rounded-full text-xs font-medium
                      transition-all duration-200
                      ${activeCategory === cat
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 scale-105'
                        : bool
                          ? 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}
                    `}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
            {/* Left Column - Categories Grid - 3/5 */}
            <div className="lg:col-span-3 p-4 sm:p-5 md:p-6 lg:p-8">
              {/* Search/Filter Bar */}
              <div className="mb-4 md:mb-5">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search QR types..."
                    className={`
                      w-full px-4 py-2.5 rounded-xl text-sm
                      border transition-all duration-200
                      ${bool
                        ? 'bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                        : 'bg-gray-700 border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-white'}
                      placeholder:${bool ? 'text-gray-400' : 'text-gray-500'}
                      outline-none
                    `}
                  />
                  <IoGridOutline className={`
                    absolute right-3 top-1/2 -translate-y-1/2
                    ${bool ? 'text-gray-400' : 'text-gray-500'}
                  `} />
                </div>
              </div>

              {/* Items Grid */}
              <motion.div
                layout
                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 md:gap-2.5"
              >
                <AnimatePresence mode="wait">
                  {filteredItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.name}
                        layout
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                        whileHover={{
                          y: -4,
                          transition: { type: "spring", stiffness: 300 }
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link
                          href={item.link}
                          className={`
                            group flex flex-col items-center justify-center
                            p-3 md:p-3.5 rounded-2xl
                            transition-all duration-300
                            ${bool
                              ? 'hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 hover:shadow-lg'
                              : 'hover:bg-gray-700 hover:shadow-lg'}
                            border-2
                            ${bool
                              ? 'border-gray-100 hover:border-blue-200'
                              : 'border-gray-700 hover:border-gray-600'}
                            relative overflow-hidden
                          `}
                        >
                          {/* Icon with gradient background */}
                          <div
                            className={`
                              w-10 h-10 md:w-11 md:h-11 rounded-xl
                              flex items-center justify-center
                              text-white text-base md:text-lg
                              transition-all duration-300
                              group-hover:scale-110 group-hover:rotate-6
                              shadow-lg
                            `}
                            style={{
                              background: `linear-gradient(135deg, ${item.color}dd, ${item.color}99)`,
                              boxShadow: `0 4px 15px ${item.color}40`
                            }}
                          >
                            <Icon />
                          </div>

                          <span className={`
                            text-[10px] md:text-xs font-medium mt-2
                            ${bool ? 'text-gray-700' : 'text-gray-300'}
                            group-hover:text-blue-600 transition-colors
                          `}>
                            {item.name}
                          </span>

                          {/* Category badge */}
                          <span className={`
                            text-[8px] px-1.5 py-0.5 rounded-full mt-0.5
                            ${bool ? 'bg-gray-100 text-gray-400' : 'bg-gray-700 text-gray-500'}
                          `}>
                            {item.category}
                          </span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </motion.div>

              {/* Results count */}
              <div className="mt-3 text-xs text-gray-400">
                Showing {filteredItems.length} of {allItems.length} types
              </div>

              {/* Submit URL Section */}
              <div className="mt-4 md:mt-5 pt-4 md:pt-5 border-t border-gray-200 dark:border-gray-700">
                <SubmitUrl
                  vCardData={vCardData}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Right Column - Scanner - 2/5 with glass effect */}
            <div className={`
              lg:col-span-2
              relative overflow-hidden
              ${bool
                ? 'bg-gradient-to-br from-blue-50/80 to-purple-50/80 backdrop-blur-xl'
                : 'bg-gradient-to-br from-gray-700/80 to-gray-800/80 backdrop-blur-xl'}
              p-4 sm:p-5 md:p-6 lg:p-8
              flex items-center justify-center
              min-h-[300px] md:min-h-[350px] lg:min-h-[450px]
              border-t lg:border-t-0 lg:border-l
              ${bool ? 'border-gray-200/50' : 'border-gray-700/50'}
            `}>
              {/* Animated background elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
              </div>

              {/* Scanner Content */}
              <div className="relative z-10 w-full">
                <ScannerHerosection
                  isOpacity={isOpacity}
                  bool={bool}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSection