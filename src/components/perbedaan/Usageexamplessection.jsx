import React from "react";
import { motion } from "framer-motion";

const UsageExamplesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cards = [
    {
      tag: "Telkom",
      tagClass: "text-red-500",
      title: "Koneksi Internet Rumah",
      desc: "Digunakan untuk mendukung aktivitas belajar daring, bekerja dari rumah, serta akses hiburan keluarga melalui jaringan internet tetap.",
      logoSrc: "images/telkom-logo.png",
      logoAlt: "Telkom Logo",
    },
    {
      tag: "Telkomsel",
      tagClass: "text-red-600",
      title: "Akses Internet Seluler",
      desc: "Digunakan saat berkomunikasi, berselancar di media sosial, dan mengakses aplikasi digital melalui perangkat seluler.",
      logoSrc: "images/telkomsel-logo.svg",
      logoAlt: "Telkomsel Logo",
    },
    {
      tag: "Telkom",
      tagClass: "text-red-500",
      title: "Kebutuhan Infrastruktur Perusahaan",
      desc: "Dimanfaatkan oleh perusahaan untuk pengelolaan data, layanan cloud, serta sistem informasi berskala besar.",
      logoSrc: "images/telkom-logo.png",
      logoAlt: "Telkom Logo",
    },
    {
      tag: "Telkomsel",
      tagClass: "text-red-600",
      title: "Hiburan Digital Mobile",
      desc: "Digunakan untuk streaming video, bermain gim, dan menikmati konten digital melalui jaringan seluler.",
      logoSrc: "images/telkomsel-logo.svg",
      logoAlt: "Telkomsel Logo",
    },
  ];

  return (
    <section className="py-14 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-4 text-gray-900"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Contoh Penggunaan Nyata
        </motion.h2>

        <motion.p
          className="text-center text-base md:text-lg text-gray-600 leading-relaxed mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Ilustrasi penggunaan layanan Telkom dan Telkomsel dalam aktivitas sehari-hari
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {cards.map((c, i) => (
            <motion.div
              key={i}
              className="relative rounded-3xl bg-white p-8 shadow-md"
              variants={itemVariants}
            >
              {/* Header: logo rata dengan teks + judul hitam */}
              <div className="flex items-center justify-between gap-6 mb-6">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="h-12 w-12 rounded-2xl bg-red-50 p-2 shadow-md flex items-center justify-center shrink-0">
                    <img
                      src={c.logoSrc}
                      alt={c.logoAlt}
                      className="block max-h-8 max-w-8 object-contain"
                      draggable="false"
                    />
                  </div>

                  <h4 className="min-w-0 text-lg md:text-xl font-semibold text-gray-900 leading-tight">
                    {c.title}
                  </h4>
                </div>

                <span
                  className={`shrink-0 text-xs font-medium ${c.tagClass} bg-red-50 px-3 py-1 rounded-full`}
                >
                  {c.tag}
                </span>
              </div>

              <div className="-mx-8 h-px bg-red-100/70" />

              <div className="pt-6">
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {c.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default UsageExamplesSection;
