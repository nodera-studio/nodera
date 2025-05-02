
import React, { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '../lib/utils';
import styles from './WhatWeDo.module.css';
import WhatWeDoTitle from './whatwedo/WhatWeDoTitle';

const WhatWeDo = () => {
  const shouldReduceMotion = useReducedMotion();

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
    <div className="bg-white">
      <WhatWeDoTitle />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-3/5">
            <div className="space-y-12 md:space-y-16">
              <div className={styles.contentBlock}>
                <h3 className="text-xl md:text-2xl font-medium mb-4">The Art of User Experience</h3>
                <p className="text-gray-700 leading-relaxed">
                  Powerful code that anticipates challenges. Scalable architecture paired with intuitive interfaces transforms visions into digital reality, no compromise needed.
                </p>
              </div>
              
              <div className={styles.contentBlock}>
                <h3 className="text-xl md:text-2xl font-medium mb-4">Engineered for Performance</h3>
                <p className="text-gray-700 leading-relaxed">
                  Digital experiences that perform as beautifully as they look. Every element serves a purpose while engaging visitors and elevating brands. Simple outside, sophisticated inside.
                </p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-2/5 flex flex-col space-y-8">
            <div className={styles.visualContainer}>
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
                      className={cn(styles.contentLine, styles.contentShort)}
                      animate={{
                        opacity: [0.5, 1, 0.5],
                        backgroundColor: ['#E0E0E0', '#F0F0F0', '#E0E0E0'],
                        transition: {
                          repeat: Infinity,
                          repeatType: "mirror" as const,
                          duration: 2,
                          ease: "easeInOut"
                        }
                      }}
                    />
                    <motion.div 
                      className={cn(styles.contentLine)}
                      animate={{
                        opacity: [0.5, 1, 0.5],
                        backgroundColor: ['#E8E8E8', '#F5F5F5', '#E8E8E8'],
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
                          className={cn(styles.contentBox)}
                          animate={{
                            backgroundColor: ['#D8D8FF', '#E5E5FF', '#D8D8FF'],
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
            
            <div className={styles.visualContainer}>
              <div className={styles.metricsContainer}>
                {['Speed Index', 'Performance', 'Accessibility', 'Best Practices'].map((metric, index) => (
                  <div key={metric} className={styles.metricBar}>
                    <motion.div 
                      className={styles.metricFill}
                      initial={{ scaleX: 0.4 }}
                      animate={metricsAnimation}
                      style={{ originX: 0 }}
                      onUpdate={(latest) => {
                        const metricValues = document.querySelectorAll(`.${styles.metricValue}`);
                        if (metricValues && metricValues[index]) {
                          const metricValue = metricValues[index] as HTMLElement;
                          const scaleX = latest.scaleX || 0.4;
                          
                          const rightPosition = 12;
                          const valueWidth = metricValue.offsetWidth;
                          const barWidth = metricValue.parentElement?.offsetWidth || 0;
                          
                          const gradientEdge = barWidth * (scaleX as number);
                          const valueStart = barWidth - rightPosition - valueWidth;
                          
                          if (gradientEdge > valueStart) {
                            metricValue.style.color = 'white';
                          } else {
                            metricValue.style.color = 'black';
                          }
                        }
                      }}
                    />
                    <span className={styles.metricLabel}>{metric}</span>
                    <span className={styles.metricValue}>
                      {['98', '96', '100', '94'][index]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
