import React from 'react';
import HeaderSection from '../components/perbedaan/Headersection';
import ComparisonSection from '../components/perbedaan/Comparisonsection';
import BusinessFocusSection from '../components/perbedaan/Businessfocussection';
import TargetCustomerSection from '../components/perbedaan/Targetcustomersection';
import UsageExamplesSection from '../components/perbedaan/Usageexamplessection';

const SectionWrap = ({ tone = "soft", children }) => {
  const isSoft = tone === "soft";
  const isWhite = tone === "white";

  return (
    <section className={`relative overflow-hidden ${isWhite ? "bg-white" : "bg-transparent"}`}>
      {isSoft && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-red-50/50 via-white to-red-50/30" />
          <div className="absolute top-16 -left-40 w-[500px] h-[500px] bg-red-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-16 -right-40 w-[500px] h-[500px] bg-red-500/15 rounded-full blur-3xl" />
        </>
      )}
      <div className="relative z-10">{children}</div>
    </section>
  );
};

const PerbedaanPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Netral */}
      <SectionWrap tone="white">
        <HeaderSection />
      </SectionWrap>

      <SectionWrap tone="white">
        <ComparisonSection />
      </SectionWrap>

      {/* Mulai zebra soft */}
      <SectionWrap tone="soft">
        <BusinessFocusSection />
      </SectionWrap>

      <SectionWrap tone="white">
        <TargetCustomerSection />
      </SectionWrap>

      <SectionWrap tone="soft">
        <UsageExamplesSection />
      </SectionWrap>
    </div>
  );
};

export default PerbedaanPage;
