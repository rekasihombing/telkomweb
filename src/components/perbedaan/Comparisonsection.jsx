import React from "react";
import { motion } from "framer-motion";

const ComparisonSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="pt-6 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-50 to-white p-8 md:p-12 shadow-2xl"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Decorative blur */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-red-200/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-pink-200/30 rounded-full blur-3xl" />

          <div className="relative z-10">
            {/* Section label */}
            <div className="flex items-center justify-center mb-12">
              <div className="flex items-center gap-4">
                <span className="h-px w-20 bg-red-200" />
                <span className="text-xs font-semibold tracking-[0.3em] text-red-500">
                  PERBANDINGAN
                </span>
                <span className="h-px w-20 bg-red-200" />
              </div>
            </div>

            {/* Header comparison */}
            <motion.div
              className="relative grid grid-cols-1 md:grid-cols-2 gap-10 mb-14"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* VS divider (desktop only) */}
              <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none">
                <div className="flex flex-col items-center">
                  <span className="h-16 w-px bg-red-200" />
                  <span className="my-2 text-sm font-semibold text-red-400">
                    VS
                  </span>
                  <span className="h-16 w-px bg-red-200" />
                </div>
              </div>

              {/* Telkom */}
              <motion.div
                variants={itemVariants}
                className="rounded-2xl bg-gradient-to-br from-red-500 to-red-600 p-6 text-white text-center shadow-xl"
              >
                <h3 className="text-2xl font-bold mb-1">Telkom</h3>
                <p className="text-sm opacity-90">
                  Induk perusahaan<br />
                  Strategi & digital platform
                </p>
              </motion.div>

              {/* Telkomsel */}
              <motion.div
                variants={itemVariants}
                className="rounded-2xl bg-gradient-to-br from-red-600 to-red-700 p-6 text-white text-center shadow-xl"
              >
                <h3 className="text-2xl font-bold mb-1">Telkomsel</h3>
                <p className="text-sm opacity-90">
                  Layanan seluler<br />
                  & digital untuk masyarakat
                </p>
              </motion.div>
            </motion.div>

    

            {/* Detail comparison */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Telkom detail */}
              <motion.div
                variants={itemVariants}
                className="rounded-2xl bg-white p-6 shadow-md space-y-4"
              >
                {[
                  "Induk perusahaan (Holding)",
                  "Badan Usaha Milik Negara (BUMN)",
                  "Menentukan arah & strategi Telkom Group",
                  "Fokus platform & solusi digital",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-xl bg-gradient-to-br from-red-50 to-white p-4 text-sm font-medium text-gray-800 shadow-md hover:shadow-lg transition-all border border-red-100"
                  >
                    {item}
                  </div>
                ))}
              </motion.div>

              {/* Telkomsel detail */}
              <motion.div
                variants={itemVariants}
                className="rounded-2xl bg-white p-6 shadow-md space-y-4"
              >
                {[
                  "Anak perusahaan Telkom Group",
                  "Operator telekomunikasi seluler",
                  "Fokus layanan ritel (end user)",
                  "Cakupan nasional & global",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-xl bg-gradient-to-br from-red-50 to-white p-4 text-sm font-medium text-gray-800 shadow-md hover:shadow-lg transition-all border border-red-100"
                  >
                    {item}
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;