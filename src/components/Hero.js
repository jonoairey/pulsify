// src/components/Hero.js
import React from 'react';
import { Brain, Activity, ArrowRight, Zap } from 'lucide-react';
import BackgroundPattern from './svg/BackgroundPattern';
import FloatingElements from './decorative/FloatingElements';
import StatsCounter from './stats/StatsCounter';

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Background with Pattern */}
      <div className="absolute inset-0 bg-[#4ecca3]">
        <BackgroundPattern />
        <FloatingElements />
      </div>
      
      {/* Hero Content */}
      <div className="relative w-full">
        <div className="max-w-7xl mx-auto py-24 px-4">
          {/* Floating Icons */}
          <div className="absolute top-20 left-10 animate-float">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 transform hover:scale-110 transition-transform cursor-pointer">
              <Activity className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="absolute top-40 right-10 animate-float delay-1000">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 transform hover:scale-110 transition-transform cursor-pointer">
              <Brain className="w-8 h-8 text-white" />
            </div>
          </div>

          <div className="text-center animate-slide-up">
            {/* Stats Banner */}
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8 transform hover:scale-105 transition-transform">
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-semibold">Trusted by 500+ enterprises worldwide</span>
              </div>
            </div>

            {/* Main Content */}
            <h1 className="text-6xl font-bold mb-8 text-white leading-tight">
              Transform Physical Assets into
              <br />
              <span className="relative inline-block">
                Digital Intelligence
                <svg 
                  className="absolute -bottom-2 left-0 w-full" 
                  viewBox="0 0 300 12" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M1 9C71.3333 3 141.667 1 212 3C282.333 5 352.667 9 423 11" 
                    stroke="white" 
                    strokeWidth="3" 
                    strokeLinecap="round"
                    className="animate-draw"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed">
              Create a digital ecosystem where every asset tells its story. Track, analyze, 
              and optimize in real-time with AI-powered insights.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <button className="group bg-white text-[#4ecca3] px-8 py-4 rounded-lg font-medium hover:bg-gray-50 text-lg flex items-center justify-center transform hover:translate-y-[-2px] transition-all">
                Start Your Transformation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 text-lg transform hover:translate-y-[-2px] transition-all">
                Watch Demo
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transform hover:-translate-y-2 transition-all cursor-pointer">
                <StatsCounter end={40} suffix="%" />
                <p className="text-white/80">Cost Reduction</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transform hover:-translate-y-2 transition-all cursor-pointer">
                <StatsCounter end={99.9} suffix="%" />
                <p className="text-white/80">Tracking Accuracy</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transform hover:-translate-y-2 transition-all cursor-pointer">
                <div className="text-4xl font-bold text-black mb-2">3-6mo</div>
                <p className="text-white/80">Time to ROI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;