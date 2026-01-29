import React from 'react';
import { motion } from 'framer-motion';

const HeaderSection = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <motion.div 
          className="text-sm text-gray-600 mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="hover:text-red-500 cursor-pointer">Beranda</span> 
          <span className="mx-2">›</span> 
          <span className="text-red-500 font-medium">Perbedaan Telkom dan Telkomsel</span>
        </motion.div>

        {/* Title */}
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Perbedaan <span className="text-red-500">Telkom dan Telkomsel</span>
        </motion.h1>
        
        <motion.p 
          className="text-gray-600 text-lg max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Telkom dan Telkomsel adalah dua perusahaan utama di bawah Telkom Group yang memiliki fokus, peran, dan target layanan yang berbeda namun saling melengkapi dalam ekosistem digital Indonesia.
        </motion.p>
      </div>
    </section>
  );
};

export default HeaderSection;