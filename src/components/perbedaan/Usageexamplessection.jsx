import React from 'react';
import { motion } from 'framer-motion';

const UsageExamplesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25, // Diperlambat dari 0.15 ke 0.25
        delayChildren: 0.2 // Tambah delay awal
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 }, // Jarak lebih jauh dari -30 ke -50
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8, // Diperlambat dari 0.5 ke 0.8
        ease: "easeOut" // Tambah easing yang smooth
      }
    }
  };

  return (
    <section className="py-12 px-4 bg-gradient-to-br from-pink-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Contoh Penggunaan Nyata
        </motion.h2>
        
        <motion.p 
          className="text-center text-gray-600 mb-12 text-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          Berikut adalah contoh nyata penggunaan layanan Telkom dan Telkomsel dalam kehidupan sehari-hari
        </motion.p>

        <motion.div 
          className="bg-white rounded-2xl shadow-xl p-8 space-y-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.div 
              className="flex items-start gap-4 p-5 bg-gradient-to-r from-red-50 to-white rounded-xl hover:shadow-md transition-all border border-red-100"
              variants={itemVariants}
            >
              <span className="text-3xl flex-shrink-0">💡</span>
              <div className="flex-1">
                <h4 className="font-bold text-gray-800 mb-2 text-lg">Jika kamu;</h4>
                <p className="text-gray-600 text-base mb-2">Pasang Internet rumah</p>
                <p className="text-red-500 font-semibold text-base flex items-center gap-2">
                  <span>→</span> Telkom (IndiHome)
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start gap-4 p-5 bg-gradient-to-r from-red-50 to-white rounded-xl hover:shadow-md transition-all border border-red-100"
              variants={itemVariants}
            >
              <span className="text-3xl flex-shrink-0">💡</span>
              <div className="flex-1">
                <h4 className="font-bold text-gray-800 mb-2 text-lg">Jika kamu;</h4>
                <p className="text-gray-600 text-base mb-2">Pakai kartu internet & paket data</p>
                <p className="text-red-600 font-semibold text-base flex items-center gap-2">
                  <span>→</span> Telkomsel
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start gap-4 p-5 bg-gradient-to-r from-red-50 to-white rounded-xl hover:shadow-md transition-all border border-red-100"
              variants={itemVariants}
            >
              <span className="text-3xl flex-shrink-0">💡</span>
              <div className="flex-1">
                <h4 className="font-bold text-gray-800 mb-2 text-lg">Jika kamu;</h4>
                <p className="text-gray-600 text-base mb-2">Perusahaan butuh cloud & data center</p>
                <p className="text-red-500 font-semibold text-base flex items-center gap-2">
                  <span>→</span> Telkom
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start gap-4 p-5 bg-gradient-to-r from-red-50 to-white rounded-xl hover:shadow-md transition-all border border-red-100"
              variants={itemVariants}
            >
              <span className="text-3xl flex-shrink-0">💡</span>
              <div className="flex-1">
                <h4 className="font-bold text-gray-800 mb-2 text-lg">Jika kamu;</h4>
                <p className="text-gray-600 text-base mb-2">Streaming & game di HP</p>
                <p className="text-red-600 font-semibold text-base flex items-center gap-2">
                  <span>→</span> Telkomsel
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mt-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            Kembali ke Beranda
          </button>
          <button className="bg-white border-2 border-red-500 text-red-500 hover:bg-red-50 px-8 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            Lihat FAQ →
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default UsageExamplesSection;