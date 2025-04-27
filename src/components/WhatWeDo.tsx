import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '../lib/utils';
import styles from './WhatWeDo.module.css';

const WhatWeDo = () => {
  const shouldReduceMotion = useReducedMotion();

  // Animation configurations
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

  const metricsAnimation = shouldReduceMotion
    ? {}
    : {
        scaleX: [0.4, 1],
        transition: {
          repeat: Infinity,
          repeatType: "reverse" as const,
          duration: 4,
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
          {/* Dynamic HTML Streaming */}
          <motion.div
            className="relative w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 group"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#007AFF] to-[#D1A2FF] opacity-80 shadow-xl" />
            <div className={styles.devContainer}>
              <motion.div className={styles.browserWindow}>
                <div className={styles.browserHeader}>
                  <div className={styles.browserDots}>
                    <div className={styles.dot} style={{ backgroundColor: '#FF6159' }} />
                    <div className={styles.dot} style={{ backgroundColor: '#FFBD2E' }} />
                    <div className={styles.dot} style={{ backgroundColor: '#27C93F' }} />
                  </div>
                </div>
                <div className={styles.browserContent}>
                  <div className={styles.contentPlaceholder}>
                    <motion.div 
                      className={cn(styles.contentLine, styles.contentShort, 'text-white')}
                      animate={{
                        opacity: [0.5, 1, 0.5],
                        backgroundColor: ['#6E59A5', '#9b87f5', '#6E59A5'],
                        transition: {
                          repeat: Infinity,
                          repeatType: "mirror" as const,
                          duration: 2,
                          ease: "easeInOut"
                        }
                      }}
                    />
                    <motion.div 
                      className={cn(styles.contentLine, 'text-white')}
                      animate={{
                        opacity: [0.5, 1, 0.5],
                        backgroundColor: ['#7E69AB', '#D6BCFA', '#7E69AB'],
                        transition: {
                          repeat: Infinity,
                          repeatType: "mirror" as const,
                          duration: 2,
                          ease: "easeInOut"
                        }
                      }}
                    />
                    <div className={styles.contentBoxes}>
                      {[1, 2, 3, 4].map((_, index) => (
                        <motion.div 
                          key={index}
                          className={cn(styles.contentBox, 'text-white')}
                          animate={{
                            backgroundColor: ['#9b87f5', '#D1A2FF', '#9b87f5'],
                            transition: {
                              repeat: Infinity,
                              repeatType: "mirror" as const,
                              duration: 2,
                              ease: "easeInOut"
                            }
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Performance Metrics */}
          <motion.div
            className="relative w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 group"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#D1A2FF] to-[#007AFF] opacity-80 shadow-xl" />
            <div className={styles.devContainer}>
              <div className={styles.metricsContainer}>
                {['Speed Index', 'Performance', 'Accessibility', 'Best Practices'].map((metric, index) => (
                  <div key={metric} className={styles.metricBar}>
                    <motion.div 
                      className={styles.metricFill}
                      initial={{ scaleX: 0.4 }}
                      animate={metricsAnimation}
                      style={{ originX: 0 }}
                      onUpdate={(latest) => {
                        // This function runs on every animation frame
                        // Get all metric value elements
                        const metricValues = document.querySelectorAll(`.${styles.metricValue}`);
                        if (metricValues && metricValues[index]) {
                          const metricValue = metricValues[index] as HTMLElement;
                          const scaleX = latest.scaleX || 0.4;
                          
                          // Calculate the right position (12px from right edge)
                          const rightPosition = 12;
                          const valueWidth = metricValue.offsetWidth;
                          const barWidth = metricValue.parentElement?.offsetWidth || 0;
                          
                          // Calculate where the edge of the gradient is
                          const gradientEdge = barWidth * (scaleX as number);
                          const valueStart = barWidth - rightPosition - valueWidth;
                          
                          // If the gradient has reached the value, make text white, otherwise black
                          if (gradientEdge > valueStart) {
                            metricValue.style.color = 'white';
                          } else {
                            metricValue.style.color = 'black';
                          }
                        }
                      }}
                    />
                    <span className={cn(styles.metricLabel, 'text-white')}>{metric}</span>
                    <span className={styles.metricValue}>
                      {['98', '96', '100', '94'][index]}
                    </span>
                  </div>
                ))}
              </div>
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
