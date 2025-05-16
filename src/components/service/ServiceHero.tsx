
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Code, Layers, MonitorSmartphone } from 'lucide-react';

const ServiceHero: React.FC = () => {
  return (
    <section className="h-screen w-full overflow-hidden relative flex flex-col justify-center items-center">
      {/* Gradient Background - More blue on left, more white on bottom */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/50 via-indigo-500/30 to-white/40 backdrop-blur-[30px] z-0"></div>
      
      {/* Content Container - Repositioned to allow space for browser window at bottom */}
      <div className="container max-w-5xl mx-auto px-6 z-10 text-center" style={{ marginTop: "-15vh" }}>
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
        
        {/* CTA Button - Moved above the browser window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-16"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <Button 
            size="lg"
            className="bg-black hover:bg-zinc-800 text-white rounded-full font-baloo font-semibold text-lg px-8 py-4"
          >
            Start Your Project
          </Button>
        </motion.div>
      </div>
      
      {/* Browser Window UI Element - Positioned at bottom of viewport */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl z-10"
        style={{ maxHeight: "60vh", marginBottom: "-40%" }}
      >
        {/* Browser Window Container */}
        <div className="relative w-full rounded-t-2xl overflow-hidden shadow-2xl border border-white/20">
          {/* Browser Top Bar */}
          <div className="h-10 bg-gray-100 flex items-center px-4">
            {/* Traffic Light Dots */}
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            
            {/* URL Bar */}
            <div className="mx-auto bg-white rounded-full h-6 w-64 border border-gray-200"></div>
            
            {/* Placeholder for browser buttons */}
            <div className="w-16"></div>
          </div>
          
          {/* Browser Content Area */}
          <div className="bg-white/95 h-[70vh] pt-8 px-4">
            {/* Animated web development content */}
            <motion.div 
              className="flex justify-around items-start"
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Web Services Icon Elements */}
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center"
              >
                <div className="w-20 h-20 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shadow-lg">
                  <Code className="w-10 h-10 text-blue-600" />
                </div>
                <p className="text-gray-700 font-medium mt-3">Development</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="w-20 h-20 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shadow-lg">
                  <Layers className="w-10 h-10 text-purple-600" />
                </div>
                <p className="text-gray-700 font-medium mt-3">Design</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="w-20 h-20 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shadow-lg">
                  <MonitorSmartphone className="w-10 h-10 text-indigo-600" />
                </div>
                <p className="text-gray-700 font-medium mt-3">Responsive</p>
              </motion.div>
            </motion.div>
            
            {/* Progress bar visualization */}
            <motion.div 
              className="mt-16 mx-auto max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-blue-500 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: ["0%", "100%"] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
              
              {/* Code placeholder elements */}
              <div className="mt-8 grid grid-cols-3 gap-6">
                <motion.div 
                  className="h-4 bg-gray-100 rounded"
                  animate={{ opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                ></motion.div>
                <motion.div 
                  className="h-4 bg-gray-100 rounded col-span-2"
                  animate={{ opacity: [0.6, 0.9, 0.6] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                ></motion.div>
                <motion.div 
                  className="h-4 bg-gray-100 rounded col-span-2"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
                ></motion.div>
                <motion.div 
                  className="h-4 bg-gray-100 rounded"
                  animate={{ opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ServiceHero;
