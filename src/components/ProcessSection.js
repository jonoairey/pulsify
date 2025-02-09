import React from 'react';
import { 
  Settings, 
  Smartphone, 
  Workflow, 
  BarChart3,
  ArrowRight,
  Zap,
  Users,
  LineChart
} from 'lucide-react';

const ProcessSection = () => {
  const implementationSteps = [
    {
      icon: Settings,
      title: "1. Infrastructure",
      description: "Setup RFID readers and NFC deployment with secure network integration",
      points: ["Hardware installation", "Network configuration", "Security setup"]
    },
    {
      icon: Smartphone,
      title: "2. Digital Integration",
      description: "Seamless integration with existing systems and mobile experiences",
      points: ["App Clip activation", "POS integration", "Inventory sync"]
    },
    {
      icon: Workflow,
      title: "3. Operations",
      description: "Streamline processes and enable smart automation",
      points: ["Staff training", "Process automation", "System monitoring"]
    },
    {
      icon: BarChart3,
      title: "4. Optimization",
      description: "Continuous improvement through data-driven insights",
      points: ["Performance analytics", "Behavior tracking", "ROI optimization"]
    }
  ];

  return (
    <section className="w-full py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block bg-[#4ecca3]/10 rounded-full px-4 py-1 text-[#4ecca3] text-sm font-semibold mb-4">
            Implementation Process
          </div>
          <h2 className="text-4xl font-bold mb-6">Your Journey to Digital Innovation</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            A streamlined approach to transforming your operations with intelligent 
            tracking and engagement technology.
          </p>
        </div>

        {/* Implementation Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
          {implementationSteps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <div className="text-[#4ecca3] mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{step.description}</p>
                <ul className="space-y-2">
                  {step.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-center text-sm group-hover:translate-x-1 transition-transform duration-200">
                      <ArrowRight className="w-4 h-4 text-[#4ecca3] mr-2 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {index < implementationSteps.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-[#4ecca3]" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Key Metrics */}
        <div className="bg-white rounded-xl shadow-lg p-10">
          <h3 className="text-2xl font-bold text-center mb-10">Success Metrics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="group text-center p-4 hover:bg-[#4ecca3]/5 rounded-lg transition-colors duration-300">
              <Zap className="w-8 h-8 text-[#4ecca3] mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-3xl font-bold text-[#4ecca3] mb-1">99.9%</div>
              <p className="text-gray-600 text-sm">System Accuracy</p>
            </div>
            <div className="group text-center p-4 hover:bg-[#4ecca3]/5 rounded-lg transition-colors duration-300">
              <Smartphone className="w-8 h-8 text-[#4ecca3] mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-3xl font-bold text-[#4ecca3] mb-1">85%</div>
              <p className="text-gray-600 text-sm">Digital Adoption</p>
            </div>
            <div className="group text-center p-4 hover:bg-[#4ecca3]/5 rounded-lg transition-colors duration-300">
              <Users className="w-8 h-8 text-[#4ecca3] mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-3xl font-bold text-[#4ecca3] mb-1">90%</div>
              <p className="text-gray-600 text-sm">User Satisfaction</p>
            </div>
            <div className="group text-center p-4 hover:bg-[#4ecca3]/5 rounded-lg transition-colors duration-300">
              <LineChart className="w-8 h-8 text-[#4ecca3] mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-3xl font-bold text-[#4ecca3] mb-1">40%</div>
              <p className="text-gray-600 text-sm">Efficiency Gain</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;