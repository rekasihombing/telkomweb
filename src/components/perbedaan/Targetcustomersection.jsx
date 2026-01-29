import React from 'react';
import { motion } from 'framer-motion';

const TargetCustomerSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Perbedaan <span className="text-red-500">Target Pelanggan</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Telkom Targets */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <h3 className="text-3xl font-bold">Telkom</h3>
              <span className="bg-red-100 text-red-600 px-4 py-1.5 rounded-full text-sm font-semibold">Segment</span>
            </div>

            <motion.div 
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-gradient-to-br from-red-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-red-100"
                variants={itemVariants}
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-3xl leading-none">🏢</span>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">B2B, B2G, B2C</h4>
                    <p className="text-gray-600 text-sm mt-2">Perusahaan, Pemerintah, dan Konsumen</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-gradient-to-br from-red-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-red-100"
                variants={itemVariants}
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-3xl leading-none">📋</span>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">Solusi enterprise & pemerintahan</h4>
                    <p className="text-gray-600 text-sm mt-2">Perusahaan & Pemerintah</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-gradient-to-br from-red-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-red-100"
                variants={itemVariants}
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-3xl leading-none">💻</span>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">Platform digital (IoT, Big Data)</h4>
                    <p className="text-gray-600 text-sm mt-2">Korporasi & Industri</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Telkomsel Targets */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">⚡</span>
              </div>
              <h3 className="text-3xl font-bold">Telkomsel</h3>
              <span className="bg-red-100 text-red-600 px-4 py-1.5 rounded-full text-sm font-semibold">Segment</span>
            </div>

            <motion.div 
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-gradient-to-br from-red-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-red-100"
                variants={itemVariants}
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-3xl leading-none">👤</span>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">B2C</h4>
                    <p className="text-gray-600 text-sm mt-2">Konsumen Individual</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-gradient-to-br from-red-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-red-100"
                variants={itemVariants}
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-3xl leading-none">📱</span>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">Jaringan seluler 4G & 5G</h4>
                    <p className="text-gray-600 text-sm mt-2">Pengguna Mobile di Seluruh Indonesia</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-gradient-to-br from-red-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-red-100"
                variants={itemVariants}
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-3xl leading-none">🎮</span>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">MAXstream | Dunia Games</h4>
                    <p className="text-gray-600 text-sm mt-2">Layanan digital lifestyle berbasis mobile</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TargetCustomerSection;