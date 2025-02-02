import React from 'react';
import { Briefcase, Settings, Box, Calendar } from 'lucide-react';

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

export default CaseStudies;