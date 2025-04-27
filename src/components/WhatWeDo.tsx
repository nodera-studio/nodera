
import React from 'react';
import { motion } from 'framer-motion';
import styles from './WhatWeDo.module.css';

const WhatWeDo = () => {
  return (
    <section className="bg-white py-10 px-4 sm:px-10 md:py-20 text-center border-b border-[#F1F1F1]">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-comfortaa font-bold text-5xl md:text-7xl gradient-text mb-10">
          What We Do
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-16 mb-12 py-8">
          {/* Design/UX Animation */}
          <motion.div
            className="relative w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#F2E6FF] to-[#E5DEFF] opacity-80 shadow-xl" />
            <div className={styles.designContainer}>
              <motion.div 
                className={`${styles.designPanel} ${styles.designPanel1}`}
                whileHover={{ rotate: -5 }}
              />
              <motion.div 
                className={`${styles.designPanel} ${styles.designPanel2}`}
                whileHover={{ rotate: 5 }}
              />
              <motion.div 
                className={`${styles.designPanel} ${styles.designPanel3}`}
                whileHover={{ scale: 1.1 }}
              />
            </div>
            <div className={`${styles.indicator} ${styles.designIndicator} animate-pulse`} />
          </motion.div>

          {/* Development/Performance Animation */}
          <motion.div
            className="relative w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#E8F4FF] to-[#D3E4FD] opacity-80 shadow-xl" />
            <div className={styles.devContainer}>
              {[1, 2, 3, 4, 5].map((i) => (
                <motion.div
                  key={i}
                  className={`${styles.devBar} ${styles[`devBar${i}`]}`}
                  whileHover={{ 
                    scaleX: 1.1,
                    backgroundColor: '#007AFF',
                    transition: { delay: i * 0.1 }
                  }}
                />
              ))}
            </div>
            <div className={`${styles.indicator} ${styles.devIndicator} animate-pulse`} />
          </motion.div>
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
