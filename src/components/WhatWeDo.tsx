
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import styles from './styles/Showcases.module.css';
import WhatWeDoTitle from './whatwedo/WhatWeDoTitle';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

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
      
      <div className="px-2.5 space-y-2.5">
        {/* Card 1: User Experience */}
        <div className={styles.showcaseCard}>
          <div className={`h-full w-full absolute top-0 left-0 bg-gradient-to-br from-blue-300 opacity-10`} />
          
          <div className="flex flex-col items-center text-center px-5 md:px-8 pt-10 pb-8 relative z-10 h-full">
            <div className={`${styles.imageContainer} mb-4 flex-grow flex items-center justify-center`}>
              <div className="w-full max-w-lg">
                <div className="rounded-md shadow-lg bg-white overflow-hidden">
                  <div className="h-8 bg-gray-100 flex items-center px-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                  </div>
                  <div className="p-4 space-y-3">
                    <motion.div 
                      className="h-3 bg-gray-100 w-3/4 rounded"
                      animate={lineAnimation}
                    />
                    <motion.div 
                      className="h-3 bg-gray-100 w-full rounded"
                      animate={lineAnimation}
                    />
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      {[1, 2, 3, 4].map((_, index) => (
                        <motion.div 
                          key={index}
                          className="h-16 rounded bg-blue-50"
                          animate={{
                            backgroundColor: ['#D8D8FF', '#E5E5FF', '#D8D8FF'],
                            transition: {
                              repeat: Infinity,
                              repeatType: "mirror" as const,
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
              </div>
            </div>
            
            <h3 className="text-3xl md:text-4xl mb-3">The Art of User Experience</h3>
            <p className="text-gray-600 text-lg mb-6 max-w-lg">
              Powerful code that anticipates challenges. Scalable architecture paired with intuitive interfaces transforms visions into digital reality, no compromise needed.
            </p>
            
            <Button
              variant="primary"
              size="default"
              asChild
              className="mb-4"
            >
              <Link to="/services">Learn more</Link>
            </Button>
          </div>
        </div>
        
        {/* Card 2: Performance */}
        <div className={styles.showcaseCard}>
          <div className={`h-full w-full absolute top-0 left-0 bg-gradient-to-bl from-purple-300 opacity-10`} />
          
          <div className="flex flex-col items-center text-center px-5 md:px-8 pt-10 pb-8 relative z-10 h-full">
            <div className={`${styles.imageContainer} mb-4 flex-grow flex items-center justify-center`}>
              <div className="w-full max-w-lg">
                <div className="rounded-md shadow-lg bg-white p-6 space-y-4">
                  {[
                    { name: 'Speed Index', value: '98' },
                    { name: 'Performance', value: '96' },
                    { name: 'Accessibility', value: '100' },
                    { name: 'Best Practices', value: '94' }
                  ].map((metric, index) => (
                    <div key={metric.name} className="relative h-10 bg-gray-100 rounded-full overflow-hidden flex items-center px-4">
                      <motion.div 
                        className="absolute top-0 left-0 h-full rounded-full"
                        initial={{ scaleX: 0.4 }}
                        animate={metricsAnimation}
                        style={{ 
                          originX: 0,
                          background: 'linear-gradient(90deg, #007AFF 0%, #D1A2FF 100%)' 
                        }}
                      />
                      <span className="relative z-10 text-black font-medium">{metric.name}</span>
                      <span className="relative z-10 ml-auto bg-white px-2 py-0.5 rounded-full font-semibold text-sm">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <h3 className="text-3xl md:text-4xl mb-3">Engineered for Performance</h3>
            <p className="text-gray-600 text-lg mb-6 max-w-lg">
              Digital experiences that perform as beautifully as they look. Every element serves a purpose while engaging visitors and elevating brands. Simple outside, sophisticated inside.
            </p>
            
            <Button
              variant="primary"
              size="default"
              asChild
              className="mb-4"
            >
              <Link to="/services">Learn more</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
