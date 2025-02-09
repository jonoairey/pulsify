// src/components/svg/BackgroundPattern.js
import React from 'react';

const BackgroundPattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
    <defs>
      <pattern id="gridPattern" patternUnits="userSpaceOnUse" width="40" height="40">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" strokeWidth="0.5"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#gridPattern)"/>
  </svg>
);

export default BackgroundPattern;