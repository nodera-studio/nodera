
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '../lib/utils';
import styles from './WhatWeDo.module.css';

const WhatWeDo = () => {
  const shouldReduceMotion = useReducedMotion();

  // Animation configurations
  const cardAnimation = shouldReduceMotion 
    ? {} 
    : {
        y: [-2, 2, -2],
        transition: { 
          repeat: Infinity, 
          repeatType: "mirror" as const,
          duration: 4,
          ease: "easeInOut"
        }
      };

  const lineAnimation = shouldReduceMotion
    ? {}
    : {
        opacity: [0.5, 1, 0.5],
        transition: {
          repeat: Infinity,
          repeatType: "mirror" as const,
          duration: 2,
          ease: "easeInOut"
        }
      };

  return (
    <section className="bg-white py-10 px-4 sm:px-10 md:py-20 text-center border-b border-[#F1F1F1]">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-comfortaa font-bold text-5xl md:text-7xl gradient-text mb-10">
          What We Do
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-16 mb-12 py-8">
          {/* Built-in Optimizations */}
          <motion.div
            className="relative w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 group"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 rounded-3xl bg-[#F9F9F9] opacity-80 shadow-xl" />
            <div className={styles.designContainer}>
              {['Top', 'Middle', 'Bottom'].map((position) => (
                <motion.div
                  key={position}
                  className={cn(
                    styles.optimizationCard,
                    styles[`card${position}`]
                  )}
                  animate={cardAnimation}
                >
                  <span className={styles.pixelText}>
                    {position === 'Top' ? 'ORIGINAL' : 
                     position === 'Middle' ? '1440PX' : '375PX'}
                  </span>
                  <div className={styles.dotPattern} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Dynamic HTML Streaming */}
          <motion.div
            className="relative w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 group"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 rounded-3xl bg-[#F9F9F9] opacity-80 shadow-xl" />
            <div className={styles.devContainer}>
              <motion.div className={styles.browserWindow}>
                <div className={styles.browserHeader}>
                  <div className={styles.browserDots}>
                    <div className={styles.dot} />
                    <div className={styles.dot} />
                    <div className={styles.dot} />
                  </div>
                </div>
                <div className={styles.browserContent}>
                  <div className={styles.contentPlaceholder}>
                    <motion.div 
                      className={cn(styles.contentLine, styles.contentShort)}
                      animate={lineAnimation}
                    />
                    <motion.div 
                      className={styles.contentLine}
                      animate={lineAnimation}
                    />
                    <div className={styles.contentBoxes}>
                      <motion.div 
                        className={styles.contentBox}
                        animate={lineAnimation}
                      />
                      <motion.div 
                        className={styles.contentBox}
                        animate={lineAnimation}
                      />
                      <motion.div 
                        className={styles.contentBox}
                        animate={lineAnimation}
                      />
                      <motion.div 
                        className={styles.contentBox}
                        animate={lineAnimation}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
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

