import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import HomePage from './pages/HomePage';
import TelkomGroupPage from './pages/TelkomGroupPage';
import PerbedaanPage from './pages/PerbedaanPage';
import FAQPage from './pages/FAQPage';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderPage = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage />;
      case 'telkomgroup':
        return <TelkomGroupPage />;
      case 'perbedaan':
        return <PerbedaanPage />;
      case 'faq':
        return <FAQPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-50">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="pt-16">{renderPage()}</main>
    </div>
  );
}

export default App;