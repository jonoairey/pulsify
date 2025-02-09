// src/components/decorative/FloatingElements.js
import React from 'react';

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Circles */}
      <div className="absolute w-64 h-64 rounded-full bg-[#4ecca3]/10 -left-20 -top-20 animate-float" />
      <div className="absolute w-96 h-96 rounded-full bg-[#4ecca3]/5 -right-40 top-40 animate-float delay-1000" />
      
      {/* Dots Grid */}
      <div className="absolute right-10 bottom-10 grid grid-cols-3 gap-2">
        {[...Array(9)].map((_, i) => (
          <div 
            key={i} 
            className="w-2 h-2 rounded-full bg-[#4ecca3]/20"
            style={{ animationDelay: `${i * 100}ms` }}
          />
        ))}
      </div>
    </div>
  );
};

export default FloatingElements;