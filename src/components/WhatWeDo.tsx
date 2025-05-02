
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '../lib/utils';
import styles from './WhatWeDo.module.css';
import WhatWeDoTitle from './whatwedo/WhatWeDoTitle';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ArrowRight } from 'lucide-react';

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column - Content */}
          <div className="lg:col-span-6 space-y-16">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">The Art of User Experience</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Powerful code that anticipates challenges. Scalable architecture paired with intuitive interfaces transforms visions into digital reality, no compromise needed.
              </p>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full flex items-center">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Engineered for Performance</h3>
              <p className="text-gray-700 leading-relaxed">
                Digital experiences that perform as beautifully as they look. Every element serves a purpose while engaging visitors and elevating brands. Simple outside, sophisticated inside.
              </p>
            </div>
          </div>
          
          {/* Right Column - Visual Elements */}
          <div className="lg:col-span-6 space-y-10">
            {/* Browser UI Card */}
            <Card className={styles.visualContainer}>
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
                      animate={lineAnimation}
                    />
                    <motion.div 
                      className={styles.contentLine}
                      animate={lineAnimation}
                    />
                    <div className={styles.contentBoxes}>
                      {[1, 2, 3, 4].map((_, index) => (
                        <motion.div 
                          key={index}
                          className={styles.contentBox}
                          animate={{
                            backgroundColor: ['#D8D8FF', '#E5E5FF', '#D8D8FF'],
                            transition: {
                              repeat: Infinity,
                              repeatType: "mirror",
                              duration: 2,
                              ease: "easeInOut",
                              delay: index * 0.2
                            }
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </Card>
            
            {/* Metrics Card */}
            <Card className={styles.visualContainer}>
              <div className={styles.metricsContainer}>
                {[
                  { name: 'Speed Index', value: '98' },
                  { name: 'Performance', value: '96' },
                  { name: 'Accessibility', value: '100' },
                  { name: 'Best Practices', value: '94' }
                ].map((metric, index) => (
                  <div key={metric.name} className={styles.metricBar}>
                    <motion.div 
                      className={styles.metricFill}
                      initial={{ scaleX: 0.4 }}
                      animate={metricsAnimation}
                      style={{ 
                        originX: 0,
                        background: 'linear-gradient(90deg, #007AFF 0%, #D1A2FF 100%)' 
                      }}
                    />
                    <span className={styles.metricLabel}>{metric.name}</span>
                    <span className={styles.metricValue}>
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
