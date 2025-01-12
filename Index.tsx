import React, { useState } from 'react';
import { 
  Home, 
  Settings, 
  Box, 
  Briefcase, 
  Calendar, 
  ChevronRight, 
  BarChart, 
  Clock, 
  Shield,
  Globe,
  Bell,
  Activity
} from 'lucide-react';
import { Globe, Clock } from 'lucide-react';
import { Briefcase, Settings, Box, Calendar } from 'lucide-react';

const Website = () => {
  const [showROICalculator, setShowROICalculator] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    industry: 'healthcare'
  });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for your message! We'll be in touch soon.");
    setContactForm({
      name: '',
      email: '',
      company: '',
      message: '',
      industry: 'healthcare'
    });
  };

  const industries = {
    healthcare: {
      title: "Healthcare",
      icon: <Briefcase className="w-8 h-8" />,
      useCases: [
        {
          title: "Equipment Tracking",
          benefits: ["85% reduction in search time", "40% better utilization", "99.9% inventory accuracy"],
          implementation: "Real-time location tracking of medical devices, maintenance scheduling, and compliance monitoring."
        }
      ]
    },
    retail: {
      title: "Retail",
      icon: <Box className="w-8 h-8" />,
      useCases: [
        {
          title: "Inventory Management",
          benefits: ["99% accuracy", "60% faster stocktakes", "30% reduced shrinkage"],
          implementation: "Automated inventory counting, real-time stock levels, and loss prevention."
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">RFIDTrack</span>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a href="#home" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Home</a>
                <a href="#solutions" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Solutions</a>
                <a href="#case-studies" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Case Studies</a>
                <a href="#contact" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto py-16 px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Sustainable Asset Tracking Solutions</h1>
            <p className="text-xl mb-8">Transform your asset management while reducing environmental impact.</p>
            <div className="flex justify-center space-x-4">
              <button 
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50"
                onClick={() => setShowROICalculator(true)}
              >
                Calculate ROI
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section id="solutions" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Industry Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(industries).map(([key, industry]) => (
              <button
                key={key}
                className={`p-6 rounded-lg transition-all duration-300 ${
                  selectedIndustry === key 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'bg-white text-gray-800 hover:shadow-md'
                }`}
                onClick={() => setSelectedIndustry(key)}
              >
                <div className={`${selectedIndustry === key ? 'text-white' : 'text-blue-600'} mb-4`}>
                  {industry.icon}
                </div>
                <h3 className="text-xl font-semibold">{industry.title}</h3>
              </button>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <p>© 2024 RFIDTrack. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
const TrackingBenefits = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Smart Tracking?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Operational Excellence */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6">Operational Excellence</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 text-blue-600 mt-1 mr-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Real-time Visibility</h4>
                  <p className="text-gray-600">Know exactly where your assets are and how they're being used, enabling immediate decision-making and problem resolution.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 text-blue-600 mt-1 mr-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Time Efficiency</h4>
                  <p className="text-gray-600">Eliminate manual searching and tracking, reducing labor costs and improving productivity across operations.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 text-blue-600 mt-1 mr-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Loss Prevention</h4>
                  <p className="text-gray-600">Significantly reduce asset loss and theft through continuous monitoring and instant alerts.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Financial Impact */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6">Financial Impact</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 text-blue-600 mt-1 mr-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Cost Reduction</h4>
                  <p className="text-gray-600">Average 40% reduction in operational costs through improved efficiency and resource utilization.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 text-blue-600 mt-1 mr-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Inventory Optimization</h4>
                  <p className="text-gray-600">Reduce excess inventory by 30% while ensuring availability of critical assets when needed.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 text-blue-600 mt-1 mr-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Predictive Maintenance</h4>
                  <p className="text-gray-600">Reduce maintenance costs by 25% through better planning and preventive care.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Data-Driven Insights Panel */}
        <div className="bg-blue-50 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-6 text-center">Data-Driven Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-lg font-semibold mb-1">Accuracy Rate</div>
              <p className="text-gray-600">In asset tracking and monitoring</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">85%</div>
              <div className="text-lg font-semibold mb-1">Time Saved</div>
              <p className="text-gray-600">In asset search and management</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">40%</div>
              <div className="text-lg font-semibold mb-1">Cost Reduction</div>
              <p className="text-gray-600">In operational expenses</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const IndustrySection = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('healthcare');

  const industries = {
    healthcare: {
      title: "Healthcare",
      description: "Transform medical asset management and improve patient care",
      useCases: [
        {
          title: "Equipment Tracking",
          benefits: ["85% reduction in search time", "40% better utilization", "99.9% inventory accuracy"],
          implementation: "Real-time location tracking of medical devices, maintenance scheduling, and compliance monitoring."
        },
        {
          title: "Patient Safety",
          benefits: ["90% reduction in errors", "Real-time monitoring", "Automated compliance"],
          implementation: "Track surgical instruments, ensure sterilization compliance, and manage pharmaceutical inventory."
        },
        {
          title: "Asset Management",
          benefits: ["30% cost reduction", "Predictive maintenance", "Automated reporting"],
          implementation: "Monitor equipment lifecycle, schedule maintenance, and optimize inventory levels."
        }
      ],
      roi: "Average ROI: 250% in first year"
    },
    retail: {
      title: "Retail",
      description: "Optimize inventory and enhance customer experience",
      useCases: [
        {
          title: "Inventory Management",
          benefits: ["99% accuracy", "60% faster stocktakes", "30% reduced shrinkage"],
          implementation: "Automated inventory counting, real-time stock levels, and loss prevention."
        },
        {
          title: "Supply Chain",
          benefits: ["40% faster processing", "Real-time tracking", "Automated receiving"],
          implementation: "Track shipments, manage warehouse operations, and optimize stock levels."
        },
        {
          title: "Customer Experience",
          benefits: ["20% increased sales", "Smart fitting rooms", "Personalized service"],
          implementation: "Interactive product information, smart mirrors, and personalized recommendations."
        }
      ],
      roi: "Average ROI: 180% in first year"
    },
    construction: {
      title: "Construction",
      description: "Track tools and equipment across multiple sites",
      useCases: [
        {
          title: "Tool Tracking",
          benefits: ["75% reduced losses", "90% time savings", "Real-time location"],
          implementation: "Track tools and equipment, manage maintenance, and prevent theft."
        },
        {
          title: "Site Safety",
          benefits: ["50% fewer incidents", "Automated compliance", "Real-time monitoring"],
          implementation: "Monitor worker locations, ensure certification compliance, and track safety equipment."
        },
        {
          title: "Asset Management",
          benefits: ["35% cost savings", "Improved utilization", "Maintenance tracking"],
          implementation: "Manage equipment lifecycle, schedule maintenance, and optimize deployment."
        }
      ],
      roi: "Average ROI: 200% in first year"
    },
    events: {
      title: "Events",
      description: "Streamline event operations and enhance attendee experience",
      useCases: [
        {
          title: "Access Control",
          benefits: ["80% faster entry", "Real-time capacity", "Automated verification"],
          implementation: "Manage attendee access, track capacity, and ensure security."
        },
        {
          title: "Asset Tracking",
          benefits: ["95% reduced losses", "Real-time location", "Automated inventory"],
          implementation: "Track equipment, manage rentals, and prevent losses."
        },
        {
          title: "Analytics",
          benefits: ["Rich attendee data", "Behavior insights", "ROI measurement"],
          implementation: "Track attendance patterns, measure engagement, and optimize layout."
        }
      ],
      roi: "Average ROI: 150% in first year"
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Industry Solutions</h2>
        
        {/* Industry Selection Tabs */}
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

        {/* Selected Industry Content */}
        {selectedIndustry && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-2">{industries[selectedIndustry].title}</h3>
              <p className="text-gray-600 mb-8">{industries[selectedIndustry].description}</p>

              {/* Use Cases */}
              <div className="space-y-8">
                {industries[selectedIndustry].useCases.map((useCase, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <h4 className="text-xl font-semibold mb-4">{useCase.title}</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold mb-2 text-blue-600">Key Benefits</h5>
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
                        <h5 className="font-semibold mb-2 text-blue-600">Implementation</h5>
                        <p className="text-gray-600">{useCase.implementation}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* ROI Information */}
              <div className="mt-8 bg-blue-50 rounded-lg p-6 text-center">
                <p className="text-xl font-bold text-blue-600">{industries[selectedIndustry].roi}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
const EnvironmentalImpact = () => {
  return (
    <section className="bg-green-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Environmental Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Carbon Footprint Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-green-600 mb-4">
              <Globe className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Reduced Carbon Footprint</h3>
            <div className="space-y-4">
              <p className="text-gray-600">Our RFID solutions reduce unnecessary travel and optimize resource usage.</p>
              <div className="bg-green-100 p-4 rounded-lg">
                <p className="text-green-800 font-semibold">Environmental Savings:</p>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span>30% reduction in vehicle emissions</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span>50% less paper waste</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span>25% energy savings</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Resource Optimization Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-green-600 mb-4">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <div className="w-4 h-4 bg-green-600 rounded-full"></div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">Resource Optimization</h3>
            <div className="space-y-4">
              <p className="text-gray-600">Smart tracking enables better resource utilization and reduces waste.</p>
              <div className="bg-green-100 p-4 rounded-lg">
                <p className="text-green-800 font-semibold">Efficiency Gains:</p>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span>40% better asset utilization</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span>60% reduction in lost assets</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span>35% less inventory waste</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sustainable Operations Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-green-600 mb-4">
              <Clock className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Sustainable Operations</h3>
            <div className="space-y-4">
              <p className="text-gray-600">Long-term sustainability through intelligent asset management.</p>
              <div className="bg-green-100 p-4 rounded-lg">
                <p className="text-green-800 font-semibold">Impact Metrics:</p>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span>20% extended asset lifecycle</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span>45% less e-waste</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span>Zero battery waste</span>
                  </li>
                </ul>
              </div>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">50%</div>
                <p className="text-sm text-gray-600">Reduction in Paper Usage</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">30%</div>
                <p className="text-sm text-gray-600">Lower Carbon Emissions</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">40%</div>
                <p className="text-sm text-gray-600">Better Resource Utilization</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const CaseStudies = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
        
        {/* Featured Case Study */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="p-8">
            <div className="flex items-center mb-4">
              <Briefcase className="w-8 h-8 text-blue-600 mr-4" />
              <h3 className="text-2xl font-bold">St. Mary's General Hospital</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-2">
                <p className="text-gray-600 mb-4">
                  St. Mary's implemented our RFID tracking solution across their 500-bed facility, 
                  focusing on critical medical equipment management and asset utilization.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span>Reduced equipment search time by 85%</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span>Saved $2.1M in annual equipment replacement costs</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span>Improved equipment utilization by 40%</span>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">Key Results</h4>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">94%</div>
                    <div className="text-sm text-gray-600">Staff Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">$2.1M</div>
                    <div className="text-sm text-gray-600">Annual Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">3 Months</div>
                    <div className="text-sm text-gray-600">ROI Timeline</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Construction Company Case Study */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Settings className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-bold">BuildRight Construction</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Implemented RFID tracking for tools and equipment across 12 construction sites.
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span>75% reduction in lost tools</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span>$450K annual savings</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span>30% improved efficiency</span>
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">6 Months</div>
                <div className="text-sm text-gray-600">ROI Achievement</div>
              </div>
            </div>
          </div>

          {/* Retail Chain Case Study */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Box className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-bold">Metro Retail Group</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Deployed RFID inventory management across 50 retail locations.
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span>99.9% inventory accuracy</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span>30% shrinkage reduction</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span>$1.2M yearly savings</span>
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">4 Months</div>
                <div className="text-sm text-gray-600">ROI Achievement</div>
              </div>
            </div>
          </div>

          {/* Event Management Case Study */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Calendar className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-bold">Global Events Pro</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Implemented RFID for equipment tracking and attendee management at major events.
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span>85% faster check-in times</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span>95% reduction in lost equipment</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span>40% staff cost reduction</span>
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">5 Events</div>
                <div className="text-sm text-gray-600">ROI Achievement</div>
              </div>
            </div>
          </div>
        </div>

        {/* Client Testimonials */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">What Our Clients Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "The implementation of RFID tracking has transformed our equipment management. 
                We've seen dramatic improvements in efficiency and significant cost savings."
              </p>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-semibold">Dr. Sarah Johnson</p>
                  <p className="text-sm text-gray-500">Director of Operations, St. Mary's Hospital</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "The ROI we've achieved has exceeded our expectations. The system paid for itself 
                within months through reduced losses and improved utilization."
              </p>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Settings className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-semibold">Mike Chen</p>
                  <p className="text-sm text-gray-500">Project Manager, BuildRight Construction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Website;