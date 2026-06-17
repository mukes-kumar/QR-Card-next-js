'use client'
import { useContext, useState, useEffect, useRef } from 'react'
import { MyContext } from '../Context/context';
import { IoMenu, IoCloseSharp } from "react-icons/io5";
import { FaArrowRight, FaChevronDown, FaQrcode, FaHistory, FaCamera, FaRocket, FaStar, FaPlug, FaBolt, FaShieldAlt, FaCode } from "react-icons/fa";
import { MdOutlineDashboardCustomize, MdOutlineDesignServices } from "react-icons/md";
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
// import ChangeColorButton from './changeColorButton';

interface MyComponentProps {
  handleColor: () => void;
}

interface DropdownItem {
  name: string;
  link: string;
  description?: string;
  icon?: React.ReactNode;
  tag?: string;
  color?: string;
}

const NavBar: React.FC<MyComponentProps> = ({ handleColor }) => {
  console.log('jhdsjk', handleColor);
  const bool = useContext(MyContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Dropdown data with rich content
  const dropdowns: Record<string, {
    title: string;
    description: string;
    items: DropdownItem[];
    featured?: DropdownItem[];
    cta?: { text: string; link: string };
  }> = {
    "QR Code": {
      title: "QR Code Solutions",
      description: "Everything you need for QR code management",
      items: [
        { name: "Generate QR", link: "/QR-Code/generate", description: "Create custom QR codes instantly", icon: <FaQrcode className="w-5 h-5" />, color: "text-blue-500" },
        { name: "Scan QR", link: "/QR-Code/scan", description: "Scan and decode QR codes", icon: <FaCamera className="w-5 h-5" />, color: "text-green-500" },
        { name: "QR History", link: "/QR-Code/history", description: "View your QR code history", icon: <FaHistory className="w-5 h-5" />, color: "text-purple-500" },
      ],
      featured: [
        { name: "Bulk Generator", link: "/QR-Code/bulk", description: "Generate multiple QR codes", icon: <FaBolt className="w-5 h-5" />, tag: "New" },
        { name: "Dynamic QR", link: "/QR-Code/dynamic", description: "Editable QR codes", icon: <MdOutlineDesignServices className="w-5 h-5" />, tag: "Popular" },
      ],
      cta: { text: "View All Features →", link: "/QR-Code" }
    },
    "Product": {
      title: "Our Products",
      description: "Discover our powerful product suite",
      items: [
        { name: "Features", link: "/product/features", description: "Explore all features", icon: <FaRocket className="w-5 h-5" />, color: "text-orange-500" },
        { name: "Pricing", link: "/product/pricing", description: "Choose your plan", icon: <FaStar className="w-5 h-5" />, color: "text-yellow-500" },
        { name: "Integrations", link: "/product/integrations", description: "Connect with tools", icon: <FaPlug className="w-5 h-5" />, color: "text-purple-500" },
      ],
      featured: [
        { name: "Enterprise", link: "/product/enterprise", description: "For large organizations", icon: <FaShieldAlt className="w-5 h-5" />, tag: "Enterprise" },
        { name: "API Access", link: "/product/api", description: "Developer API access", icon: <FaCode className="w-5 h-5" />, tag: "Developer" },
      ],
      cta: { text: "Explore Products →", link: "/product" }
    }
  };

  const Links = [
    { name: "QR Code", link: "/QR-Code", hasDropdown: true },
    { name: "FAQ", link: "/faq" },
    { name: "Why Us?", link: "/why-us" },
    { name: "Product", link: "/product", hasDropdown: true },
    { name: "API", link: "/apinav" },
    { name: "Blog", link: "/blogNavBar" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle desktop dropdown
  const handleDropdownEnter = (name: string) => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current);
    }
    setActiveDropdown(name);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  // Handle mobile dropdown
  const toggleMobileDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setActiveDropdown(null);
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = 'unset';
    setActiveDropdown(null);
  };



  // Dropdown variants for animations
  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.98,
      transition: { duration: 0.2 }
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled ? 'py-2 shadow-2xl' : 'py-4'}
        ${bool
            ? 'bg-white/95 backdrop-blur-xl border-b border-gray-100/50'
            : 'bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-gray-800/50'}
      `}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Image
                  className={`h-8 w-auto transition-all duration-300 ${scrolled ? 'h-7' : 'h-8'}`}
                  src={bool ? '/Image1/logo-title.png' : '/Image1/logo-title-white.png'}
                  alt="Logo"
                  width={120}
                  height={32}
                  priority
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-2">
              {Links.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && handleDropdownEnter(link.name)}
                  onMouseLeave={handleDropdownLeave}
                >
                  {link.hasDropdown ? (
                    <button
                      className={`
                        px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200
                        flex items-center space-x-1.5 group relative
                        ${bool
                          ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/80'
                          : 'text-gray-300 hover:text-white hover:bg-white/10'}
                        ${activeDropdown === link.name ? (bool ? 'bg-blue-50/80 text-blue-600' : 'bg-white/10 text-white') : ''}
                      `}
                      onClick={() => toggleMobileDropdown(link.name)}
                    >
                      <span>{link.name}</span>
                      <FaChevronDown className={`
                        w-3 h-3 transition-transform duration-300
                        ${activeDropdown === link.name ? 'rotate-180' : ''}
                      `} />
                    </button>
                  ) : (
                    <Link
                      href={link.link}
                      className={`
                        px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200
                        relative overflow-hidden group
                        ${bool
                          ? 'text-gray-700 hover:text-blue-600'
                          : 'text-gray-300 hover:text-white'}
                      `}
                    >
                      <span className="relative z-10">{link.name}</span>
                      <span className="absolute inset-0 bg-blue-50/0 group-hover:bg-blue-50/20 dark:group-hover:bg-white/5 transition-all duration-300 rounded-xl"></span>
                    </Link>
                  )}

                  {/* Full Width Dropdown - Desktop */}
                  {link.hasDropdown && dropdowns[link.name] && (
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <div className="hidden lg:block fixed left-0 right-0 z-40" style={{ top: scrolled ? '64px' : '72px' }}>
                          <div className="w-full bg-white/95  backdrop-blur-xl border-b border-gray-100/50 dark:border-gray-800/50 shadow-2xl">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                              {/* dark:bg-[#0a0a0a]/95 */}
                              <motion.div
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={dropdownVariants}
                              >
                                <div className="grid grid-cols-12 gap-8">
                                  {/* Left Column - Main Items */}
                                  <div className="col-span-7">
                                    <div className="mb-6">
                                      <h3 className={`
                                        text-xl font-bold mb-1
                                        ${bool ? 'text-gray-900' : 'text-white'}
                                      `}>
                                        {dropdowns[link.name].title}
                                      </h3>
                                      <p className="text-sm text-gray-500">
                                        {dropdowns[link.name].description}
                                      </p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                      {dropdowns[link.name].items.map((item) => (
                                        <motion.div
                                          key={item.name}
                                          variants={itemVariants}
                                          onHoverStart={() => setHoveredItem(item.name)}
                                          onHoverEnd={() => setHoveredItem(null)}
                                        >
                                          <Link
                                            href={item.link}
                                            className={`
                                              flex items-center space-x-3 p-4 rounded-xl
                                              transition-all duration-300 group relative
                                              ${bool
                                                ? 'hover:bg-blue-50/80'
                                                : 'hover:bg-white/10'}
                                              ${hoveredItem === item.name ? 'scale-105' : ''}
                                            `}
                                          >
                                            <div className={`
                                              w-10 h-10 rounded-lg flex items-center justify-center
                                              ${bool ? 'bg-blue-50' : 'bg-white/10'}
                                              ${item.color || 'text-blue-500'}
                                              transition-all duration-300
                                              group-hover:scale-110
                                            `}>
                                              {item.icon}
                                            </div>
                                            <div className="flex-1">
                                              <div className={`
                                                text-sm font-semibold
                                                ${bool ? 'text-gray-900 group-hover:text-blue-600' : 'text-white'}
                                              `}>
                                                {item.name}
                                              </div>
                                              <div className="text-xs text-gray-500">
                                                {item.description}
                                              </div>
                                            </div>
                                          </Link>
                                        </motion.div>
                                      ))}
                                    </div>
                                  </div>

                                  {/* Right Column - Featured & CTA */}
                                  <div className="col-span-5 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6">
                                    <div className="mb-6">
                                      <h4 className={`
                                        text-sm font-semibold mb-3
                                        ${bool ? 'text-gray-700' : 'text-gray-300'}
                                      `}>
                                        Featured
                                      </h4>
                                      <div className="space-y-3">
                                        {dropdowns[link.name].featured?.map((item) => (
                                          <Link
                                            key={item.name}
                                            href={item.link}
                                            className={`
                                              flex items-center justify-between p-3 rounded-xl
                                              transition-all duration-300
                                              ${bool
                                                ? 'hover:bg-white/80'
                                                : 'hover:bg-white/5'}
                                            `}
                                          >
                                            <div className="flex items-center space-x-3">
                                              <div className="text-blue-500 dark:text-blue-400">
                                                {item.icon}
                                              </div>
                                              <div>
                                                <div className={`
                                                  text-sm font-medium
                                                  ${bool ? 'text-gray-900' : 'text-white'}
                                                `}>
                                                  {item.name}
                                                </div>
                                                <div className="text-xs text-gray-500">
                                                  {item.description}
                                                </div>
                                              </div>
                                            </div>
                                            {item.tag && (
                                              <span className={`
                                                text-xs px-2 py-1 rounded-full font-medium
                                                ${item.tag === 'New' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : ''}
                                                ${item.tag === 'Popular' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' : ''}
                                                ${item.tag === 'Enterprise' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' : ''}
                                                ${item.tag === 'Developer' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' : ''}
                                              `}>
                                                {item.tag}
                                              </span>
                                            )}
                                          </Link>
                                        ))}
                                      </div>
                                    </div>

                                    {dropdowns[link.name].cta && (
                                      <div className="pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                                        <Link
                                          href={dropdowns[link.name].cta.link}
                                          className={`
                                            inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl
                                            text-sm font-medium transition-all duration-300
                                            bg-blue-600 text-white hover:bg-blue-700
                                            shadow-lg shadow-blue-600/30 hover:shadow-xl hover:scale-105
                                          `}
                                        >
                                          <span>{dropdowns[link.name].cta.text}</span>
                                          <FaArrowRight className="w-3 h-3" />
                                        </Link>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </motion.div>
                            </div>
                          </div>
                        </div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop Right Buttons */}
            <div className="hidden lg:flex lg:items-center lg:space-x-3">
              {/* <ChangeColorButton bool={bool} handleColor={handleColor} open={false} /> */}

              <div className="flex items-center space-x-2">
                <Link
                  href="/login"
                  className={`
                    flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-medium
                    transition-all duration-300 hover:scale-105
                    ${bool
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-xl hover:shadow-orange-500/40'
                      : 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-xl hover:shadow-orange-500/40'}
                  `}
                >
                  <FaArrowRight className="w-4 h-4" />
                  <span>Login</span>
                </Link>

                <Link
                  href="/dashboard"
                  className={`
                    flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-medium
                    transition-all duration-300 hover:scale-105
                    ${bool
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-xl hover:shadow-blue-600/40'
                      : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-xl hover:shadow-blue-600/40'}
                  `}
                >
                  <MdOutlineDashboardCustomize className="w-4 h-4" />
                  <span>Dashboard</span>
                </Link>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className={`
                  p-2.5 rounded-xl transition-all duration-300 
                  ${bool ? 'text-gray-700 hover:bg-blue-50' : 'text-gray-300 hover:bg-white/10'}
                `}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <IoCloseSharp className="w-6 h-6" />
                ) : (
                  <IoMenu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>


        {/* Mobile Full Screen Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 200
              }}
              className={`
        lg:hidden fixed inset-0 overflow-y-auto
        ${bool ? 'bg-white' : 'bg-[#0a0a0a]'}
        ${scrolled ? 'top-[64px]' : 'top-[72px]'}
        overflow-y-auto
        scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-transparent
        hover:scrollbar-thumb-blue-600

      `}
              style={{
                height: "min-content",
                scrollbarWidth: 'thin',
                scrollbarColor: '#3b82f6 transparent'
              }}
            >
              <div className="px-4 py-6 space-y-2 pb-32 min-h-full">
                {Links.map((link) => (
                  <div key={link.name} className="border-b border-gray-100/20 dark:border-gray-800/20 last:border-0">
                    {link.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => toggleMobileDropdown(link.name)}
                          className={`
                    w-full flex items-center justify-between px-4 py-4 rounded-xl
                    text-base font-medium transition-all duration-200
                    ${bool ? 'text-gray-700 hover:bg-blue-50' : 'text-gray-300 hover:bg-white/10'}
                  `}
                        >
                          <span>{link.name}</span>
                          <FaChevronDown className={`
                    w-4 h-4 transition-transform duration-300
                    ${activeDropdown === link.name ? 'rotate-180' : ''}
                  `} />
                        </button>

                        <AnimatePresence>
                          {activeDropdown === link.name && dropdowns[link.name] && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-4 pb-4 space-y-3">
                                {/* Mobile Dropdown Title */}
                                <div className="mt-2 mb-3">
                                  <h3 className={`
                            text-lg font-bold
                            ${bool ? 'text-gray-900' : 'text-white'}
                          `}>
                                    {dropdowns[link.name].title}
                                  </h3>
                                  <p className="text-sm text-gray-500">
                                    {dropdowns[link.name].description}
                                  </p>
                                </div>

                                {/* Mobile Dropdown Items */}
                                {dropdowns[link.name].items.map((item) => (
                                  <Link
                                    key={item.name}
                                    href={item.link}
                                    className={`
                              flex items-center space-x-4 p-4 rounded-xl
                              transition-all duration-200
                              ${bool ? 'hover:bg-blue-50' : 'hover:bg-white/10'}
                            `}
                                    onClick={closeMobileMenu}
                                  >
                                    <div className={`
                              w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0
                              ${bool ? 'bg-blue-50' : 'bg-white/10'}
                              ${item.color || 'text-blue-500'}
                            `}>
                                      {item.icon}
                                    </div>
                                    <div className="flex-1">
                                      <div className={`
                                font-medium
                                ${bool ? 'text-gray-900' : 'text-white'}
                              `}>
                                        {item.name}
                                      </div>
                                      <div className="text-sm text-gray-500">
                                        {item.description}
                                      </div>
                                    </div>
                                  </Link>
                                ))}

                                {/* Mobile Featured Items */}
                                {dropdowns[link.name].featured && (
                                  <div className="mt-3 p-4 rounded-xl bg-gradient-to-br from-blue-50/30 to-purple-50/30 dark:from-blue-900/10 dark:to-purple-900/10">
                                    <div className="text-sm font-semibold text-gray-500 mb-3">
                                      Featured
                                    </div>
                                    {dropdowns[link.name].featured.map((item) => (
                                      <Link
                                        key={item.name}
                                        href={item.link}
                                        className={`
                                  flex items-center justify-between p-3 rounded-xl
                                  transition-all duration-200
                                  ${bool ? 'hover:bg-white/80' : 'hover:bg-white/5'}
                                `}
                                        onClick={closeMobileMenu}
                                      >
                                        <div className="flex items-center space-x-3">
                                          <div className="text-blue-500 dark:text-blue-400">
                                            {item.icon}
                                          </div>
                                          <div>
                                            <div className={`
                                      text-sm font-medium
                                      ${bool ? 'text-gray-900' : 'text-white'}
                                    `}>
                                              {item.name}
                                            </div>
                                            <div className="text-xs text-gray-500">
                                              {item.description}
                                            </div>
                                          </div>
                                        </div>
                                        {item.tag && (
                                          <span className={`
                                    text-xs px-2 py-1 rounded-full font-medium flex-shrink-0 ml-2
                                    ${item.tag === 'New' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : ''}
                                    ${item.tag === 'Popular' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' : ''}
                                    ${item.tag === 'Enterprise' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' : ''}
                                    ${item.tag === 'Developer' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' : ''}
                                  `}>
                                            {item.tag}
                                          </span>
                                        )}
                                      </Link>
                                    ))}
                                  </div>
                                )}

                                {/* Mobile CTA */}
                                {dropdowns[link.name].cta && (
                                  <Link
                                    href={dropdowns[link.name].cta.link}
                                    className={`
                              flex items-center justify-center space-x-2 w-full p-4 rounded-xl
                              text-sm font-medium transition-all duration-200
                              bg-blue-600 text-white hover:bg-blue-700
                            `}
                                    onClick={closeMobileMenu}
                                  >
                                    <span>{dropdowns[link.name].cta.text}</span>
                                    <FaArrowRight className="w-4 h-4" />
                                  </Link>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.link}
                        className={`
                  flex items-center px-4 py-4 rounded-xl text-base font-medium
                  transition-all duration-200
                  ${bool ? 'text-gray-700 hover:bg-blue-50' : 'text-gray-300 hover:bg-white/10'}
                `}
                        onClick={closeMobileMenu}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}

                {/* Mobile Action Buttons */}
                <div className="pt-4 space-y-3">
                  {/* <ChangeColorButton bool={bool} handleColor={handleColor} open={false} /> */}

                  <Link
                    href="/login"
                    className={`
              flex items-center justify-center space-x-2 w-full px-4 py-4 rounded-xl
              text-sm font-medium transition-all duration-200
              bg-gradient-to-r from-orange-500 to-orange-600 text-white
              hover:shadow-lg hover:shadow-orange-500/30
            `}
                    onClick={closeMobileMenu}
                  >
                    <FaArrowRight className="w-4 h-4" />
                    <span>Login</span>
                  </Link>

                  <Link
                    href="/dashboard"
                    className={`
              flex items-center justify-center space-x-2 w-full px-4 py-4 rounded-xl
              text-sm font-medium transition-all duration-200
              bg-gradient-to-r from-blue-600 to-blue-700 text-white
              hover:shadow-lg hover:shadow-blue-600/30
            `}
                    onClick={closeMobileMenu}
                  >
                    <MdOutlineDashboardCustomize className="w-4 h-4" />
                    <span>Dashboard</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default NavBar;