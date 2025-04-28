import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import styles from './styles/TheProcess.module.css';
import cardStyles from './styles/ProcessCard.module.css';
import { ChevronDown } from 'lucide-react';

const TheProcess = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const shouldReduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState('html');
  const [isHoveringMetrics, setIsHoveringMetrics] = useState(false);
  const [codeContent, setCodeContent] = useState({
    html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" 
      content="width=device
      width, initial-
      scale=1.0">
    <title>Modern Web App</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`,
    nextjs: `import React,
{ useState } from 'react';
import Nodera 
from './Nodera';
import './App.css';

function ModernApp() {
  const [state, setState] = 
    useState(null);
  
  return (
    <Nodera />
  );
}`,
    css: `body {
  margin: 0;
  font-family: 'Arial',
    sans-serif;
  background-color: #eef2f7;
  color: #333;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}`
  });

  useEffect(() => {
    const activeContent = codeContent[activeTab as keyof typeof codeContent];
    if (activeContent) {
      setCodeContent(prev => ({ ...prev }));
    }
  }, [activeTab]);

  const handleCodeChange = (language: string, value: string) => {
    setCodeContent(prev => ({
      ...prev,
      [language]: value
    }));
  };

  const handleKeyboardNavigation = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowDown' && !isHoveringMetrics) {
      setIsHoveringMetrics(true);
    } else if (event.key === 'ArrowUp' && isHoveringMetrics) {
      setIsHoveringMetrics(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.3,
        delayChildren: shouldReduceMotion ? 0 : 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0.1 : 0.7, ease: [0.23, 1, 0.32, 1] }
    }
  };

  const placeholderLogos = Array(10).fill(0).map((_, index) => (
    <motion.div 
      key={index} 
      className={cardStyles.placeholderLogo}
      whileHover={{ scale: shouldReduceMotion ? 1 : 1.1 }}
      transition={{ duration: 0.2 }}
      role="img"
      aria-label={`Placeholder logo ${index + 1}`}
    />
  ));

  const logoRow1 = placeholderLogos.slice(0, 5);
  const logoRow2 = placeholderLogos.slice(5, 10);

  const renderTabContent = (tabKey: string) => {
    const content = codeContent[tabKey as keyof typeof codeContent];
    const lines = content.split('\n');
    
    return (
      <div className={`${activeTab === tabKey ? 'block' : 'hidden'} ${cardStyles.codeContent}`}>
        <div className={cardStyles.lineNumbers}>
          {Array.from({ length: lines.length }, (_, i) => (
            <span key={i}>{i + 1}</span>
          ))}
        </div>
        <textarea
          value={content}
          onChange={(e) => handleCodeChange(tabKey, e.target.value)}
          className={cardStyles.codeText}
          spellCheck={false}
          readOnly
        />
      </div>
    );
  };

  return (
    <section ref={ref} className={styles.processSection} aria-label="Our Process">
      <div className={styles.container}>
        <motion.h2 
          className="text-black mb-10 section-title"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={itemVariants}
        >
          The <span className="gradient-word">Process</span>
        </motion.h2>
        
        <motion.div 
          className={styles.processCards}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div 
            className={`${cardStyles.processCard}`}
            variants={itemVariants}
            whileHover={{ y: shouldReduceMotion ? 0 : -5, transition: { duration: 0.2 } }}
            role="region"
            aria-label="Partners and Integrations"
          >
            <div className="bg-white rounded-t-[1rem]">
              <div className={cardStyles.cardImageContainer}>
                <div className={cardStyles.cardImage}>
                  <div 
                    className={cardStyles.logoCarouselContainer}
                    role="marquee"
                    aria-label="Scrolling logo carousel"
                  >
                    <motion.div 
                      className={cardStyles.logoCarousel}
                      animate={shouldReduceMotion ? {} : { 
                        x: [0, -720]
                      }}
                      transition={{ 
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 25,
                        ease: "linear"
                      }}
                    >
                      <div className={cardStyles.logoRow}>
                        {logoRow1}
                        {logoRow1}
                        {logoRow1}
                      </div>
                      <div className={cardStyles.logoRow}>
                        {logoRow2}
                        {logoRow2}
                        {logoRow2}
                      </div>
                    </motion.div>
                    <div 
                      className={cardStyles.companyLogoWrapper}
                      role="img"
                      aria-label="Nodera company logo"
                    >
                      <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="90" cy="90" r="90" fill="url(#paint0_linear_404_17)"/>
                        <path d="M136.414 93.1993C136.414 90.1371 133.907 87.5052 131.003 87.5052H48.9968C46.0243 87.5052 43.5859 90.1371 43.5859 93.1993V135.81C43.5859 138.949 46.0243 141.504 48.9968 141.504H131.003C133.907 141.504 136.414 138.949 136.414 135.81V93.1993Z" fill="#4E4FEB"/>
                        <path d="M136.414 46.1957C136.414 43.0566 133.907 40.5019 131.003 40.5019H48.9968C46.0243 40.5019 43.5859 43.0566 43.5859 46.1957V88.8832C43.5859 91.9452 46.0243 94.5 48.9968 94.5H131.003C133.907 94.5 136.414 91.9452 136.414 88.8832V46.1957Z" fill="#6366F1"/>
                        <defs>
                          <linearGradient id="paint0_linear_404_17" x1="0" y1="0" x2="180" y2="180" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#818CF8"/>
                            <stop offset="1" stopColor="#4F46E5"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`${cardStyles.cardContent} bg-[#F9F9F9] rounded-b-[1rem]`}>
              <div className={`${cardStyles.cardStep} gradient-text font-semibold`}>01</div>
              <h3 className={cardStyles.cardTitle}>Discovery & Strategy</h3>
              <p className={cardStyles.cardDescription}>
                We dive into your business reality before coding. Your goals shape our roadmap, creating foundations for every pixel and function.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className={`${cardStyles.processCard}`}
            variants={itemVariants}
            whileHover={{ y: shouldReduceMotion ? 0 : -5, transition: { duration: 0.2 } }}
            role="region"
            aria-label="Code Examples"
          >
            <div className="bg-white rounded-t-[1rem] w-full">
              <div className={cardStyles.cardImageContainer}>
                <div className={`${cardStyles.cardImage} w-full`}>
                  <div className={`${cardStyles.codeEditor} w-full`}>
                    <div className={cardStyles.codeHeader}>
                      <div className={cardStyles.browserControls}>
                        <span className={cardStyles.browserDot} aria-hidden="true" />
                        <span className={cardStyles.browserDot} aria-hidden="true" />
                        <span className={cardStyles.browserDot} aria-hidden="true" />
                      </div>
                      <div className={cardStyles.tabsList}>
                        <div 
                          className={`${cardStyles.tab} ${activeTab === 'html' ? cardStyles.activeTab : ''}`}
                          onClick={() => setActiveTab('html')}
                          role="button"
                          aria-pressed={activeTab === 'html'}
                        >
                          HTML
                        </div>
                        <div 
                          className={`${cardStyles.tab} ${activeTab === 'nextjs' ? cardStyles.activeTab : ''}`}
                          onClick={() => setActiveTab('nextjs')}
                          role="button"
                          aria-pressed={activeTab === 'nextjs'}
                        >
                          NextJS
                        </div>
                        <div 
                          className={`${cardStyles.tab} ${activeTab === 'css' ? cardStyles.activeTab : ''}`}
                          onClick={() => setActiveTab('css')}
                          role="button"
                          aria-pressed={activeTab === 'css'}
                        >
                          CSS
                        </div>
                      </div>
                    </div>
                    
                    {/* Conditionally render only the active tab's content */}
                    {renderTabContent(activeTab)}
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`${cardStyles.cardContent} bg-[#F9F9F9] rounded-b-[1rem]`}>
              <div className={`${cardStyles.cardStep} gradient-text font-semibold`}>02</div>
              <h3 className={cardStyles.cardTitle}>Design & Develop</h3>
              <p className={cardStyles.cardDescription}>
                Vision becomes reality. Our collaborative approach eliminates handoffs, creating experiences where beauty and functionality are inseparable.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className={`${cardStyles.processCard}`}
            variants={itemVariants}
            whileHover={{ y: shouldReduceMotion ? 0 : -5, transition: { duration: 0.2 } }}
            role="region"
            aria-label="Performance Metrics"
            onKeyDown={handleKeyboardNavigation}
            tabIndex={0}
          >
            <div 
              className="bg-[#f8f9fa] rounded-t-[1rem] relative"
              onMouseEnter={() => setIsHoveringMetrics(true)}
              onMouseLeave={() => setIsHoveringMetrics(false)}
              aria-expanded={isHoveringMetrics}
            >
              <div className={cardStyles.cardImageContainer}>
                <div className={cardStyles.cardImage}>
                  <div className={cardStyles.dashboard}>
                    <motion.div 
                      className={cardStyles.metricsContainer}
                      animate={{ 
                        y: isHoveringMetrics && !shouldReduceMotion ? "-50%" : "0%" 
                      }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      role="list"
                      aria-label="Performance metrics list"
                    >
                      <div className={cardStyles.metric} role="listitem">
                        <div className={cardStyles.metricLabel} id="software-speed">Software speed</div>
                        <div className={cardStyles.metricValue} aria-labelledby="software-speed">
                          <span>+38%</span>
                        </div>
                      </div>
                      <div className={cardStyles.metric}>
                        <div className={cardStyles.metricLabel}>Workflow efficiency</div>
                        <div className={cardStyles.metricValue}>
                          <span>+25%</span>
                        </div>
                      </div>
                      <div className={cardStyles.metric}>
                        <div className={cardStyles.metricLabel}>Operational cost</div>
                        <div className={cardStyles.metricValue}>
                          <span className={cardStyles.negative}>-11%</span>
                        </div>
                      </div>
                      <div className={cardStyles.metric}>
                        <div className={cardStyles.metricLabel}>User satisfaction</div>
                        <div className={cardStyles.metricValue}>
                          <span>+42%</span>
                        </div>
                      </div>
                      <div className={cardStyles.metric}>
                        <div className={cardStyles.metricLabel}>Conversion rate</div>
                        <div className={cardStyles.metricValue}>
                          <span>+19%</span>
                        </div>
                      </div>
                      <div className={cardStyles.metric}>
                        <div className={cardStyles.metricLabel}>Development time</div>
                        <div className={cardStyles.metricValue}>
                          <span className={cardStyles.negative}>-23%</span>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className={cardStyles.moreIndicator}
                      initial={{ opacity: 0.6 }}
                      animate={{ 
                        opacity: isHoveringMetrics ? 0 : 0.6,
                        y: isHoveringMetrics ? 10 : 0 
                      }}
                      transition={{ duration: 0.3 }}
                      aria-hidden="true"
                    >
                      <ChevronDown size={16} />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`${cardStyles.cardContent} bg-[#F9F9F9] rounded-b-[1rem]`}>
              <div className={`${cardStyles.cardStep} gradient-text font-semibold`}>03</div>
              <h3 className={cardStyles.cardTitle}>Maintain & Improve</h3>
              <p className={cardStyles.cardDescription}>
                Launch day is just the beginning. Your product evolves with markets and users. Continuous refinement elevates good to exceptional.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TheProcess;
