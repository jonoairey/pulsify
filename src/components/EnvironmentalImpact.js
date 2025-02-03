import React from 'react';

const EnvironmentalImpact = () => {
  return (
    <div className="environmental-impact">
      <h2>Environmental Impact</h2>
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
    </div>
  );
};

export default EnvironmentalImpact;