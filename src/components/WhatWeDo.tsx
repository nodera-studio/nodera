
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import WhatWeDoScene from './3d/WhatWeDoScene';

const WhatWeDo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] }
    }
  };

  return (
    <div className="bg-white py-10 px-4 sm:px-10 md:py-20 text-center border-b border-[#F1F1F1]">
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
        
        <WhatWeDoScene />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <motion.div 
            variants={itemVariants}
            className="bg-[#F9F9F9] p-8 rounded-2xl text-center"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <h3 className="font-baloo font-medium text-2xl sm:text-3xl md:text-4xl mb-5">The Art of User Experience</h3>
            <p className="font-baloo font-medium text-lg sm:text-xl md:text-2xl">
              Powerful code that anticipates challenges. Scalable architecture paired with intuitive interfaces transforms visions into digital reality, no compromise needed.
            </p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="bg-[#F9F9F9] p-8 rounded-2xl text-center"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <h3 className="font-baloo font-medium text-2xl sm:text-3xl md:text-4xl mb-5">Engineered for Performance</h3>
            <p className="font-baloo font-medium text-lg sm:text-xl md:text-2xl">
              Digital experiences that perform as beautifully as they look. Every element serves a purpose while engaging visitors and elevating brands. Simple outside, sophisticated inside.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default WhatWeDo;
