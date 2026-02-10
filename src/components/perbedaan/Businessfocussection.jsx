import React from "react";
import { motion } from "framer-motion";

const BusinessFocusSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const telkom = [
    "Infrastruktur digital nasional",
    "Data center & Cloud",
    "Solusi enterprise & pemerintahan",
    "Platform digital (IoT, Big Data)",
  ];

  const telkomsel = [
    "Telekomunikasi seluler",
    "Internet mobile",
    "Layanan digital lifestyle",
    "Konten hiburan & aplikasi digital",
  ];

  const ColumnCard = ({ logoSrc, logoAlt, title, items }) => (
    <motion.div variants={item} className="rounded-3xl bg-white p-8 shadow-md">
      <div className="flex items-center gap-4 mb-6">
        <div className="h-12 w-12 rounded-2xl bg-red-50 p-2 shadow-md flex items-center justify-center">
          <img
            src={logoSrc}
            alt={logoAlt}
            className="block max-h-8 max-w-8 object-contain"
            draggable="false"
          />
        </div>

        <h3 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h3>
      </div>

      <div className="-mx-8 h-px bg-red-100/70" />

      <div className="pt-6">
        <ul className="space-y-4">
          {items.map((t, idx) => (
            <li
              key={idx}
              className="rounded-2xl bg-red-50/55 px-4 py-3 text-sm md:text-base text-gray-700 leading-relaxed"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );

  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-10 text-gray-900"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Perbedaan <span className="text-red-500">Fokus Bisnis</span>
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <ColumnCard
            logoSrc="/images/telkom-logo.png"
            logoAlt="Telkom Logo"
            title="Telkom"
            items={telkom}
          />

          <ColumnCard
            logoSrc="/images/telkomsel-logo.svg"
            logoAlt="Telkomsel Logo"
            title="Telkomsel"
            items={telkomsel}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessFocusSection;
