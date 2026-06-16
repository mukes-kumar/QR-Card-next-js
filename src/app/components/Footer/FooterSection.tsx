'use client'
import React, { useContext } from 'react'
import { ImLinkedin } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook, FaYoutube, FaInstagram, FaArrowUp } from "react-icons/fa";
import Link from 'next/link';
import { MyContext } from '../Context/context';
import Image from 'next/image';
import { motion } from 'framer-motion';

function FooterSection() {
  const bool = useContext(MyContext)

  const footerLinks = {
    product: [
      { name: 'QR Code Types', href: '#' },
      { name: 'Dynamic QR Codes', href: '#' },
      { name: 'Static QR Codes', href: '#' },
      { name: 'Features', href: '#' },
      { name: 'Pricing', href: '#' },
      { name: 'API', href: '#' },
      { name: 'Affiliate Program', href: '#' },
    ],
    useCases: [
      { name: 'Weddings', href: '#' },
      { name: 'Business Cards', href: '#' },
      { name: 'Restaurants', href: '#' },
      { name: 'Real Estate', href: '#' },
      { name: 'Events', href: '#' },
    ],
    help: [
      { name: 'Help Center', href: '#' },
      { name: 'FAQ', href: '#' },
      { name: 'Contact Us', href: '#' },
      { name: 'Changelog', href: '#' },
      { name: 'Status', href: '#' },
      { name: 'Cancel Subscription', href: '#' },
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Disclaimer', href: '#' },
      { name: 'Refund Policy', href: '#' },
    ]
  };

  const socialLinks = [
    { icon: FaFacebook, href: 'https://www.facebook.com/', color: 'hover:bg-[#1877f2]' },
    { icon: FaSquareXTwitter, href: 'https://x.com/', color: 'hover:bg-[#000000]' },
    { icon: ImLinkedin, href: 'https://www.linkedin.com/', color: 'hover:bg-[#0a66c2]' },
    { icon: FaInstagram, href: 'https://www.instagram.com/', color: 'hover:bg-[#e4405f]' },
    { icon: FaYoutube, href: 'https://www.youtube.com/', color: 'hover:bg-[#ff0000]' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`
      relative
      ${bool
        ? 'bg-gradient-to-b from-white to-gray-50 border-t border-gray-200'
        : 'bg-gradient-to-b from-gray-900 to-black border-t border-gray-800'}
      transition-colors duration-300
    `}>
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`
          absolute -top-5 left-1/2 -translate-x-1/2
          w-12 h-12 rounded-full
          flex items-center justify-center
          bg-gradient-to-r from-blue-500 to-purple-500
          text-white text-xl
          shadow-lg shadow-blue-500/30
          hover:shadow-xl hover:shadow-blue-500/40
          hover:scale-110
          transition-all duration-300
          group
        `}
      >
        <FaArrowUp className="group-hover:-translate-y-1 transition-transform" />
      </button>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Column - 4 columns */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src={bool ? '/Image1/logo-title.png' : '/Image1/logo-title-white.png'}
                alt='Logo'
                width={120}
                height={35}
                className="h-8 w-auto"
              />
            </Link>

            <p className={`
              text-sm md:text-base leading-relaxed
              ${bool ? 'text-gray-600' : 'text-gray-400'}
            `}>
              Generate fully customized QR Codes, with color & shape, logo and keep track of
              how many people scan your QR Codes, from where and on what date.
            </p>

            {/* Social Links */}
            <div>
              <h4 className={`
                text-sm font-semibold mb-3
                ${bool ? 'text-gray-800' : 'text-white'}
              `}>
                Follow Us
              </h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3 }}
                      className={`
                        w-10 h-10 rounded-xl
                        flex items-center justify-center
                        ${bool
                          ? 'bg-gray-100 text-gray-600 hover:text-white'
                          : 'bg-gray-800 text-gray-400 hover:text-white'}
                        ${social.color}
                        transition-all duration-300
                        hover:shadow-lg
                      `}
                    >
                      <Icon className="text-lg" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Links Columns - 8 columns (2 each) */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8">
              {/* Product */}
              <div>
                <h4 className={`
                  text-sm font-semibold mb-4
                  ${bool ? 'text-gray-800' : 'text-white'}
                `}>
                  Product
                </h4>
                <ul className="space-y-2.5">
                  {footerLinks.product.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className={`
                          text-sm
                          ${bool ? 'text-gray-500 hover:text-blue-500' : 'text-gray-400 hover:text-white'}
                          transition-colors duration-200
                        `}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Use Cases */}
              <div>
                <h4 className={`
                  text-sm font-semibold mb-4
                  ${bool ? 'text-gray-800' : 'text-white'}
                `}>
                  Use Cases
                </h4>
                <ul className="space-y-2.5">
                  {footerLinks.useCases.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className={`
                          text-sm
                          ${bool ? 'text-gray-500 hover:text-blue-500' : 'text-gray-400 hover:text-white'}
                          transition-colors duration-200
                        `}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Help */}
              <div>
                <h4 className={`
                  text-sm font-semibold mb-4
                  ${bool ? 'text-gray-800' : 'text-white'}
                `}>
                  Help
                </h4>
                <ul className="space-y-2.5">
                  {footerLinks.help.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className={`
                          text-sm
                          ${bool ? 'text-gray-500 hover:text-blue-500' : 'text-gray-400 hover:text-white'}
                          transition-colors duration-200
                        `}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className={`
                  text-sm font-semibold mb-4
                  ${bool ? 'text-gray-800' : 'text-white'}
                `}>
                  Company
                </h4>
                <ul className="space-y-2.5">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className={`
                          text-sm
                          ${bool ? 'text-gray-500 hover:text-blue-500' : 'text-gray-400 hover:text-white'}
                          transition-colors duration-200
                        `}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`
          mt-8 pt-6
          flex flex-col md:flex-row items-center justify-between gap-4
          border-t
          ${bool ? 'border-gray-200' : 'border-gray-800'}
        `}>
          <p className={`
            text-xs text-center md:text-left
            ${bool ? 'text-gray-500' : 'text-gray-500'}
          `}>
            © QR.io 2024. All rights reserved. QR Code is a registered trademark of DENSO WAVE INCORPORATED
          </p>

          {/* Language Selector */}
          <div className="relative">
            <select className={`
              appearance-none px-4 py-2 pr-10 rounded-xl text-sm
              border transition-all duration-200
              ${bool
                ? 'bg-white border-gray-200 text-gray-700 hover:border-blue-400'
                : 'bg-gray-800 border-gray-700 text-gray-300 hover:border-blue-400'}
              focus:outline-none focus:ring-2 focus:ring-blue-500/20
              cursor-pointer
            `}>
              <option value="en">🌐 English</option>
              <option value="es">🇪🇸 Español</option>
              <option value="fr">🇫🇷 Français</option>
              <option value="de">🇩🇪 Deutsch</option>
              <option value="ja">🇯🇵 日本語</option>
            </select>
            <div className={`
              absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none
              ${bool ? 'text-gray-400' : 'text-gray-500'}
            `}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6">
          <div className="flex items-center space-x-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`
                    w-6 h-6 rounded-full
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
              text-xs
              ${bool ? 'text-gray-500' : 'text-gray-500'}
            `}>
              Trusted by 50K+ users
            </span>
          </div>
          <div className="flex items-center space-x-4 text-xs text-gray-500">
            <span>⭐ 4.9/5 Rating</span>
            <span className="w-px h-4 bg-gray-300 dark:bg-gray-700"></span>
            <span>🔒 Secure</span>
            <span className="w-px h-4 bg-gray-300 dark:bg-gray-700"></span>
            <span>⚡ 99.9% Uptime</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection