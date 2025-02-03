// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Pulsify</h3>
            <p className="text-gray-400">Transforming physical assets into intelligent data points.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Asset Tracking</li>
              <li>Inventory Management</li>
              <li>Smart Analytics</li>
              <li>Predictive Maintenance</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Industries</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Healthcare</li>
              <li>Construction</li>
              <li>Retail</li>
              <li>Events</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>info@pulsify.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Tech Street</li>
              <li>Innovation City, IC 12345</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Pulsify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;