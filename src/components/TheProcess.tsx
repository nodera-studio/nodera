
import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useReducedMotion, AnimatePresence } from 'framer-motion';
import styles from './styles/TheProcess.module.css';
import cardStyles from './styles/ProcessCard.module.css';
import { ChevronDown } from 'lucide-react';
import TechLogos from './TechLogos';

// Array of tech logo icons for the carousel
const logoIcons = [
  '/lovable-uploads/html.svg',
  '/lovable-uploads/css-3.svg',
  '/lovable-uploads/js.svg',
  '/lovable-uploads/adobe-illustrator.svg',
  '/lovable-uploads/adobe-photoshop.svg',
  '/lovable-uploads/figma-2.svg',
  '/lovable-uploads/webflow.svg',
  '/lovable-uploads/supabase-logo-icon.svg',
  '/lovable-uploads/picture.svg',
  '/lovable-uploads/social.svg',
];

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

  // Generate logos for the carousel with their respective icons
  const renderLogoPlaceholders = (count: number, icons: string[]) => {
    return Array.from({ length: count }).map((_, index) => {
      const iconIndex = index % icons.length;
      return (
        <div key={index} className={cardStyles.placeholderLogo}>
          <div 
            className={cardStyles.logoIcon} 
            style={{
              maskImage: `url(${icons[iconIndex]})`,
              WebkitMaskImage: `url(${icons[iconIndex]})`
            }}
            aria-hidden="true"
          />
        </div>
      );
    });
  };

  // Calculate animation properties to ensure perfect looping
  // The duration is calculated based on the number of logos and the animation distance
  const calculateAnimationProps = (direction: 'left-to-right' | 'right-to-left') => {
    // Total width of 10 logos plus gaps (50px per logo + 1.5rem gap)
    const totalWidth = 720; // Approximate width in pixels
    
    return {
      x: direction === 'left-to-right' ? [-totalWidth, 0] : [0, -totalWidth],
      transition: { 
        repeat: Infinity,
        repeatType: "loop" as const,
        duration: direction === 'left-to-right' ? 20 : 16,
        ease: "linear" as const
      }
    };
  };

  const logoCarousel = (
    <div className={cardStyles.logoCarouselContainer}>
      <div className={cardStyles.logoCarousel}>
        {/* First row - moving left to right */}
        <div className={cardStyles.logoRow}>
          <motion.div 
            className={cardStyles.logoRow}
            animate={shouldReduceMotion ? {} : calculateAnimationProps('left-to-right')}
          >
            {renderLogoPlaceholders(10, logoIcons)}
            {/* Duplicate for seamless loop */}
            {renderLogoPlaceholders(10, logoIcons)}
          </motion.div>
        </div>
        
        {/* Second row - moving right to left */}
        <div className={cardStyles.logoRow}>
          <motion.div 
            className={cardStyles.logoRow}
            animate={shouldReduceMotion ? {} : calculateAnimationProps('right-to-left')}
          >
            {renderLogoPlaceholders(10, logoIcons.slice().reverse())}
            {/* Duplicate for seamless loop */}
            {renderLogoPlaceholders(10, logoIcons.slice().reverse())}
          </motion.div>
        </div>
      </div>
      
      <div 
        className={cardStyles.companyLogoWrapper}
        role="img"
        aria-label="Nodera company logo"
      >
        <img 
          src="/lovable-uploads/logo.png" 
          alt="Nodera Logo" 
          className={cardStyles.companyLogo}
          loading="lazy"
        />
      </div>
    </div>
  );

  const getTabContentJSX = (tabKey: keyof typeof codeContent) => {
    const content = codeContent[tabKey];
    const lines = content.split('\n');
    
    return (
      <>
        <div className={cardStyles.lineNumbers}>
          {Array.from({ length: lines.length }, (_, i) => (
            <span key={i}>{i + 1}</span>
          ))}
        </div>
        <textarea
          value={content}
          className={cardStyles.codeText}
          spellCheck={false}
          readOnly
        />
      </>
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
            aria-label="Discovery & Strategy Card"
          >
            <div className="bg-white rounded-t-[1rem]">
              <div className={cardStyles.cardImageContainer}>
                <div className={cardStyles.cardImage}>
                  {logoCarousel}
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
                        {(['html', 'nextjs', 'css'] as const).map((tabKey) => (
                          <div 
                            key={tabKey}
                            className={`${cardStyles.tab} ${activeTab === tabKey ? cardStyles.activeTab : ''}`}
                            onClick={() => setActiveTab(tabKey)}
                            role="button"
                            aria-pressed={activeTab === tabKey}
                          >
                            {tabKey === 'html' && 'HTML'}
                            {tabKey === 'nextjs' && 'NextJS'}
                            {tabKey === 'css' && 'CSS'}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className={cardStyles.codeContentContainer}>
                      <AnimatePresence mode="wait">
                        {(['html', 'nextjs', 'css'] as const).map((tabKey) => (
                          activeTab === tabKey && (
                            <motion.div
                              key={tabKey}
                              className={cardStyles.codeContent}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.25 }}
                            >
                              {getTabContentJSX(tabKey)}
                            </motion.div>
                          )
                        ))}
                      </AnimatePresence>
                    </div>
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
