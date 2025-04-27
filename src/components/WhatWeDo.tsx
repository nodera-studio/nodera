import React from 'react';
import Lottie from 'lottie-react';
import designAnimation from '../animations/design-flow.json';
import devAnimation from '../animations/dev-performance.json';

const WhatWeDo = () => {
  return (
    <section className="bg-white py-10 px-4 sm:px-10 md:py-20 text-center border-b border-[#F1F1F1]">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-comfortaa font-bold text-5xl md:text-7xl gradient-text mb-10">
          What We Do
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-16 mb-12 py-8">
          {/* Design/UX Animation */}
          <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 group">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#F2E6FF] to-[#E5DEFF] opacity-80"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Lottie
                animationData={designAnimation}
                loop={true}
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48"
              />
            </div>
            <div className="absolute bottom-6 right-6 w-3 h-3 rounded-full bg-[#D1A2FF] opacity-40"></div>
          </div>

          {/* Development/Performance Animation */}
          <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 group">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#E8F4FF] to-[#D3E4FD] opacity-80"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Lottie
                animationData={devAnimation}
                loop={true}
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48"
              />
            </div>
            <div className="absolute bottom-6 right-6 w-3 h-3 rounded-full bg-[#007AFF] opacity-40"></div>
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
