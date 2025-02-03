import React from 'react';
import { Clock, Shield, Bell, Box, BarChart } from 'lucide-react';

const SmartTracking = () => {
  return (
    <div className="smart-tracking">
      <h2>Smart Tracking</h2>
      <div className="flex justify-center space-x-4">
        <div className="text-center">
          <div className="text-4xl font-bold text-blue-600 mb-2">40%</div>
          <div className="text-lg font-semibold mb-1">Smarter Operations</div>
          <p className="text-gray-600">With predictive intelligence</p>
        </div>
      </div>
      <section>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Real-time Tracking",
                description: "Monitor assets in real-time"
              },
              {
                title: "Predictive Maintenance",
                description: "Anticipate and prevent equipment failures"
              },
              {
                title: "Smart Analytics",
                description: "Transform data into actionable intelligence"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmartTracking;