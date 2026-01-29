import React from 'react';
import { motion } from 'framer-motion';

const FooterInfoSection = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 text-white text-center shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.h3 
            className="text-2xl font-bold mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Masih Ada Pertanyaan?
          </motion.h3>
          
          <motion.p 
            className="text-red-100 mb-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Hubungi customer service kami untuk informasi lebih lanjut mengenai layanan Telkom dan Telkomsel
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button className="bg-white text-red-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-md">
              Hubungi Kami
            </button>
            <button className="bg-red-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition-all shadow-md">
              Live Chat
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FooterInfoSection;