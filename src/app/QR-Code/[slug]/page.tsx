"use client"
import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../components/Context/context';
import { motion } from 'framer-motion';

export default function QRCodeFeaturePage({ params }: { params: { slug: string } }) {
  const bool = useContext(MyContext);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const featureName = params.slug.charAt(0).toUpperCase() + params.slug.slice(1).replace('-', ' ');

  return (
    <div className={`w-full min-h-screen pt-32 pb-12 ${bool ? 'bg-gradient-to-br from-slate-50 to-blue-50/30 text-gray-800' : 'bg-gradient-to-br from-slate-900 to-gray-900 text-white'} transition-colors duration-300`}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`
            max-w-4xl mx-auto rounded-3xl shadow-2xl overflow-hidden p-12 text-center
            ${bool
              ? 'bg-white/90 backdrop-blur-xl border border-white/50'
              : 'bg-gray-800/90 backdrop-blur-xl border border-gray-700/50'}
          `}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {featureName}
            </span>
          </h1>
          <p className={`text-lg max-w-2xl mx-auto ${bool ? 'text-gray-600' : 'text-gray-300'}`}>
            This is the dynamic page for the QR Code feature: {featureName}.
            Here you would typically find the specific tools, dashboards, or settings related to this feature.
          </p>
          
          <div className="mt-12 flex justify-center">
            <div className={`w-64 h-64 rounded-2xl flex items-center justify-center border-2 border-dashed ${bool ? 'border-gray-300 bg-gray-50 text-gray-400' : 'border-gray-600 bg-gray-800 text-gray-500'}`}>
              <span className="text-sm font-medium">Content Area</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
