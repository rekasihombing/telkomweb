import React from "react";
import {
  Wifi,
  Layers,
  Network,
  Briefcase,
  Building2,
  Globe
} from "lucide-react";

export default function TelkomInfographic() {
  return (
    <div className="bg-white text-gray-900">
      <div className="max-w-[1400px] mx-auto px-8 py-24 space-y-40">

        {/* ================= HERO ================= */}
        <section className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-6">
            <span className="inline-block px-4 py-1 text-sm font-semibold text-red-600 bg-red-50 rounded-full">
              Telkom Group
            </span>

            <h1 className="text-[56px] font-bold leading-tight">
              Digital Connectivity <br />
              for Indonesia’s Future
            </h1>

            <p className="text-lg text-gray-600 max-w-xl">
              Telkom Group adalah grup telekomunikasi digital terdepan di Indonesia
              yang menyediakan layanan konektivitas, platform digital, dan solusi
              teknologi untuk masyarakat dan bisnis.
            </p>
          </div>

          {/* IMAGE PLACEHOLDER */}
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-red-100 rounded-full blur-3xl" />
            <div className="relative w-full h-[420px] rounded-3xl overflow-hidden bg-gray-100 border">
              {/* nanti isi src */}
              <img
  src="/images/gedungtelkom.jpg"
  alt="Telkom Hero"
  className="w-full h-full object-cover"
/>

            </div>
          </div>
        </section>

        {/* ================= STATS ================= */}
        <section className="grid md:grid-cols-3 gap-8">
          <Stat value="15+" label="Anak Perusahaan" />
          <Stat value="261 Juta+" label="Pelanggan" />
          <Stat value="9 Negara" label="Wilayah Operasi" />
        </section>

        {/* ================= ABOUT ================= */}
        <section className="grid lg:grid-cols-2 gap-24 items-center">
          {/* IMAGE */}
          <div className="w-full h-[380px] rounded-3xl bg-gray-100 border overflow-hidden">
            {/* <img src="" alt="Tentang Telkom" /> */}
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-bold">
              Tentang Telkom Group
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              PT Telkom Indonesia (Persero) Tbk merupakan BUMN yang bergerak
              di bidang telekomunikasi, ICT, dan layanan digital. Telkom Group
              berperan penting dalam mendukung transformasi digital nasional
              melalui pengembangan infrastruktur dan solusi teknologi.
            </p>
          </div>
        </section>

        {/* ================= BUSINESS ================= */}
        <section className="space-y-14">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold mb-4">
              Bidang Bisnis Telkom Group
            </h2>
            <p className="text-lg text-gray-600">
              Telkom Group mengelola berbagai lini bisnis utama yang saling
              terintegrasi untuk menghadirkan layanan digital end-to-end.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <BusinessCard
              icon={Wifi}
              title="Telekomunikasi"
              img
            />
            <BusinessCard
              icon={Layers}
              title="Digital & Platform"
              img
            />
            <BusinessCard
              icon={Network}
              title="Infrastruktur & Network"
              img
            />
            <BusinessCard
              icon={Briefcase}
              title="Solusi Enterprise"
              img
            />
          </div>
        </section>

        {/* ================= SUBSIDIARY ================= */}
        <section className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">
              Struktur Anak Perusahaan
            </h2>
            <p className="text-lg text-gray-600">
              Telkom Group memiliki berbagai anak perusahaan strategis yang
              mendukung bisnis telekomunikasi, digital, dan infrastruktur.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                "Telkomsel",
                "Telkom Indonesia",
                "Telkomsigma",
                "Telkomsat",
                "TelkomMetra",
                "Mitratel"
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border bg-white hover:shadow-md transition"
                >
                  <Building2 className="w-5 h-5 text-red-600" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* IMAGE */}
          <div className="w-full h-[420px] rounded-3xl bg-gray-100 border overflow-hidden relative">
            <div className="absolute bottom-6 left-6 px-4 py-2 bg-white/90 backdrop-blur rounded-xl flex items-center gap-2 shadow">
              <Globe className="w-5 h-5 text-red-600" />
              <span className="text-sm font-medium">Global Presence</span>
            </div>
            {/* <img src="" alt="Subsidiary" /> */}
          </div>
        </section>

      </div>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function Stat({ value, label }) {
  return (
    <div className="rounded-3xl border bg-gradient-to-br from-gray-50 to-white p-10 text-center">
      <div className="text-4xl font-bold text-red-600">{value}</div>
      <div className="text-gray-500 mt-2">{label}</div>
    </div>
  );
}

function BusinessCard({ icon: Icon, title }) {
  return (
    <div className="group rounded-3xl border overflow-hidden hover:shadow-xl transition">
      <div className="h-44 bg-gray-100">
        {/* <img src="" alt={title} /> */}
      </div>
      <div className="p-6 space-y-3">
        <Icon className="w-6 h-6 text-red-600" />
        <h4 className="font-semibold text-lg">{title}</h4>
      </div>
    </div>
  );
}
