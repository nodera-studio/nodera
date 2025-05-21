import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles/Showcases.module.css';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { Input } from '../ui/input';

interface PerformanceCardProps {
  shouldReduceMotion: boolean;
  isMobile?: boolean;
}

interface MetricProps {
  name: string;
  value: string;
  color: string;
  delay: number;
}

const MetricCircle: React.FC<MetricProps> = ({ name, value, color, delay }) => {
  const [displayValue, setDisplayValue] = useState('0');
  const [animateCircle, setAnimateCircle] = useState(false);
  const circleRef = useRef<SVGCircleElement>(null);
  
  useEffect(() => {
    // Start circle animation
    const timer1 = setTimeout(() => {
      setAnimateCircle(true);
      
      if (circleRef.current) {
        circleRef.current.style.setProperty('--target-value', value);
      }
    }, delay);
    
    // Start counter animation
    let startTime: number;
    let animationFrame: number;
    
    const countUp = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / 1000, 1); // 1000ms duration
      
      // Easing function - ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      
      const currentCount = Math.floor(easedProgress * parseInt(value));
      setDisplayValue(currentCount.toString());
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(countUp);
      } else {
        setDisplayValue(value);
      }
    };
    
    const timer2 = setTimeout(() => {
      animationFrame = requestAnimationFrame(countUp);
    }, delay);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [value, delay]);
  
  return (
    <div className="flex flex-col items-center">
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
            ref={circleRef}
            cx="18"
            cy="18"
            r="16"
            fill="none"
            stroke="#00C48C"
            strokeWidth="2"
            strokeDasharray={`${animateCircle ? value : 0} 100`}
            strokeLinecap="round"
            className={animateCircle ? "circle-progress" : ""}
          />
        </svg>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-sm font-semibold text-gray-800">
          {displayValue}
        </div>
      </div>
      <span className="text-xs text-gray-600">{name}</span>
    </div>
  );
};

const PerformanceCard: React.FC<PerformanceCardProps> = ({ shouldReduceMotion, isMobile }) => {
  const [activeTab, setActiveTab] = useState<'desktop' | 'mobile'>('desktop');
  const [showMetrics, setShowMetrics] = useState(true);
  const [key, setKey] = useState(0); // Used to force re-render metrics on tab change
  const inViewRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  
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
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setShowMetrics(true); // Ensure metrics are shown when in view
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = inViewRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  
  // Handle tab change
  const handleTabChange = (tab: 'desktop' | 'mobile') => {
    if (tab === activeTab) return;
    
    // Temporarily hide metrics during tab change
    setShowMetrics(false);
    
    // Use setTimeout to create a visual transition between tabs
    setTimeout(() => {
      setActiveTab(tab);
      setKey(prev => prev + 1); // Increment key to force re-render
      setShowMetrics(true); // Show metrics for the new tab
    }, 300);
  };

  const metrics = activeTab === 'desktop' ? desktopMetrics : mobileMetrics;

  return (
    <motion.div 
      className={`${styles.showcaseCard}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      ref={inViewRef}
    >
      <div className={`h-full w-full absolute top-0 left-0 bg-gradient-to-br from-purple-300/10 to-pink-100/10`} />
      
      <div className="flex flex-col items-center text-center px-5 md:px-8 pt-10 pb-12 relative z-10 h-full">
        <h3 className="text-3xl md:text-4xl mb-3 font-bold">Engineered for Performance</h3>
        <p className="text-gray-600 text-lg mb-6 max-w-lg">
          Digital experiences that perform as beautifully as they look. Every element serves a purpose while engaging visitors and elevating brands. Simple outside, sophisticated inside.
        </p>
        
        <div className="flex flex-wrap justify-center gap-3 mb-6">
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
        
        <div className="flex-1 w-full flex items-center justify-center mb-4">
          <div className="flex-1">
            <motion.h5 
              className="text-sm font-medium mb-5 text-gray-700"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              Performance metrics
            </motion.h5>
            
            <AnimatePresence mode="wait">
              {showMetrics && (
                <motion.div 
                  key={key}
                  className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {metrics.map((metric, index) => (
                    <MetricCircle 
                      key={`${metric.name}-${key}-${index}`}
                      name={metric.name}
                      value={metric.value}
                      color={metric.color}
                      delay={200 + (index * 100)}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PerformanceCard;
