import React from "react";
import { motion } from "framer-motion";

const ComparisonSection = () => {
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

  const left = [
    "Induk perusahaan (Holding)",
    "Badan Usaha Milik Negara (BUMN)",
    "Menentukan arah & strategi Telkom Group",
    "Fokus platform & solusi digital",
  ];

  const right = [
    "Anak perusahaan Telkom Group",
    "Operator telekomunikasi seluler",
    "Fokus layanan ritel (end user)",
    "Cakupan nasional & global",
  ];

  const ColumnCard = ({ logoSrc, logoAlt, title, lead, desc, items }) => (
    <motion.div
      variants={item}
      className="rounded-3xl bg-white p-8 shadow-md"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="h-12 w-12 rounded-2xl bg-red-50 p-2 shadow-md flex items-center justify-center">
          <img
            src={logoSrc}
            alt={logoAlt}
            className="block max-h-8 max-w-8 object-contain"
            draggable="false"
          />
        </div>

        <div className="min-w-0">
          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h3>
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-red-600">{lead}</span> · {desc}
          </p>
        </div>
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
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-4 mb-10">
          <span className="h-px w-16 bg-red-200/70" />
          <span className="text-[11px] md:text-xs font-semibold tracking-[0.28em] text-red-500">
            PERBANDINGAN
          </span>
          <span className="h-px w-16 bg-red-200/70" />
        </div>

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
            lead="Induk perusahaan"
            desc="Strategi & digital platform"
            items={left}
          />

          <ColumnCard
            logoSrc="/images/telkomsel-logo.svg"
            logoAlt="Telkomsel Logo"
            title="Telkomsel"
            lead="Layanan seluler"
            desc="& digital untuk masyarakat"
            items={right}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;
