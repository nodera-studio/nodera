
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
    <div className={`${styles.showcaseCard} transform-none`}>
      <div className={`h-full w-full absolute top-0 left-0 bg-gradient-to-bl from-purple-300 opacity-10`} />
      
      <div className="flex flex-col items-center text-center px-5 md:px-8 pt-10 pb-8 relative z-10 h-full">
        <h3 className="text-3xl md:text-4xl mb-3">Engineered for Performance</h3>
        <p className="text-gray-600 text-base md:text-base mb-6 max-w-lg">
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
          <div className="p-2 md:p-4 bg-white">
            <div className="pb-2 md:pb-4">
              <h4 className="text-sm md:text-base font-medium mb-3 md:mb-4 text-gray-800">Report from May 5, 2025</h4>
              <div className="flex space-x-2 items-center mb-3 md:mb-4">
                <div className="flex-grow relative">
                  <Input 
                    type="text" 
                    placeholder="https://nodera.studio/" 
                    className="border-gray-200 bg-gray-50 pr-16 text-xs md:text-sm h-8 md:h-10"
                  />
                  <button className="absolute right-1 top-1 bottom-1 px-2 md:px-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-md text-white text-xs">
                    Analyze
                  </button>
                </div>
              </div>
              
              <div className="flex justify-center mb-4 md:mb-6 overflow-hidden rounded-full bg-gray-100 p-0.5">
                <button
                  onClick={() => setActiveTab('mobile')}
                  className={`flex items-center px-3 py-1 md:py-1.5 text-xs md:text-sm transition-all duration-300 rounded-full ${
                    activeTab === 'mobile'
                      ? 'bg-white text-gray-800 border border-gray-100'
                      : 'text-gray-600'
                  }`}
                >
                  <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-1.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                    Mobile
                  </span>
                </button>
                <button
                  onClick={() => setActiveTab('desktop')}
                  className={`flex items-center px-3 py-1 md:py-1.5 text-xs md:text-sm transition-all duration-300 rounded-full ${
                    activeTab === 'desktop'
                      ? 'bg-white text-gray-800 border border-gray-100'
                      : 'text-gray-600'
                  }`}
                >
                  <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-1.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                    </svg>
                    Desktop
                  </span>
                </button>
              </div>
            </div>
            
            <div>
              <h5 className="text-xs md:text-sm font-medium mb-3 md:mb-5 text-gray-700">Performance metrics</h5>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 text-center">
                {metrics.map((metric) => (
                  <div key={metric.name} className="flex flex-col items-center">
                    <div className="relative w-12 h-12 md:w-16 md:h-16 mb-1 md:mb-2">
                      <svg className="w-12 h-12 md:w-16 md:h-16 rotate-[-90deg]" viewBox="0 0 36 36">
                        <circle
                          cx="18"
                          cy="18"
                          r="16"
                          fill="none"
                          stroke="#E8E8E8"
                          strokeWidth="1"
                        />
                        <circle
                          cx="18"
                          cy="18"
                          r="16"
                          fill="none"
                          stroke="url(#gradient-${metric.name})"
                          strokeWidth="1"
                          strokeDasharray={`${Number(metric.value)} 100`}
                          strokeLinecap="round"
                        />
                        <defs>
                          <linearGradient id={`gradient-${metric.name}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#00C48C" />
                            <stop offset="100%" stopColor="#00E4A1" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-xs md:text-sm font-semibold text-gray-800">
                        {metric.value}
                      </div>
                    </div>
                    <span className="text-2xs md:text-xs text-gray-600">{metric.name}</span>
                  </div>
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
