import React from 'react';
import Hero from './components/Hero';
import IndustrySection from './components/IndustrySection';
import SmartTracking from './components/SmartTracking';
import EnvironmentalImpact from './components/EnvironmentalImpact';
import CaseStudies from './components/CaseStudies';
import ContactForm from './components/ContactForm';

const App = () => {
  return (
    <div>
      <Hero />
      <IndustrySection />
      <SmartTracking />
      <EnvironmentalImpact />
      <CaseStudies />
      <ContactForm />
    </div>
  );
};

export default App;