
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
  const metricsAnimation = shouldReduceMotion
    ? {}
    : {
        scale: [0.98, 1, 0.98],
        opacity: [0.9, 1, 0.9],
        transition: {
          repeat: Infinity,
          repeatType: "reverse" as const,
          duration: 3,
          ease: "easeInOut"
        }
      };

  return (
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
        
        <BrowserWindow>
          <div className="p-4 bg-white">
            <div className="pb-4">
              <h4 className="text-lg font-medium mb-4">Report from May 5, 2025, 1:13:59 PM</h4>
              <div className="flex space-x-2 items-center mb-4">
                <Input 
                  type="text" 
                  placeholder="https://nodera.studio/" 
                  className="flex-grow border-gray-300" 
                />
                <Button className="bg-blue-600 hover:bg-blue-700">Analyze</Button>
              </div>
              
              <div className="flex justify-center space-x-4 border-b pb-4 mb-6">
                <div className="flex items-center px-3 py-1.5 space-x-2">
                  <span className="text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Mobile</span>
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
              <h5 className="text-lg font-medium mb-6">Diagnose performance issues</h5>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {[
                  { name: 'Performance', value: '97', color: '#00C48C' },
                  { name: 'Accessibility', value: '98', color: '#00C48C' },
                  { name: 'Best Practices', value: '100', color: '#00C48C' },
                  { name: 'SEO', value: '92', color: '#00C48C' }
                ].map((metric) => (
                  <motion.div 
                    key={metric.name} 
                    className="flex flex-col items-center"
                    animate={metricsAnimation}
                  >
                    <div className="relative w-20 h-20 mb-2">
                      <svg className="w-20 h-20" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#E8E8E8"
                          strokeWidth="2"
                        />
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke={metric.color}
                          strokeWidth="2"
                          strokeDasharray="100, 100"
                        />
                      </svg>
                      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-lg font-bold">
                        {metric.value}
                      </div>
                    </div>
                    <span className="text-sm">{metric.name}</span>
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
