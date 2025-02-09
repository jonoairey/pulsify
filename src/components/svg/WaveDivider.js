// src/components/svg/WaveDivider.js
import React from 'react';

const WaveDivider = ({ flip, color = 'white' }) => (
  <div className={`w-full ${flip ? 'transform rotate-180' : ''}`}>
    <svg className="w-full h-auto" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M0 120L60 112.5C120 105 240 90 360 82.5C480 75 600 75 720 75C840 75 960 75 1080 82.5C1200 90 1320 105 1380 112.5L1440 120V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V120Z" 
        fill={color}
      />
    </svg>
  </div>
);

export default WaveDivider;