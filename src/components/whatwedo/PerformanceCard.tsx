
import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Showcases.module.css';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { Input } from '../ui/input';
import BrowserWindow from './BrowserWindow';

interface PerformanceCardProps {
  shouldReduceMotion: boolean;
}

const PerformanceCard: React.FC<PerformanceCardProps> = ({ shouldReduceMotion }) => {
  const pulseAnimation = shouldReduceMotion
    ? {}
    : {
        opacity: [0.6, 0.8, 0.6],
        transition: {
          repeat: Infinity,
          repeatType: "mirror" as const,
          duration: 2.5,
          ease: "easeInOut"
        }
      };

  return (
    <div className={`${styles.showcaseCard} transform-none`}>
      {/* Apply a subtle gradient background with low opacity */}
      <div className="h-full w-full absolute top-0 left-0 bg-gradient-to-bl from-purple-300 to-indigo-100 opacity-10 backdrop-blur-sm rounded-xl" />
      
      <div className="flex flex-col items-center text-center px-5 md:px-8 pt-10 pb-8 relative z-10 h-full">
        <h3 className="text-3xl md:text-4xl mb-3 font-light">Engineered for Performance</h3>
        <p className="text-gray-600 text-lg mb-6 max-w-lg">
          Digital experiences that perform as beautifully as they look. Every element serves a purpose while engaging visitors and elevating brands. Simple outside, sophisticated inside.
        </p>
        
        <Button
          variant="primary"
          size="default"
          asChild
          className="mb-8 bg-gradient-to-r from-indigo-500 to-purple-500 border-none shadow-sm hover:shadow-md transition-shadow"
        >
          <Link to="/services">Learn more</Link>
        </Button>
        
        <BrowserWindow>
          <div className="p-6 bg-white bg-opacity-90">
            <div className="pb-5">
              <h4 className="text-lg font-light mb-4 text-gray-700">Report from May 5, 2025, 1:13:59 PM</h4>
              <div className="flex space-x-2 items-center mb-5">
                <Input 
                  type="text" 
                  placeholder="https://nodera.studio/" 
                  className="flex-grow border-gray-200 bg-gradient-to-r from-gray-50 to-white" 
                />
                <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 border-none">Analyze</Button>
              </div>
              
              <div className="flex justify-center space-x-4 border-b border-gray-100 pb-4 mb-6">
                <div className="flex items-center px-3 py-1.5 space-x-2">
                  <span className="text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-500">Mobile</span>
                </div>
                <div className="flex items-center px-3 py-1.5 space-x-2 bg-blue-50 border-b-2 border-blue-500">
                  <span className="text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Desktop</span>
                </div>
              </div>
            </div>
            
            <div>
              <h5 className="text-lg font-light mb-6 text-gray-700">Diagnose performance issues</h5>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {[
                  { name: 'Performance', value: '97', color: 'from-green-400 to-green-300' },
                  { name: 'Accessibility', value: '98', color: 'from-green-400 to-green-300' },
                  { name: 'Best Practices', value: '100', color: 'from-green-400 to-green-300' },
                  { name: 'SEO', value: '92', color: 'from-green-400 to-green-300' }
                ].map((metric) => (
                  <motion.div 
                    key={metric.name} 
                    className="flex flex-col items-center"
                    animate={pulseAnimation}
                  >
                    <div className="relative w-20 h-20 mb-2">
                      <svg className="w-20 h-20" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#F0F0F0"
                          strokeWidth="2"
                        />
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          className={`bg-gradient-to-r ${metric.color}`}
                          stroke="url(#gradient)"
                          strokeWidth="2"
                          strokeDasharray="100, 100"
                        />
                      </svg>
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#00C48C" />
                          <stop offset="100%" stopColor="#38EFC3" />
                        </linearGradient>
                      </defs>
                      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-lg font-light">
                        {metric.value}
                      </div>
                    </div>
                    <span className="text-sm text-gray-600">{metric.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </BrowserWindow>
      </div>
    </div>
  );
};

export default PerformanceCard;
