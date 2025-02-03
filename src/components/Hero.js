// src/components/Hero.js
import React from 'react';
import { Brain, Cpu, LineChart } from 'lucide-react';

const Hero = () => {
  return (
    <section>
      {/* Main Hero */}
      <div className="bg-[#4ecca3] text-white">
        <div className="max-w-7xl mx-auto py-16 px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Give Your Business a Digital Pulse</h1>
            <p className="text-xl mb-8 max-w-4xl mx-auto">
              Transform your physical assets into intelligent data points with Pulsify's RFID & NFC solutions. 
              Create a digital heartbeat that drives efficiency, insight, and growth through AI-powered analytics.
            </p>
            <button className="bg-white text-[#4ecca3] px-8 py-4 rounded-lg font-medium hover:bg-gray-50 text-lg">
              Start Your Digital Transformation
            </button>
          </div>
        </div>
      </div>

      {/* Expanded Content */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* From Static to Dynamic */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <div className="text-[#4ecca3] mb-6">
                <Cpu className="w-12 h-12" />
              </div>
              <h2 className="text-2xl font-bold mb-4">From Static to Dynamic</h2>
              <p className="text-gray-600 mb-6">
                Transform your physical assets into digital data points, creating a living, 
                breathing ecosystem of information. Every product, every asset, every movement 
                becomes a source of valuable intelligence.
              </p>
              <div>
                <h3 className="font-semibold mb-3">Key Benefits:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#4ecca3] rounded-full mr-3"></div>
                    <span>Real-time visibility</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#4ecca3] rounded-full mr-3"></div>
                    <span>Predictive insights</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#4ecca3] rounded-full mr-3"></div>
                    <span>Automated tracking</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#4ecca3] rounded-full mr-3"></div>
                    <span>Intelligent analytics</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Beyond Simple Tracking */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <div className="text-[#4ecca3] mb-6">
                <Brain className="w-12 h-12" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Beyond Simple Tracking</h2>
              <p className="text-gray-600 mb-6">
                Pulsify doesn't just track - it thinks. Our AI-powered analytics turn data into 
                actionable insights, helping you predict trends, optimize operations, and make 
                smarter decisions.
              </p>
              <div>
                <h3 className="font-semibold mb-3">Capabilities:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#4ecca3] rounded-full mr-3"></div>
                    <span>Pattern recognition</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#4ecca3] rounded-full mr-3"></div>
                    <span>Predictive analytics</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#4ecca3] rounded-full mr-3"></div>
                    <span>Behavioral insights</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#4ecca3] rounded-full mr-3"></div>
                    <span>Trend analysis</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Streamlined Operations */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <div className="text-[#4ecca3] mb-6">
                <LineChart className="w-12 h-12" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Streamlined Operations</h2>
              <p className="text-gray-600 mb-6">
                Watch your efficiency soar as manual processes become automated intelligence. 
                From inventory to analytics, Pulsify turns complexity into clarity.
              </p>
              <div>
                <h3 className="font-semibold mb-3">Impact:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#4ecca3] rounded-full mr-3"></div>
                    <span>85% reduction in search time</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#4ecca3] rounded-full mr-3"></div>
                    <span>99.9% inventory accuracy</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#4ecca3] rounded-full mr-3"></div>
                    <span>40% operational cost savings</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#4ecca3] rounded-full mr-3"></div>
                    <span>Real-time decision making</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;