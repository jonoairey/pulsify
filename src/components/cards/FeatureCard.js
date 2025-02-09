// src/components/cards/FeatureCard.js
import React from 'react';

const FeatureCard = ({ 
  icon: Icon, // This is the key - making sure we properly handle the icon prop
  title, 
  description, 
  image = "/api/placeholder/600/400" 
}) => {
  return (
    <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden rounded-t-xl">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 group-hover:opacity-75 transition-opacity" />
        
        {/* Icon Overlay */}
        <div className="absolute bottom-4 right-4 bg-white/90 p-3 rounded-lg backdrop-blur-sm 
                      transform group-hover:scale-110 transition-transform">
          {Icon && <Icon className="w-6 h-6 text-[#4ecca3]" />}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-[#4ecca3] transition-colors">
          {title}
        </h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>

      {/* Animated Border */}
      <div className="h-1 w-0 bg-[#4ecca3] group-hover:w-full transition-all duration-300" />
    </div>
  );
};

export default FeatureCard;