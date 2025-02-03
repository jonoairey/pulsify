import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import IndustrySection from './components/IndustrySection';
import CaseStudies from './components/CaseStudies';
import EnvironmentalImpact from './components/EnvironmentalImpact';
import SmartTracking from './components/SmartTracking';
import ContactForm from './components/ContactForm';

const App = () => {
  return (
    <Router>
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

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/industries" element={<IndustrySection />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/environmental" element={<EnvironmentalImpact />} />
          <Route path="/smart-tracking" element={<SmartTracking />} />
          <Route path="/contactform" element={<ContactForm />} />
        </Routes>

        <footer className="bg-gray-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <p>© 2024 RFIDTrack. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;