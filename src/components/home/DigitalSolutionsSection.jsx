import React from 'react';

const DigitalSolutionsSection = () => {
  const solutions = [
    { icon: '📡', title: 'Internet &\nConnectivity' },
    { icon: '☁️', title: 'Cloud &\nData Center' },
    { icon: '📱', title: 'Digital\nPlatform' },
    { icon: '💼', title: 'Enterprise\nSolution' },
    { icon: '🏙️', title: 'Smart City' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            <span className="text-gray-800">Solusi Digital</span> untuk Semua{' '}
            <span className="text-red-500">Kebutuhan</span>
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Strategi Telkom dan telkomsel yang membangun integratesu dan keamanan
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {solutions.map((item, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-xl shadow hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer"
            >
              <div className="text-4xl mb-3 text-center">{item.icon}</div>
              <h4 className="font-semibold text-gray-800 whitespace-pre-line text-sm text-center">
                {item.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalSolutionsSection;