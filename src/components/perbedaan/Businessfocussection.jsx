import React from 'react';
import { motion } from 'framer-motion';

const BusinessFocusSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Perbedaan <span className="text-red-500">Fokus Bisnis</span>
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Telkom Focus */}
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
            variants={cardVariants}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <h3 className="text-2xl font-bold text-red-500">Telkom</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition-colors">
                <span className="text-red-500 text-xl font-bold">•</span>
                <span className="text-gray-700 text-base">Infrastruktur digital nasional</span>
              </li>
              <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition-colors">
                <span className="text-red-500 text-xl font-bold">•</span>
                <span className="text-gray-700 text-base">Data center & Cloud</span>
              </li>
              <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition-colors">
                <span className="text-red-500 text-xl font-bold">•</span>
                <span className="text-gray-700 text-base">Solusi enterprise & pemerintahan</span>
              </li>
              <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition-colors">
                <span className="text-red-500 text-xl font-bold">•</span>
                <span className="text-gray-700 text-base">Platform digital (IoT, Big Data)</span>
              </li>
            </ul>
          </motion.div>

          {/* Telkomsel Focus */}
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
            variants={cardVariants}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-2xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-red-600">Telkomsel</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition-colors">
                <span className="text-red-600 text-xl font-bold">•</span>
                <span className="text-gray-700 text-base">Telekomunikasi seluler</span>
              </li>
              <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition-colors">
                <span className="text-red-600 text-xl font-bold">•</span>
                <span className="text-gray-700 text-base">Internet mobile</span>
              </li>
              <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition-colors">
                <span className="text-red-600 text-xl font-bold">•</span>
                <span className="text-gray-700 text-base">Layanan digital lifestyle</span>
              </li>
              <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition-colors">
                <span className="text-red-600 text-xl font-bold">•</span>
                <span className="text-gray-700 text-base">Konten hiburan & aplikasi digital</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessFocusSection;