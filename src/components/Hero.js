import React from 'react';
import { Brain, Cpu, LineChart, Zap, BarChart3, Target } from 'lucide-react';

const Hero = () => {
  return (
    <section>
      {/* Main Hero */}
      <div className="bg-gradient-to-br from-[#4ecca3] to-[#45b48f] text-white">
        <div className="max-w-7xl mx-auto py-24 px-4">
          <div className="text-center">
            <div className="inline-block mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2">
                <span className="text-sm font-semibold">The digital heartbeat of your business</span>
              </div>
            </div>
            <h1 className="text-6xl font-bold mb-8 leading-tight">
              Transform Physical Assets into
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                Digital Intelligence
              </span>
            </h1>
            <p className="text-xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-90">
            Pulsify transforms your physical assets into intelligent data points, creating 
            a digital heartbeat that drives efficiency, insight, and growth. Our RFID and NFC solutions 
            bring your business to life with real-time analytics and AI-powered intelligence.            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-[#4ecca3] px-8 py-4 rounded-lg font-medium hover:bg-gray-50 text-lg">
                Start Your Transformation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 text-lg">
                View Success Stories
              </button>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
              <div>
                <div className="text-4xl font-bold mb-2">40%</div>
                <p className="text-sm opacity-80">Average Cost Reduction</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">99.9%</div>
                <p className="text-sm opacity-80">Asset Tracking Accuracy</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">3-6mo</div>
                <p className="text-sm opacity-80">Time to ROI</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Value Propositions */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Intelligent Operations */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
              <div className="text-[#4ecca3] mb-6">
                <Brain className="w-12 h-12" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Intelligent Operations</h2>
              <p className="text-gray-600 mb-6">
                Transform manual processes into automated intelligence. Our AI-powered system 
                learns from your operations, predicting needs and preventing issues before they arise.
              </p>
              <div>
                <h3 className="font-semibold mb-3">Impact:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Zap className="w-4 h-4 text-[#4ecca3] mr-3" />
                    <span>85% reduced search time</span>
                  </li>
                  <li className="flex items-center">
                    <BarChart3 className="w-4 h-4 text-[#4ecca3] mr-3" />
                    <span>40% lower operational costs</span>
                  </li>
                  <li className="flex items-center">
                    <Target className="w-4 h-4 text-[#4ecca3] mr-3" />
                    <span>99.9% tracking accuracy</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Real-time Insights */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
              <div className="text-[#4ecca3] mb-6">
                <Cpu className="w-12 h-12" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Real-time Insights</h2>
              <p className="text-gray-600 mb-6">
                Every asset becomes a data point in your digital ecosystem. Get instant visibility 
                into location, status, and performance metrics across your entire operation.
              </p>
              <div>
                <h3 className="font-semibold mb-3">Features:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Zap className="w-4 h-4 text-[#4ecca3] mr-3" />
                    <span>Live location tracking</span>
                  </li>
                  <li className="flex items-center">
                    <BarChart3 className="w-4 h-4 text-[#4ecca3] mr-3" />
                    <span>Performance analytics</span>
                  </li>
                  <li className="flex items-center">
                    <Target className="w-4 h-4 text-[#4ecca3] mr-3" />
                    <span>Predictive maintenance</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Future-Proof Growth */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
              <div className="text-[#4ecca3] mb-6">
                <LineChart className="w-12 h-12" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Future-Proof Growth</h2>
              <p className="text-gray-600 mb-6">
                Scale with confidence using our cloud-based platform. From small operations to 
                enterprise-wide deployments, grow at your pace with future-ready technology.
              </p>
              <div>
                <h3 className="font-semibold mb-3">Benefits:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Zap className="w-4 h-4 text-[#4ecca3] mr-3" />
                    <span>Unlimited scalability</span>
                  </li>
                  <li className="flex items-center">
                    <BarChart3 className="w-4 h-4 text-[#4ecca3] mr-3" />
                    <span>Regular AI updates</span>
                  </li>
                  <li className="flex items-center">
                    <Target className="w-4 h-4 text-[#4ecca3] mr-3" />
                    <span>API integrations</span>
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