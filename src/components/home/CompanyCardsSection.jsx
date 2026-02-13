import React from "react";
import { motion } from "framer-motion";
import { Building2, BarChart3, Phone, Smartphone, Gem, Rocket, ArrowRight } from "lucide-react";

const CompanyCardsSection = () => {
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

  const telkomFeatures = [
    { Icon: Building2, text: "Infrastruktur jaringan & data center" },
    { Icon: Building2, text: "Layanan enterprise & pemerintahan" },
    { Icon: BarChart3, text: "Cloud, IoT, Big Data" },
  ];

  const telkomselFeatures = [
    { Icon: Smartphone, text: "Layanan seluler & internet" },
    { Icon: Gem, text: "Produk digital untuk masyarakat" },
    { Icon: Rocket, text: "4G / 5G Nasional" },
  ];

  const stats = [
    { value: "170M+", label: "Pengguna Mobile", Icon: Building2 },
    { value: "90%+", label: "Cakupan Jaringan", Icon: BarChart3 },
    { value: "Ribuan", label: "Pelanggan Enterprise", Icon: Building2 },
    { value: "Nasional", label: "Infrastruktur Digital", Icon: Gem },
  ];

  const BrandCard = ({
    logoSrc,
    logoAlt,
    title,
    lead,
    badgeIcon: BadgeIcon,
    badgeText,
    features,
  }) => (
    <motion.div variants={item} className="rounded-3xl bg-white p-8 shadow-md">
      {/* Header (samakan dengan Perbedaan/Comparison) */}
      <div className="flex items-center gap-4 mb-6">
        <div className="h-12 w-12 rounded-2xl bg-red-50 p-2 shadow-md">
          <img src={logoSrc} alt={logoAlt} className="h-full w-full object-contain" />
        </div>

        <div className="min-w-0">
          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h3>
          <p className="text-sm text-gray-600">{lead}</p>
        </div>
      </div>

      {/* Divider */}
      <div className="-mx-8 h-px bg-red-100/70" />

      {/* Badge (tetap ada, tapi feel-nya sama) */}
      <div className="pt-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-600">
          <BadgeIcon className="h-4 w-4" />
          {badgeText}
        </div>
      </div>

      {/* Features (pola pill list seperti Comparison) */}
      <div className="pt-6">
        <ul className="space-y-4">
          {features.map((f, idx) => (
            <li key={idx} className="rounded-2xl bg-red-50/55 px-4 py-3">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 h-10 w-10 shrink-0 rounded-xl bg-red-100 flex items-center justify-center">
                  <f.Icon className="h-5 w-5 text-red-600" />
                </div>
                <div className="text-sm md:text-base text-gray-700 leading-relaxed pt-1">
                  {f.text}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );

  const StatCard = ({ value, label, Icon }) => (
    <motion.div variants={item} className="rounded-3xl bg-white p-8 shadow-md">
      <div className="flex items-center gap-4 mb-6">
        <div className="h-12 w-12 rounded-2xl bg-red-50 p-2 shadow-md flex items-center justify-center">
          <Icon className="h-6 w-6 text-red-600" />
        </div>

        <div className="min-w-0">
          <div className="text-xl md:text-2xl font-bold tracking-tight text-gray-900">
            {value}
          </div>
          <div className="text-sm text-gray-600">{label}</div>
        </div>
      </div>

      <div className="-mx-8 h-px bg-red-100/70" />

      <div className="pt-6">
        <div className="rounded-2xl bg-red-50/55 px-4 py-3 text-sm md:text-base text-gray-700 leading-relaxed">
          Ringkasan metrik untuk mendukung pemahaman cepat tentang skala layanan.
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="py-12 md:py-16 px-4 relative overflow-hidden">
      {/* Background sama seperti yang kamu suka */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-50/50 via-white to-red-50/30" />
      <div className="absolute top-16 -left-40 w-[500px] h-[500px] bg-red-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-16 -right-40 w-[500px] h-[500px] bg-red-500/15 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header (selaras dengan PerbedaanPage) */}
        <motion.div
          className="text-center mb-12 md:mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full text-sm font-semibold text-red-600 bg-red-100">
              Telkom Group Ecosystem
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Dua Peran, Satu <span className="text-red-500">Ekosistem Digital</span>
          </h2>

          <p className="text-gray-600 mt-4 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Telkom Group membangun infrastruktur dan layanan digital untuk mempercepat transformasi Indonesia.
          </p>
        </motion.div>

        {/* Cards with CTA Button */}
        <div className="mb-12">
          {/* CTA Button - positioned top right */}
          <motion.div
            className="flex justify-end mb-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href="/perbedaan"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-500 hover:bg-red-600 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all group"
            >
              Lihat Perbandingan Detail
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Brand Cards */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            <BrandCard
              logoSrc="images/telkom-logo.png"
              logoAlt="Telkom Logo"
              title="Telkom"
              lead="Digital Infrastructure"
              badgeIcon={BarChart3}
              badgeText="Infrastructure Provider"
              features={telkomFeatures}
            />

            <BrandCard
              logoSrc="images/telkomsel-logo.svg"
              logoAlt="Telkomsel Logo"
              title="Telkomsel"
              lead="Mobile & Digital"
              badgeIcon={Phone}
              badgeText="Mobile Operator"
              features={telkomselFeatures}
            />
          </motion.div>
        </div>

        {/* Stats (dibikin card juga, feel sama) */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((s, i) => (
            <StatCard key={i} {...s} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyCardsSection;