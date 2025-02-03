// src/components/Solutions.js
import React from 'react';
import { BarChart, Shield, Clock, Calendar, Box, Users, Zap, LineChart } from 'lucide-react';

const Solutions = () => {
  return (
    <section id="solutions" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Intelligent Asset Management</h2>
        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Transform your physical world into a digital ecosystem where every asset tells its story,
          every movement creates insight, and every interaction drives value.
        </p>

        {/* Core Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <div className="text-[#4ecca3] mb-4">
              <BarChart className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold mb-4">Real-time Tracking</h3>
            <p className="text-gray-600 mb-4">Monitor assets in real-time with precision location tracking and status updates</p>
            <div className="mt-4 text-3xl font-bold text-[#4ecca3]">99.9%</div>
            <p className="text-sm text-gray-500">Tracking Accuracy</p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <div className="text-[#4ecca3] mb-4">
              <Shield className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold mb-4">Predictive Maintenance</h3>
            <p className="text-gray-600 mb-4">AI-powered maintenance forecasting to prevent equipment failures</p>
            <div className="mt-4 text-3xl font-bold text-[#4ecca3]">40%</div>
            <p className="text-sm text-gray-500">Reduced Downtime</p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <div className="text-[#4ecca3] mb-4">
              <Clock className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold mb-4">Smart Analytics</h3>
            <p className="text-gray-600 mb-4">Transform data into actionable intelligence for better decision making</p>
            <div className="mt-4 text-3xl font-bold text-[#4ecca3]">85%</div>
            <p className="text-sm text-gray-500">Improved Efficiency</p>
          </div>
        </div>

        {/* Industry Solutions */}
        <div className="space-y-24">
          {/* Events Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[#4ecca3] mb-6">
                <Calendar className="w-12 h-12" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Turn Every Event into an Intelligent Experience</h2>
              <p className="text-gray-600 mb-6">
                Transform your events from moments in time to sources of insight. Pulsify's 
                digital pulse brings your event to life, tracking engagement, optimizing flows, 
                and delivering unprecedented insights into attendee behavior.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <Users className="w-6 h-6 text-[#4ecca3] mb-2" />
                  <h4 className="font-semibold mb-2">Engagement Tracking</h4>
                  <p className="text-sm text-gray-600">Real-time attendee flow and interaction monitoring</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <LineChart className="w-6 h-6 text-[#4ecca3] mb-2" />
                  <h4 className="font-semibold mb-2">Analytics Dashboard</h4>
                  <p className="text-sm text-gray-600">Live metrics and performance insights</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="font-semibold mb-4">Key Capabilities:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#4ecca3] rounded-full mr-3 mt-2"></div>
                  <span>Real-time crowd flow optimization and bottleneck prevention</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#4ecca3] rounded-full mr-3 mt-2"></div>
                  <span>Personalized attendee experience tracking and enhancement</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#4ecca3] rounded-full mr-3 mt-2"></div>
                  <span>Equipment and asset location tracking with instant alerts</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#4ecca3] rounded-full mr-3 mt-2"></div>
                  <span>Post-event analytics for continuous improvement</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Products Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-gray-50 p-8 rounded-lg">
              <h3 className="font-semibold mb-4">Key Benefits:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#4ecca3] rounded-full mr-3 mt-2"></div>
                  <span>Automated inventory management with predictive restocking</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#4ecca3] rounded-full mr-3 mt-2"></div>
                  <span>End-to-end supply chain visibility and optimization</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#4ecca3] rounded-full mr-3 mt-2"></div>
                  <span>Real-time product location and status monitoring</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#4ecca3] rounded-full mr-3 mt-2"></div>
                  <span>Digital Product Passport readiness for sustainability</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <div className="text-[#4ecca3] mb-6">
                <Box className="w-12 h-12" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Products That Tell Their Story</h2>
              <p className="text-gray-600 mb-6">
                Give your products a voice. From supply chain to customer experience, Pulsify's 
                digital pulse transforms static inventory into intelligent assets that 
                communicate, track, and optimize themselves.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <Zap className="w-6 h-6 text-[#4ecca3] mb-2" />
                  <h4 className="font-semibold mb-2">Smart Inventory</h4>
                  <p className="text-sm text-gray-600">Self-optimizing stock levels and automated reordering</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <Shield className="w-6 h-6 text-[#4ecca3] mb-2" />
                  <h4 className="font-semibold mb-2">Product Security</h4>
                  <p className="text-sm text-gray-600">Authentication and tracking built-in</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;