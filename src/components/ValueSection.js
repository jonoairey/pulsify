// src/components/ValueSection.js
import React from 'react';
import { 
  TrendingUp, 
  ScrollText, 
  Globe,
  BookOpen,
  BarChart3,
  Users,
  Zap
} from 'lucide-react';

const ValueSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Why Now Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#4ecca3]/10 rounded-full px-4 py-1 text-[#4ecca3] text-sm font-semibold mb-4">
              Why Digital Transformation Matters
            </div>
            <h2 className="text-4xl font-bold mb-6">The Digital Imperative</h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              In today's rapidly evolving business landscape, digital transformation isn't just an option—it's a necessity for survival and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="text-[#4ecca3] mb-6">
                <TrendingUp size={48} />
              </div>
              <h3 className="text-xl font-bold mb-4">Market Evolution</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Zap className="w-5 h-5 text-[#4ecca3] mr-3 mt-1" />
                  <span>68% of customers expect seamless digital experiences</span>
                </li>
                <li className="flex items-start">
                  <Zap className="w-5 h-5 text-[#4ecca3] mr-3 mt-1" />
                  <span>73% of businesses see digital transformation as critical</span>
                </li>
                <li className="flex items-start">
                  <Zap className="w-5 h-5 text-[#4ecca3] mr-3 mt-1" />
                  <span>2.5x higher growth rate for digitally mature companies</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="text-[#4ecca3] mb-6">
                <ScrollText size={48} />
              </div>
              <h3 className="text-xl font-bold mb-4">Regulatory Requirements</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Zap className="w-5 h-5 text-[#4ecca3] mr-3 mt-1" />
                  <span>EU Digital Product Passport (DPP) compliance</span>
                </li>
                <li className="flex items-start">
                  <Zap className="w-5 h-5 text-[#4ecca3] mr-3 mt-1" />
                  <span>Australian Consumer Law digital requirements</span>
                </li>
                <li className="flex items-start">
                  <Zap className="w-5 h-5 text-[#4ecca3] mr-3 mt-1" />
                  <span>Supply chain transparency regulations</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="text-[#4ecca3] mb-6">
                <Globe size={48} />
              </div>
              <h3 className="text-xl font-bold mb-4">Sustainability Focus</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Zap className="w-5 h-5 text-[#4ecca3] mr-3 mt-1" />
                  <span>Meet ESG reporting requirements</span>
                </li>
                <li className="flex items-start">
                  <Zap className="w-5 h-5 text-[#4ecca3] mr-3 mt-1" />
                  <span>Support circular economy initiatives</span>
                </li>
                <li className="flex items-start">
                  <Zap className="w-5 h-5 text-[#4ecca3] mr-3 mt-1" />
                  <span>Reduce environmental impact</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Digital Engagement Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#4ecca3]/10 rounded-full px-4 py-1 text-[#4ecca3] text-sm font-semibold mb-4">
              Enhanced Digital Engagement
            </div>
            <h2 className="text-4xl font-bold mb-6">Create Immersive Digital Experiences</h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Transform physical interactions into rich digital experiences that engage, inform, and delight your customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold mb-6">Product Digital Identity</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <BookOpen className="w-6 h-6 text-[#4ecca3] mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Interactive Product Experiences</h4>
                    <p className="text-gray-600">Enable customers to access detailed product information, authenticity verification, and usage guides through their smartphones</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <BarChart3 className="w-6 h-6 text-[#4ecca3] mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Usage Analytics</h4>
                    <p className="text-gray-600">Gain insights into how customers interact with products to inform product development and marketing strategies</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold mb-6">Event Digital Enhancement</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Users className="w-6 h-6 text-[#4ecca3] mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Personalized Event Journeys</h4>
                    <p className="text-gray-600">Create customized event experiences with personalized recommendations and real-time engagement opportunities</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Zap className="w-6 h-6 text-[#4ecca3] mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Dynamic Interactions</h4>
                    <p className="text-gray-600">Enable real-time participation, voting, and feedback through digital touchpoints throughout the event</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;