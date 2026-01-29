import React from 'react';
import { motion } from 'framer-motion';

const UsageExamplesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-14 px-4 bg-gradient-to-br from-pink-50 to-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Contoh Penggunaan Nyata
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 mb-12 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Ilustrasi penggunaan layanan Telkom dan Telkomsel dalam aktivitas sehari-hari
        </motion.p>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          {/* Card 1 */}
          <motion.div
            className="relative bg-white rounded-2xl p-6 shadow-lg border border-red-100 hover:shadow-xl transition-all"
            variants={itemVariants}
          >
            <span className="absolute top-4 right-4 text-xs font-medium text-red-500 bg-red-50 px-3 py-1 rounded-full">
              Telkom
            </span>
            <h4 className="font-semibold text-gray-800 mb-2">
              Koneksi Internet Rumah
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Digunakan untuk mendukung aktivitas belajar daring, bekerja dari rumah,
              serta akses hiburan keluarga melalui jaringan internet tetap.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="relative bg-white rounded-2xl p-6 shadow-lg border border-red-100 hover:shadow-xl transition-all"
            variants={itemVariants}
          >
            <span className="absolute top-4 right-4 text-xs font-medium text-red-600 bg-red-50 px-3 py-1 rounded-full">
              Telkomsel
            </span>
            <h4 className="font-semibold text-gray-800 mb-2">
              Akses Internet Seluler
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Digunakan saat berkomunikasi, berselancar di media sosial,
              dan mengakses aplikasi digital melalui perangkat seluler.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="relative bg-white rounded-2xl p-6 shadow-lg border border-red-100 hover:shadow-xl transition-all"
            variants={itemVariants}
          >
            <span className="absolute top-4 right-4 text-xs font-medium text-red-500 bg-red-50 px-3 py-1 rounded-full">
              Telkom
            </span>
            <h4 className="font-semibold text-gray-800 mb-2">
              Kebutuhan Infrastruktur Perusahaan
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Dimanfaatkan oleh perusahaan untuk pengelolaan data,
              layanan cloud, serta sistem informasi berskala besar.
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            className="relative bg-white rounded-2xl p-6 shadow-lg border border-red-100 hover:shadow-xl transition-all"
            variants={itemVariants}
          >
            <span className="absolute top-4 right-4 text-xs font-medium text-red-600 bg-red-50 px-3 py-1 rounded-full">
              Telkomsel
            </span>
            <h4 className="font-semibold text-gray-800 mb-2">
              Hiburan Digital Mobile
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Digunakan untuk streaming video, bermain gim,
              dan menikmati konten digital melalui jaringan seluler.
            </p>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default UsageExamplesSection;
