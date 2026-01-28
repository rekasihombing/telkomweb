import React from 'react';

const CompanyCardsSection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-50/50 via-white to-red-50/30" />
      <div className="absolute top-20 -left-40 w-[500px] h-[500px] bg-red-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 -right-40 w-[500px] h-[500px] bg-red-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-4">
            <span 
              className="px-4 py-2 rounded-full text-sm font-semibold text-red-600"
              style={{
                background: 'rgba(239, 68, 68, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(239, 68, 68, 0.2)',
              }}
            >
              🔥 Telkom Group Ecosystem
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Dua Peran, Satu <br className="md:hidden" />
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
                Ekosistem Digital
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full opacity-30" />
            </span>
          </h2>
          <p className="text-gray-600 mt-6 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Telkom Group membangun infrastruktur dan layanan digital untuk mempercepat transformasi Indonesia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 mb-20">
          {/* Telkom Card */}
          <div
            className="group relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-[1.02]"
            style={{
              background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.05) 0%, rgba(220, 38, 38, 0.08) 100%)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              boxShadow: '0 8px 32px rgba(239, 68, 68, 0.12), inset 0 1px 1px rgba(255, 255, 255, 0.8)',
              border: '1px solid rgba(239, 68, 68, 0.15)',
            }}
          >
            {/* Animated gradient overlay */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700"
              style={{
                background: 'radial-gradient(circle at top right, rgba(239, 68, 68, 0.15), transparent 70%)',
              }}
            />
            
            {/* Decorative circles */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-red-400/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-red-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

            <div className="relative z-10 p-10 md:p-12">
              {/* Logo Section */}
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300"
                    style={{
                      background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                      boxShadow: '0 8px 24px rgba(239, 68, 68, 0.3), 0 0 0 3px rgba(239, 68, 68, 0.1)',
                    }}
                  >
                    <span className="text-4xl font-black text-white">T</span>
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Telkom</h3>
                    <p className="text-red-600 text-sm font-medium mt-1">Digital Infrastructure</p>
                  </div>
                </div>
                
                {/* Pulse indicator */}
                <div className="relative">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-ping absolute" />
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                </div>
              </div>

              {/* Tag with icon */}
              <div className="mb-8">
                <div 
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-semibold text-red-600 group-hover:scale-105 transition-transform"
                  style={{
                    background: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 4px 12px rgba(239, 68, 68, 0.15)',
                    border: '1px solid rgba(239, 68, 68, 0.2)',
                  }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                  Infrastructure Provider
                </div>
              </div>

              {/* Features with animated icons */}
              <ul className="space-y-5 mb-10">
                {[
                  { icon: '🏢', text: 'Infrastruktur jaringan & data center' },
                  { icon: '🏛️', text: 'Layanan enterprise & pemerintahan' },
                  { icon: '☁️', text: 'Cloud, IoT, Big Data' }
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-4 group/item">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-300"
                      style={{
                        background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(220, 38, 38, 0.2) 100%)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(239, 68, 68, 0.2)',
                      }}
                    >
                      <span className="text-xl">{feature.icon}</span>
                    </div>
                    <span className="text-gray-700 text-base md:text-lg leading-relaxed pt-2">{feature.text}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className="group/btn w-full px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300 transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 overflow-hidden relative"
                style={{
                  background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                  boxShadow: '0 8px 24px rgba(239, 68, 68, 0.4), 0 4px 12px rgba(239, 68, 68, 0.2)',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000" />
                <span className="relative">Pelajari Telkom</span>
                <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform relative" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Telkomsel Card */}
          <div
            className="group relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-[1.02]"
            style={{
              background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.05) 0%, rgba(185, 28, 28, 0.08) 100%)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              boxShadow: '0 8px 32px rgba(220, 38, 38, 0.12), inset 0 1px 1px rgba(255, 255, 255, 0.8)',
              border: '1px solid rgba(220, 38, 38, 0.15)',
            }}
          >
            {/* Animated gradient overlay */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700"
              style={{
                background: 'radial-gradient(circle at top left, rgba(220, 38, 38, 0.15), transparent 70%)',
              }}
            />
            
            {/* Decorative circles */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-red-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-red-600/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

            <div className="relative z-10 p-10 md:p-12">
              {/* Logo Section */}
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300"
                    style={{
                      background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
                      boxShadow: '0 8px 24px rgba(220, 38, 38, 0.3), 0 0 0 3px rgba(220, 38, 38, 0.1)',
                    }}
                  >
                    <span className="text-4xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Telkomsel</h3>
                    <p className="text-red-600 text-sm font-medium mt-1">Mobile & Digital</p>
                  </div>
                </div>
                
                {/* Pulse indicator */}
                <div className="relative">
                  <div className="w-3 h-3 bg-red-600 rounded-full animate-ping absolute" />
                  <div className="w-3 h-3 bg-red-600 rounded-full" />
                </div>
              </div>

              {/* Tag with icon */}
              <div className="mb-8">
                <div 
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-semibold text-red-600 group-hover:scale-105 transition-transform"
                  style={{
                    background: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 4px 12px rgba(220, 38, 38, 0.15)',
                    border: '1px solid rgba(220, 38, 38, 0.2)',
                  }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Mobile Operator
                </div>
              </div>

              {/* Features with animated icons */}
              <ul className="space-y-5 mb-10">
                {[
                  { icon: '📱', text: 'Layanan seluler & internet' },
                  { icon: '💎', text: 'Produk digital untuk masyarakat' },
                  { icon: '🚀', text: '4G / 5G Nasional' }
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-4 group/item">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-300"
                      style={{
                        background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.15) 0%, rgba(185, 28, 28, 0.2) 100%)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(220, 38, 38, 0.2)',
                      }}
                    >
                      <span className="text-xl">{feature.icon}</span>
                    </div>
                    <span className="text-gray-700 text-base md:text-lg leading-relaxed pt-2">{feature.text}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className="group/btn w-full px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300 transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 overflow-hidden relative"
                style={{
                  background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
                  boxShadow: '0 8px 24px rgba(220, 38, 38, 0.4), 0 4px 12px rgba(220, 38, 38, 0.2)',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000" />
                <span className="relative">Pelajari Telkomsel</span>
                <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform relative" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section with glassmorphism */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { value: "170M+", label: "Pengguna Mobile", icon: "👥" },
            { value: "90%+", label: "Cakupan Jaringan", icon: "📡" },
            { value: "Ribuan", label: "Pelanggan Enterprise", icon: "🏢" },
            { value: "Nasional", label: "Infrastruktur Digital", icon: "🌐" },
          ].map((stat, i) => (
            <div
              key={i}
              className="group/stat text-center p-8 rounded-2xl transition-all duration-500 hover:scale-105 cursor-pointer relative overflow-hidden"
              style={{
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(16px) saturate(180%)',
                WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                boxShadow: '0 4px 24px rgba(239, 68, 68, 0.08), inset 0 1px 1px rgba(255, 255, 255, 0.8)',
                border: '1px solid rgba(239, 68, 68, 0.15)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover/stat:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="text-3xl mb-3 group-hover/stat:scale-110 transition-transform duration-300">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-br from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent mb-3">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium text-sm md:text-base">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyCardsSection;