import React from 'react';

const WhatWeDo = () => {
  return (
    <section className="bg-white py-10 px-4 sm:px-10 md:py-20 text-center border-b border-[#F1F1F1]">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-comfortaa font-bold text-5xl md:text-7xl gradient-text mb-10">
          What We Do
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-16 mb-12 py-8">
          {/* Design/UX Icon */}
          <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64">
            {/* Main container with gradient background */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D1A2FF] to-[#9b87f5] opacity-10"></div>
            
            {/* Wireframe elements */}
            <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-lg border-2 border-[#D1A2FF] opacity-80"></div>
            <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 rounded-lg bg-[#D1A2FF] opacity-20"></div>
            
            {/* UI Elements */}
            <div className="absolute top-[30%] left-[20%] w-3/5 h-1 bg-[#9b87f5] opacity-40"></div>
            <div className="absolute top-[40%] left-[20%] w-2/5 h-1 bg-[#9b87f5] opacity-60"></div>
            <div className="absolute top-[50%] left-[20%] w-4/5 h-1 bg-[#9b87f5] opacity-30"></div>
            
            {/* Interactive cursor element */}
            <div className="absolute bottom-1/4 right-1/4 w-3 h-3 rounded-full bg-[#D1A2FF] opacity-90"></div>
            <div className="absolute bottom-1/4 right-1/4 w-6 h-6 rounded-full border border-[#D1A2FF] opacity-40"></div>
            
            {/* Connection lines */}
            <div className="absolute top-1/2 left-1/4 w-1/2 h-[1px] bg-[#9b87f5] opacity-30 transform rotate-45"></div>
            <div className="absolute top-1/2 right-1/4 w-1/2 h-[1px] bg-[#9b87f5] opacity-30 transform -rotate-45"></div>
          </div>

          {/* Development/Performance Icon */}
          <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64">
            {/* Main container with gradient background */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#007AFF] to-[#33C3F0] opacity-10"></div>
            
            {/* Circuit board patterns */}
            <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-[#007AFF] opacity-40"></div>
              <div className="absolute top-0 left-0 h-full w-[2px] bg-[#007AFF] opacity-40"></div>
              <div className="absolute bottom-0 right-0 w-full h-[2px] bg-[#007AFF] opacity-40"></div>
              <div className="absolute top-0 right-0 h-full w-[2px] bg-[#007AFF] opacity-40"></div>
            </div>
            
            {/* Code brackets */}
            <div className="absolute top-1/3 left-[30%] text-[#33C3F0] opacity-70 transform -rotate-12">
              <div className="w-1 h-8 bg-[#33C3F0] rounded-full transform rotate-45"></div>
              <div className="w-1 h-8 bg-[#33C3F0] rounded-full transform -rotate-45 translate-y-[-2px]"></div>
            </div>
            
            {/* Performance indicators */}
            <div className="absolute bottom-1/3 right-[30%] flex space-x-1">
              <div className="w-1 h-3 bg-[#007AFF] opacity-40 rounded-full"></div>
              <div className="w-1 h-4 bg-[#007AFF] opacity-60 rounded-full"></div>
              <div className="w-1 h-5 bg-[#007AFF] opacity-80 rounded-full"></div>
            </div>
            
            {/* Connection nodes */}
            <div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-[#33C3F0] opacity-90"></div>
            <div className="absolute bottom-1/4 left-1/4 w-2 h-2 rounded-full bg-[#33C3F0] opacity-90"></div>
            <div className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full border-2 border-[#007AFF] opacity-60"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-[#F9F9F9] p-8 rounded-2xl text-center shadow-sm hover:-translate-y-1 transition-transform duration-200">
            <h3 className="font-baloo font-medium text-2xl sm:text-3xl md:text-4xl mb-5">The Art of User Experience</h3>
            <p className="font-baloo font-medium text-lg sm:text-xl md:text-2xl text-[#555]">
              Powerful code that anticipates challenges. Scalable architecture paired with intuitive interfaces transforms visions into digital reality, no compromise needed.
            </p>
          </div>
          
          <div className="bg-[#F9F9F9] p-8 rounded-2xl text-center shadow-sm hover:-translate-y-1 transition-transform duration-200">
            <h3 className="font-baloo font-medium text-2xl sm:text-3xl md:text-4xl mb-5">Engineered for Performance</h3>
            <p className="font-baloo font-medium text-lg sm:text-xl md:text-2xl text-[#555]">
              Digital experiences that perform as beautifully as they look. Every element serves a purpose while engaging visitors and elevating brands. Simple outside, sophisticated inside.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
