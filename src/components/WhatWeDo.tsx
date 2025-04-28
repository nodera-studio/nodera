import React, { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '../lib/utils';
import styles from './WhatWeDo.module.css';

const WhatWeDo = () => {
  const shouldReduceMotion = useReducedMotion();
  const sectionTitleRef = useRef<HTMLHeadingElement>(null);

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
      
  // Intersection Observer for section title animation
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    
    if (sectionTitleRef.current) {
      observer.observe(sectionTitleRef.current);
    }
    
    return () => {
      if (sectionTitleRef.current) {
        observer.unobserve(sectionTitleRef.current);
      }
    };
  }, []);

  return (
    <section className="bg-white py-10 px-4 sm:px-10 md:py-20 text-center">
      <div className="max-w-7xl mx-auto">
        <h2 ref={sectionTitleRef} className="text-black mb-10 section-title">
          What We <span className="gradient-word">Do</span>
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8">
          {/* Dynamic HTML Streaming */}
          <motion.div
            className={cn("relative w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 group", styles.cardHoverAnimate)}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#007AFF] to-[#D1A2FF] opacity-80" />
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
            className={cn("relative w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 group", styles.cardHoverAnimate)}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tl from-[#007AFF] to-[#D1A2FF] opacity-80" />
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className={styles.whatWeDoCard}>
            <h3 className="mb-5">The Art of User Experience</h3>
            <p className="text-[#555]">
              Powerful code that anticipates challenges. Scalable architecture paired with intuitive interfaces transforms visions into digital reality, no compromise needed.
            </p>
          </div>
          
          <div className={styles.whatWeDoCard}>
            <h3 className="mb-5">Engineered for Performance</h3>
            <p className="text-[#555]">
              Digital experiences that perform as beautifully as they look. Every element serves a purpose while engaging visitors and elevating brands. Simple outside, sophisticated inside.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
