import React from 'react';

const PerbedaanPage = () => {
  return (
    <div className="bg-gradient-to-br from-pink-50 via-white to-pink-50 min-h-screen">
      {/* Header Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-600 mb-6">
            <span className="hover:text-red-500 cursor-pointer">Beranda</span> 
            <span className="mx-2">›</span> 
            <span className="text-red-500 font-medium">Perbedaan Telkom dan Telkomsel</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Perbedaan <span className="text-red-500">Telkom dan Telkomsel</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-4xl">
            Telkom dan Telkomsel adalah dua perusahaan utama di bawah Telkom Group yang memiliki fokus, peran, dan target layanan yang berbeda namun saling melengkapi dalam ekosistem digital Indonesia.
          </p>
        </div>
      </section>

      {/* Main Comparison Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-red-50 to-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-200 rounded-full opacity-20 blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-200 rounded-full opacity-20 blur-3xl -ml-24 -mb-24"></div>

            <div className="relative z-10">
              {/* Comparison Header */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Telkom Side */}
                <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-6 text-white text-center shadow-xl hover:shadow-2xl transition-all">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <span className="text-red-500 font-bold text-lg">T</span>
                    </div>
                    <h3 className="text-2xl font-bold">Telkom</h3>
                  </div>
                  <p className="text-sm opacity-90">Induk perusahaan<br/>Status Digital</p>
                </div>

                {/* Center - Scale Icon */}
                <div className="flex items-center justify-center relative">
                  <div className="bg-white rounded-full p-6 shadow-xl">
                    <div className="text-6xl">⚖️</div>
                  </div>
                  <div className="absolute -bottom-4 bg-red-500 text-white px-5 py-2 rounded-full text-sm font-medium shadow-lg">
                    Perbedaan Utama
                  </div>
                </div>

                {/* Telkomsel Side */}
                <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-6 text-white text-center shadow-xl hover:shadow-2xl transition-all">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <span className="text-red-600 font-bold text-2xl">⚡</span>
                    </div>
                    <h3 className="text-2xl font-bold">Telkomsel</h3>
                  </div>
                  <p className="text-sm opacity-90">Layanan Seluler &<br/>Digital untuk Masyarakat</p>
                </div>
              </div>

              {/* Comparison Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                {/* Telkom Details */}
                <div className="bg-white rounded-2xl p-6 shadow-lg space-y-4 hover:shadow-xl transition-all">
                  <div className="flex items-start gap-3 p-4 bg-red-50 rounded-xl hover:bg-red-100 transition-colors">
                    <span className="text-3xl">🏢</span>
                    <div>
                      <h4 className="font-bold text-gray-800 text-base">Induk perusahaan (Holding)</h4>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-red-50 rounded-xl hover:bg-red-100 transition-colors">
                    <span className="text-3xl">🏛️</span>
                    <div>
                      <h4 className="font-bold text-gray-800 text-base">Badan Usaha Milik Negara (BUMN)</h4>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-red-50 rounded-xl hover:bg-red-100 transition-colors">
                    <span className="text-3xl">📊</span>
                    <div>
                      <h4 className="font-bold text-gray-800 text-base">Mengelola strategi & arah bisnis Telkom Group</h4>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-red-50 rounded-xl hover:bg-red-100 transition-colors">
                    <span className="text-3xl">💼</span>
                    <div>
                      <h4 className="font-bold text-gray-800 text-base">Platform digital (IoT, Big Data)</h4>
                    </div>
                  </div>
                </div>

                {/* Telkomsel Details */}
                <div className="bg-white rounded-2xl p-6 shadow-lg space-y-4 hover:shadow-xl transition-all">
                  <div className="flex items-start gap-3 p-4 bg-red-50 rounded-xl hover:bg-red-100 transition-colors">
                    <span className="text-3xl">👥</span>
                    <div>
                      <h4 className="font-bold text-gray-800 text-base">Anak perusahaan Telkom Group</h4>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-red-50 rounded-xl hover:bg-red-100 transition-colors">
                    <span className="text-3xl">📡</span>
                    <div>
                      <h4 className="font-bold text-gray-800 text-base">Operator telekomunikasi seluler</h4>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-red-50 rounded-xl hover:bg-red-100 transition-colors">
                    <span className="text-3xl">👤</span>
                    <div>
                      <h4 className="font-bold text-gray-800 text-base">Fokus pada layanan ritel (end user)</h4>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-red-50 rounded-xl hover:bg-red-100 transition-colors">
                    <span className="text-3xl">🌍</span>
                    <div>
                      <h4 className="font-bold text-gray-800 text-base">Nasional & global</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Focus Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Perbedaan <span className="text-red-500">Fokus Bisnis</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Telkom Focus */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-lg">T</span>
                </div>
                <h3 className="text-2xl font-bold text-red-500">Telkom</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition-colors">
                  <span className="text-red-500 text-xl font-bold">•</span>
                  <span className="text-gray-700 text-base">Infrastruktur digital nasional</span>
                </li>
                <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition-colors">
                  <span className="text-red-500 text-xl font-bold">•</span>
                  <span className="text-gray-700 text-base">Data center & Cloud</span>
                </li>
                <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition-colors">
                  <span className="text-red-500 text-xl font-bold">•</span>
                  <span className="text-gray-700 text-base">Solusi enterprise & pemerintahan</span>
                </li>
                <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition-colors">
                  <span className="text-red-500 text-xl font-bold">•</span>
                  <span className="text-gray-700 text-base">Platform digital (IoT, Big Data)</span>
                </li>
              </ul>
            </div>

            {/* Telkomsel Focus */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-2xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold text-red-600">Telkomsel</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition-colors">
                  <span className="text-red-600 text-xl font-bold">•</span>
                  <span className="text-gray-700 text-base">Telekomunikasi seluler</span>
                </li>
                <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition-colors">
                  <span className="text-red-600 text-xl font-bold">•</span>
                  <span className="text-gray-700 text-base">Internet mobile</span>
                </li>
                <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition-colors">
                  <span className="text-red-600 text-xl font-bold">•</span>
                  <span className="text-gray-700 text-base">Layanan digital lifestyle</span>
                </li>
                <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition-colors">
                  <span className="text-red-600 text-xl font-bold">•</span>
                  <span className="text-gray-700 text-base">Konten hiburan & aplikasi digital</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Target Customer Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Perbedaan <span className="text-red-500">Target Pelanggan</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Telkom Targets */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">T</span>
                </div>
                <h3 className="text-3xl font-bold">Telkom</h3>
                <span className="bg-red-100 text-red-600 px-4 py-1.5 rounded-full text-sm font-semibold">Segment</span>
              </div>

              <div className="space-y-4">
                <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-red-100">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">🏢</span>
                    <h4 className="font-bold text-gray-800 text-lg">B2B, B2G, B2C</h4>
                  </div>
                  <p className="text-gray-600 text-sm ml-12">Perusahaan, Pemerintah, dan Konsumen</p>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-red-100">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">📋</span>
                    <h4 className="font-bold text-gray-800 text-lg">Solusi enterprise & pemerintahan</h4>
                  </div>
                  <p className="text-gray-600 text-sm ml-12">Perusahaan & Pemerintah</p>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-red-100">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">💻</span>
                    <h4 className="font-bold text-gray-800 text-lg">Platform digital (IoT, Big Data)</h4>
                  </div>
                  <p className="text-gray-600 text-sm ml-12">Korporasi & Industri</p>
                </div>
              </div>
            </div>

            {/* Telkomsel Targets */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-2xl">⚡</span>
                </div>
                <h3 className="text-3xl font-bold">Telkomsel</h3>
                <span className="bg-red-100 text-red-600 px-4 py-1.5 rounded-full text-sm font-semibold">Segment</span>
              </div>

              <div className="space-y-4">
                <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-red-100">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">👤</span>
                    <h4 className="font-bold text-gray-800 text-lg">B2C</h4>
                  </div>
                  <p className="text-gray-600 text-sm ml-12">Konsumen Individual</p>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-red-100">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">📱</span>
                    <h4 className="font-bold text-gray-800 text-lg">Jaringan seluler 4G & 5G</h4>
                  </div>
                  <p className="text-gray-600 text-sm ml-12">Pengguna Mobile di Seluruh Indonesia</p>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-red-100">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">🎮</span>
                    <h4 className="font-bold text-gray-800 text-lg">MAXstream | Dunia Games</h4>
                  </div>
                  <p className="text-gray-600 text-sm ml-12">Layanan digital lifestyle berbasis mobile</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Usage Examples */}
      <section className="py-12 px-4 bg-gradient-to-br from-pink-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Contoh Penggunaan Nyata
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Berikut adalah contoh nyata penggunaan layanan Telkom dan Telkomsel dalam kehidupan sehari-hari
          </p>

          <div className="bg-white rounded-2xl shadow-xl p-8 space-y-4">
            <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-red-50 to-white rounded-xl hover:shadow-md transition-all border border-red-100">
              <span className="text-3xl flex-shrink-0">💡</span>
              <div className="flex-1">
                <h4 className="font-bold text-gray-800 mb-2 text-lg">Jika kamu;</h4>
                <p className="text-gray-600 text-base mb-2">Pasang Internet rumah</p>
                <p className="text-red-500 font-semibold text-base flex items-center gap-2">
                  <span>→</span> Telkom (IndiHome)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-red-50 to-white rounded-xl hover:shadow-md transition-all border border-red-100">
              <span className="text-3xl flex-shrink-0">💡</span>
              <div className="flex-1">
                <h4 className="font-bold text-gray-800 mb-2 text-lg">Jika kamu;</h4>
                <p className="text-gray-600 text-base mb-2">Pakai kartu internet & paket data</p>
                <p className="text-red-600 font-semibold text-base flex items-center gap-2">
                  <span>→</span> Telkomsel
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-red-50 to-white rounded-xl hover:shadow-md transition-all border border-red-100">
              <span className="text-3xl flex-shrink-0">💡</span>
              <div className="flex-1">
                <h4 className="font-bold text-gray-800 mb-2 text-lg">Jika kamu;</h4>
                <p className="text-gray-600 text-base mb-2">Perusahaan butuh cloud & data center</p>
                <p className="text-red-500 font-semibold text-base flex items-center gap-2">
                  <span>→</span> Telkom
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-red-50 to-white rounded-xl hover:shadow-md transition-all border border-red-100">
              <span className="text-3xl flex-shrink-0">💡</span>
              <div className="flex-1">
                <h4 className="font-bold text-gray-800 mb-2 text-lg">Jika kamu;</h4>
                <p className="text-gray-600 text-base mb-2">Streaming & game di HP</p>
                <p className="text-red-600 font-semibold text-base flex items-center gap-2">
                  <span>→</span> Telkomsel
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Kembali ke Beranda
            </button>
            <button className="bg-white border-2 border-red-500 text-red-500 hover:bg-red-50 px-8 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Lihat FAQ →
            </button>
          </div>
        </div>
      </section>

      {/* Footer Info Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 text-white text-center shadow-2xl">
            <h3 className="text-2xl font-bold mb-3">Masih Ada Pertanyaan?</h3>
            <p className="text-red-100 mb-6 max-w-2xl mx-auto">
              Hubungi customer service kami untuk informasi lebih lanjut mengenai layanan Telkom dan Telkomsel
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-red-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-md">
                Hubungi Kami
              </button>
              <button className="bg-red-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition-all shadow-md">
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PerbedaanPage;