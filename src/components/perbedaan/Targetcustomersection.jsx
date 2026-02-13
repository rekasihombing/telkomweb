import React from "react";
import { motion } from "framer-motion";
import { Building2, FileText, Database, User, Smartphone, Gamepad2 } from "lucide-react";

const TargetCustomerSection = () => {
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

  const telkomItems = [
    { Icon: Building2, title: "B2B, B2G, B2C", desc: "Perusahaan, Pemerintah, dan Konsumen" },
    { Icon: FileText, title: "Solusi enterprise & pemerintahan", desc: "Perusahaan & Pemerintah" },
    { Icon: Database, title: "Platform digital (IoT, Big Data)", desc: "Korporasi & Industri" },
  ];

  const telkomselItems = [
    { Icon: User, title: "B2C", desc: "Konsumen Individual" },
    { Icon: Smartphone, title: "Jaringan seluler 4G & 5G", desc: "Pengguna Mobile di Seluruh Indonesia" },
    { Icon: Gamepad2, title: "MAXstream | Dunia Games", desc: "Layanan digital lifestyle berbasis mobile" },
  ];

  const ColumnCard = ({ logoSrc, logoAlt, title, badge, items }) => (
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

        <div className="min-w-0 flex items-center gap-3">
          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h3>
          {badge ? (
            <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-semibold">
              {badge}
            </span>
          ) : null}
        </div>
      </div>

      <div className="-mx-8 h-px bg-red-100/70" />

      <div className="pt-6">
        <ul className="space-y-4">
          {items.map(({ Icon, title, desc }, idx) => (
            <li key={idx} className="rounded-2xl bg-red-50/55 px-4 py-3">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 h-10 w-10 shrink-0 rounded-xl bg-red-100 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-red-600" />
                </div>

                <div className="min-w-0">
                  <div className="text-sm md:text-base font-semibold text-gray-900 leading-snug">
                    {title}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 leading-relaxed mt-1">
                    {desc}
                  </div>
                </div>
              </div>
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
          Perbedaan <span className="text-red-500">Target Pelanggan</span>
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <ColumnCard
            logoSrc="images/telkom-logo.png"
            logoAlt="Telkom Logo"
            title="Telkom"
            badge="Segment"
            items={telkomItems}
          />

          <ColumnCard
            logoSrc="images/telkomsel-logo.svg"
            logoAlt="Telkomsel Logo"
            title="Telkomsel"
            badge="Segment"
            items={telkomselItems}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default TargetCustomerSection;
