import React from 'react';

const CompanyCardsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Dua Peran, Satu <span className="text-red-500">Ekosistem Digital</span>
          </h2>
          <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
            Telkom Group adalah BUMN yang membangun infrastruktur dan layanan
            digital untuk mendukung transformasi Indonesia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Telkom Card */}
          <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-8 text-white shadow-2xl relative overflow-hidden group hover:shadow-3xl transition-all">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32 group-hover:opacity-10 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black opacity-5 rounded-full -ml-24 -mb-24"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-red-500 font-bold">T</span>
                </div>
                <h3 className="text-2xl font-bold">Telkom</h3>
              </div>

              <div className="bg-white bg-opacity-20 rounded-lg px-4 py-2 inline-block mb-6 backdrop-blur-sm">
                <span className="text-sm font-medium">Digital Infrastructure →</span>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-white text-lg">•</span>
                  <span>Infrastruktur jaringan & data center</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white text-lg">•</span>
                  <span>Layanan enterprise & pemerintahan</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white text-lg">•</span>
                  <span>Cloud, IOT, Big Data</span>
                </li>
              </ul>

              <button className="bg-white text-red-500 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Pelajari Telkom →
              </button>
            </div>
          </div>

          {/* Telkomsel Card */}
          <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 text-white shadow-2xl relative overflow-hidden group hover:shadow-3xl transition-all">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32 group-hover:opacity-10 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black opacity-5 rounded-full -ml-24 -mb-24"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-red-600 font-bold text-xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold">Telkomsel</h3>
              </div>

              <div className="bg-white bg-opacity-20 rounded-lg px-4 py-2 inline-block mb-6 backdrop-blur-sm">
                <span className="text-sm font-medium">Mobile & Digital Lifestyle →</span>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-white text-lg">•</span>
                  <span>Layanan seluler & internet</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white text-lg">•</span>
                  <span>Produk digital untuk masyarakat</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white text-lg">•</span>
                  <span>4G / 5G Nasional</span>
                </li>
              </ul>

              <button className="bg-white text-red-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Pelajari Telkomsel →
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-red-500">170M+</div>
            <div className="text-gray-600 mt-2">Pengguna Mobile</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-500">90%+</div>
            <div className="text-gray-600 mt-2">Cakupan Jaringan</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-500">Ribuan</div>
            <div className="text-gray-600 mt-2">Pelanggan Enterprise</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-500">Nasional</div>
            <div className="text-gray-600 mt-2">Infrastruktur Digital</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyCardsSection;