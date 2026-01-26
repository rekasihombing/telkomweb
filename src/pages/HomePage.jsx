import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import CompanyCardsSection from '../components/home/CompanyCardsSection';
import DigitalSolutionsSection from '../components/home/DigitalSolutionsSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CompanyCardsSection />
      <DigitalSolutionsSection />
    </>
  );
};

export default HomePage;