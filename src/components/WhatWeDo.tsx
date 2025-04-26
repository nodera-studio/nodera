
import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

const WhatWeDo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const shouldReduceMotion = useReducedMotion();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] }
    }
  };

  return (
    <section className="bg-white py-10 px-4 sm:px-10 md:py-20 text-center border-b border-[#F1F1F1]">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <motion.h2 
          variants={itemVariants}
          className="font-comfortaa font-bold text-5xl md:text-7xl gradient-text mb-10"
        >
          What We Do
        </motion.h2>
        
        {/* 2D UI Elements Section */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-16 mb-12 py-8">
          {/* UX Element - Abstract interface layers */}
          <motion.div 
            className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64"
            variants={itemVariants}
            whileHover={shouldReduceMotion ? {} : { 
              scale: 1.03,
              transition: { duration: 0.2, ease: "easeOut" }
            }}
          >
            {/* Background layers for UX element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 rounded-2xl bg-gradient-to-br from-[#D1A2FF] to-[#9b87f5] opacity-30"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-12 w-4/5 h-4/5 rounded-2xl bg-gradient-to-br from-[#D1A2FF] to-[#9b87f5] opacity-50"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-6 w-4/5 h-4/5 rounded-2xl bg-gradient-to-br from-[#D1A2FF] to-[#9b87f5] opacity-70"></div>
            
            {/* UX interface elements */}
            <div className="absolute top-1/4 left-1/4 w-1/2 h-1/3 rounded-lg bg-white opacity-90"></div>
            <div className="absolute top-1/3 left-1/3 w-1/3 h-1/4 rounded-md bg-[#D1A2FF] opacity-80"></div>
            <div className="absolute bottom-1/4 right-1/4 w-2/5 h-1/5 rounded-lg bg-white opacity-90"></div>
            
            {/* Connection lines */}
            <div className="absolute top-2/5 left-1/2 w-[1px] h-1/5 bg-[#9b87f5]"></div>
            <div className="absolute top-1/2 left-2/5 w-1/5 h-[1px] bg-[#9b87f5]"></div>
          </motion.div>

          {/* Performance Element - Abstract speedometer/flow visualization */}
          <motion.div 
            className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64"
            variants={itemVariants}
            whileHover={shouldReduceMotion ? {} : { 
              scale: 1.03,
              transition: { duration: 0.2, ease: "easeOut" }
            }}
          >
            {/* Main circle background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 rounded-full bg-gradient-to-br from-[#007AFF] to-[#33C3F0] opacity-20"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full border-4 border-[#007AFF] opacity-40"></div>
            
            {/* Speed indicators */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 rounded-full bg-gradient-to-br from-[#007AFF] to-[#33C3F0] opacity-60"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 rounded-full bg-white"></div>
            
            {/* Speed arrows/lines */}
            <div className="absolute top-1/2 left-1/2 -translate-x-0 -translate-y-1/2 w-2/5 h-[3px] bg-[#007AFF] origin-left rotate-45"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-0 -translate-y-1/2 w-1/5 h-[3px] bg-[#33C3F0] origin-left rotate-[190deg]"></div>
            
            {/* Speed particles */}
            <div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-[#007AFF]"></div>
            <div className="absolute bottom-1/4 right-1/3 w-3 h-3 rounded-full bg-[#33C3F0]"></div>
            <div className="absolute top-1/3 right-1/5 w-1 h-1 rounded-full bg-[#007AFF]"></div>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <motion.div 
            variants={itemVariants}
            className="bg-[#F9F9F9] p-8 rounded-2xl text-center shadow-sm"
            whileHover={shouldReduceMotion ? {} : { y: -5, transition: { duration: 0.2 } }}
          >
            <h3 className="font-baloo font-medium text-2xl sm:text-3xl md:text-4xl mb-5">The Art of User Experience</h3>
            <p className="font-baloo font-medium text-lg sm:text-xl md:text-2xl text-[#555]">
              Powerful code that anticipates challenges. Scalable architecture paired with intuitive interfaces transforms visions into digital reality, no compromise needed.
            </p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="bg-[#F9F9F9] p-8 rounded-2xl text-center shadow-sm"
            whileHover={shouldReduceMotion ? {} : { y: -5, transition: { duration: 0.2 } }}
          >
            <h3 className="font-baloo font-medium text-2xl sm:text-3xl md:text-4xl mb-5">Engineered for Performance</h3>
            <p className="font-baloo font-medium text-lg sm:text-xl md:text-2xl text-[#555]">
              Digital experiences that perform as beautifully as they look. Every element serves a purpose while engaging visitors and elevating brands. Simple outside, sophisticated inside.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default WhatWeDo;
