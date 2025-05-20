
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const ServiceHero: React.FC = () => {
  return (
    <section className="h-screen w-full overflow-hidden relative flex flex-col justify-center items-center">
      {/* Gradient Background - More blue on left, more white on bottom */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/50 via-indigo-500/30 to-white/40 backdrop-blur-[30px] z-0"></div>
      
      {/* Content Container - Centered vertically */}
      <div className="container max-w-5xl mx-auto px-6 z-10 text-center relative">
        {/* Stagger animations for text elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-4"
        >
          <h2 className="text-white/90 text-lg md:text-xl font-baloo tracking-wide">
            Building with Nodera
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-comfortaa font-bold tracking-tight leading-tight">
            Digital experiences, elevated.
          </h1>
        </motion.div>
        
        {/* CTA Button - Directly under the heading text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-16"
        >
          <Button 
            size="lg"
            className="bg-black hover:bg-zinc-800 text-white rounded-full font-baloo font-semibold text-lg px-8 py-3"
          >
            Start Your Project
          </Button>
        </motion.div>
      </div>
      
      {/* Browser Window component has been removed */}
    </section>
  );
};

export default ServiceHero;
