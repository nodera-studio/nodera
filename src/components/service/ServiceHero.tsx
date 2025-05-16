
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const ServiceHero: React.FC = () => {
  return (
    <section className="h-screen w-full overflow-hidden relative flex flex-col justify-center items-center">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/80 via-indigo-500/80 to-purple-500/80 backdrop-blur-[50px] z-0"></div>
      
      {/* Content Container */}
      <div className="container max-w-5xl mx-auto px-6 z-10 text-center">
        {/* Stagger animations for text elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-4"
        >
          <h2 className="text-white/90 text-xl md:text-2xl font-medium tracking-wide">
            Building with Nodera
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Digital experiences, elevated.
          </h1>
        </motion.div>
        
        {/* Visual Element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-12 md:mb-16 flex justify-center"
        >
          <div className="relative w-full max-w-md aspect-[16/9]">
            {/* Abstract UI Elements */}
            <div className="absolute inset-0 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-xl"></div>
            
            {/* Browser-like top bar */}
            <div className="absolute top-3 left-3 flex space-x-1.5">
              <div className="w-3 h-3 rounded-full bg-white/30"></div>
              <div className="w-3 h-3 rounded-full bg-white/30"></div>
              <div className="w-3 h-3 rounded-full bg-white/30"></div>
            </div>
            
            {/* UI Element 1 - Card */}
            <div className="absolute top-10 left-6 w-2/3 h-16 rounded-lg bg-white/15 border border-white/20"></div>
            
            {/* UI Element 2 - Button */}
            <div className="absolute bottom-6 right-6 w-24 h-8 rounded-md bg-white/25 border border-white/20"></div>
            
            {/* UI Element 3 - Image Placeholder */}
            <div className="absolute top-1/3 right-8 w-16 h-16 rounded-lg bg-white/20 border border-white/20 flex items-center justify-center">
              <div className="w-8 h-6 border-2 border-white/40 rounded"></div>
            </div>
          </div>
        </motion.div>
        
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Button 
            size="lg"
            className="bg-white text-indigo-700 hover:bg-white/90 hover:text-indigo-800 rounded-full px-8 py-6 font-medium text-base shadow-lg"
          >
            Start Your Project
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHero;
