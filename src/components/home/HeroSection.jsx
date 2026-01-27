import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen bg-no-repeat bg-cover font-sans"
      style={{
        backgroundImage: "url('/images/herobg.png')",
        backgroundPosition: "center center",
      }}
    >
      {/* Overlay
      <div className="absolute inset-0 bg-white/60"></div> */}

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center -translate-y-3">
        <div className="max-w-7xl px-6 w-full ml-0 lg:pl-24">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Text block */}
            <div className="space-y-6 max-w-lg">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-gray-900">
                Menghubungkan <br />
                Indonesia Lewat <br />
                <span className="text-red-500 font-semibold">
                  Ekosistem Digital
                </span>
              </h1>

              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Telkom Indonesia menghadirkan solusi digital terintegrasi melalui
                Telkom dan Telkomsel untuk masyarakat dan bisnis.
              </p>

              <div className="flex gap-4">
                <button className="bg-red-500 text-white px-6 py-3 rounded-xl font-medium">
                  Jelajahi Telkom Group
                </button>

                <button className="bg-white border border-gray-300 px-6 py-3 rounded-xl font-medium">
                  Lihat Layanan →
                </button>
              </div>
            </div>

            {/* Right empty */}
            <div className="hidden lg:block"></div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
