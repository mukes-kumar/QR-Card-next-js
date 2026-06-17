'use client'
import React, { useContext, useState } from 'react'
import { FaLink, FaSms, FaWhatsapp, FaWifi, FaArrowRight, FaSearch } from "react-icons/fa";
import { MdEmail, MdOutlineMenu, MdCall } from "react-icons/md";
import { BsFillPersonVcardFill, BsCalendar2EventFill } from "react-icons/bs";
import Link from 'next/link';
import { MyContext } from '../Context/context';
import { motion, AnimatePresence, Variants } from 'framer-motion';

type TypeBoolean = {
  title: string,
}

function QRCodeType({ title }: TypeBoolean) {
  const bool = useContext(MyContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const items = [
    { name: 'Link', Des: 'Link to any Website URL', icon: FaLink, color: 'from-blue-500 to-blue-600', category: 'Basic' },
    { name: 'E-mail', Des: 'Send an email', icon: MdEmail, color: 'from-red-500 to-red-600', category: 'Basic' },
    { name: 'Text', Des: 'Share Text', icon: MdOutlineMenu, color: 'from-gray-500 to-gray-600', category: 'Basic' },
    { name: 'Call', Des: 'Make a call', icon: MdCall, color: 'from-green-500 to-green-600', category: 'Basic' },
    { name: 'SMS', Des: 'Send message', icon: FaSms, color: 'from-purple-500 to-purple-600', category: 'Basic' },
    { name: 'Whatsapp', Des: 'Send whatsapp message', icon: FaWhatsapp, color: 'from-green-600 to-green-700', category: 'Advanced' },
    { name: 'WI-FI', Des: 'Connect to WI-FI', icon: FaWifi, color: 'from-cyan-500 to-cyan-600', category: 'Advanced' },
    { name: 'Vcard', Des: 'Save a contact to the phone scanning', icon: BsFillPersonVcardFill, color: 'from-indigo-500 to-indigo-600', category: 'Advanced' },
    { name: 'Event', Des: 'Invite people to your event', icon: BsCalendar2EventFill, color: 'from-pink-500 to-pink-600', category: 'Advanced' },
  ];

  const categories = ['All', 'Basic', 'Advanced'];

  const filteredItems = items.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.Des.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedType === null || selectedType === 'All' || item.category === selectedType;
    return matchesSearch && matchesCategory;
  });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
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
      py-16 md:py-20 lg:py-24
      ${bool ? 'bg-gradient-to-b from-gray-50 to-white' : 'bg-gradient-to-b from-gray-900 to-black'}
      transition-colors duration-300
    `}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 md:mb-12"
          >
            <span className={`
              inline-block px-3 py-1 rounded-full text-xs font-semibold
              bg-gradient-to-r from-green-500 to-emerald-500 text-white
              shadow-lg shadow-green-500/30
              mb-3
            `}>
              QR Code Types
            </span>
            <h2 className={`
              text-2xl md:text-3xl lg:text-4xl font-bold
              ${bool ? 'text-gray-800' : 'text-white'}
            `}>
              {title}
            </h2>
            <p className={`
              text-sm md:text-base mt-3 max-w-2xl mx-auto
              ${bool ? 'text-gray-500' : 'text-gray-400'}
            `}>
              Different QR Code types you can use for Static QR Codes.
            </p>
          </motion.div>

          {/* Search & Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-10"
          >
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search QR types..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`
                  w-full px-4 py-3 pl-11 rounded-xl text-sm
                  border transition-all duration-200
                  ${bool
                    ? 'bg-white border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                    : 'bg-gray-800 border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-white'}
                  placeholder:${bool ? 'text-gray-400' : 'text-gray-500'}
                  outline-none
                `}
              />
              <FaSearch className={`
                absolute left-3 top-1/2 -translate-y-1/2
                ${bool ? 'text-gray-400' : 'text-gray-500'}
              `} />
            </div>
            <div className="flex gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedType(cat === 'All' ? null : cat)}
                  className={`
                    px-4 py-2.5 rounded-xl text-sm font-medium
                    transition-all duration-200
                    ${(selectedType === null && cat === 'All') || selectedType === cat
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/30'
                      : bool
                        ? 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}
                  `}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Results count */}
          <div className="text-xs md:text-sm text-gray-400 mb-4">
            Showing {filteredItems.length} of {items.length} types
          </div>

          {/* QR Types Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          >
            <AnimatePresence mode="wait">
              {filteredItems.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.name}
                    variants={itemVariants}
                    layout
                    whileHover={{
                      y: -8,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                    className="group"
                  >
                    <div className={`
                      h-full rounded-2xl overflow-hidden
                      transition-all duration-300
                      ${bool
                        ? 'bg-white shadow-lg hover:shadow-2xl border border-gray-100'
                        : 'bg-gray-800 shadow-lg hover:shadow-2xl border border-gray-700'}
                    `}>
                      <div className="p-5 md:p-6">
                        {/* Category Badge */}
                        <div className="flex justify-between items-start mb-4">
                          <span className={`
                            text-[10px] px-2 py-0.5 rounded-full font-medium
                            ${bool ? 'bg-gray-100 text-gray-500' : 'bg-gray-700 text-gray-400'}
                          `}>
                            {item.category}
                          </span>
                          <div className={`
                            w-10 h-10 rounded-xl
                            flex items-center justify-center
                            bg-gradient-to-br ${item.color}
                            text-white text-lg
                            shadow-lg
                            transform transition-all duration-300
                            group-hover:scale-110 group-hover:rotate-6
                          `}>
                            <Icon />
                          </div>
                        </div>

                        {/* Content */}
                        <h3 className={`
                          text-lg md:text-xl font-bold
                          ${bool ? 'text-gray-800' : 'text-white'}
                          group-hover:text-blue-500 transition-colors
                        `}>
                          {item.name}
                        </h3>
                        <p className={`
                          text-sm md:text-base mt-2
                          ${bool ? 'text-gray-500' : 'text-gray-400'}
                        `}>
                          {item.Des}
                        </p>

                        {/* Action Button */}
                        <Link
                          href={`/${item.name.toLowerCase()}`}
                          className={`
                            inline-flex items-center justify-between w-full
                            mt-4 pt-4
                            border-t
                            ${bool ? 'border-gray-100' : 'border-gray-700'}
                            text-sm font-medium
                            ${bool ? 'text-blue-500' : 'text-blue-400'}
                            hover:text-blue-600 dark:hover:text-blue-300
                            transition-colors group/btn
                          `}
                        >
                          <span>Choose {item.name}</span>
                          <FaArrowRight className="transform group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className={bool ? 'text-gray-500' : 'text-gray-400'}>
                No QR types found. Try adjusting your search.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

export default QRCodeType