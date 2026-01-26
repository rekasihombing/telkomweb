import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pink-100 via-white to-pink-50 py-20">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-200 rounded-full opacity-20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 relative z-10">
            <h1 className="text-5xl font-bold leading-tight">
              Menghubungkan<br />
              Indonesia Lewat<br />
              <span className="text-red-500">Ekosistem Digital</span>
            </h1>
            <p className="text-gray-600 text-lg">
              Telkom Indonesia menghadirkan solusi digital terintegrasi melalui Telkom dan Telkomsel untuk masyarakat dan bisnis.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-all hover:shadow-lg">
                Jelajahi Telkom Group
              </button>
              <button className="bg-white border-2 border-gray-300 hover:border-red-500 text-gray-700 px-6 py-3 rounded-lg font-medium transition-all hover:shadow-lg">
                Lihat Layanan →
              </button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-red-400 to-red-600 rounded-full opacity-20 absolute top-0 right-0 blur-3xl"></div>
            <div className="relative z-10 flex items-center justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-2xl">
                <div className="text-white text-center space-y-4">
                  <div className="text-6xl">🌐</div>
                  <div className="text-sm font-medium">Digital Ecosystem</div>
                  <div className="flex justify-center gap-2 mt-4">
                    <div className="w-12 h-12 bg-white bg-opacity-30 rounded-lg flex items-center justify-center text-2xl backdrop-blur-sm">📱</div>
                    <div className="w-12 h-12 bg-white bg-opacity-30 rounded-lg flex items-center justify-center text-2xl backdrop-blur-sm">💻</div>
                    <div className="w-12 h-12 bg-white bg-opacity-30 rounded-lg flex items-center justify-center text-2xl backdrop-blur-sm">☁️</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;