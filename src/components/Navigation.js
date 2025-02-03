// src/components/Navigation.js
import React from 'react';

const Navigation = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-20">
          {/* Brand and Logo - Simple Version */}
          <div className="flex items-center">
            <div className="h-10 w-32">
              <svg viewBox="0 0 160 50" className="h-full w-full">
                <text x="10" y="35" fontSize="32" fill="#4ecca3" fontFamily="Arial, sans-serif" fontWeight="bold">Pulsify</text>
              </svg>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#solutions" className="text-gray-700 hover:text-[#4ecca3]">Solutions</a>
            <a href="#case-studies" className="text-gray-700 hover:text-[#4ecca3]">Case Studies</a>
            <a href="#impact" className="text-gray-700 hover:text-[#4ecca3]">Impact</a>
            <a 
              href="#contact"
              className="bg-[#4ecca3] text-white px-4 py-2 rounded-lg hover:bg-[#45b48f]"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#4ecca3]"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#solutions" className="block px-3 py-2 rounded-md text-gray-700 hover:text-[#4ecca3] hover:bg-gray-50">
                Solutions
              </a>
              <a href="#case-studies" className="block px-3 py-2 rounded-md text-gray-700 hover:text-[#4ecca3] hover:bg-gray-50">
                Case Studies
              </a>
              <a href="#impact" className="block px-3 py-2 rounded-md text-gray-700 hover:text-[#4ecca3] hover:bg-gray-50">
                Impact
              </a>
              <a 
                href="#contact"
                className="block w-full mt-2 bg-[#4ecca3] text-white px-4 py-2 rounded-lg hover:bg-[#45b48f] text-center"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;