import React from 'react';
import HeaderSection from '../components/perbedaan/Headersection';
import ComparisonSection from '../components/perbedaan/Comparisonsection';
import BusinessFocusSection from '../components/perbedaan/Businessfocussection';
import TargetCustomerSection from '../components/perbedaan/Targetcustomersection';
import UsageExamplesSection from '../components/perbedaan/Usageexamplessection';
import FooterInfoSection from '../components/perbedaan/Footerinfosection';

const PerbedaanPage = () => {
  return (
    <div className="bg-gradient-to-br from-pink-50 via-white to-pink-50 min-h-screen">
      <HeaderSection />
      <ComparisonSection />
      <BusinessFocusSection />
      <TargetCustomerSection />
      <UsageExamplesSection />
      <FooterInfoSection />
    </div>
  );
};

export default PerbedaanPage;