
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <div className="bg-white py-16 md:py-20 lg:py-24 px-6 text-center border-b border-[#F1F1F1] relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-3xl mx-auto relative z-10"
      >
        <motion.div 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-baloo font-medium leading-tight mb-10"
        >
          You've got a vision. We've got the code.<br />
          Let's build something remarkable.
        </motion.div>
        
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <Button 
            asChild
            size="lg" 
            className="bg-black hover:bg-zinc-800 text-white rounded-xl font-baloo font-semibold text-lg px-8 py-6 relative z-10"
          >
            <a href="#contact">
              Get in Touch
            </a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Shadow Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
        <div className="text-[20vw] font-comfortaa font-bold text-[#22222208] whitespace-nowrap">
          Nodera
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
