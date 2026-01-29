import React, { useState } from 'react';
import { Search, ChevronRight, Mail, Plus } from 'lucide-react';

export default function TelkomFAQ() {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSidebarQuestion, setSelectedSidebarQuestion] = useState(0);

  const categories = [
    { icon: '', label: 'Tentang Telkom Group', active: false },
    { icon: '', label: 'Telkom vs Telkomsel', active: true },
    { icon: '', label: 'Layanan & Produk', active: false },
    { icon: '', label: 'Bisnis & Enterprise', active: false },
    { icon: '', label: 'Karier & Kolaborasi', active: false }
  ];

  const sidebarQuestions = [
    { 
      question: 'Bagaimana struktur kepemilikan Telkom Group?',
      icon: '🏢',
      answer: 'Telkom Indonesia adalah BUMN yang mayoritas sahamnya dimiliki oleh Pemerintah Indonesia (52.09%) dan sisanya oleh publik (47.91%). Sebagai holding, Telkom memiliki berbagai anak perusahaan termasuk Telkomsel dengan kepemilikan mayoritas 65%.'
    },
    { 
      question: 'Apa visi dan misi Telkom Indonesia?',
      icon: '🎯',
      answer: 'Visi Telkom adalah "To be a leading digital telco in the region". Misi Telkom adalah mempercepat transformasi digital, membangun infrastruktur digital yang kuat, dan mengembangkan platform digital untuk menciptakan nilai bagi stakeholder.'
    },
    { 
      question: 'Dimana kantor pusat Telkom Indonesia?',
      icon: '📍',
      answer: 'Kantor pusat Telkom Indonesia berlokasi di Telkom Landmark Tower, Jl. Gatot Subroto Kav. 52, Jakarta Selatan 12710, Indonesia.'
    },
    { 
      question: 'Bagaimana cara menghubungi Telkom Indonesia?',
      icon: '📞',
      answer: 'Anda dapat menghubungi Telkom Indonesia melalui Contact Center 147 (untuk pelanggan IndiHome dan layanan fixed line), email di care@telkom.co.id, atau melalui media sosial resmi Telkom Indonesia.'
    },
    { 
      question: 'Apa perbedaan IndiHome dan Telkomsel Orbit?',
      icon: '🌐',
      answer: 'IndiHome adalah layanan internet fixed (fiber optik) yang kini dikelola oleh Telkomsel, cocok untuk rumah dengan koneksi stabil. Telkomsel Orbit adalah layanan internet wireless (4G/5G) yang fleksibel dan portable, cocok untuk yang sering berpindah lokasi.'
    }
  ];

  const faqs = [
    {
      question: 'Apa perbedaan Telkom dan Telkomsel?',
      answer: 'Telkom Indonesia adalah perusahaan induk (holding) yang berfokus pada penyediaan solusi digital dan infrastruktur telekomunikasi nasional, sedangkan Telkomsel merupakan anak perusahaan Telkom yang berfokus pada layanan seluler dan digital consumer.'
    },
    {
      question: 'Apakah Telkom dan Telkomsel perusahaan yang sama?',
      answer: 'Tidak. Telkom dan Telkomsel adalah entitas bisnis yang berbeda, namun keduanya berada dalam satu ekosistem Telkom Group dan saling terintegrasi dalam penyediaan layanan telekomunikasi dan digital.'
    },
    {
      question: 'Apa peran Telkom Indonesia dalam Telkom Group?',
      answer: 'Telkom Indonesia berperan sebagai perusahaan induk (holding) yang mengelola strategi, portofolio bisnis, serta sinergi antar anak perusahaan dalam Telkom Group.'
    },
    {
      question: 'Layanan apa saja yang disediakan oleh Telkom Indonesia?',
      answer: 'Telkom Indonesia menyediakan berbagai layanan, antara lain: Infrastruktur telekomunikasi dan jaringan digital, Layanan broadband dan fixed connectivity, Solusi digital untuk segmen enterprise, government, dan wholesale, Data center, cloud, dan digital platform.'
    },
    {
      question: 'Kenapa layanan Telkom dan Telkomsel terlihat mirip?',
      answer: 'Karena Telkom dan Telkomsel berada dalam satu ekosistem Telkom Group, sehingga beberapa layanan dan produk saling terintegrasi. Namun, masing-masing memiliki target pasar dan fokus bisnis yang berbeda.'
    },
    {
      question: 'Apa itu Telkom Group?',
      answer: 'Telkom Group adalah kelompok usaha yang terdiri dari Telkom Indonesia sebagai perusahaan induk beserta anak-anak perusahaannya yang bergerak di bidang telekomunikasi, digital, dan solusi teknologi.'
    },
    {
      question: 'Siapa saja anak perusahaan dalam Telkom Group?',
      answer: 'Beberapa anak perusahaan Telkom Group antara lain: Telkomsel (layanan seluler & digital consumer), Telkom Akses (infrastruktur jaringan), Telin (Telkom International), MDI Ventures, NeutraDC dan berbagai entitas pendukung lainnya sesuai fokus bisnis masing-masing.'
    },
    {
      question: 'Apa fokus bisnis utama Telkom Indonesia?',
      answer: 'Fokus bisnis Telkom Indonesia adalah pada transformasi digital, pengembangan infrastruktur digital nasional, serta penyediaan solusi digital terintegrasi bagi individu, bisnis, dan institusi pemerintahan.'
    },
    {
      question: 'Apakah Telkom hanya melayani pelanggan individu?',
      answer: 'Tidak. Telkom Indonesia melayani berbagai segmen, mulai dari pelanggan individu, UKM, enterprise, hingga instansi pemerintahan melalui berbagai solusi digital dan layanan konektivitas.'
    },
    {
      question: 'Bagaimana Telkom mendukung transformasi digital Indonesia?',
      answer: 'Telkom Indonesia mendukung transformasi digital nasional melalui pembangunan infrastruktur digital, pengembangan ekosistem digital, serta penyediaan solusi teknologi yang mendorong pertumbuhan ekonomi digital Indonesia.'
    },
    {
      question: 'Apa itu Satelit Merah Putih 2?',
      answer: 'Satelit Merah Putih 2 adalah satelit telekomunikasi yang diluncurkan oleh Telkom Indonesia, menandai 42 tahun kiprahnya dalam bisnis satelit. Dengan 60 transponder aktif, satelit ini meningkatkan total transponder menjadi 133 dan memperkuat bisnis internasional Telkom Group di Asia Tenggara dan Asia Selatan.'
    },
    {
      question: 'Apa itu Hyperscale Data Center (HDC) Cikarang?',
      answer: 'Hyperscale Data Center (HDC) di Cikarang adalah pusat data bertaraf internasional terbesar di Indonesia yang dibangun oleh Telkom Indonesia dengan kapasitas hingga 10.000 rack dan daya 75 Megawatt. HDC ini menggunakan energi hijau dan dibangun sesuai standar Internasional Tier-4 dengan sistem water cooling yang tidak terputus.'
    },
    {
      question: 'Apa itu IndiHome dan layanannya?',
      answer: 'IndiHome (Indonesia Digital Home) adalah layanan internet, telepon rumah, dan TV interaktif berbasis fiber optik (FTTH) yang kini dikelola oleh Telkomsel sejak 2023. IndiHome menyediakan paket Single Play (internet), Double Play (internet + TV/telepon), dan Triple Play (internet + TV + telepon) yang telah melayani jutaan pelanggan di seluruh Indonesia.'
    }
  ];

  const highlightTelkom = (text) => {
    if (!text) return text;
    
    const parts = text.split(/(Telkom Indonesia|Telkomsel|Telkom Group|Telkom)/g);
    return parts.map((part, i) => {
      if (part === 'Telkom' || part === 'Telkomsel' || part === 'Telkom Indonesia' || part === 'Telkom Group') {
        return <span key={i} className="text-red-600 font-semibold">{part}</span>;
      }
      return part;
    });
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="flex items-start justify-between mb-12">
          <div className="flex-1">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">FAQ Telkom vs Telkomsel</h1>
            <p className="text-lg text-gray-600 mb-8">
              Pertanyaan umum seputar <span className="font-semibold">Telkom</span> dan <span className="font-semibold">Telkomsel</span>, fokus terhadap Telkom Indonesia sebagai holding.
            </p>

            {/* Search Bar */}
            <div className="relative mb-8">
              <input
                type="text"
                placeholder="Cari pertanyaan..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pr-14 border-2 border-gray-200 rounded-2xl focus:border-red-500 focus:outline-none text-gray-700 placeholder-gray-400"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center hover:bg-red-700 transition-colors">
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-3">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    cat.active
                      ? 'bg-red-50 text-red-600 border-2 border-red-300'
                      : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <span className="mr-2">{cat.icon}</span>
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Illustration */}
          <div className="w-80 h-80 relative ml-12">
            <div className="absolute inset-0 bg-gradient-to-br from-red-100 via-pink-100 to-orange-100 rounded-full opacity-60"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-8xl">🤖</div>
            </div>
            <div className="absolute top-8 right-8 bg-white p-3 rounded-2xl shadow-lg animate-bounce">
              <div className="text-2xl">❓</div>
            </div>
            <div className="absolute bottom-12 left-8 bg-white p-3 rounded-2xl shadow-lg">
              <div className="text-2xl">💬</div>
            </div>
            <div className="absolute top-1/2 right-4 bg-white p-3 rounded-2xl shadow-lg">
              <div className="text-2xl">❤️</div>
            </div>
            <div className="absolute bottom-8 right-12 bg-white p-3 rounded-2xl shadow-lg">
              <div className="text-2xl">📊</div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex gap-6">
          {/* Sidebar */}
          <div className="w-96 flex-shrink-0">
            <div className="bg-gray-50 rounded-3xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-xl">❓</span>
                </div>
                <span className="font-bold text-gray-900">Pertanyaan Lainnya</span>
              </div>

              {sidebarQuestions.map((q, idx) => (
                <div key={idx} className="mb-3">
                  <button
                    onClick={() => setSelectedSidebarQuestion(selectedSidebarQuestion === idx ? null : idx)}
                    className={`w-full text-left p-4 rounded-2xl transition-all ${
                      selectedSidebarQuestion === idx
                        ? 'bg-red-50 border-2 border-red-200'
                        : 'hover:bg-gray-100 border-2 border-transparent'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        selectedSidebarQuestion === idx ? 'bg-red-200' : 'bg-gray-200'
                      }`}>
                        <span className="text-xl">{q.icon}</span>
                      </div>
                      <div className="flex-1">
                        <p className={`font-medium ${selectedSidebarQuestion === idx ? 'text-red-600' : 'text-gray-900'}`}>
                          {highlightTelkom(q.question)}
                        </p>
                      </div>
                      <Plus 
                        className={`w-5 h-5 flex-shrink-0 transition-transform ${
                          selectedSidebarQuestion === idx ? 'rotate-45 text-red-600' : 'text-gray-400'
                        }`} 
                      />
                    </div>
                  </button>
                  
                  {/* Answer below question */}
                  {selectedSidebarQuestion === idx && (
                    <div className="mt-3 ml-3 mr-3 p-4 bg-white rounded-xl border-l-4 border-red-500">
                      <div className="flex items-start gap-3">
                        <span className="text-lg font-bold text-red-600">A:</span>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {highlightTelkom(q.answer)}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-gray-700 mb-4">
                  <span className="font-semibold">Masih bingung?</span> Hubungi kami untuk pertanyaan lebih lanjut.
                </p>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
                  <Mail className="w-5 h-5" />
                  Hubungi Kami
                </button>
              </div>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="flex-1">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-gray-200 rounded-2xl mb-4 overflow-hidden hover:border-gray-300 transition-all"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full p-6 flex items-start gap-4 text-left"
                >
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-red-600">Q</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {highlightTelkom(faq.question)}
                    </h3>
                  </div>
                  <Plus 
                    className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform ${
                      expandedFaq === idx ? 'rotate-45' : ''
                    }`} 
                  />
                </button>

                {expandedFaq === idx && faq.answer && (
                  <div className="px-6 pb-6">
                    <div className="ml-14 bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl">
                      <div className="flex items-start gap-3">
                        <span className="text-lg font-bold text-red-600">A:</span>
                        <p className="text-gray-700">
                          {highlightTelkom(faq.answer)}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-bounce {
          animation: bounce 2s infinite;
        }
      `}</style>
    </div>
  );
}