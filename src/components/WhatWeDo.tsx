
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '../lib/utils';
import styles from './WhatWeDo.module.css';

const WhatWeDo = () => {
  const shouldReduceMotion = useReducedMotion();

  // Animation configurations
  const periodicAnimation = shouldReduceMotion 
    ? {} 
    : {
        opacity: [0.9, 1, 0.9],
        transition: { 
          repeat: Infinity, 
          repeatType: 'reverse', 
          duration: 2,
          repeatDelay: 3
        }
      };

  const hoverAnimation = shouldReduceMotion
    ? { scale: 1.01 }
    : { scale: 1.05, y: -5 };

  const hoverTransition = { duration: 0.3 };

  return (
    <section className="bg-white py-10 px-4 sm:px-10 md:py-20 text-center border-b border-[#F1F1F1]">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-comfortaa font-bold text-5xl md:text-7xl gradient-text mb-10">
          What We Do
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-16 mb-12 py-8">
          {/* Built-in Optimizations (Design) */}
          <motion.div
            className="relative w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 group"
            whileHover={hoverAnimation}
            transition={hoverTransition}
          >
            <div className="absolute inset-0 rounded-3xl bg-[#F9F9F9] opacity-80 shadow-xl" />
            <div className={styles.designContainer}>
              <motion.div className={styles.networkContainer}>
                <motion.div 
                  className={cn(styles.optimizationRect, styles.rectTop)} 
                  animate={periodicAnimation}
                />
                <motion.div 
                  className={cn(styles.optimizationRect, styles.rectMiddle)}
                  whileHover={{ rotate: 2 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.div 
                  className={cn(styles.optimizationRect, styles.rectBottom)}
                  whileHover={{ rotate: -2 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
              <div className={`${styles.indicator} ${styles.designIndicator} animate-pulse`} />
            </div>
          </motion.div>

          {/* React Server Components (Development) */}
          <motion.div
            className="relative w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 group"
            whileHover={hoverAnimation}
            transition={hoverTransition}
          >
            <div className="absolute inset-0 rounded-3xl bg-[#F9F9F9] opacity-80 shadow-xl" />
            <div className={styles.devContainer}>
              <motion.div className={styles.networkContainer}>
                {/* Connectors (drawn first to be behind nodes) */}
                <div className={`${styles.connector} ${styles.connector1}`} />
                <div className={`${styles.connector} ${styles.connector2}`} />
                <div className={`${styles.connector} ${styles.connector3}`} />
                <div className={`${styles.connector} ${styles.connector4}`} />
                
                {/* Nodes (drawn after connectors to be on top) */}
                <motion.div 
                  className={`${styles.node} ${styles.mainNode}`} 
                  animate={shouldReduceMotion ? {} : {
                    scale: [1, 1.05, 1],
                    transition: { 
                      repeat: Infinity, 
                      repeatType: 'reverse', 
                      duration: 2,
                      repeatDelay: 3
                    }
                  }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.div 
                  className={`${styles.node} ${styles.node1}`} 
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.15 }}
                />
                <motion.div 
                  className={`${styles.node} ${styles.node2}`}
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.15 }} 
                />
                <motion.div 
                  className={`${styles.node} ${styles.node3}`}
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.15 }} 
                />
                <motion.div 
                  className={`${styles.node} ${styles.node4}`}
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.15 }} 
                />
              </motion.div>
              <div className={`${styles.indicator} ${styles.devIndicator} animate-pulse`} />
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
