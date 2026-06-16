// components/OpenProduct.tsx
import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRocket, FaStar, FaPlug } from 'react-icons/fa';

interface OpenProductProps {
  isOpenQR: boolean;
}

const OpenProduct: React.FC<OpenProductProps> = ({ isOpenQR }) => {
  const productItems = [
    { name: "Features", link: "/product/features", icon: FaRocket, description: "Explore all features" },
    { name: "Pricing", link: "/product/pricing", icon: FaStar, description: "Choose your plan" },
    { name: "Integrations", link: "/product/integrations", icon: FaPlug, description: "Connect with tools" },
  ];

  return (
    <AnimatePresence>
      {isOpenQR && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="mt-2 ml-4 space-y-1">
            {productItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-white/10 transition-all duration-200 group"
              >
                <item.icon className="w-4 h-4 text-purple-500" />
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-white">
                    {item.name}
                  </div>
                  <div className="text-xs text-gray-500">{item.description}</div>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OpenProduct;