import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen bg-no-repeat font-sans"
      style={{
        backgroundImage: `url('images/herobg.png')`,
      }}
    >
      {/* Overlay untuk mobile agar text lebih terbaca */}
      <div className="absolute inset-0 bg-white/20 md:bg-white/15 lg:bg-transparent"></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="mx-auto w-full max-w-screen-2xl px-6 sm:px-8 md:px-12 lg:px-20 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Text block */}
            <div className="space-y-6 max-w-lg py-20 lg:py-0">
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-gray-900">
                Menghubungkan <br />
                Indonesia Lewat <br />
                <span className="text-red-500 font-semibold">
                  Ekosistem Digital
                </span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                Telkom Indonesia menghadirkan solusi digital terintegrasi melalui
                Telkom dan Telkomsel untuk masyarakat dan bisnis.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                {/* Button 1 - Red Glass with white shimmer stroke */}
                <button 
                  className="relative px-6 py-3 rounded-2xl font-medium text-red-600 overflow-hidden group w-full sm:w-auto"
                  style={{
                    background: 'rgba(239, 68, 68, 0.15)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                  }}
                >
                  {/* Shimmer Border Animation */}
                  <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
                    <rect
                      x="1"
                      y="1"
                      width="calc(100% - 2px)"
                      height="calc(100% - 2px)"
                      rx="15"
                      fill="none"
                      stroke="url(#shimmer-gradient-1)"
                      strokeWidth="2"
                      strokeDasharray="300"
                      strokeDashoffset="0"
                      style={{
                        animation: 'dash 3s linear infinite'
                      }}
                    />
                    <defs>
                      <linearGradient id="shimmer-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
                        <stop offset="50%" stopColor="rgba(255, 255, 255, 1)" />
                        <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  <span className="relative z-10">Jelajahi Telkom Group</span>
                </button>

                {/* Button 2 - White Glass with red shimmer stroke */}
                <button 
                  className="relative px-6 py-3 rounded-2xl font-medium text-gray-900 overflow-hidden group w-full sm:w-auto"
                  style={{
                    background: 'rgba(255, 255, 255, 0.3)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1.5px solid rgba(200, 200, 200, 0.5)',
                  }}
                >
                  {/* Shimmer Border Animation */}
                  <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
                    <rect
                      x="1"
                      y="1"
                      width="calc(100% - 2px)"
                      height="calc(100% - 2px)"
                      rx="15"
                      fill="none"
                      stroke="url(#shimmer-gradient-2)"
                      strokeWidth="1.5"
                      strokeDasharray="300"
                      strokeDashoffset="0"
                      style={{
                        animation: 'dash 3s linear infinite'
                      }}
                    />
                    <defs>
                      <linearGradient id="shimmer-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(239, 68, 68, 0)" />
                        <stop offset="50%" stopColor="rgba(239, 68, 68, 0.9)" />
                        <stop offset="100%" stopColor="rgba(239, 68, 68, 0)" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  <span className="relative z-10">Lihat Layanan →</span>
                </button>
              </div>
            </div>

            {/* Right empty */}
            <div className="hidden lg:block"></div>

          </div>
        </div>
      </div>

      {/* Keyframes Animation */}
      <style jsx>{`
        @keyframes dash {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -600;
          }
        }

        /* Responsive background */
        section {
          background-size: auto 100%;
          background-position: right center;
        }

        @media (max-width: 640px) {
          section {
            background-size: auto 120%;
            background-position: 85% center;
          }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
          section {
            background-size: auto 110%;
            background-position: 75% center;
          }
        }

        @media (min-width: 1025px) {
          section {
            background-size: cover;
            background-position: center center;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;