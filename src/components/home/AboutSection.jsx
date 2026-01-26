import React from 'react';

const AboutSection = () => {
  const cards = [
    {
      icon: '🌍',
      title: 'Infrastruktur\nDigital Nasional',
      description: 'Membangun konektivitas di seluruh pelosok Indonesia',
    },
    {
      icon: '📱',
      title: 'Layanan Telekomunikasi\n& Digital',
      description: 'Menyediakan layanan telekomunikasi dan digital terbaik',
    },
    {
      icon: '🚀',
      title: 'Inovasi Berkelanjutan',
      description: 'Mengembangkan solusi inovatif dengan teknologi terbaru',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Tentang <span className="text-red-500">Telkom Group</span>
          </h2>
          <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
            Telkom Group adalah BUMN yang membangun infrastruktur dan layanan
            digital untuk mendukung transformasi Indonesia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-pink-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-3xl">{card.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-center mb-3 whitespace-pre-line">
                {card.title}
              </h3>
              <p className="text-gray-600 text-center text-sm">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;