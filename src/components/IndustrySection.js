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
    <div className="industry-section">
      <h2>Industry Section</h2>
      {/* Add your industry section content here */}
    </div>
  );
};

export default IndustrySection;