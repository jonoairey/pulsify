// src/components/EnvironmentalImpact.js
import React from 'react';
import { Globe, Box, Clock } from 'lucide-react';

const EnvironmentalImpact = () => {
  return (
    <section id="impact" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Environmental Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-[#4ecca3] mb-4">
              <Globe className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Reduced Carbon Footprint</h3>
            <div className="space-y-4">
              <p className="text-gray-600">Our RFID solutions reduce unnecessary travel and optimize resource usage</p>
              <div className="text-3xl font-bold text-[#4ecca3]">30%</div>
              <p className="text-sm text-gray-500">Reduction in emissions</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-[#4ecca3] mb-4">
              <Box className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Resource Optimization</h3>
            <div className="space-y-4">
              <p className="text-gray-600">Smart tracking enables better resource utilization and reduces waste</p>
              <div className="text-3xl font-bold text-[#4ecca3]">40%</div>
              <p className="text-sm text-gray-500">Better resource utilization</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-[#4ecca3] mb-4">
              <Clock className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Sustainable Operations</h3>
            <div className="space-y-4">
              <p className="text-gray-600">Long-term sustainability through intelligent asset management</p>
              <div className="text-3xl font-bold text-[#4ecca3]">45%</div>
              <p className="text-sm text-gray-500">Less e-waste</p>
            </div>
          </div>
        </div>

        {/* Sustainability Commitment */}
        <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-center mb-6">Our Commitment to Sustainability</h3>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 mb-6">
              Our RFID solutions are designed with environmental sustainability at their core. By optimizing asset usage, 
              reducing waste, and enabling smarter resource management, we help organizations meet their sustainability 
              goals while improving operational efficiency.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#4ecca3]">50%</div>
                <p className="text-sm text-gray-600">Reduction in Paper Usage</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#4ecca3]">30%</div>
                <p className="text-sm text-gray-600">Lower Carbon Emissions</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#4ecca3]">40%</div>
                <p className="text-sm text-gray-600">Better Resource Utilization</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnvironmentalImpact;