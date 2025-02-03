import React from 'react';
import { BarChart, Clock, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Give Your Business a Digital Pulse</h1>
          <p className="text-xl mb-8">Pulsify transforms your physical assets into intelligent data points, creating a digital heartbeat that drives efficiency, insight, and growth. Our RFID & NFC solutions bring your business to life with real-time analytics and AI-powered intelligence.</p>
          <p className="text-lg mb-8">Transform physical assets into intelligent data points, driving efficiency, insight, and growth through AI-powered analytics. Turn static into dynamic. Every product, every asset, every movement becomes a source of valuable intelligence.</p>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-12">
            <div className="flex flex-col items-center">
              <BarChart className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">From Static to Dynamic</h3>
              <p className="text-sm">Transform your physical assets into digital data points, creating a living,breathing ecosystem of information. Every product, every asset, every movement becomes a source of valuable intelligence</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Beyond Simple Tracking</h3>
              <p className="text-sm">Pulsify doesn't just track - it thinks. Our AI-powered analytics turn data into actionable insights, helping you predict trends, optimize operations, and make smarter decisions</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Future Ready</h3>
              <p className="text-sm">Digital Product Passport ready, sustainable operations, and AI-enabled insights for tomorrow's challenges</p>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <button
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50"
              onClick={() => console.log('Navigate to contact form')}
            >
              Start Your Digital Transformation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;