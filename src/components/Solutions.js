import React from 'react';
import { 
  BarChart, Shield, Clock, Calendar, ChevronRight, Award,
  Building2, Factory, Truck, LineChart, Users, Tag, Gift
} from 'lucide-react';

const Solutions = () => {
  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Industry-Leading Solutions</h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Transform your physical assets into intelligent data points. Our RFID solutions 
            create a digital ecosystem where every asset, product, and interaction generates 
            actionable insights.
          </p>
        </div>

        {/* Core Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="text-[#4ecca3] mb-4">
              <BarChart className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold mb-4">Real-time Tracking</h3>
            <p className="text-gray-600 mb-4">Monitor assets in real-time with precision location tracking and status updates</p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center">
                <ChevronRight className="w-4 h-4 text-[#4ecca3] mr-2" />
                <span>Indoor positioning accuracy to 1m</span>
              </li>
              <li className="flex items-center">
                <ChevronRight className="w-4 h-4 text-[#4ecca3] mr-2" />
                <span>Real-time movement alerts</span>
              </li>
              <li className="flex items-center">
                <ChevronRight className="w-4 h-4 text-[#4ecca3] mr-2" />
                <span>Zone-based tracking</span>
              </li>
            </ul>
            <div className="mt-4 text-3xl font-bold text-[#4ecca3]">99.9%</div>
            <p className="text-sm text-gray-500">Tracking Accuracy</p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="text-[#4ecca3] mb-4">
              <Shield className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold mb-4">Predictive Maintenance</h3>
            <p className="text-gray-600 mb-4">AI-powered maintenance forecasting to prevent equipment failures</p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center">
                <ChevronRight className="w-4 h-4 text-[#4ecca3] mr-2" />
                <span>Failure prediction analytics</span>
              </li>
              <li className="flex items-center">
                <ChevronRight className="w-4 h-4 text-[#4ecca3] mr-2" />
                <span>Maintenance scheduling</span>
              </li>
              <li className="flex items-center">
                <ChevronRight className="w-4 h-4 text-[#4ecca3] mr-2" />
                <span>Usage-based servicing</span>
              </li>
            </ul>
            <div className="mt-4 text-3xl font-bold text-[#4ecca3]">40%</div>
            <p className="text-sm text-gray-500">Reduced Downtime</p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="text-[#4ecca3] mb-4">
              <Clock className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold mb-4">Smart Analytics</h3>
            <p className="text-gray-600 mb-4">Transform data into actionable intelligence for better decision making</p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center">
                <ChevronRight className="w-4 h-4 text-[#4ecca3] mr-2" />
                <span>Custom reporting dashboards</span>
              </li>
              <li className="flex items-center">
                <ChevronRight className="w-4 h-4 text-[#4ecca3] mr-2" />
                <span>Trend analysis</span>
              </li>
              <li className="flex items-center">
                <ChevronRight className="w-4 h-4 text-[#4ecca3] mr-2" />
                <span>Predictive insights</span>
              </li>
            </ul>
            <div className="mt-4 text-3xl font-bold text-[#4ecca3]">85%</div>
            <p className="text-sm text-gray-500">Improved Efficiency</p>
          </div>
        </div>

        {/* Industry Solutions */}
        <div className="space-y-32">
          {/* Retail Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[#4ecca3] mb-6">
                <Building2 className="w-12 h-12" />
              </div>
              <div className="inline-block bg-[#4ecca3]/10 rounded-full px-4 py-1 text-[#4ecca3] text-sm font-semibold mb-4">
                Retail Solutions
              </div>
              <h2 className="text-3xl font-bold mb-4">Transform Your Retail Operations</h2>
              <p className="text-gray-600 mb-8">
                Revolutionize your retail experience with end-to-end visibility and automation. 
                From inventory management to customer insights, our RFID solutions deliver 
                unprecedented control and efficiency.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <Tag className="w-6 h-6 text-[#4ecca3] mb-2" />
                  <h4 className="font-semibold mb-2">Smart Inventory</h4>
                  <p className="text-sm text-gray-600">Automated stock tracking and reordering</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <Gift className="w-6 h-6 text-[#4ecca3] mb-2" />
                  <h4 className="font-semibold mb-2">Customer Experience</h4>
                  <p className="text-sm text-gray-600">Personalized shopping journeys</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="bg-gray-50 px-4 py-2 rounded-full">
                  <span className="text-[#4ecca3] font-semibold">99.9% Inventory Accuracy</span>
                </div>
                <div className="bg-gray-50 px-4 py-2 rounded-full">
                  <span className="text-[#4ecca3] font-semibold">30% Lower Stockouts</span>
                </div>
                <div className="bg-gray-50 px-4 py-2 rounded-full">
                  <span className="text-[#4ecca3] font-semibold">25% Higher Sales</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="font-semibold mb-4">Retail Capabilities:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Award className="w-5 h-5 text-[#4ecca3] mr-3 mt-1" />
                  <div>
                    <span className="font-medium block mb-1">Real-time Inventory Management</span>
                    <span className="text-sm text-gray-600">Automatic stock counts, reordering, and loss prevention</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Award className="w-5 h-5 text-[#4ecca3] mr-3 mt-1" />
                  <div>
                    <span className="font-medium block mb-1">Omnichannel Integration</span>
                    <span className="text-sm text-gray-600">Seamless online and offline inventory sync</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Award className="w-5 h-5 text-[#4ecca3] mr-3 mt-1" />
                  <div>
                    <span className="font-medium block mb-1">Smart Fitting Rooms</span>
                    <span className="text-sm text-gray-600">Interactive product recommendations and availability</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Award className="w-5 h-5 text-[#4ecca3] mr-3 mt-1" />
                  <div>
                    <span className="font-medium block mb-1">Supply Chain Optimization</span>
                    <span className="text-sm text-gray-600">End-to-end tracking and optimization</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Events Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-gray-50 p-8 rounded-lg">
              <h3 className="font-semibold mb-4">Event Management Features:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Award className="w-5 h-5 text-[#4ecca3] mr-3 mt-1" />
                  <div>
                    <span className="font-medium block mb-1">Smart Access Control</span>
                    <span className="text-sm text-gray-600">Touchless entry and fraud prevention</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Award className="w-5 h-5 text-[#4ecca3] mr-3 mt-1" />
                  <div>
                    <span className="font-medium block mb-1">Crowd Flow Analytics</span>
                    <span className="text-sm text-gray-600">Real-time monitoring and optimization</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Award className="w-5 h-5 text-[#4ecca3] mr-3 mt-1" />
                  <div>
                    <span className="font-medium block mb-1">Equipment Management</span>
                    <span className="text-sm text-gray-600">Asset tracking and maintenance scheduling</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Award className="w-5 h-5 text-[#4ecca3] mr-3 mt-1" />
                  <div>
                    <span className="font-medium block mb-1">Engagement Analytics</span>
                    <span className="text-sm text-gray-600">Behavioral insights and optimization</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <div className="text-[#4ecca3] mb-6">
                <Calendar className="w-12 h-12" />
              </div>
              <div className="inline-block bg-[#4ecca3]/10 rounded-full px-4 py-1 text-[#4ecca3] text-sm font-semibold mb-4">
                Event Solutions
              </div>
              <h2 className="text-3xl font-bold mb-4">Create Smarter Events</h2>
              <p className="text-gray-600 mb-8">
                Transform events into data-rich experiences. From access control to crowd management, 
                our solutions help you create safer, more engaging, and more profitable events.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <Users className="w-6 h-6 text-[#4ecca3] mb-2" />
                  <h4 className="font-semibold mb-2">Crowd Intelligence</h4>
                  <p className="text-sm text-gray-600">Real-time flow optimization</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <LineChart className="w-6 h-6 text-[#4ecca3] mb-2" />
                  <h4 className="font-semibold mb-2">Event Analytics</h4>
                  <p className="text-sm text-gray-600">Engagement insights</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="bg-gray-50 px-4 py-2 rounded-full">
                  <span className="text-[#4ecca3] font-semibold">85% Faster Check-in</span>
                </div>
                <div className="bg-gray-50 px-4 py-2 rounded-full">
                  <span className="text-[#4ecca3] font-semibold">95% Less Lost Equipment</span>
                </div>
                <div className="bg-gray-50 px-4 py-2 rounded-full">
                  <span className="text-[#4ecca3] font-semibold">40% Better Flow</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Industries */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-12">Additional Industry Solutions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Healthcare */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <Building2 className="w-8 h-8 text-[#4ecca3] mb-4" />
                <h4 className="text-xl font-bold mb-3">Healthcare</h4>
                <p className="text-gray-600 mb-4">
                  Transform patient care and asset management with real-time tracking and analytics.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 text-[#4ecca3] mr-2" />
                    <span>Equipment tracking</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 text-[#4ecca3] mr-2" />
                    <span>Patient flow optimization</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 text-[#4ecca3] mr-2" />
                    <span>Inventory management</span>
                  </li>
                </ul>
                <div className="mt-4 text-[#4ecca3] font-semibold">85% Less Search Time</div>
              </div>

              {/* Manufacturing */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <Factory className="w-8 h-8 text-[#4ecca3] mb-4" />
                <h4 className="text-xl font-bold mb-3">Manufacturing</h4>
                <p className="text-gray-600 mb-4">
                  Optimize production processes and supply chain with intelligent tracking solutions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 text-[#4ecca3] mr-2" />
                    <span>Production tracking</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 text-[#4ecca3] mr-2" />
                    <span>Quality control</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 text-[#4ecca3] mr-2" />
                    <span>Supply chain visibility</span>
                  </li>
                </ul>
                <div className="mt-4 text-[#4ecca3] font-semibold">40% Higher Efficiency</div>
              </div>

              {/* Logistics */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <Truck className="w-8 h-8 text-[#4ecca3] mb-4" />
                <h4 className="text-xl font-bold mb-3">Logistics</h4>
                <p className="text-gray-600 mb-4">
                  End-to-end visibility and control across your entire supply chain network.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 text-[#4ecca3] mr-2" />
                    <span>Shipment tracking</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 text-[#4ecca3] mr-2" />
                    <span>Route optimization</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 text-[#4ecca3] mr-2" />
                    <span>Warehouse management</span>
                  </li>
                </ul>
                <div className="mt-4 text-[#4ecca3] font-semibold">99.9% Tracking Accuracy</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Operations?</h3>
                <p className="text-gray-600 mb-8">
                  Join industry leaders who have already revolutionized their operations with our RFID solutions.
                </p>
                <button className="bg-[#4ecca3] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#45b48f] transition-colors">
                  Schedule a Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;