import React from 'react';
import { motion } from 'framer-motion';

const ComparisonSection = () => {
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
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="bg-gradient-to-br from-red-50 to-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-200 rounded-full opacity-20 blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-200 rounded-full opacity-20 blur-3xl -ml-24 -mb-24"></div>

          <div className="relative z-10">
            {/* Comparison Header */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Telkom Side */}
              <motion.div 
                className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-6 text-white text-center shadow-xl hover:shadow-2xl transition-all"
                variants={itemVariants}
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <span className="text-red-500 font-bold text-lg">T</span>
                  </div>
                  <h3 className="text-2xl font-bold">Telkom</h3>
                </div>
                <p className="text-sm opacity-90">Induk perusahaan<br/>Status Digital</p>
              </motion.div>

              {/* Center - Scale Icon */}
              <motion.div 
                className="flex items-center justify-center relative"
                variants={itemVariants}
              >
                <div className="bg-white rounded-full p-6 shadow-xl">
                  <div className="text-6xl">⚖️</div>
                </div>
                <div className="absolute -bottom-4 bg-red-500 text-white px-5 py-2 rounded-full text-sm font-medium shadow-lg">
                  Perbedaan Utama
                </div>
              </motion.div>

              {/* Telkomsel Side */}
              <motion.div 
                className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-6 text-white text-center shadow-xl hover:shadow-2xl transition-all"
                variants={itemVariants}
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <span className="text-red-600 font-bold text-2xl">⚡</span>
                  </div>
                  <h3 className="text-2xl font-bold">Telkomsel</h3>
                </div>
                <p className="text-sm opacity-90">Layanan Seluler &<br/>Digital untuk Masyarakat</p>
              </motion.div>
            </motion.div>

            {/* Comparison Details */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Telkom Details */}
              <motion.div 
                className="bg-white rounded-2xl p-6 shadow-lg space-y-4 hover:shadow-xl transition-all"
                variants={itemVariants}
              >
                <div className="flex items-start gap-3 p-4 bg-red-50 rounded-xl hover:bg-red-100 transition-colors">
                  <span className="text-3xl">🏢</span>
                  <div>
                    <h4 className="font-bold text-gray-800 text-base">Induk perusahaan (Holding)</h4>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-red-50 rounded-xl hover:bg-red-100 transition-colors">
                  <span className="text-3xl">🏛️</span>
                  <div>
                    <h4 className="font-bold text-gray-800 text-base">Badan Usaha Milik Negara (BUMN)</h4>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-red-50 rounded-xl hover:bg-red-100 transition-colors">
                  <span className="text-3xl">📊</span>
                  <div>
                    <h4 className="font-bold text-gray-800 text-base">Mengelola strategi & arah bisnis Telkom Group</h4>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-red-50 rounded-xl hover:bg-red-100 transition-colors">
                  <span className="text-3xl">💼</span>
                  <div>
                    <h4 className="font-bold text-gray-800 text-base">Platform digital (IoT, Big Data)</h4>
                  </div>
                </div>
              </motion.div>

              {/* Telkomsel Details */}
              <motion.div 
                className="bg-white rounded-2xl p-6 shadow-lg space-y-4 hover:shadow-xl transition-all"
                variants={itemVariants}
              >
                <div className="flex items-start gap-3 p-4 bg-red-50 rounded-xl hover:bg-red-100 transition-colors">
                  <span className="text-3xl">👥</span>
                  <div>
                    <h4 className="font-bold text-gray-800 text-base">Anak perusahaan Telkom Group</h4>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-red-50 rounded-xl hover:bg-red-100 transition-colors">
                  <span className="text-3xl">📡</span>
                  <div>
                    <h4 className="font-bold text-gray-800 text-base">Operator telekomunikasi seluler</h4>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-red-50 rounded-xl hover:bg-red-100 transition-colors">
                  <span className="text-3xl">👤</span>
                  <div>
                    <h4 className="font-bold text-gray-800 text-base">Fokus pada layanan ritel (end user)</h4>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-red-50 rounded-xl hover:bg-red-100 transition-colors">
                  <span className="text-3xl">🌍</span>
                  <div>
                    <h4 className="font-bold text-gray-800 text-base">Nasional & global</h4>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;