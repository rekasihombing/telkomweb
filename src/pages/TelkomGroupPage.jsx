import React from "react";
import { motion } from "framer-motion";
import {
  Wifi,
  Network,
  Building2,
  MapPin,
  Users,
  Globe,
  TrendingUp
} from "lucide-react";

export default function TelkomInfographic() {
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

  return (
    <div className="bg-white text-gray-900">
      {/* ================= HERO ================= */}
      <section className="py-12 md:py-16 px-4 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-block px-4 py-2 text-sm font-semibold text-red-600 bg-red-100 rounded-full">
                BUMN Indonesia
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight">
                Telkom Indonesia:<br />
                Perusahaan Telekomunikasi Digital Nasional
              </h1>

              <p className="text-base md:text-lg text-gray-600 max-w-xl leading-relaxed">
                PT Telkom Indonesia (Persero) Tbk adalah Badan Usaha Milik Negara 
                (BUMN) yang menyediakan layanan telekomunikasi dan jaringan digital 
                terbesar di Indonesia dengan jangkauan ke seluruh nusantara.
              </p>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-50" />
              <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-md">
                <img
                  src="images/gedungtelkom.jpg"
                  alt="Gedung Telkom Indonesia"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-12 md:py-16 px-4 relative overflow-hidden">
        {/* Background sama seperti CompanyCardsSection */}
        <div className="absolute inset-0 bg-gradient-to-b from-red-50/50 via-white to-red-50/30" />
        <div className="absolute top-16 -left-40 w-[500px] h-[500px] bg-red-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-16 -right-40 w-[500px] h-[500px] bg-red-500/15 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid md:grid-cols-3 gap-6"
          >
            <Stat value="160 Juta+" label="Pelanggan Seluler (Telkomsel)" />
            <Stat value="10,8 Juta" label="Pelanggan IndiHome" />
            <Stat value="52%" label="Kepemilikan Pemerintah" />
          </motion.div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <motion.div
              className="lg:col-span-3 space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Tentang Telkom Indonesia
              </h2>
              <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
                <p>
                  PT Telkom Indonesia (Persero) Tbk adalah perusahaan telekomunikasi 
                  dan jaringan terbesar di Indonesia yang dimiliki oleh Pemerintah Indonesia 
                  sebesar 52,09% dan sisanya oleh publik. Saham Telkom diperdagangkan di 
                  Bursa Efek Indonesia (IDX: TLKM) dan New York Stock Exchange (NYSE: TLK).
                </p>
                <p>
                  Perkembangan layanan telekomunikasi di Indonesia telah dimulai sejak tahun 1856 
                  melalui layanan telegraf. Telkom Indonesia sebagai entitas perusahaan modern 
                  berkembang melalui berbagai transformasi hingga menjadi perusahaan publik 
                  pada tahun 1995.
                </p>
                <p>
                  Saat ini, Telkom Group mengelola tiga domain bisnis utama: Digital Connectivity 
                  (jaringan fiber, 5G), Digital Platform (cloud, IoT, big data, cybersecurity), 
                  dan Digital Services (solusi enterprise dan layanan digital).
                </p>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              <div className="sticky top-8 p-8 rounded-3xl bg-white shadow-md border border-red-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-2xl bg-red-50 p-2 shadow-md flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold tracking-tight text-gray-900">Fakta Menarik</h3>
                </div>
                
                <div className="-mx-8 h-px bg-red-100/70 mb-6" />
                
                <ul className="space-y-4">
                  {[
                    "Salah satu perusahaan telekomunikasi terbesar di Indonesia",
                    "Satu-satunya BUMN Indonesia di sektor telekomunikasi yang tercatat di NYSE",
                    "Telkomsel merupakan operator seluler terbesar di Indonesia",
                    "IndiHome menjadi layanan fixed broadband terbesar secara nasional"
                  ].map((fact, idx) => (
                    <li key={idx} className="rounded-2xl bg-red-50/55 px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="h-2 w-2 shrink-0 rounded-full bg-red-600" />
                        <span className="text-sm text-gray-700 leading-relaxed">{fact}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= LAYANAN ================= */}
      <section className="py-12 md:py-16 px-4 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-red-50/50 via-white to-red-50/30" />
        <div className="absolute top-16 -left-40 w-[500px] h-[500px] bg-red-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-16 -right-40 w-[500px] h-[500px] bg-red-500/15 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Layanan yang Perlu Anda Tahu
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Berikut adalah layanan-layanan utama Telkom Group yang mungkin 
              sudah Anda gunakan sehari-hari.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid md:grid-cols-2 gap-6 mt-10"
          >
            <ServiceCard
              icon={Wifi}
              title="Telkomsel"
              description="Operator seluler terbesar di Indonesia dengan lebih dari 160 juta pelanggan. Menyediakan layanan kartu prabayar, pascabayar (Halo), dan by.U."
            />
            <ServiceCard
              icon={Network}
              title="IndiHome"
              description="Layanan internet rumah (fixed broadband) terbesar di Indonesia dengan 10,8 juta pelanggan. Menyediakan paket internet fiber optik, telepon rumah, dan TV interaktif. Sejak Juli 2023, IndiHome dikelola oleh Telkomsel."
            />
          </motion.div>
        </div>
      </section>

      {/* ================= SUBSIDIARIES ================= */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Anak Perusahaan Utama
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Telkom Group memiliki berbagai anak perusahaan yang bergerak 
              di berbagai sektor untuk mendukung ekosistem digital Indonesia.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
          >
            {[
              { 
                name: "Telkomsel", 
                desc: "Operator seluler",
                detail: "69,9% Telkom Indonesia, 30,1% Singtel"
              },
              { 
                name: "Telkomsigma", 
                desc: "Layanan IT & solusi digital",
                detail: "Penyedia layanan IT enterprise"
              },
              { 
                name: "TelkomMetra", 
                desc: "Multimedia & konten digital",
                detail: "Layanan multimedia dan entertainment"
              },
              { 
                name: "Telin", 
                desc: "Telekomunikasi internasional",
                detail: "Jaringan global dan konektivitas"
              },
              { 
                name: "Mitratel", 
                desc: "Infrastruktur menara telekomunikasi",
                detail: "Pengelola tower dan infrastruktur"
              },
              { 
                name: "Telkom Akses", 
                desc: "Pengelola jaringan akses",
                detail: "Manajemen jaringan fiber optik"
              }
            ].map((item) => (
              <SubsidiaryCard key={item.name} {...item} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= ADDRESS ================= */}
      <section className="py-12 md:py-16 px-4 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-red-50/50 via-white to-red-50/30" />
        <div className="absolute top-16 -left-40 w-[500px] h-[500px] bg-red-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-16 -right-40 w-[500px] h-[500px] bg-red-500/15 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Kantor Pusat
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Telkom Indonesia memiliki dua kantor utama di Indonesia.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid md:grid-cols-2 gap-6 mt-10"
          >
            <AddressCard
              title="Kantor Pusat Korporat"
              location="Bandung"
              address="Jl. Japati No. 1, Bandung, Jawa Barat"
              description="Kantor korporat dan pusat administrasi"
            />
            <AddressCard
              title="Kantor Operasional"
              location="Jakarta"
              address="Telkom Landmark Tower, Jl. Jenderal Gatot Subroto Kav. 52, Jakarta Selatan 12710"
              description="Kantor operasional dan pusat bisnis utama"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="p-6 rounded-3xl bg-white shadow-md mt-6"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Users className="w-6 h-6 text-blue-600 flex-shrink-0" />
              </div>
              <div>
                <h4 className="font-bold text-blue-900 mb-2 text-base md:text-lg">Layanan Pelanggan</h4>
                <p className="text-sm md:text-base text-blue-800">
                  Untuk layanan pelanggan Telkomsel, hubungi <span className="font-bold">188</span>. 
                  Untuk IndiHome, hubungi <span className="font-bold">147</span>.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

/* ================= COMPONENTS ================= */

const Stat = motion(function Stat({ value, label }) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-md text-center hover:shadow-lg transition-all">
      <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">{value}</div>
      <div className="text-gray-600 text-sm font-medium">{label}</div>
    </div>
  );
});

const ServiceCard = motion(function ServiceCard({ icon: Icon, title, description }) {
  return (
    <div className="group rounded-3xl bg-white shadow-md hover:shadow-lg transition-all p-8">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-red-50 rounded-xl group-hover:bg-red-100 transition">
          <Icon className="w-7 h-7 text-red-600" />
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-lg md:text-xl mb-3">{title}</h4>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">{description}</p>
        </div>
      </div>
    </div>
  );
});

const SubsidiaryCard = motion(function SubsidiaryCard({ name, desc, detail }) {
  return (
    <div className="group p-6 rounded-3xl bg-white shadow-md hover:shadow-lg transition-all duration-300">
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 bg-gradient-to-br from-red-50 to-red-100 rounded-xl group-hover:from-red-100 group-hover:to-red-200 transition-all">
          <Building2 className="w-6 h-6 text-red-600" />
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-lg md:text-xl mb-1 text-gray-900">{name}</h4>
          <p className="text-sm text-red-600 font-semibold">{desc}</p>
        </div>
      </div>
      <div className="pl-16">
        <p className="text-sm text-gray-600">{detail}</p>
      </div>
    </div>
  );
});

const AddressCard = motion(function AddressCard({ title, location, address, description }) {
  return (
    <div className="rounded-3xl bg-white shadow-md hover:shadow-lg transition-all p-8">
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 bg-red-50 rounded-xl">
          <MapPin className="w-6 h-6 text-red-600" />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-lg md:text-xl mb-1">{title}</h3>
          <p className="text-sm text-red-600 font-semibold">{location}</p>
        </div>
      </div>
      <p className="text-gray-800 font-medium mb-2 text-sm md:text-base">{address}</p>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
});