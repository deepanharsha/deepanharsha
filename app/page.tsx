'use client';

import HeroSection from './components/HeroSection';
import SystemArchitecture from './components/SystemArchitecture';
import ContactSection from './components/ContactSection';

export default function BackendPortfolio() {
  return (
    <main className="min-h-screen text-white overflow-x-hidden" style={{ background: '#0f0f0f' }}>
      <HeroSection />
      <SystemArchitecture />
      <ContactSection />
    </main>
  );
}