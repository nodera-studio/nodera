
import React, { useState } from 'react';
import styles from '../styles/Showcases.module.css';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { Input } from '../ui/input';
import BrowserWindow from './BrowserWindow';
import { Monitor, Smartphone } from 'lucide-react';

interface PerformanceCardProps {
  shouldReduceMotion: boolean;
}

interface MetricData {
  name: string;
  value: string;
  color: string;
}

const PerformanceCard: React.FC<PerformanceCardProps> = () => {
  const [activeView, setActiveView] = useState<'desktop' | 'mobile'>('desktop');

  const desktopMetrics: MetricData[] = [
    { name: 'Performance', value: '97', color: 'linear-gradient(135deg, #34D399 0%, #10B981 100%)' },
    { name: 'Accessibility', value: '98', color: 'linear-gradient(135deg, #34D399 0%, #10B981 100%)' },
    { name: 'Best Practices', value: '100', color: 'linear-gradient(135deg, #34D399 0%, #10B981 100%)' },
    { name: 'SEO', value: '92', color: 'linear-gradient(135deg, #34D399 0%, #10B981 100%)' }
  ];

  const mobileMetrics: MetricData[] = [
    { name: 'Performance', value: '94', color: 'linear-gradient(135deg, #34D399 0%, #10B981 100%)' },
    { name: 'Accessibility', value: '96', color: 'linear-gradient(135deg, #34D399 0%, #10B981 100%)' },
    { name: 'Best Practices', value: '100', color: 'linear-gradient(135deg, #34D399 0%, #10B981 100%)' },
    { name: 'SEO', value: '90', color: 'linear-gradient(135deg, #34D399 0%, #10B981 100%)' }
  ];

  const metrics = activeView === 'desktop' ? desktopMetrics : mobileMetrics;

  return (
    <div className={`${styles.showcaseCard} transform-none`}>
      <div className={`h-full w-full absolute top-0 left-0 bg-gradient-to-bl from-purple-300 opacity-10`} />
      
      <div className="flex flex-col items-center text-center px-5 md:px-8 pt-10 pb-8 relative z-10 h-full">
        <h3 className="text-3xl md:text-4xl mb-3 font-light">Engineered for Performance</h3>
        <p className="text-gray-600 text-lg mb-6 max-w-lg font-light">
          Digital experiences that perform as beautifully as they look. Every element serves a purpose while engaging visitors and elevating brands. Simple outside, sophisticated inside.
        </p>
        
        <Button
          variant="primary"
          size="default"
          asChild
          className="mb-8 rounded-full px-6 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
        >
          <Link to="/services">Learn more</Link>
        </Button>
        
        <BrowserWindow>
          <div className="p-4">
            <div className="pb-4">
              <h4 className="text-lg font-light mb-6">Report from May 5, 2025, 1:13:59 PM</h4>
              <div className="flex space-x-2 items-center mb-8">
                <Input 
                  type="text" 
                  placeholder="https://nodera.studio/" 
                  className="flex-grow border-gray-200 rounded-lg" 
                  style={{ 
                    background: 'rgba(249, 250, 251, 0.8)',
                    backdropFilter: 'blur(8px)'
                  }}
                />
                <Button 
                  className="rounded-lg"
                  style={{
                    background: 'linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%)'
                  }}
                >
                  Analyze
                </Button>
              </div>
              
              <div 
                className="flex justify-center mb-8 rounded-full p-1 max-w-xs mx-auto"
                style={{
                  background: 'rgba(243, 244, 246, 0.4)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(229, 231, 235, 0.4)'
                }}
              >
                <div 
                  className={`flex items-center px-5 py-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeView === 'mobile' ? 'text-gray-600 font-normal' : 'text-blue-600 font-medium bg-white shadow-sm'
                  }`}
                  onClick={() => setActiveView('desktop')}
                >
                  <Monitor className="h-4 w-4 mr-2" />
                  <span>Desktop</span>
                </div>
                <div 
                  className={`flex items-center px-5 py-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeView === 'desktop' ? 'text-gray-600 font-normal' : 'text-blue-600 font-medium bg-white shadow-sm'
                  }`}
                  onClick={() => setActiveView('mobile')}
                >
                  <Smartphone className="h-4 w-4 mr-2" />
                  <span>Mobile</span>
                </div>
              </div>
            </div>
            
            <div>
              <h5 className="text-lg font-light mb-8">Diagnose performance issues</h5>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {metrics.map((metric) => (
                  <div 
                    key={metric.name} 
                    className="flex flex-col items-center"
                  >
                    <div className="relative w-20 h-20 mb-3">
                      <svg className="w-20 h-20" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="rgba(229, 231, 235, 0.6)"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="url(#metric-gradient)"
                          strokeWidth="1.5"
                          strokeDasharray={`${parseInt(metric.value, 10)}, 100`}
                        />
                        <defs>
                          <linearGradient id="metric-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#34D399" />
                            <stop offset="100%" stopColor="#10B981" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-lg font-light">
                        {metric.value}
                      </div>
                    </div>
                    <span className="text-sm font-light text-gray-700">{metric.name}</span>
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
