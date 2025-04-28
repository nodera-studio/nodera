import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import styles from './styles/TheProcess.module.css';
import cardStyles from './styles/ProcessCard.module.css';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Textarea } from './ui/textarea';
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
    <meta name="viewport" content="width=device-width">
    <title>Modern Web App</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`,
    nextjs: `// app/page.tsx
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
    </main>
  )
}`,
    css: `.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(
    135deg,
    #f5f5f5 0%,
    #ffffff 100%
  );
}

.header {
  padding: 1.5rem;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
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
      <TabsContent value={tabKey} className={cardStyles.codeContent}>
        <div className={cardStyles.lineNumbers}>
          {Array.from({ length: lines.length }, (_, i) => (
            <span key={i}>{i + 1}</span>
          ))}
        </div>
        <Textarea
          value={content}
          onChange={(e) => handleCodeChange(tabKey, e.target.value)}
          className={cardStyles.codeText}
          spellCheck={false}
        />
      </TabsContent>
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
                We dive deep into your business reality before writing a single line of code. Your goals become our roadmap, creating strategic foundations that support every pixel and function.
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
                      <div className={cardStyles.urlBar} role="presentation">
                        localhost:3000
                      </div>
                      <Tabs 
                        defaultValue="html" 
                        className={cardStyles.codeTabs}
                        onValueChange={setActiveTab}
                        value={activeTab}
                      >
                        <TabsList className={cardStyles.tabsList} aria-label="Code language selection">
                          <TabsTrigger 
                            value="html" 
                            className={activeTab === 'html' ? cardStyles.activeTab : ''}
                          >
                            HTML
                          </TabsTrigger>
                          <TabsTrigger 
                            value="nextjs" 
                            className={activeTab === 'nextjs' ? cardStyles.activeTab : ''}
                          >
                            NextJS
                          </TabsTrigger>
                          <TabsTrigger 
                            value="css" 
                            className={activeTab === 'css' ? cardStyles.activeTab : ''}
                          >
                            CSS
                          </TabsTrigger>
                        </TabsList>
                        
                        {renderTabContent('html')}
                        {renderTabContent('nextjs')}
                        {renderTabContent('css')}
                      </Tabs>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`${cardStyles.cardContent} bg-[#F9F9F9] rounded-b-[1rem]`}>
              <div className={`${cardStyles.cardStep} gradient-text font-semibold`}>02</div>
              <h3 className={cardStyles.cardTitle}>Design & Develop</h3>
              <p className={cardStyles.cardDescription}>
                Vision becomes reality. Our collaborative approach eliminates the handoff gap, delivering experiences where beauty and functionality are inseparable from the start.
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
                Launch day isn't goodbye. It's just the beginning. Your digital product evolves as markets shift and users engage. Continuous refinement keeps you ahead, turning good into exceptional over time.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TheProcess;
