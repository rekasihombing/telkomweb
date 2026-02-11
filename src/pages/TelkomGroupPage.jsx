import React from "react";
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
  return (
    <div className="bg-white text-gray-900">
      <div className="max-w-[1400px] mx-auto px-8 py-16 space-y-24">

        {/* ================= HERO ================= */}
        <section className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="inline-block px-4 py-1 text-sm font-semibold text-red-600 bg-red-50 rounded-full">
              BUMN Indonesia
            </span>

            <h1 className="text-[56px] font-bold leading-tight">
              Telkom Indonesia:<br />
              Perusahaan Telekomunikasi Digital Nasional
            </h1>

            <p className="text-lg text-gray-600 max-w-xl">
              PT Telkom Indonesia (Persero) Tbk adalah Badan Usaha Milik Negara 
              (BUMN) yang menyediakan layanan telekomunikasi dan jaringan digital 
              terbesar di Indonesia dengan jangkauan ke seluruh nusantara.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-50" />
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-100">
              <img
                src="/images/gedungtelkom.jpg"
                alt="Gedung Telkom Indonesia"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* ================= STATS ================= */}
        <section className="grid md:grid-cols-3 gap-6">
          <Stat value="160 Juta+" label="Pelanggan Seluler (Telkomsel)" />
          <Stat value="10,8 Juta" label="Pelanggan IndiHome" />
          <Stat value="52%" label="Kepemilikan Pemerintah" />
        </section>

        {/* ================= ABOUT ================= */}
        <section className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-3 space-y-6">
            <h2 className="text-4xl font-bold mb-6">
              Tentang Telkom Indonesia
            </h2>
            <div className="space-y-4 text-base text-gray-600 leading-relaxed">
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
          </div>

          <div className="lg:col-span-2">
            <div className="sticky top-8 p-8 rounded-3xl bg-gradient-to-br from-red-50 via-white to-orange-50 border-2 border-red-100 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-8 h-8 text-red-600" />
                <h3 className="text-2xl font-bold">Fakta Menarik</h3>
              </div>
              <ul className="space-y-4 text-gray-700 text-sm">
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold text-lg">•</span>
                  <span>Salah satu perusahaan telekomunikasi terbesar di Indonesia</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold text-lg">•</span>
                  <span>Satu-satunya BUMN Indonesia di sektor telekomunikasi yang tercatat di NYSE</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold text-lg">•</span>
                  <span>Telkomsel merupakan operator seluler terbesar di Indonesia</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold text-lg">•</span>
                  <span>IndiHome menjadi layanan fixed broadband terbesar secara nasional</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ================= LAYANAN ================= */}
        <section className="space-y-10">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Layanan yang Perlu Anda Tahu
            </h2>
            <p className="text-lg text-gray-600">
              Berikut adalah layanan-layanan utama Telkom Group yang mungkin 
              sudah Anda gunakan sehari-hari.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
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
          </div>
        </section>

        {/* ================= SUBSIDIARIES ================= */}
        <section className="space-y-10">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Anak Perusahaan Utama
            </h2>
            <p className="text-lg text-gray-600">
              Telkom Group memiliki berbagai anak perusahaan yang bergerak 
              di berbagai sektor untuk mendukung ekosistem digital Indonesia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <div
                key={item.name}
                className="group p-6 rounded-2xl bg-gradient-to-br from-white via-gray-50 to-white border-2 border-gray-200 hover:border-red-300 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-red-50 to-red-100 rounded-xl group-hover:from-red-100 group-hover:to-red-200 transition-all">
                    <Building2 className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-xl mb-1 text-gray-900">{item.name}</h4>
                    <p className="text-sm text-red-600 font-semibold">{item.desc}</p>
                  </div>
                </div>
                <div className="pl-16">
                  <p className="text-sm text-gray-600">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= ADDRESS ================= */}
        <section className="space-y-8">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Kantor Pusat
            </h2>
            <p className="text-lg text-gray-600">
              Telkom Indonesia memiliki dua kantor utama di Indonesia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
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
          </div>

          <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Users className="w-6 h-6 text-blue-600 flex-shrink-0" />
              </div>
              <div>
                <h4 className="font-bold text-blue-900 mb-2 text-lg">Layanan Pelanggan</h4>
                <p className="text-blue-800">
                  Untuk layanan pelanggan Telkomsel, hubungi <span className="font-bold">188</span>. 
                  Untuk IndiHome, hubungi <span className="font-bold">147</span>.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function Stat({ value, label }) {
  return (
    <div className="rounded-2xl border-2 bg-gradient-to-br from-gray-50 to-white p-8 text-center hover:shadow-lg hover:border-red-200 transition-all">
      <div className="text-5xl font-bold text-red-600 mb-2">{value}</div>
      <div className="text-gray-600 text-sm font-medium">{label}</div>
    </div>
  );
}

function ServiceCard({ icon: Icon, title, description }) {
  return (
    <div className="group rounded-2xl border-2 hover:border-red-200 overflow-hidden hover:shadow-xl transition-all p-8 bg-gradient-to-br from-white to-gray-50">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-red-50 rounded-xl group-hover:bg-red-100 transition">
          <Icon className="w-7 h-7 text-red-600" />
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-xl mb-3">{title}</h4>
          <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}

function AddressCard({ title, location, address, description }) {
  return (
    <div className="rounded-2xl border-2 p-8 bg-gradient-to-br from-white to-gray-50 hover:shadow-xl hover:border-red-200 transition-all">
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 bg-red-50 rounded-xl">
          <MapPin className="w-6 h-6 text-red-600" />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-xl mb-1">{title}</h3>
          <p className="text-sm text-red-600 font-semibold">{location}</p>
        </div>
      </div>
      <p className="text-gray-800 font-medium mb-2 text-sm">{address}</p>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
}
