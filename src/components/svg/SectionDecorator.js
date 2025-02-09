// src/components/svg/SectionDecorator.js
import React from 'react';

const SectionDecorator = ({ color = '#4ecca3', opacity = '0.1' }) => (
  <svg 
    className="absolute right-0 top-0 w-1/3 h-auto" 
    style={{ opacity: opacity }} 
    viewBox="0 0 300 300" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="150" cy="150" r="100" fill="none" stroke={color} strokeWidth="2" strokeDasharray="8 8"/>
    <circle cx="150" cy="150" r="70" fill="none" stroke={color} strokeWidth="2" strokeDasharray="6 6"/>
    <circle cx="150" cy="150" r="40" fill="none" stroke={color} strokeWidth="2" strokeDasharray="4 4"/>
    <path d="M150 50v200M50 150h200" stroke={color} strokeWidth="2" strokeDasharray="4 4"/>
  </svg>
);

export default SectionDecorator;