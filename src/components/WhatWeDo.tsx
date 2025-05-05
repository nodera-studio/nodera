
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
        opacity: [0.9, 1],
        transition: {
          repeat: Infinity,
          repeatType: "reverse" as const,
          duration: 3,
          ease: "easeInOut"
        }
      };

  return (
    <div className="bg-white">
      <WhatWeDoTitle />
      
      <div className="px-0 space-y-2.5">
        {/* Card 1: User Experience */}
        <div className={`${styles.showcaseCard} transform-none`}>
          <div className={`h-full w-full absolute top-0 left-0 bg-gradient-to-br from-blue-300 opacity-10`} />
          
          <div className="flex flex-col items-center text-center px-5 md:px-8 pt-10 pb-8 relative z-10 h-full">
            <h3 className="text-3xl md:text-4xl mb-3">The Art of User Experience</h3>
            <p className="text-gray-600 text-lg mb-6 max-w-lg">
              Powerful code that anticipates challenges. Scalable architecture paired with intuitive interfaces transforms visions into digital reality, no compromise needed.
            </p>
            
            <Button
              variant="primary"
              size="default"
              asChild
              className="mb-8"
            >
              <Link to="/services">Learn more</Link>
            </Button>
            
            <div className="w-full max-w-lg mt-4">
              <div className="rounded-md border border-gray-200 overflow-hidden">
                <div className="h-8 bg-gray-600 flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>
                <div className="p-4 bg-white space-y-3">
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
        </div>
        
        {/* Card 2: Performance */}
        <div className={`${styles.showcaseCard} transform-none`}>
          <div className={`h-full w-full absolute top-0 left-0 bg-gradient-to-bl from-purple-300 opacity-10`} />
          
          <div className="flex flex-col items-center text-center px-5 md:px-8 pt-10 pb-8 relative z-10 h-full">
            <h3 className="text-3xl md:text-4xl mb-3">Engineered for Performance</h3>
            <p className="text-gray-600 text-lg mb-6 max-w-lg">
              Digital experiences that perform as beautifully as they look. Every element serves a purpose while engaging visitors and elevating brands. Simple outside, sophisticated inside.
            </p>
            
            <Button
              variant="primary"
              size="default"
              asChild
              className="mb-8"
            >
              <Link to="/services">Learn more</Link>
            </Button>
            
            <div className="w-full max-w-lg mt-4">
              <div className="rounded-md border border-gray-200 overflow-hidden">
                <div className="h-8 bg-gray-600 flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <div className="space-y-4">
                    {[
                      { name: 'Speed Index', value: '98' },
                      { name: 'Performance', value: '96' },
                      { name: 'Accessibility', value: '100' },
                      { name: 'Best Practices', value: '94' }
                    ].map((metric, index) => (
                      <motion.div 
                        key={metric.name} 
                        className="relative h-12 bg-gray-50 rounded-full overflow-hidden flex items-center px-4"
                        animate={metricsAnimation}
                      >
                        <span className="relative z-10 text-black font-medium text-lg">{metric.name}</span>
                        <span className="relative z-10 ml-auto bg-white px-3 py-1 rounded-full font-semibold text-sm border border-gray-100">{metric.value}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
