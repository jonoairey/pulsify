// src/components/sections/FeaturesGrid.js
import React from 'react';
import { 
  Store,  // Changed from ShoppingBag
  CalendarDays,  // Changed from Calendar
  Building2,
  Factory,
  Truck,
  BarChart3  // Changed from Activity
} from 'lucide-react';
import FeatureCard from '../cards/FeatureCard';

const features = [
  {
    icon: Store,
    title: "Retail Solutions",
    description: "Transform your retail operations with real-time inventory tracking and smart analytics.",
    image: "/api/placeholder/600/400?text=Retail+Solutions"
  },
  {
    icon: CalendarDays,
    title: "Event Management",
    description: "Create immersive event experiences with digital engagement and crowd flow optimization.",
    image: "/api/placeholder/600/400?text=Event+Management"
  },
  {
    icon: Building2,
    title: "Healthcare",
    description: "Optimize healthcare asset management and improve patient care efficiency.",
    image: "/api/placeholder/600/400?text=Healthcare"
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Streamline production processes with intelligent asset tracking and predictive maintenance.",
    image: "/api/placeholder/600/400?text=Manufacturing"
  },
  {
    icon: Truck,
    title: "Logistics",
    description: "End-to-end visibility and control across your entire supply chain network.",
    image: "/api/placeholder/600/400?text=Logistics"
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Turn data into actionable insights with AI-powered analytics and reporting.",
    image: "/api/placeholder/600/400?text=Analytics"
  }
];

const FeaturesGrid = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Industry Solutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how our RFID solutions transform operations across different industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              image={feature.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;