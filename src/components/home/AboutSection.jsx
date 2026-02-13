import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Smartphone, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const cards = [
    {
      iconUrl: 'images/infra.png',
      Icon: Building2,
      badge: 'Infrastructure',
      title: 'Konektivitas & Infrastruktur Digital',
      description: 'Kami bangun dan jaga jaringan digital Indonesia',
    },
    {
      iconUrl: 'images/layanan.png',
      Icon: Smartphone,
      badge: 'Digital Services',
      title: 'Layanan Digital untuk Sehari hari',
      description: 'Layanan Digital yang Dipakai Jutaan Orang',
    },
    {
      iconUrl: 'images/inovasi.png',
      Icon: Lightbulb,
      badge: 'Innovation',
      title: 'Inovasi Berkelanjutan',
      description: 'Mengembangkan solusi inovatif dengan teknologi terbaru',
    },
  ];

  return (
    <section className="py-12 md:py-16 pb-8 md:pb-10 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="rounded-3xl bg-white p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              {/* ICON dengan ukuran lebih besar */}
              <div className="flex justify-center mb-6">
                <div className="h-24 w-24 rounded-2xl bg-red-50 p-4 shadow-md flex items-center justify-center">
                  <img
                    src={card.iconUrl}
                    alt={card.title}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>

              {/* Badge */}
              <div className="flex justify-center mb-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-xs font-semibold text-red-600">
                  <card.Icon className="h-3.5 w-3.5" />
                  {card.badge}
                </div>
              </div>

              {/* Divider */}
              <div className="-mx-8 h-px bg-red-100/70 mb-6" />

              {/* CONTENT */}
              <h3 className="text-lg md:text-xl font-bold tracking-tight text-gray-900 text-center mb-3">
                {card.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed text-center">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;