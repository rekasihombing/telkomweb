import React from 'react';

const AboutTelkomPage = () => {
  const cards = [
    {
      iconUrl: '/images/infra.png',
      title: 'Konektivitas & Infrastruktur Digital',
      description: 'Kami bangun dan jaga jaringan digital Indonesia',
    },
    {
      iconUrl: '/images/layanan.png',
      title: 'Layanan Digital untuk Sehari hari',
      description: 'Layanan Digital yang Dipakai Jutaan Orang',
    },
    {
      iconUrl: '/images/inovasi.png',
      title: 'Inovasi Berkelanjutan',
      description: 'Mengembangkan solusi inovatif dengan teknologi terbaru',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-slate-100">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-300/20 rounded-full blur-3xl animate-pulse delay-700" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block mb-4 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-600 text-sm font-semibold backdrop-blur-sm">
            🇮🇩 BUMN Indonesia
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Tentang <span className="text-red-500">Telkom Group</span>
          </h1>

          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Telkom Group adalah BUMN yang membangun infrastruktur dan layanan
            digital untuk mendukung transformasi Indonesia.
          </p>
        </div>
      </section>

      {/* ================= CARDS SECTION ================= */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card, idx) => (
              <div key={idx} className="group relative overflow-hidden">
                
                <div
                  className="
                    relative p-8 rounded-3xl
                    bg-white/40
                    backdrop-blur-xl
                    border border-gray-200/50
                    shadow-xl shadow-gray-300/30
                    transition-all duration-500 ease-out
                    hover:-translate-y-3 hover:shadow-2xl hover:shadow-gray-400/40
                    hover:border-gray-300/60
                    hover:bg-white/60
                  "
                >
                  {/* Gradient hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100/0 via-gray-200/30 to-gray-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                  {/* ICON IMAGE */}
                  <div
                    className="
                      relative w-20 h-20
                      bg-gradient-to-br from-gray-100/80 to-gray-200/80
                      backdrop-blur-md
                      rounded-full
                      flex items-center justify-center
                      mb-6 mx-auto
                      border border-gray-300/50
                      shadow-lg
                      transition-all duration-500
                      group-hover:scale-110
                      group-hover:shadow-xl
                    "
                  >
                    <img
                      src={card.iconUrl}
                      alt={card.title}
                      className={`
                        object-contain
                        ${idx === 1 || idx === 2
                          ? 'w-14 h-14 scale-100'   // CARD 2 & 3
                          : 'w-16 h-16 scale-150'  // CARD 1 (TETAP)
                        }
                      `}
                    />
                  </div>

                  {/* CONTENT */}
                  <h3 className="relative text-xl font-bold text-center mb-4 text-gray-800 group-hover:text-gray-900">
                    {card.title}
                  </h3>

                  <p className="relative text-gray-600 text-center text-sm leading-relaxed group-hover:text-gray-700">
                    {card.description}
                  </p>

                  {/* Decorative blur */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-gray-300/20 rounded-full blur-3xl" />
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gray-200/20 rounded-full blur-3xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutTelkomPage;
