
import React, { useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import styles from './styles/TheProcess.module.css';
import cardStyles from './styles/ProcessCard.module.css';
import codeStyles from './styles/CodeEditor.module.css';
import dashboardStyles from './styles/Dashboard.module.css';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';
import { Textarea } from './ui/textarea';

const TheProcess = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const shouldReduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState('html');
  const [codeContent, setCodeContent] = useState({
    html: `<html>
  <head>
    <meta charset="UTF-8">
    <title>My Project</title>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>`,
    nextjs: `// pages/index.js
import React from 'react';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
    </div>
  )
}`,
    css: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(
    to right,
    #f5f5f5,
    #ffffff
  );
}`
  });

  const handleCodeChange = (language: string, value: string) => {
    setCodeContent(prev => ({
      ...prev,
      [language]: value
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] }
    }
  };

  return (
    <section ref={ref} className={styles.processSection}>
      <div className={styles.container}>
        <motion.h2 
          className={styles.sectionTitle}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={itemVariants}
        >
          The <span className={styles.gradientText}>Process</span>
        </motion.h2>
        
        <motion.div 
          className={styles.processCards}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div 
            className={cardStyles.processCard}
            variants={itemVariants}
            whileHover={shouldReduceMotion ? {} : { y: -5, transition: { duration: 0.2 } }}
          >
            <div className={cardStyles.cardImageContainer}>
              <div className={cardStyles.cardImage}>
                <div className={cardStyles.techLogosContainer}>
                  <div className={cardStyles.techLogos}>
                    <div className={cardStyles.techLogosRow}>
                      <div className={cardStyles.techLogo}>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.08 0L4.546 5.04H19.457L19.1 8.816H4.192L3.654 13.856H18.56L17.974 19.76L12 21.44L6.024 19.76L6.368 16.64H1.328L0.5 23.28L11.052 26L21.862 23.28L24 0H5.08Z" fill="#E34F26"/>
                        </svg>
                      </div>
                      <div className={cardStyles.techLogo}>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.08 0L4.546 5.04H19.457L19.1 8.816H4.192L3.654 13.856H18.56L17.974 19.76L12 21.44L6.024 19.76L6.368 16.64H1.328L0.5 23.28L11.052 26L21.862 23.28L24 0H5.08Z" fill="#1572B6"/>
                        </svg>
                      </div>
                      <div className={cardStyles.techLogo}>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 0H24V24H0V0Z" fill="#F7DF1E"/>
                          <path d="M6.3 20.025L8.112 18.93C8.463 19.605 8.793 20.175 9.609 20.175C10.389 20.175 10.887 19.845 10.887 18.645V10.965H13.089V18.69C13.089 21.075 11.646 22.125 9.702 22.125C7.953 22.125 6.879 21.18 6.3 20.025Z" fill="black"/>
                          <path d="M14.367 19.785L16.179 18.735C16.674 19.53 17.319 20.13 18.357 20.13C19.227 20.13 19.797 19.68 19.797 19.065C19.797 18.33 19.218 18.015 18.183 17.49L17.604 17.205C15.987 16.41 14.901 15.405 14.901 13.53C14.901 11.79 16.233 10.455 18.27 10.455C19.722 10.455 20.769 10.98 21.534 12.285L19.812 13.395C19.416 12.705 18.987 12.39 18.267 12.39C17.532 12.39 17.1 12.825 17.1 13.395C17.1 14.1 17.535 14.415 18.495 14.895L19.074 15.18C21 16.125 22.086 17.1 22.086 19.02C22.086 21.09 20.445 22.14 18.42 22.14C16.437 22.14 15.057 21.15 14.364 19.785H14.367Z" fill="black"/>
                        </svg>
                      </div>
                      <div className={cardStyles.techLogo}>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 13.992C13.1046 13.992 14 13.0966 14 11.992C14 10.8874 13.1046 9.992 12 9.992C10.8954 9.992 10 10.8874 10 11.992C10 13.0966 10.8954 13.992 12 13.992Z" fill="#61DAFB"/>
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 7.992C15.582 7.992 18.8681 8.57146 21.0779 9.55177C23.5133 10.6307 25 12.1221 25 13.992C25 15.9232 23.3942 17.4547 20.8104 18.5454C18.5933 19.4903 15.3998 20.039 12 20.039C8.46734 20.039 5.17011 19.5161 2.93218 18.5454C0.595174 17.5323 -1 15.9831 -1 13.992C-1 12.0816 0.40443 10.6009 2.73526 9.56432C4.89835 8.59668 8.26114 7.992 12 7.992Z" fill="#61DAFB"/>
                        </svg>
                      </div>
                      <div className={cardStyles.techLogo}>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M24 12L12 0L0 12L12 24L24 12Z" fill="#00D8FF"/>
                        </svg>
                      </div>
                    </div>
                    <div className={cardStyles.techLogosRow}>
                      <div className={cardStyles.techLogo}>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0Z" fill="#44A8B3"/>
                        </svg>
                      </div>
                      <div className={cardStyles.techLogo}>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M24 4.24L6.85 14.15V33.85L24 43.76L41.15 33.85V14.15L24 4.24Z" fill="#689F63"/>
                        </svg>
                      </div>
                      <div className={cardStyles.techLogo}>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 0H24V24H0V0Z" fill="#764ABC"/>
                        </svg>
                      </div>
                      <div className={cardStyles.techLogo}>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0Z" fill="#38BDF8"/>
                        </svg>
                      </div>
                      <div className={cardStyles.techLogo}>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z" fill="#4B32C3"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={cardStyles.companyLogo}>
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
            
            <div className={cardStyles.cardContent}>
              <div className={cardStyles.cardStep}>01</div>
              <h3 className={cardStyles.cardTitle}>Discovery & Strategy</h3>
              <p className={cardStyles.cardDescription}>
                We dive deep into your business reality before writing a single line of code. Your goals become our roadmap, creating strategic foundations that support every pixel and function.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className={cardStyles.processCard}
            variants={itemVariants}
            whileHover={shouldReduceMotion ? {} : { y: -5, transition: { duration: 0.2 } }}
          >
            <div className={cardStyles.cardImageContainer}>
              <div className={cardStyles.cardImage}>
                <div className={codeStyles.codeEditor}>
                  <div className={codeStyles.codeHeader}>
                    <div className={codeStyles.dots}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <Tabs 
                      defaultValue="html" 
                      className={codeStyles.codeTabs}
                      onValueChange={setActiveTab}
                    >
                      <TabsList className={codeStyles.tabsList}>
                        <TabsTrigger value="html" className={activeTab === 'html' ? styles.activeTab : ''}>HTML</TabsTrigger>
                        <TabsTrigger value="nextjs" className={activeTab === 'nextjs' ? styles.activeTab : ''}>NextJs</TabsTrigger>
                        <TabsTrigger value="css" className={activeTab === 'css' ? styles.activeTab : ''}>CSS</TabsTrigger>
                      </TabsList>
                      <TabsContent value="html" className={codeStyles.codeContent}>
                        <div className={codeStyles.lineNumbers}>
                          {Array.from({ length: codeContent.html.split('\n').length }, (_, i) => (
                            <span key={i}>{i + 1}</span>
                          ))}
                        </div>
                        <Textarea
                          value={codeContent.html}
                          onChange={(e) => handleCodeChange('html', e.target.value)}
                          className={codeStyles.codeText}
                          spellCheck={false}
                        />
                      </TabsContent>
                      <TabsContent value="nextjs" className={codeStyles.codeContent}>
                        <div className={codeStyles.lineNumbers}>
                          {Array.from({ length: codeContent.nextjs.split('\n').length }, (_, i) => (
                            <span key={i}>{i + 1}</span>
                          ))}
                        </div>
                        <Textarea
                          value={codeContent.nextjs}
                          onChange={(e) => handleCodeChange('nextjs', e.target.value)}
                          className={codeStyles.codeText}
                          spellCheck={false}
                        />
                      </TabsContent>
                      <TabsContent value="css" className={codeStyles.codeContent}>
                        <div className={codeStyles.lineNumbers}>
                          {Array.from({ length: codeContent.css.split('\n').length }, (_, i) => (
                            <span key={i}>{i + 1}</span>
                          ))}
                        </div>
                        <Textarea
                          value={codeContent.css}
                          onChange={(e) => handleCodeChange('css', e.target.value)}
                          className={codeStyles.codeText}
                          spellCheck={false}
                        />
                      </TabsContent>
                    </Tabs>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={cardStyles.cardContent}>
              <div className={cardStyles.cardStep}>02</div>
              <h3 className={cardStyles.cardTitle}>Design & Develop</h3>
              <p className={cardStyles.cardDescription}>
                Vision becomes reality. Our collaborative approach eliminates the handoff gap, delivering experiences where beauty and functionality are inseparable from the start.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className={cardStyles.processCard}
            variants={itemVariants}
          >
            <HoverCard>
              <HoverCardTrigger asChild>
                <div className={`${cardStyles.cardImageContainer} ${cardStyles.scrollableContainer}`}>
                  <div className={cardStyles.cardImage}>
                    <div className={dashboardStyles.dashboard}>
                      <div className={dashboardStyles.metricsContainer}>
                        <div className={dashboardStyles.metric}>
                          <div className={dashboardStyles.metricLabel}>Software speed</div>
                          <div className={dashboardStyles.metricValue}>
                            <span>+38%</span>
                          </div>
                        </div>
                        <div className={dashboardStyles.metric}>
                          <div className={dashboardStyles.metricLabel}>Workflow efficiency</div>
                          <div className={dashboardStyles.metricValue}>
                            <span>+25%</span>
                          </div>
                        </div>
                        <div className={dashboardStyles.hiddenMetric}>
                          <div className={dashboardStyles.metricLabel}>Operational cost</div>
                          <div className={dashboardStyles.metricValue}>
                            <span className={dashboardStyles.negative}>-11%</span>
                          </div>
                        </div>
                        <div className={dashboardStyles.hiddenMetric}>
                          <div className={dashboardStyles.metricLabel}>Update available</div>
                          <div className={dashboardStyles.metricValue}>
                            <button className={dashboardStyles.updateButton}>Update <span className={dashboardStyles.arrow}>↑</span></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className={dashboardStyles.hoverCardContent}>
                Hover to reveal more metrics
              </HoverCardContent>
            </HoverCard>
            
            <div className={cardStyles.cardContent}>
              <div className={cardStyles.cardStep}>03</div>
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

{/*
  Developer Note: This component uses Framer Motion's `whileInView` for scroll-triggered animations.
  `whileInView` relies on client-side calculations. To prevent potential Next.js hydration errors,
  consider dynamically importing this component where it's used in the parent page/layout
  with SSR turned off.
  Example:
  import dynamic from 'next/dynamic';
  const DynamicTheProcess = dynamic(() => import('../components/TheProcess'), { ssr: false });
  // Then use <DynamicTheProcess /> in your JSX.
  See Next.js documentation on Dynamic Imports: https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading#with-no-ssr
*/}
