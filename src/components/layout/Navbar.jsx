import React, { useState, useEffect } from 'react';

const Navbar = ({ activeTab, setActiveTab }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'home', label: 'Beranda' },
    { id: 'telkomgroup', label: 'Telkom Group' },
    { id: 'perbedaan', label: 'Perbedaan' },
    { id: 'faq', label: 'FAQ' },
  ];

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300`}
      style={{
        // Glass lebih kuat & konsisten (tidak terlalu beda scrolled / tidak scrolled)
        background: scrolled 
          ? 'rgba(255, 255, 255, 0.18)' 
          : 'rgba(255, 255, 255, 0.14)',
        backdropFilter: 'blur(24px) saturate(180%)',
        WebkitBackdropFilter: 'blur(24px) saturate(180%)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.18)',
        boxShadow: scrolled 
          ? '0 10px 40px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255,255,255,0.25)'
          : '0 6px 24px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255,255,255,0.20)',
      }}
    >
      <div className="mx-auto w-full max-w-screen-2xl px-16 lg:px-20 xl:px-24">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo – ukuran & style tetap sama persis */}
          <div className="flex items-center cursor-pointer group">
            <img 
              src="images/logo-telkom.png" 
              alt="Telkom Logo" 
              className="h-12 w-auto transform group-hover:scale-105 transition-transform duration-200"
            />
          </div>

          {/* Desktop Navigation Menu – glass ditingkatkan */}
          <div className="hidden md:flex items-center">
            <div 
              // className="flex items-center space-x-4 rounded-2xl px-3 py-1.5"
              // style={{
              //   // background: 'rgba(255, 255, 255, 0.16)',
              //   backdropFilter: 'blur(16px) saturate(170%)',
              //   WebkitBackdropFilter: 'blur(16px) saturate(170%)',
              //   border: '1px solid rgba(255, 255, 255, 0.22)',
              //   boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.30), 0 2px 12px rgba(0,0,0,0.06)',
              // }}
            >
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative px-8 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    activeTab === item.id
                      ? 'text-red-600 -translate-y-0.5'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {activeTab === item.id && (
                    <div 
                      className="absolute inset-0 rounded-xl -z-10"
                      style={{
                        background: 'rgba(255, 255, 255, 0.35)',
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)',
                        boxShadow: 'inset 0 2px 10px rgba(255,255,255,0.4)',
                      }}
                    ></div>
                  )}
                  <span className="relative z-10">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button – glass ditingkatkan */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl text-gray-700 hover:bg-gray-200/40 transition-colors"
            style={{
              background: 'rgba(255, 255, 255, 0.18)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.20)',
              boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
            }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu – glass lebih kuat */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 pt-2">
            <div 
              className="rounded-2xl p-2 space-y-1"
              style={{
                background: 'rgba(255, 255, 255, 0.16)',
                backdropFilter: 'blur(20px) saturate(170%)',
                WebkitBackdropFilter: 'blur(20px) saturate(170%)',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255,255,255,0.25)',
              }}
            >
              {menuItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    activeTab === item.id
                      ? 'text-red-600 -translate-y-0.5 bg-white/25'
                      : 'text-gray-600 hover:bg-white/15'
                  }`}
                  style={{
                    backdropFilter: activeTab === item.id ? 'blur(10px)' : 'none',
                    WebkitBackdropFilter: activeTab === item.id ? 'blur(10px)' : 'none',
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes slideDown {
          from {
            transform: translateY(-10px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;