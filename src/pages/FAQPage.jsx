import React, { useMemo, useState, useEffect } from "react";
import { ChevronRight, Mail, Plus } from "lucide-react";

export default function TelkomFAQ() {
  const [expandedFaq, setExpandedFaq] = useState(null); // index di filteredFaqs
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSidebarQuestion, setSelectedSidebarQuestion] = useState(null);

  // Pagination
  const PAGE_SIZE = 6;
  const [page, setPage] = useState(1);

  const sidebarQuestions = [
    {
      question: "Bagaimana struktur kepemilikan Telkom Group?",
      icon: "🏢",
      answer:
        "Telkom Indonesia adalah BUMN yang mayoritas sahamnya dimiliki oleh Pemerintah Indonesia (52.09%) dan sisanya oleh publik (47.91%). Sebagai holding, Telkom memiliki berbagai anak perusahaan termasuk Telkomsel dengan kepemilikan mayoritas 65%.",
    },
    {
      question: "Apa visi dan misi Telkom Indonesia?",
      icon: "🎯",
      answer:
        'Visi Telkom adalah "To be a leading digital telco in the region". Misi Telkom adalah mempercepat transformasi digital, membangun infrastruktur digital yang kuat, dan mengembangkan platform digital untuk menciptakan nilai bagi stakeholder.',
    },
    {
      question: "Dimana kantor pusat Telkom Indonesia?",
      icon: "📍",
      answer:
        "Kantor pusat Telkom Indonesia berlokasi di Telkom Landmark Tower, Jl. Gatot Subroto Kav. 52, Jakarta Selatan 12710, Indonesia.",
    },
    {
      question: "Bagaimana cara menghubungi Telkom Indonesia?",
      icon: "📞",
      answer:
        "Anda dapat menghubungi Telkom Indonesia melalui Contact Center 147 (untuk pelanggan IndiHome dan layanan fixed line), email di care@telkom.co.id, atau melalui media sosial resmi Telkom Indonesia.",
    },
    {
      question: "Apa perbedaan IndiHome dan Telkomsel Orbit?",
      icon: "🌐",
      answer:
        "IndiHome adalah layanan internet fixed (fiber optik) yang kini dikelola oleh Telkomsel, cocok untuk rumah dengan koneksi stabil. Telkomsel Orbit adalah layanan internet wireless (4G/5G) yang fleksibel dan portable, cocok untuk yang sering berpindah lokasi.",
    },
  ];

  // Tambahin id biar bisa “featured jump”
  const faqs = [
    {
      id: "beda-telkom-telkomsel",
      question: "Apa perbedaan Telkom dan Telkomsel?",
      answer:
        "Telkom Indonesia adalah perusahaan induk (holding) yang berfokus pada penyediaan solusi digital dan infrastruktur telekomunikasi nasional, sedangkan Telkomsel merupakan anak perusahaan Telkom yang berfokus pada layanan seluler dan digital consumer.",
    },
    {
      id: "sama-atau-tidak",
      question: "Apakah Telkom dan Telkomsel perusahaan yang sama?",
      answer:
        "Tidak. Telkom dan Telkomsel adalah entitas bisnis yang berbeda, namun keduanya berada dalam satu ekosistem Telkom Group dan saling terintegrasi dalam penyediaan layanan telekomunikasi dan digital.",
    },
    {
      id: "peran-holding",
      question: "Apa peran Telkom Indonesia dalam Telkom Group?",
      answer:
        "Telkom Indonesia berperan sebagai perusahaan induk (holding) yang mengelola strategi, portofolio bisnis, serta sinergi antar anak perusahaan dalam Telkom Group.",
    },
    {
      id: "layanan-telkom",
      question: "Layanan apa saja yang disediakan oleh Telkom Indonesia?",
      answer:
        "Telkom Indonesia menyediakan berbagai layanan, antara lain: Infrastruktur telekomunikasi dan jaringan digital, Layanan broadband dan fixed connectivity, Solusi digital untuk segmen enterprise, government, dan wholesale, Data center, cloud, dan digital platform.",
    },
    {
      id: "kenapa-mirip",
      question: "Kenapa layanan Telkom dan Telkomsel terlihat mirip?",
      answer:
        "Karena Telkom dan Telkomsel berada dalam satu ekosistem Telkom Group, sehingga beberapa layanan dan produk saling terintegrasi. Namun, masing-masing memiliki target pasar dan fokus bisnis yang berbeda.",
    },
    {
      id: "apa-itu-group",
      question: "Apa itu Telkom Group?",
      answer:
        "Telkom Group adalah kelompok usaha yang terdiri dari Telkom Indonesia sebagai perusahaan induk beserta anak-anak perusahaannya yang bergerak di bidang telekomunikasi, digital, dan solusi teknologi.",
    },
    {
      id: "anak-perusahaan",
      question: "Siapa saja anak perusahaan dalam Telkom Group?",
      answer:
        "Beberapa anak perusahaan Telkom Group antara lain: Telkomsel (layanan seluler & digital consumer), Telkom Akses (infrastruktur jaringan), Telin (Telkom International), MDI Ventures, NeutraDC dan berbagai entitas pendukung lainnya sesuai fokus bisnis masing-masing.",
    },
    {
      id: "fokus-bisnis",
      question: "Apa fokus bisnis utama Telkom Indonesia?",
      answer:
        "Fokus bisnis Telkom Indonesia adalah pada transformasi digital, pengembangan infrastruktur digital nasional, serta penyediaan solusi digital terintegrasi bagi individu, bisnis, dan institusi pemerintahan.",
    },
    {
      id: "bukan-individu",
      question: "Apakah Telkom hanya melayani pelanggan individu?",
      answer:
        "Tidak. Telkom Indonesia melayani berbagai segmen, mulai dari pelanggan individu, UKM, enterprise, hingga instansi pemerintahan melalui berbagai solusi digital dan layanan konektivitas.",
    },
    {
      id: "transformasi-digital",
      question: "Bagaimana Telkom mendukung transformasi digital Indonesia?",
      answer:
        "Telkom Indonesia mendukung transformasi digital nasional melalui pembangunan infrastruktur digital, pengembangan ekosistem digital, serta penyediaan solusi teknologi yang mendorong pertumbuhan ekonomi digital Indonesia.",
    },
    {
      id: "satelit-merah-putih-2",
      question: "Apa itu Satelit Merah Putih 2?",
      answer:
        "Satelit Merah Putih 2 adalah satelit telekomunikasi yang diluncurkan oleh Telkom Indonesia, menandai 42 tahun kiprahnya dalam bisnis satelit. Dengan 60 transponder aktif, satelit ini meningkatkan total transponder menjadi 133 dan memperkuat bisnis internasional Telkom Group di Asia Tenggara dan Asia Selatan.",
    },
    {
      id: "hdc-cikarang",
      question: "Apa itu Hyperscale Data Center (HDC) Cikarang?",
      answer:
        "Hyperscale Data Center (HDC) di Cikarang adalah pusat data bertaraf internasional terbesar di Indonesia yang dibangun oleh Telkom Indonesia dengan kapasitas hingga 10.000 rack dan daya 75 Megawatt. HDC ini menggunakan energi hijau dan dibangun sesuai standar Internasional Tier-4 dengan sistem water cooling yang tidak terputus.",
    },
    {
      id: "indihome",
      question: "Apa itu IndiHome dan layanannya?",
      answer:
        "IndiHome (Indonesia Digital Home) adalah layanan internet, telepon rumah, dan TV interaktif berbasis fiber optik (FTTH) yang kini dikelola oleh Telkomsel sejak 2023. IndiHome menyediakan paket Single Play (internet), Double Play (internet + TV/telepon), dan Triple Play (internet + TV + telepon) yang telah melayani jutaan pelanggan di seluruh Indonesia.",
    },
  ];

  const highlightTelkom = (text) => {
    if (!text) return text;
    const parts = text.split(/(Telkom Indonesia|Telkomsel|Telkom Group|Telkom)/g);
    return parts.map((part, i) => {
      if (
        part === "Telkom" ||
        part === "Telkomsel" ||
        part === "Telkom Indonesia" ||
        part === "Telkom Group"
      ) {
        return (
          <span key={i} className="text-red-600 font-semibold">
            {part}
          </span>
        );
      }
      return part;
    });
  };

  const filteredFaqs = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return faqs;
    return faqs.filter((f) => {
      const hay = `${f.question} ${f.answer}`.toLowerCase();
      return hay.includes(q);
    });
  }, [searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredFaqs.length / PAGE_SIZE));
  const pageSafe = Math.min(page, totalPages);
  const start = (pageSafe - 1) * PAGE_SIZE;
  const pageFaqs = filteredFaqs.slice(start, start + PAGE_SIZE);

  // reset expand kalau pindah page / search
  useEffect(() => {
    setExpandedFaq(null);
  }, [pageSafe, searchQuery]);

  // Featured 3 (opsi C)
  const featured = [
    {
      id: "beda-telkom-telkomsel",
      label: "Perbedaan utama",
      question: "Apa perbedaan Telkom dan Telkomsel?",
    },
    {
      id: "peran-holding",
      label: "Peran holding",
      question: "Apa peran Telkom Indonesia dalam Telkom Group?",
    },
    {
      id: "indihome",
      label: "Produk populer",
      question: "Apa itu IndiHome dan layanannya?",
    },
  ];

  const jumpToFaq = (id) => {
    const idx = filteredFaqs.findIndex((f) => f.id === id);
    if (idx === -1) return;

    const targetPage = Math.floor(idx / PAGE_SIZE) + 1;
    setPage(targetPage);
    setExpandedFaq(idx);

    // scroll ke element setelah render
    setTimeout(() => {
      const el = document.getElementById(`faq-${id}`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  };

  const Pagination = () => (
    <div className="flex items-center justify-between gap-4 mt-6">
      <div className="text-sm text-gray-600">
        Menampilkan <span className="font-semibold text-gray-900">{start + 1}</span>–
        <span className="font-semibold text-gray-900">
          {Math.min(start + PAGE_SIZE, filteredFaqs.length)}
        </span>{" "}
        dari <span className="font-semibold text-gray-900">{filteredFaqs.length}</span> pertanyaan
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={pageSafe === 1}
          className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
            pageSafe === 1
              ? "border-gray-200 text-gray-400"
              : "border-gray-200 text-gray-700 hover:border-gray-300"
          }`}
        >
          Prev
        </button>

        <div className="px-4 py-2 rounded-full bg-red-50 text-red-600 text-sm font-semibold border border-red-100">
          {pageSafe} / {totalPages}
        </div>

        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={pageSafe === totalPages}
          className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
            pageSafe === totalPages
              ? "border-gray-200 text-gray-400"
              : "border-gray-200 text-gray-700 hover:border-gray-300"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* HERO (tanpa categories, diganti Featured FAQ cards) */}
        <div className="mb-10">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">FAQ Telkom vs Telkomsel</h1>

          <p className="text-lg text-gray-600 mb-8 max-w-3xl">
            Pertanyaan umum seputar <span className="font-semibold">Telkom</span> dan{" "}
            <span className="font-semibold">Telkomsel</span>, fokus terhadap Telkom Indonesia sebagai holding.
          </p>

          {/* Search Bar (style “Perbedaan”) */}
          <div className="rounded-3xl bg-white p-8 shadow-md mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Cari pertanyaan... (contoh: holding, IndiHome, data center)"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setPage(1);
                }}
                className="w-full px-6 py-4 pr-14 border-2 border-gray-200 rounded-2xl focus:border-red-500 focus:outline-none text-gray-700 placeholder-gray-400"
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center hover:bg-red-700 transition-colors"
                onClick={() => {
                  // no-op; search realtime
                }}
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Featured FAQ (Opsi C) */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              {featured.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => jumpToFaq(f.id)}
                  className="text-left rounded-2xl bg-red-50/55 px-5 py-4 border border-red-100 hover:border-red-200 transition"
                >
                  <div className="text-xs font-semibold tracking-wide text-red-600 mb-2">
                    {f.label}
                  </div>
                  <div className="text-sm md:text-base font-semibold text-gray-900 leading-snug">
                    {highlightTelkom(f.question)}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* MAIN */}
        <div className="flex gap-6">
          {/* Sidebar (samain style card perbedaan) */}
          <div className="w-96 flex-shrink-0">
            <div className="rounded-3xl bg-white p-8 shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-red-50 p-2 shadow-md flex items-center justify-center">
                  <span className="text-xl">❓</span>
                </div>
                <span className="font-bold text-gray-900">Pertanyaan Lainnya</span>
              </div>

              <div className="-mx-8 h-px bg-red-100/70" />

              <div className="pt-6 space-y-3">
                {sidebarQuestions.map((q, idx) => (
                  <div key={idx}>
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedSidebarQuestion(selectedSidebarQuestion === idx ? null : idx)
                      }
                      className={`w-full text-left rounded-2xl px-4 py-4 transition border ${
                        selectedSidebarQuestion === idx
                          ? "bg-red-50/55 border-red-200"
                          : "bg-white border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`h-10 w-10 rounded-xl flex items-center justify-center shrink-0 ${
                            selectedSidebarQuestion === idx ? "bg-red-100" : "bg-red-50"
                          }`}
                        >
                          <span className="text-lg">{q.icon}</span>
                        </div>

                        <div className="min-w-0 flex-1">
                          <p
                            className={`font-semibold leading-snug ${
                              selectedSidebarQuestion === idx ? "text-gray-900" : "text-gray-900"
                            }`}
                          >
                            {highlightTelkom(q.question)}
                          </p>
                        </div>

                        <Plus
                          className={`w-5 h-5 shrink-0 transition-transform ${
                            selectedSidebarQuestion === idx ? "rotate-45 text-red-600" : "text-gray-400"
                          }`}
                        />
                      </div>
                    </button>

                    {selectedSidebarQuestion === idx && (
                      <div className="mt-3 rounded-2xl bg-red-50/55 border border-red-100 px-4 py-4">
                        <div className="flex items-start gap-3">
                          <span className="text-sm font-bold text-red-600">A:</span>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            {highlightTelkom(q.answer)}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-gray-700 mb-4">
                  <span className="font-semibold">Masih bingung?</span> Hubungi kami untuk pertanyaan lebih lanjut.
                </p>
                <button
                  type="button"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-2xl font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  Hubungi Kami
                </button>
              </div>
            </div>
          </div>

          {/* FAQ list */}
          <div className="flex-1">
            {/* Pagination top */}
            <Pagination />

            <div className="mt-6 space-y-4">
              {pageFaqs.map((faq, localIdx) => {
                const globalIdx = start + localIdx;
                const isOpen = expandedFaq === globalIdx;

                return (
                  <div
                    key={faq.id}
                    id={`faq-${faq.id}`}
                    className="rounded-3xl bg-white shadow-md overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setExpandedFaq(isOpen ? null : globalIdx)}
                      className="w-full p-8 flex items-start gap-4 text-left"
                    >
                      <div className="h-12 w-12 rounded-2xl bg-red-50 p-2 shadow-md flex items-center justify-center shrink-0">
                        <span className="text-base font-bold text-gray-900">Q</span>
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg md:text-xl font-semibold text-gray-900 leading-snug">
                          {highlightTelkom(faq.question)}
                        </h3>
                      </div>

                      <Plus
                        className={`w-6 h-6 text-gray-400 shrink-0 transition-transform ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      />
                    </button>

                    <div className="-mx-0 h-px bg-red-100/70" />

                    {isOpen && faq.answer && (
                      <div className="p-8 pt-6">
                        <div className="rounded-2xl bg-red-50/55 border border-red-100 px-5 py-4">
                          <div className="flex items-start gap-3">
                            <span className="text-sm font-bold text-red-600">A:</span>
                            <p className="text-gray-700 leading-relaxed">
                              {highlightTelkom(faq.answer)}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

              {filteredFaqs.length === 0 && (
                <div className="rounded-3xl bg-white p-8 shadow-md">
                  <p className="text-gray-700">
                    Tidak ada hasil untuk <span className="font-semibold">{searchQuery}</span>.
                  </p>
                </div>
              )}
            </div>

            {/* Pagination bottom */}
            {filteredFaqs.length > 0 && <Pagination />}
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap");
        * {
          font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }
      `}</style>
    </div>
  );
}
