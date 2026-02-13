import React from 'react';
import { motion } from 'framer-motion';

const DigitalSolutionsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.05,
      } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

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
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-gray-800">Solusi Digital</span> untuk Semua{' '}
            <span className="text-red-500">Kebutuhan</span>
          </h2>
          <p className="text-gray-600 mt-4 text-base md:text-lg leading-relaxed">
            Strategi Telkom dan Telkomsel yang membangun integrasi dan keamanan
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {solutions.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-xl shadow hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer"
            >
              <div className="text-4xl mb-3 text-center">{item.icon}</div>
              <h4 className="font-semibold text-gray-800 whitespace-pre-line text-sm text-center">
                {item.title}
              </h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DigitalSolutionsSection;