// src/components/svg/SolutionsDecoration.js
import React from 'react';

const SolutionsDecoration = () => (
  <svg className="absolute right-0 top-0 w-1/3 h-auto opacity-10" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="150" r="100" fill="none" stroke="#4ecca3" strokeWidth="2" strokeDasharray="8 8"/>
    <circle cx="150" cy="150" r="70" fill="none" stroke="#4ecca3" strokeWidth="2" strokeDasharray="6 6"/>
    <circle cx="150" cy="150" r="40" fill="none" stroke="#4ecca3" strokeWidth="2" strokeDasharray="4 4"/>
    <path d="M150 50v200M50 150h200" stroke="#4ecca3" strokeWidth="2" strokeDasharray="4 4"/>
  </svg>
);

export default SolutionsDecoration;