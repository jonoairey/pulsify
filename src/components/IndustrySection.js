import React from 'react';
import { Box, Calendar, BarChart, Shield } from 'lucide-react';

const IndustrySection = () => {
  const [selectedIndustry, setSelectedIndustry] = React.useState('events');

  const industries = {
    events: {
      title: "Events & Conferences",
      icon: <Calendar className="w-8 h-8" />,
      description: "Transform your events from moments in time to sources of insight. Pulsify's digital pulse brings your event to life, tracking engagement, optimizing flows, and delivering unprecedented insights into attendee behavior.",
      useCases: [
        {
          title: "Intelligent Experience",
          benefits: ["Real-time engagement tracking", "AI-powered flow optimization", "Behavioral analytics"],
          implementation: "Turn every touchpoint into data, every movement into insight, creating a living, breathing event ecosystem."
        },
        {
          title: "Attendee Intelligence",
          benefits: ["Dynamic engagement scoring", "Personalized experiences", "Interest mapping"],
          implementation: "Understand attendee preferences and behaviors in real-time, enabling dynamic event optimization."
        },
        {
          title: "Event Analytics",
          benefits: ["Predictive analytics", "Heat mapping", "ROI tracking"],
          implementation: "Transform event data into actionable insights, driving better decisions for future events."
        }
      ],
      roi: "Turn Events into Intelligence Engines"
    },
    retail: {
      title: "Retail & Products",
      icon: <Box className="w-8 h-8" />,
      description: "Give your products a voice. From supply chain to customer experience, Pulsify's digital pulse transforms static inventory into intelligent assets that communicate, track, and optimize themselves.",
      useCases: [
        {
          title: "Digital Product Identity",
          benefits: ["Digital Product Passport ready", "Product storytelling", "Authentication built-in"],
          implementation: "Every product becomes a digital entity, telling its story from production to customer."
        },
        {
          title: "Intelligent Inventory",
          benefits: ["Self-optimizing stock levels", "Predictive replenishment", "Real-time tracking"],
          implementation: "Transform static inventory into smart assets that manage and optimize themselves."
        },
        {
          title: "Customer Intelligence",
          benefits: ["Personalized experiences", "Product interaction insights", "Purchase pattern analysis"],
          implementation: "Create dialogue between products and customers, driving engagement and sales."
        }
      ],
      roi: "Transform Products into Digital Assets"
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Industry Solutions</h2>
        <p className="text-xl text-gray-600 text-center mb-12">Ready for Tomorrow's Digital Transformation</p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(industries).map(([key, industry]) => (
            <button
              key={key}
              onClick={() => setSelectedIndustry(key)}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                selectedIndustry === key
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {industry.title}
            </button>
          ))}
        </div>

        {selectedIndustry && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center mb-4">
                <div className="text-blue-600 mr-4">
                  {industries[selectedIndustry].icon}
                </div>
                <h3 className="text-2xl font-bold">{industries[selectedIndustry].title}</h3>
              </div>
              <p className="text-gray-600 mb-8">{industries[selectedIndustry].description}</p>

              <div className="space-y-8">
                {industries[selectedIndustry].useCases.map((useCase, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <h4 className="text-xl font-semibold mb-4">{useCase.title}</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold mb-2 text-blue-600">Intelligent Benefits</h5>
                        <ul className="space-y-2">
                          {useCase.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-center">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2 text-blue-600">Digital Transformation</h5>
                        <p className="text-gray-600">{useCase.implementation}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Future Ready Panel */}
              <div className="mt-8 bg-blue-50 rounded-lg p-6">
                <h4 className="text-xl font-bold text-center mb-4">Ready for Tomorrow</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-blue-600" />
                    <span>Digital Product Passport ready</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BarChart className="w-5 h-5 text-blue-600" />
                    <span>AI-enabled insights</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Box className="w-5 h-5 text-blue-600" />
                    <span>Sustainable operations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <span>Future-proof technology</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default IndustrySection;