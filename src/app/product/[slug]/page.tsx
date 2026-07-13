"use client"
import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../components/Context/context';
import { motion } from 'framer-motion';

export default function ProductFeaturePage({ params }: { params: { slug: string } }) {
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
            Product <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              {featureName}
            </span>
          </h1>
          <p className={`text-lg max-w-2xl mx-auto ${bool ? 'text-gray-600' : 'text-gray-300'}`}>
            Welcome to the Product {featureName} page. Here you'll discover all the powerful tools and capabilities our platform has to offer for this specific area.
          </p>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className={`p-6 rounded-2xl border ${bool ? 'border-gray-200 bg-white/50' : 'border-gray-700 bg-gray-800/50'}`}>
                <div className={`w-12 h-12 rounded-full mb-4 mx-auto ${bool ? 'bg-orange-100' : 'bg-orange-900/30'}`}></div>
                <h3 className="font-semibold mb-2">Feature Highlight {item}</h3>
                <p className={`text-sm ${bool ? 'text-gray-500' : 'text-gray-400'}`}>Description of what makes this product capability amazing.</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
