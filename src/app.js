import React from 'react';
import Hero from './components/Hero';
import IndustrySection from './components/IndustrySection';
import CaseStudies from './components/CaseStudies';
import EnvironmentalImpact from './components/EnvironmentalImpact';
import SmartTracking from './components/SmartTracking';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">Pulsify</span>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a href="#home" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Home</a>
                <a href="#industries" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Industries</a>
                <a href="#case-studies" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Case Studies</a>
                <a href="#environmental" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Environmental</a>
                <a href="#contact" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section id="home">
        <Hero />
      </section>

      <section id="industries">
        <IndustrySection />
      </section>

      <section id="case-studies">
        <CaseStudies />
      </section>

      <section id="environmental">
        <EnvironmentalImpact />
      </section>

      <section id="smart-tracking">
        <SmartTracking />
      </section>

      <section id="contact">
        <ContactForm />
      </section>

      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <p>© 2024 RFIDTrack. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;