
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Code, Layers, MonitorSmartphone } from 'lucide-react';

const ServiceHero: React.FC = () => {
  return (
    <section className="h-screen w-full overflow-hidden relative flex flex-col justify-center items-center">
      {/* Gradient Background - More blue on left, more white on bottom */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/40 via-indigo-500/30 to-white/25 backdrop-blur-[30px] z-0"></div>
      
      {/* Content Container */}
      <div className="container max-w-5xl mx-auto px-6 z-10 text-center">
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
          className="mb-12 md:mb-16"
        >
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-comfortaa font-bold tracking-tight leading-tight">
            Digital experiences, elevated.
          </h1>
        </motion.div>
        
        {/* Web Services Interactive UI Element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-12 md:mb-16 flex justify-center"
        >
          <div className="relative w-full max-w-md aspect-[16/9]">
            {/* Main window container */}
            <motion.div 
              className="absolute inset-0 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-xl overflow-hidden"
              whileHover={{ boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
              transition={{ duration: 0.5 }}
            >
              {/* Browser top bar */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-white/5 border-b border-white/10 flex items-center px-3">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                </div>
                <div className="mx-auto bg-white/10 rounded-full h-5 w-32"></div>
              </div>
              
              {/* Animated web dev icons */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-full">
                <motion.div 
                  className="flex space-x-12 items-center"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-14 h-14 rounded-lg bg-white/15 border border-white/20 flex items-center justify-center">
                      <Code className="w-8 h-8 text-white/80" />
                    </div>
                    <p className="text-white/70 text-xs mt-2">Development</p>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-14 h-14 rounded-lg bg-white/15 border border-white/20 flex items-center justify-center">
                      <Layers className="w-8 h-8 text-white/80" />
                    </div>
                    <p className="text-white/70 text-xs mt-2">Design</p>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-14 h-14 rounded-lg bg-white/15 border border-white/20 flex items-center justify-center">
                      <MonitorSmartphone className="w-8 h-8 text-white/80" />
                    </div>
                    <p className="text-white/70 text-xs mt-2">Responsive</p>
                  </motion.div>
                </motion.div>
              </div>
              
              {/* Progress bar at bottom */}
              <motion.div 
                className="absolute bottom-4 left-4 right-4 h-2 bg-white/10 rounded-full overflow-hidden"
                whileHover={{ scaleY: 1.5 }}
              >
                <motion.div 
                  className="h-full bg-white/40 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: ["0%", "100%", "0%"] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* CTA Button - Now pill shaped */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <Button 
            size="lg"
            className="bg-black hover:bg-zinc-800 text-white rounded-full font-baloo font-semibold text-lg px-8 py-6"
          >
            Start Your Project
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHero;
