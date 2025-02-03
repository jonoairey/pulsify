// src/components/PulsifyLanding.js
import React, { useState } from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import Solutions from './Solutions';
import CaseStudies from './CaseStudies';
import EnvironmentalImpact from './EnvironmentalImpact';
import ContactForm from './ContactForm';
import Footer from './Footer';

const PulsifyLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="pt-20">
        <Hero />
        <Solutions />
        <CaseStudies />
        <EnvironmentalImpact />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
};

export default PulsifyLanding;