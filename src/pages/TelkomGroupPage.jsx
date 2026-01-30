import React from 'react';
import { Wifi, Mail, MapPin, Search, BarChart3 } from 'lucide-react';

export default function TelkomInfographic() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1400px] mx-auto px-12 py-20">
        
        {/* SECTION 1: Header - Mengenal Telkom Group */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-6">
            <h1 className="text-[64px] font-bold text-gray-900 leading-[1.1] tracking-tight">
              Mengenal<br />Telkom Group
            </h1>
            <div className="space-y-2">
              <h2 className="text-[32px] font-bold leading-tight">
                <span className="text-[#E31E24]">Grup Telekomunikasi Digital<br />Terdepan di</span>{' '}
                <span className="text-gray-900">Indonesia</span>
              </h2>
            </div>
            <p className="text-gray-700 text-[17px] leading-relaxed max-w-xl">
              Telkom Group adalah grup telekomunikasi digital terbesar dan terdepan di Indonesia yang menyediakan berbagai layanan telekomunikasi, digital, dan teknologi informasi.
            </p>
          </div>
          
          <div className="relative h-[500px]">
            {/* Background blur circles */}
            <div className="absolute top-10 right-20 w-96 h-96 bg-gradient-to-br from-pink-200/50 via-purple-200/40 to-blue-200/50 rounded-full blur-3xl"></div>
            <div className="absolute top-32 left-10 w-80 h-80 bg-gradient-to-br from-blue-200/40 to-pink-200/40 rounded-full blur-3xl"></div>
            
            {/* Main content container */}
            <div className="relative h-full flex items-center justify-center">
              {/* Floating icons around */}
              <div className="absolute top-8 left-12 w-16 h-16 bg-gradient-to-br from-red-100 to-pink-100 rounded-2xl shadow-xl flex items-center justify-center animate-float-slow">
                <Wifi className="w-8 h-8 text-red-600" strokeWidth={2.5} />
              </div>
              <div className="absolute top-0 right-32 w-14 h-14 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl shadow-lg flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
                <Mail className="w-7 h-7 text-blue-600" strokeWidth={2.5} />
              </div>
              <div className="absolute top-24 right-8 w-16 h-16 bg-gradient-to-br from-orange-100 to-pink-100 rounded-2xl shadow-xl flex items-center justify-center animate-float-slow" style={{animationDelay: '0.5s'}}>
                <Search className="w-8 h-8 text-orange-600" strokeWidth={2.5} />
              </div>
              
              {/* Central illustration area */}
              <div className="relative w-[450px] h-[380px]">
                {/* Telkom Landmark Tower */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-44 h-80 bg-gradient-to-br from-[#C41E3A] via-[#E31E24] to-[#B91C2E] rounded-t-2xl shadow-2xl overflow-hidden">
                  {/* Building windows grid */}
                  <div className="absolute inset-4 grid grid-cols-8 gap-[3px] opacity-90">
                    {[...Array(96)].map((_, i) => (
                      <div 
                        key={i} 
                        className="w-full aspect-square rounded-[1px]"
                        style={{
                          background: i % 7 === 0 ? '#FFE082' : (i % 5 === 0 ? '#FFECB3' : '#FFF8DC'),
                          opacity: Math.random() > 0.1 ? 0.85 : 0.3
                        }}
                      ></div>
                    ))}
                  </div>
                  
                  {/* Telkom branding on building */}
                  <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-32 h-14 bg-white rounded-lg shadow-2xl flex items-center justify-center border-2 border-red-100">
                    <span className="font-black text-2xl tracking-tight bg-gradient-to-r from-[#E31E24] to-[#C41E3A] bg-clip-text text-transparent">
                      TELKOM
                    </span>
                  </div>
                  
                  {/* Building details */}
                  <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#B91C2E] to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#9A1823] to-transparent"></div>
                </div>
                
                {/* Business professionals */}
                <div className="absolute bottom-0 left-20 flex items-end gap-3 z-10">
                  {/* Man in suit */}
                  <div className="relative">
                    <div className="w-16 h-24 bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-full relative overflow-hidden">
                      {/* Head */}
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-10 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full shadow-md"></div>
                      {/* Tie */}
                      <div className="absolute top-[42px] left-1/2 -translate-x-1/2 w-2 h-8 bg-red-700"></div>
                      {/* Jacket */}
                      <div className="absolute top-11 inset-x-0 h-6 bg-gradient-to-b from-gray-700 to-gray-800"></div>
                    </div>
                  </div>
                  
                  {/* Woman with tablet */}
                  <div className="relative">
                    <div className="w-16 h-24 bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-full relative overflow-hidden">
                      {/* Head */}
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-10 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full shadow-md"></div>
                      {/* Jacket - Red */}
                      <div className="absolute top-11 inset-x-0 h-6 bg-gradient-to-b from-red-600 to-red-700"></div>
                      {/* Tablet */}
                      <div className="absolute top-[60px] left-3 w-9 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-sm shadow-lg">
                        <div className="absolute inset-[3px] bg-gradient-to-br from-blue-200 to-blue-300 rounded-[2px]"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Laptop */}
                <div className="absolute bottom-0 right-24 z-10">
                  <div className="w-20 h-12 bg-gradient-to-b from-gray-700 to-gray-900 rounded-t-md relative">
                    <div className="absolute inset-x-2 top-1 bottom-2 bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500 rounded-sm">
                      {/* Screen content */}
                      <div className="absolute inset-2 flex items-center justify-around">
                        <div className="w-1 h-3 bg-white/40 rounded"></div>
                        <div className="w-1 h-4 bg-white/50 rounded"></div>
                        <div className="w-1 h-5 bg-white/60 rounded"></div>
                      </div>
                    </div>
                  </div>
                  <div className="w-24 h-1 bg-gray-800 rounded-b-sm -mt-[1px]"></div>
                </div>
                
                {/* Gold coins */}
                <div className="absolute bottom-0 right-12 flex gap-1 z-10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600 shadow-xl border-2 border-yellow-300"></div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600 shadow-xl border-2 border-yellow-300"></div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600 shadow-xl border-2 border-yellow-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: Tentang Telkom Group */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-8">
            <h2 className="text-[56px] font-bold text-gray-900 leading-tight">
              Tentang Telkom Group
            </h2>
            <p className="text-gray-700 text-[17px] leading-relaxed">
              Telkom Group atau PT Telkom Indonesia (Persero) Tbk adalah perusahaan telekomunikasi BUMN yang berkantor pusat di Jakarta dan beroperasi di 9 negara. Kami fokus apaa bisnis Telekomunikasi, ICT, dan Layanan Digital, serta memiliki seumur anak perusahaan untuk mendukung transformasi digital dan menghadirkan konektivitas, platform, serta layanan digital untuk berbagai kebutuhan masyarakat dan bisnis di Indonesia.
            </p>
            
            <div className="grid grid-cols-3 gap-5 pt-4">
              <div className="bg-gradient-to-br from-pink-50 to-pink-100/60 rounded-3xl p-7 text-center shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-[56px] font-bold bg-gradient-to-br from-red-600 to-red-700 bg-clip-text text-transparent leading-none mb-3">15</div>
                <div className="text-gray-800 font-semibold text-[15px]">Anak Perusahaan</div>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-pink-100/60 rounded-3xl p-7 text-center shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-[56px] font-bold bg-gradient-to-br from-red-600 to-red-700 bg-clip-text text-transparent leading-none mb-3">261+</div>
                <div className="text-gray-800 font-semibold text-[15px]">Juta Pelanggan</div>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-pink-100/60 rounded-3xl p-7 text-center shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-[56px] font-bold bg-gradient-to-br from-red-600 to-red-700 bg-clip-text text-transparent leading-none mb-3">9</div>
                <div className="text-gray-800 font-semibold text-[15px]">Negara Operasi</div>
              </div>
            </div>
          </div>
          
          <div className="relative h-[500px]">
            {/* Background effects */}
            <div className="absolute top-16 left-10 w-96 h-96 bg-gradient-to-br from-purple-200/40 via-pink-200/40 to-red-200/50 rounded-full blur-3xl"></div>
            
            <div className="relative h-full flex items-center justify-center">
              {/* Global map reference circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 rounded-full bg-gradient-to-br from-orange-500/10 via-red-500/10 to-pink-500/10 animate-pulse-slow"></div>
              </div>
              
              {/* Central businessman figure */}
              <div className="relative z-10">
                <div className="w-24 h-32 bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-full mx-auto relative">
                  {/* Head */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full shadow-lg"></div>
                  {/* Suit */}
                  <div className="absolute top-16 inset-x-0 h-8 bg-gradient-to-b from-blue-600 to-blue-700 rounded-t-lg"></div>
                  {/* Tablet in hand */}
                  <div className="absolute top-24 left-6 w-12 h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-md shadow-xl">
                    <div className="absolute inset-[3px] bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-500 rounded-sm">
                      {/* Charts on tablet */}
                      <div className="absolute inset-2 flex items-end justify-around gap-[2px]">
                        <div className="w-[6px] bg-white/70 rounded-t" style={{height: '40%'}}></div>
                        <div className="w-[6px] bg-white/70 rounded-t" style={{height: '65%'}}></div>
                        <div className="w-[6px] bg-white/70 rounded-t" style={{height: '50%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Location markers */}
              <div className="absolute top-16 left-16 w-14 h-14 bg-gradient-to-br from-red-100 to-red-200 rounded-full shadow-xl flex items-center justify-center animate-bounce-slow">
                <MapPin className="w-7 h-7 text-red-600" fill="currentColor" strokeWidth={1.5} />
              </div>
              <div className="absolute top-32 right-20 w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full shadow-xl flex items-center justify-center animate-bounce-slow" style={{animationDelay: '0.3s'}}>
                <MapPin className="w-7 h-7 text-orange-600" fill="currentColor" strokeWidth={1.5} />
              </div>
              <div className="absolute bottom-24 left-24 w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full shadow-xl flex items-center justify-center animate-bounce-slow" style={{animationDelay: '0.6s'}}>
                <MapPin className="w-7 h-7 text-blue-600" fill="currentColor" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3: Bidang Bisnis */}
        <div className="mb-32">
          <h2 className="text-[56px] font-bold text-gray-900 mb-4 leading-tight">
            Bidang Bisnis Telkom Group
          </h2>
          <p className="text-gray-700 text-[17px] leading-relaxed mb-12 max-w-4xl">
            Telkom Group mengelola berbagai bidang bisnis yang mencakup layanan telekomunikasi, digital, infrastruktur, dan solusi teknologi bagi masyarakat dan perusahaan.
          </p>
          
          <div className="grid grid-cols-4 gap-6">
            {/* Telekomunikasi */}
            <div className="group bg-gradient-to-br from-pink-50 via-pink-100/50 to-pink-100 rounded-[32px] p-8 text-center hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="w-24 h-24 bg-white rounded-[24px] flex items-center justify-center mx-auto mb-6 shadow-md group-hover:shadow-xl transition-shadow">
                <svg className="w-14 h-14" viewBox="0 0 48 48" fill="none">
                  <rect x="18" y="14" width="12" height="3" fill="#EF4444" rx="1.5"/>
                  <rect x="18" y="22" width="12" height="3" fill="#EF4444" rx="1.5"/>
                  <rect x="18" y="30" width="12" height="3" fill="#EF4444" rx="1.5"/>
                  <path d="M24 14V10M24 34V38" stroke="#EF4444" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-[19px] font-bold text-gray-900">Telekomunikasi</h3>
            </div>
            
            {/* Layanan Digital & Platform */}
            <div className="group bg-gradient-to-br from-blue-50 via-blue-100/50 to-cyan-100 rounded-[32px] p-8 text-center hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="w-24 h-24 bg-white rounded-[24px] flex items-center justify-center mx-auto mb-6 shadow-md group-hover:shadow-xl transition-shadow">
                <svg className="w-14 h-14" viewBox="0 0 48 48" fill="none">
                  <rect x="16" y="16" width="16" height="16" rx="2" fill="#3B82F6"/>
                  <path d="M20 24H28M24 20V28" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-[19px] font-bold text-gray-900 leading-tight">Layanan Digital<br/>& Platform</h3>
            </div>
            
            {/* Layanan Infrastruktur & Network */}
            <div className="group bg-gradient-to-br from-sky-50 via-cyan-100/50 to-blue-100 rounded-[32px] p-8 text-center hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="w-24 h-24 bg-white rounded-[24px] flex items-center justify-center mx-auto mb-6 shadow-md group-hover:shadow-xl transition-shadow">
                <svg className="w-14 h-14" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="10" stroke="#3B82F6" strokeWidth="3" fill="none"/>
                  <circle cx="24" cy="24" r="4" fill="#3B82F6"/>
                  <circle cx="24" cy="11" r="2" fill="#3B82F6"/>
                  <circle cx="24" cy="37" r="2" fill="#3B82F6"/>
                  <circle cx="11" cy="24" r="2" fill="#3B82F6"/>
                  <circle cx="37" cy="24" r="2" fill="#3B82F6"/>
                </svg>
              </div>
              <h3 className="text-[19px] font-bold text-gray-900 leading-tight">Layanan Infrastruktur<br/>& Network</h3>
            </div>
            
            {/* Layanan Teknologi & Enterprise */}
            <div className="group bg-gradient-to-br from-emerald-50 via-green-100/50 to-teal-100 rounded-[32px] p-8 text-center hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="w-24 h-24 bg-white rounded-[24px] flex items-center justify-center mx-auto mb-6 shadow-md group-hover:shadow-xl transition-shadow">
                <svg className="w-14 h-14" viewBox="0 0 48 48" fill="none">
                  <path d="M24 14L16 20V32L24 38L32 32V20L24 14Z" stroke="#10B981" strokeWidth="2.5" fill="none" strokeLinejoin="round"/>
                  <path d="M24 24L24 38M16 20L24 24L32 20" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-[19px] font-bold text-gray-900 leading-tight">Layanan Teknologi<br/>& Enterprise</h3>
            </div>
          </div>
        </div>

        {/* SECTION 4: Struktur Anak Perusahaan */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-[56px] font-bold text-gray-900 leading-tight">
              Struktur Anak Perusahaan Telkom Group
            </h2>
            <p className="text-gray-700 text-[17px] leading-relaxed">
              Telkom Group memiliki berbagai anak perusahaan terkemuka yang mendukung berbagai empat pilar, infrastruktur, dan solusi teknologi bagi data perusahaan.
            </p>
            
            <div className="bg-white rounded-[32px] px-8 py-10 shadow-lg border border-gray-100">
              <h3 className="text-[20px] font-bold text-gray-900 mb-8">
                PT Telkomunikasi Indonesia (Persero) Tbk
              </h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-pink-50 to-pink-100/70 rounded-2xl px-4 py-5 flex items-center gap-3 hover:shadow-lg transition-all hover:scale-[1.02]">
                    <div className="w-11 h-11 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <div className="w-6 h-6 bg-white rounded-full"></div>
                    </div>
                    <span className="font-bold text-gray-900 text-[15px]">telkomsel</span>
                  </div>
                  
                  <div className="bg-gradient-to-br from-pink-50 to-pink-100/70 rounded-2xl px-4 py-5 flex items-center gap-3 hover:shadow-lg transition-all hover:scale-[1.02]">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-red-500 via-orange-500 to-red-600"></div>
                    </div>
                    <span className="font-bold text-gray-900 text-[14px] leading-tight">Telkom<br/>Indonesia</span>
                  </div>
                  
                  <div className="bg-gradient-to-br from-pink-50 to-pink-100/70 rounded-2xl px-4 py-5 flex items-center gap-3 hover:shadow-lg transition-all hover:scale-[1.02]">
                    <div className="w-11 h-11 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                        <path d="M7 8L10 11L7 14M13 12H17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="font-bold text-gray-900 text-[15px]">telkomsigma</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-pink-50 to-pink-100/70 rounded-2xl px-4 py-5 flex items-center gap-3 hover:shadow-lg transition-all hover:scale-[1.02]">
                    <div className="w-11 h-11 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                        <ellipse cx="12" cy="12" rx="8" ry="5" />
                      </svg>
                    </div>
                    <span className="font-bold text-gray-900 text-[15px]">telkomsat</span>
                  </div>
                  
                  <div className="bg-gradient-to-br from-pink-50 to-pink-100/70 rounded-2xl px-4 py-5 flex items-center gap-3 hover:shadow-lg transition-all hover:scale-[1.02]">
                    <div className="w-11 h-11 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <span className="text-white font-black text-sm">TM</span>
                    </div>
                    <span className="font-bold text-gray-900 text-[15px]">TelkomMetra</span>
                  </div>
                  
                  <div className="bg-gradient-to-br from-pink-50 to-pink-100/70 rounded-2xl px-4 py-5 flex items-center gap-3 hover:shadow-lg transition-all hover:scale-[1.02]">
                    <div className="w-11 h-11 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <div className="w-1 h-7 bg-white rounded-full"></div>
                    </div>
                    <span className="font-bold text-gray-900 text-[15px]">Mitratel</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative h-[500px]">
            {/* Background blur */}
            <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-orange-200/40 via-pink-200/40 to-purple-200/40 rounded-full blur-3xl"></div>
            
            <div className="relative h-full flex items-center justify-center">
              {/* Team members */}
              <div className="relative flex items-end gap-6">
                {/* Person 1 - Man */}
                <div className="relative">
                  <div className="w-24 h-32 bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-full relative">
                    {/* Head */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full shadow-lg"></div>
                    {/* Shirt - Red */}
                    <div className="absolute top-16 inset-x-0 h-10 bg-gradient-to-b from-red-600 to-red-700"></div>
                    {/* Pointing hand */}
                    <div className="absolute top-24 right-1 w-10 h-8 bg-amber-200 rounded-lg transform rotate-12"></div>
                  </div>
                </div>
                
                {/* Person 2 - Woman */}
                <div className="relative">
                  <div className="w-24 h-32 bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-full relative">
                    {/* Head */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full shadow-lg"></div>
                    {/* Shirt - White/Gray */}
                    <div className="absolute top-16 inset-x-0 h-10 bg-gradient-to-b from-gray-200 to-gray-300"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating data visualizations */}
              <div className="absolute top-12 right-16 w-32 h-24 bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-3 border border-gray-100">
                <div className="flex items-end justify-around h-full gap-1">
                  <div className="w-4 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg" style={{height: '55%'}}></div>
                  <div className="w-4 bg-gradient-to-t from-red-500 to-red-400 rounded-t-lg" style={{height: '75%'}}></div>
                  <div className="w-4 bg-gradient-to-t from-orange-500 to-orange-400 rounded-t-lg" style={{height: '45%'}}></div>
                  <div className="w-4 bg-gradient-to-t from-green-500 to-green-400 rounded-t-lg" style={{height: '65%'}}></div>
                </div>
              </div>
              
              <div className="absolute top-28 left-12 w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full shadow-2xl flex items-center justify-center border border-gray-100">
                <BarChart3 className="w-10 h-10 text-blue-600" strokeWidth={2} />
              </div>
              
              {/* Coins */}
              <div className="absolute bottom-8 right-16 flex gap-1">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600 shadow-2xl border-2 border-yellow-300"></div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600 shadow-2xl border-2 border-yellow-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-8px) scale(1.05); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        
        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}