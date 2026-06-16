// components/QrOpen.tsx (simplified version if you still want to use it)
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQrcode, FaHistory, FaCamera } from 'react-icons/fa';
import Link from 'next/link';

interface QrOpenProps {
  isOpenQR: boolean;
}

const QrOpen: React.FC<QrOpenProps> = ({ isOpenQR }) => {
  const qrItems = [
    { name: "Generate QR", link: "/QR-Code/generate", icon: FaQrcode },
    { name: "Scan QR", link: "/QR-Code/scan", icon: FaCamera },
    { name: "History", link: "/QR-Code/history", icon: FaHistory },
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
            {qrItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-white/10 transition-all duration-200"
              >
                <item.icon className="w-4 h-4 text-blue-500" />
                <span className="text-sm text-gray-700 dark:text-gray-300">{item.name}</span>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QrOpen;