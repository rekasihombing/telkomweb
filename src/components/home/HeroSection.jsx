import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen bg-no-repeat bg-cover"
      style={{
        backgroundImage: "url('/images/herobg.png')",
        backgroundPosition: "center center", // ⬅️ TETAP TENGAH, TIDAK NAIK
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-white/60"></div>

      {/* content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2">

            <div className="space-y-6">
              <h1 className="text-5xl font-bold leading-tight">
                Menghubungkan <br />
                Indonesia Lewat <br />
                <span className="text-red-500">Ekosistem Digital</span>
              </h1>

              <p className="text-gray-700 text-lg max-w-xl">
                Telkom Indonesia menghadirkan solusi digital terintegrasi melalui
                Telkom dan Telkomsel untuk masyarakat dan bisnis.
              </p>

              <div className="flex gap-4">
                <button className="bg-red-500 text-white px-6 py-3 rounded-lg">
                  Jelajahi Telkom Group
                </button>
                <button className="bg-white border px-6 py-3 rounded-lg">
                  Lihat Layanan →
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
