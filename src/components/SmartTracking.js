import React from 'react';
import { Clock, Shield, Bell, Box, BarChart } from 'lucide-react';

const SmartTracking = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Transform Static into Dynamic</h2>
        <p className="text-xl text-gray-600 text-center mb-12">Where physical assets become digital intelligence</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Digital Intelligence */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6">Digital Intelligence</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <BarChart className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                <div>
                  <h4 className="font-semibold mb-2">AI-Powered Analytics</h4>
                  <p className="text-gray-600">Transform your physical assets into data points that think, predict, and optimize themselves.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                <div>
                  <h4 className="font-semibold mb-2">Real-time Insights</h4>
                  <p className="text-gray-600">Every movement tells a story. Capture and analyze real-time data for immediate decision-making.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Shield className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                <div>
                  <h4 className="font-semibold mb-2">Future-Ready Operations</h4>
                  <p className="text-gray-600">Stay ahead with Digital Product Passport compliance and sustainable tracking solutions.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Impact */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6">Business Impact</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Box className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                <div>
                  <h4 className="font-semibold mb-2">Intelligent Automation</h4>
                  <p className="text-gray-600">Let your assets manage themselves with AI-driven automation and predictive intelligence.</p>
                </div>
              </div>
              <div className="flex items-start">
                <BarChart className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                <div>
                  <h4 className="font-semibold mb-2">Predictive Analytics</h4>
                  <p className="text-gray-600">Turn data into foresight with AI-powered trend analysis and optimization.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Bell className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                <div>
                  <h4 className="font-semibold mb-2">Smart Alerts</h4>
                  <p className="text-gray-600">Intelligent notifications that predict and prevent issues before they occur.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Intelligence Metrics */}
        <div className="bg-blue-50 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-6 text-center">The Power of Digital Intelligence</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-lg font-semibold mb-1">Digital Accuracy</div>
              <p className="text-gray-600">In intelligent tracking and monitoring</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">85%</div>
              <div className="text-lg font-semibold mb-1">Efficiency Gain</div>
              <p className="text-gray-600">Through AI-powered automation</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">40%</div>
              <div className="text-lg font-semibold mb-1">Smarter Operations</div>
              <p className="text-gray-600">With predictive intelligence</p>
            </div>
          </div>
        </div>

        {/* Intelligence Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              title: "Digital Twin Creation",
              description: "Create living digital copies of your physical assets"
            },
            {
              title: "AI-Powered Insights",
              description: "Let artificial intelligence optimize your operations"
            },
            {
              title: "Predictive Intelligence",
              description: "Know what's going to happen before it does"
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
  );
};

export default SmartTracking;