'use client';

import HeroSection from './components/HeroSection';
import SystemArchitecture from './components/SystemArchitecture';
import ContactSection from './components/ContactSection';

export default function BackendPortfolio() {
	return (
		<main className="min-h-screen bg-[#1A1A1A] text-white overflow-x-hidden">
			<HeroSection />
			<SystemArchitecture />
			<ContactSection />
		</main>
	);
}
