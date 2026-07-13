"use client"
import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../components/Context/context';
import { motion } from 'framer-motion';
import { FaLink, FaSms, FaWifi, FaFilePdf, FaMobileAlt, FaImages, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { BsPersonVcard, BsCalendarEventFill } from "react-icons/bs";
import { GrPaypal } from "react-icons/gr";
import { RiVideoFill } from "react-icons/ri";
import { IoShareSocialSharp, IoMenu } from "react-icons/io5";

// All items mapping to get the correct icon and name
const qrTypesMap: Record<string, { name: string; icon: any; color: string; description: string }> = {
  "link": { name: "Link", icon: FaLink, color: "#3B82F6", description: "Generate a QR code for a website link." },
  "email": { name: "E-mail", icon: MdEmail, color: "#EF4444", description: "Generate a QR code to send an email." },
  "text": { name: "Text", icon: IoMenu, color: "#6B7280", description: "Generate a QR code with custom plain text." },
  "call": { name: "Call", icon: BiSolidPhoneCall, color: "#22C55E", description: "Generate a QR code to initiate a phone call." },
  "sms": { name: "SMS", icon: FaSms, color: "#8B5CF6", description: "Generate a QR code to send a predefined SMS." },
  "v-card": { name: "V-Card", icon: BsPersonVcard, color: "#6366F1", description: "Generate a QR code with contact information." },
  "whatsapp": { name: "WhatsApp", icon: FaWhatsapp, color: "#25D366", description: "Generate a QR code to start a WhatsApp chat." },
  "wi-fi": { name: "WI-FI", icon: FaWifi, color: "#06B6D4", description: "Generate a QR code to share WiFi credentials." },
  "paypall": { name: "PayPal", icon: GrPaypal, color: "#0070BA", description: "Generate a QR code for PayPal payments." },
  "event": { name: "Event", icon: BsCalendarEventFill, color: "#EC4899", description: "Generate a QR code for an upcoming event." },
  "pdf": { name: "PDF", icon: FaFilePdf, color: "#DC2626", description: "Generate a QR code linking to a PDF document." },
  "app": { name: "APP", icon: FaMobileAlt, color: "#374151", description: "Generate a QR code linking to app stores." },
  "images": { name: "Images", icon: FaImages, color: "#A855F7", description: "Generate a QR code linking to an image gallery." },
  "video": { name: "Video", icon: RiVideoFill, color: "#F43F5E", description: "Generate a QR code linking to a video." },
  "social-media": { name: "Social Media", icon: IoShareSocialSharp, color: "#3B82F6", description: "Generate a QR code linking to social profiles." },
};

export default function QRTypePage({ params }: { params: { type: string } }) {
  const bool = useContext(MyContext);
  const [mounted, setMounted] = useState(false);
  const type = params.type;
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentType = qrTypesMap[type];

  if (!currentType) {
    return (
      <div className={`w-full min-h-screen pt-32 flex flex-col items-center justify-center ${bool ? 'bg-gradient-to-br from-slate-50 to-blue-50/30 text-gray-800' : 'bg-gradient-to-br from-slate-900 to-gray-900 text-white'} transition-colors duration-300`}>
        <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
        <p>The QR Code type "{type}" does not exist.</p>
      </div>
    );
  }

  const Icon = currentType.icon;

  return (
    <div className={`w-full min-h-screen pt-24 pb-12 ${bool ? 'bg-gradient-to-br from-slate-50 to-blue-50/30' : 'bg-gradient-to-br from-slate-900 to-gray-900'} transition-colors duration-300`}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`
            max-w-4xl mx-auto rounded-3xl shadow-2xl overflow-hidden
            ${bool
              ? 'bg-white/90 backdrop-blur-xl border border-white/50'
              : 'bg-gray-800/90 backdrop-blur-xl border border-gray-700/50'}
          `}
        >
          {/* Header section with gradient similar to hero section */}
          <div className={`
            px-6 py-8 md:p-12
            ${bool
              ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100/50'
              : 'bg-gradient-to-r from-gray-700 to-gray-800 border-b border-gray-600/50'}
            flex flex-col items-center justify-center text-center
          `}>
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
              className="w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center text-white text-4xl shadow-xl mb-6"
              style={{
                background: `linear-gradient(135deg, ${currentType.color}dd, ${currentType.color}99)`,
                boxShadow: `0 10px 25px ${currentType.color}50`
              }}
            >
              <Icon />
            </motion.div>
            
            <h1 className={`text-3xl md:text-5xl font-bold mb-4 ${bool ? 'text-gray-800' : 'text-white'}`}>
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {currentType.name}
              </span>{' '}
              QR Code
            </h1>
            <p className={`text-base md:text-lg max-w-2xl ${bool ? 'text-gray-600' : 'text-gray-300'}`}>
              {currentType.description} Fill out the required details below to instantly generate and customize your unique QR code.
            </p>
          </div>

          {/* Body Section for the Generator */}
          <div className="p-6 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Input Form Column */}
            <div className="space-y-6">
              <div>
                <h3 className={`text-xl font-semibold mb-4 ${bool ? 'text-gray-800' : 'text-white'}`}>
                  Enter {currentType.name} Details
                </h3>
                
                {/* Example fields based on type */}
                <div className="space-y-4">
                  {type === 'link' || type === 'app' || type === 'social-media' ? (
                    <div>
                      <label className={`block text-sm font-medium mb-1 ${bool ? 'text-gray-700' : 'text-gray-300'}`}>URL</label>
                      <input 
                        type="url" 
                        placeholder="https://example.com" 
                        className={`w-full px-4 py-3 rounded-xl border transition-all ${bool ? 'bg-gray-50 border-gray-200 focus:border-blue-500' : 'bg-gray-700 border-gray-600 text-white focus:border-blue-500'} outline-none`}
                      />
                    </div>
                  ) : type === 'email' ? (
                    <>
                      <div>
                        <label className={`block text-sm font-medium mb-1 ${bool ? 'text-gray-700' : 'text-gray-300'}`}>Email Address</label>
                        <input type="email" placeholder="example@mail.com" className={`w-full px-4 py-3 rounded-xl border transition-all ${bool ? 'bg-gray-50 border-gray-200 focus:border-blue-500' : 'bg-gray-700 border-gray-600 text-white focus:border-blue-500'} outline-none`} />
                      </div>
                      <div>
                        <label className={`block text-sm font-medium mb-1 ${bool ? 'text-gray-700' : 'text-gray-300'}`}>Subject</label>
                        <input type="text" placeholder="Subject" className={`w-full px-4 py-3 rounded-xl border transition-all ${bool ? 'bg-gray-50 border-gray-200 focus:border-blue-500' : 'bg-gray-700 border-gray-600 text-white focus:border-blue-500'} outline-none`} />
                      </div>
                      <div>
                        <label className={`block text-sm font-medium mb-1 ${bool ? 'text-gray-700' : 'text-gray-300'}`}>Message</label>
                        <textarea placeholder="Your message here" rows={3} className={`w-full px-4 py-3 rounded-xl border transition-all ${bool ? 'bg-gray-50 border-gray-200 focus:border-blue-500' : 'bg-gray-700 border-gray-600 text-white focus:border-blue-500'} outline-none`} />
                      </div>
                    </>
                  ) : type === 'text' ? (
                    <div>
                      <label className={`block text-sm font-medium mb-1 ${bool ? 'text-gray-700' : 'text-gray-300'}`}>Your Text</label>
                      <textarea placeholder="Type your text here..." rows={5} className={`w-full px-4 py-3 rounded-xl border transition-all ${bool ? 'bg-gray-50 border-gray-200 focus:border-blue-500' : 'bg-gray-700 border-gray-600 text-white focus:border-blue-500'} outline-none`} />
                    </div>
                  ) : type === 'call' || type === 'sms' || type === 'whatsapp' ? (
                    <div>
                      <label className={`block text-sm font-medium mb-1 ${bool ? 'text-gray-700' : 'text-gray-300'}`}>Phone Number</label>
                      <input type="tel" placeholder="+1 234 567 8900" className={`w-full px-4 py-3 rounded-xl border transition-all ${bool ? 'bg-gray-50 border-gray-200 focus:border-blue-500' : 'bg-gray-700 border-gray-600 text-white focus:border-blue-500'} outline-none`} />
                      {(type === 'sms' || type === 'whatsapp') && (
                        <div className="mt-4">
                          <label className={`block text-sm font-medium mb-1 ${bool ? 'text-gray-700' : 'text-gray-300'}`}>Message</label>
                          <textarea placeholder="Optional initial message..." rows={3} className={`w-full px-4 py-3 rounded-xl border transition-all ${bool ? 'bg-gray-50 border-gray-200 focus:border-blue-500' : 'bg-gray-700 border-gray-600 text-white focus:border-blue-500'} outline-none`} />
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className={`text-sm ${bool ? 'text-gray-500' : 'text-gray-400'}`}>Form fields for {currentType.name} will appear here.</p>
                      <button className={`mt-4 px-6 py-2 rounded-lg bg-blue-600 text-white shadow hover:bg-blue-700 transition-colors`}>
                        Upload / Connect Setup
                      </button>
                    </div>
                  )}
                </div>

                <button className={`mt-6 w-full py-3.5 rounded-xl text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300`}
                  style={{ background: `linear-gradient(to right, ${currentType.color}, #3B82F6)` }}
                >
                  Generate {currentType.name} QR Code
                </button>
              </div>
            </div>

            {/* Preview Column */}
            <div className={`
              flex flex-col items-center justify-center p-8 rounded-2xl border
              ${bool ? 'bg-gray-50 border-gray-200' : 'bg-gray-800 border-gray-700'}
            `}>
              <h3 className={`text-lg font-medium mb-6 ${bool ? 'text-gray-700' : 'text-gray-300'}`}>Preview</h3>
              
              {/* Dummy QR Code */}
              <div className="w-48 h-48 bg-white p-4 rounded-xl shadow-md border border-gray-100 flex items-center justify-center relative overflow-hidden">
                 <div className="w-full h-full border-4 border-gray-900 rounded flex flex-wrap gap-1 p-2 opacity-80">
                    {/* Simulated QR blocks */}
                    {[...Array(64)].map((_, i) => (
                      <div key={i} className={`w-[10%] h-[10%] ${Math.random() > 0.5 ? 'bg-gray-900' : 'bg-transparent'}`}></div>
                    ))}
                 </div>
                 {/* Center icon overlay */}
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md text-gray-800" style={{ color: currentType.color }}>
                      <Icon size={20} />
                    </div>
                 </div>
              </div>

              <div className="flex gap-4 mt-8 w-full">
                <button className={`flex-1 py-2.5 rounded-lg border text-sm font-medium transition-colors ${bool ? 'border-gray-300 text-gray-700 hover:bg-gray-100' : 'border-gray-600 text-gray-300 hover:bg-gray-700'}`}>
                  Customize
                </button>
                <button className={`flex-1 py-2.5 rounded-lg text-sm font-medium text-white transition-colors hover:opacity-90`} style={{ backgroundColor: currentType.color }}>
                  Download
                </button>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
}
