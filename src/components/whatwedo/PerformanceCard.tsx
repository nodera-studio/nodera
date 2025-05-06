
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Showcases.module.css';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { Input } from '../ui/input';
import BrowserWindow from './BrowserWindow';

interface PerformanceCardProps {
  shouldReduceMotion: boolean;
  isMobile?: boolean;
}

const PerformanceCard: React.FC<PerformanceCardProps> = ({ shouldReduceMotion, isMobile }) => {
  const [activeTab, setActiveTab] = useState<'desktop' | 'mobile'>('desktop');

  const desktopMetrics = [
    { name: 'Performance', value: '97', color: 'from-green-300 to-green-400' },
    { name: 'Accessibility', value: '98', color: 'from-green-300 to-green-400' },
    { name: 'Best Practices', value: '100', color: 'from-green-300 to-green-400' },
    { name: 'SEO', value: '92', color: 'from-green-300 to-green-400' }
  ];

  const mobileMetrics = [
    { name: 'Performance', value: '92', color: 'from-green-300 to-green-400' },
    { name: 'Accessibility', value: '97', color: 'from-green-300 to-green-400' },
    { name: 'Best Practices', value: '100', color: 'from-green-300 to-green-400' },
    { name: 'SEO', value: '94', color: 'from-green-300 to-green-400' }
  ];

  const metrics = activeTab === 'desktop' ? desktopMetrics : mobileMetrics;

  return (
    <motion.div 
      className={`${styles.showcaseCard}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className={`h-full w-full absolute top-0 left-0 bg-gradient-to-br from-purple-300/10 to-pink-100/10`} />
      
      <div className="flex flex-col items-center text-center px-5 md:px-8 pt-10 pb-8 relative z-10 h-full">
        <h3 className="text-3xl md:text-4xl mb-3 font-bold">Engineered for Performance</h3>
        <p className="text-gray-600 text-lg mb-6 max-w-lg">
          Digital experiences that perform as beautifully as they look. Every element serves a purpose while engaging visitors and elevating brands. Simple outside, sophisticated inside.
        </p>
        
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <Button
            variant="primary"
            size="default"
            asChild
          >
            <Link to="/services">Learn more</Link>
          </Button>
          <Button
            variant="secondary"
            size="default"
            asChild
          >
            <Link to="/services">Our Services</Link>
          </Button>
        </div>
        
        <div className={`${styles.imageContainer} mt-4 flex-grow flex items-center justify-center`}>
          <BrowserWindow>
            <div className="p-4 md:p-6 bg-white">
              <div className="pb-4 md:pb-6">
                <h4 className="text-sm md:text-base font-medium mb-4 text-gray-800">Report from May 5, 2025</h4>
                <div className="flex space-x-2 items-center mb-4">
                  <div className="flex-grow relative">
                    <Input 
                      type="text" 
                      placeholder="https://nodera.studio/" 
                      className="border-gray-200 bg-gray-50 pr-16 text-xs md:text-sm h-10 rounded-lg"
                    />
                    <button className="absolute right-1 top-1 bottom-1 px-3 bg-blue-500 rounded-md text-white text-xs hover:bg-blue-600 transition-colors">
                      Analyze
                    </button>
                  </div>
                </div>
                
                <div className="flex justify-center mb-6 overflow-hidden rounded-lg bg-gray-50 p-1 border border-gray-200">
                  <button
                    onClick={() => setActiveTab('mobile')}
                    className={`flex items-center px-4 py-1.5 text-sm transition-colors rounded-md ${
                      activeTab === 'mobile'
                        ? 'bg-white text-gray-800 border border-gray-200 shadow-sm'
                        : 'text-gray-600'
                    }`}
                  >
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      </svg>
                      Mobile
                    </span>
                  </button>
                  <button
                    onClick={() => setActiveTab('desktop')}
                    className={`flex items-center px-4 py-1.5 text-sm transition-colors rounded-md ${
                      activeTab === 'desktop'
                        ? 'bg-white text-gray-800 border border-gray-200 shadow-sm'
                        : 'text-gray-600'
                    }`}
                  >
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                      </svg>
                      Desktop
                    </span>
                  </button>
                </div>
              </div>
              
              <div>
                <h5 className="text-sm font-medium mb-5 text-gray-700">Performance metrics</h5>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
                  {metrics.map((metric) => (
                    <div key={metric.name} className="flex flex-col items-center">
                      <div className="relative w-16 h-16 mb-2 bg-gray-50 border border-gray-100 rounded-full p-1">
                        <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 36 36">
                          <circle
                            cx="18"
                            cy="18"
                            r="16"
                            fill="none"
                            stroke="#E8E8E8"
                            strokeWidth="2"
                          />
                          <circle
                            cx="18"
                            cy="18"
                            r="16"
                            fill="none"
                            stroke="#00C48C"
                            strokeWidth="2"
                            strokeDasharray={`${Number(metric.value)} 100`}
                            strokeLinecap="round"
                          />
                        </svg>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-sm font-semibold text-gray-800">
                          {metric.value}
                        </div>
                      </div>
                      <span className="text-xs text-gray-600">{metric.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </BrowserWindow>
        </div>
      </div>
    </motion.div>
  );
};

export default PerformanceCard;
