
import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import styles from './TheProcess.module.css';

const TheProcess = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const shouldReduceMotion = useReducedMotion();
  
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
          The <span className={styles.gradientText}>process</span>
        </motion.h2>
        
        <motion.div 
          className={styles.processCards}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Process Card 1 */}
          <motion.div 
            className={styles.processCard}
            variants={itemVariants}
            whileHover={shouldReduceMotion ? {} : { y: -5, transition: { duration: 0.2 } }}
          >
            <div className={styles.cardImageContainer}>
              <div className={styles.cardImage}>
                {/* Tech stack icons */}
                <div className={styles.iconGrid}>
                  <div className={`${styles.icon} ${styles.html}`}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.08 0L4.546 5.04H19.457L19.1 8.816H4.192L3.654 13.856H18.56L17.974 19.76L12 21.44L6.024 19.76L6.368 16.64H1.328L0.5 23.28L11.052 26L21.862 23.28L24 0H5.08Z" fill="#E34F26"/>
                    </svg>
                  </div>
                  <div className={`${styles.icon} ${styles.css}`}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.08 0L4.546 5.04H19.457L19.1 8.816H4.192L3.654 13.856H18.56L17.974 19.76L12 21.44L6.024 19.76L6.368 16.64H1.328L0.5 23.28L11.052 26L21.862 23.28L24 0H5.08Z" fill="#1572B6"/>
                    </svg>
                  </div>
                  <div className={`${styles.icon} ${styles.js}`}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0H24V24H0V0Z" fill="#F7DF1E"/>
                      <path d="M6.3 20.025L8.112 18.93C8.463 19.605 8.793 20.175 9.609 20.175C10.389 20.175 10.887 19.845 10.887 18.645V10.965H13.089V18.69C13.089 21.075 11.646 22.125 9.702 22.125C7.953 22.125 6.879 21.18 6.3 20.025Z" fill="black"/>
                      <path d="M14.367 19.785L16.179 18.735C16.674 19.53 17.319 20.13 18.357 20.13C19.227 20.13 19.797 19.68 19.797 19.065C19.797 18.33 19.218 18.015 18.183 17.49L17.604 17.205C15.987 16.41 14.901 15.405 14.901 13.53C14.901 11.79 16.233 10.455 18.27 10.455C19.722 10.455 20.769 10.98 21.534 12.285L19.812 13.395C19.416 12.705 18.987 12.39 18.267 12.39C17.532 12.39 17.1 12.825 17.1 13.395C17.1 14.1 17.535 14.415 18.495 14.895L19.074 15.18C21 16.125 22.086 17.1 22.086 19.02C22.086 21.09 20.445 22.14 18.42 22.14C16.437 22.14 15.057 21.15 14.364 19.785H14.367Z" fill="black"/>
                    </svg>
                  </div>
                  <div className={`${styles.icon} ${styles.react}`}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 13.992C13.1046 13.992 14 13.0966 14 11.992C14 10.8874 13.1046 9.992 12 9.992C10.8954 9.992 10 10.8874 10 11.992C10 13.0966 10.8954 13.992 12 13.992Z" fill="#61DAFB"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 7.992C15.582 7.992 18.8681 8.57146 21.0779 9.55177C23.5133 10.6307 25 12.1221 25 13.992C25 15.9232 23.3942 17.4547 20.8104 18.5454C18.5933 19.4903 15.3998 20.039 12 20.039C8.46734 20.039 5.17011 19.5161 2.93218 18.5454C0.595174 17.5323 -1 15.9831 -1 13.992C-1 12.0816 0.40443 10.6009 2.73526 9.56432C4.89835 8.59668 8.26114 7.992 12 7.992ZM2.9789 16.5454C4.94183 17.36 7.9669 17.992 12 17.992C15.9101 17.992 18.9367 17.3937 20.9351 16.5454C22.8739 15.7227 23 14.6286 23 13.992C23 13.3718 22.934 12.3496 20.9695 11.4954C18.9944 10.6386 15.9595 9.992 12 9.992C8.14057 9.992 5.09207 10.6195 3.0927 11.4954C1.18386 12.3266 1 13.366 1 13.992C1 14.6343 1.06513 15.7112 2.9789 16.5454Z" fill="#61DAFB"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M18.7204 6.21922C19.5116 3.77023 19.4969 1.84099 18.6661 0.992737C17.8352 0.144485 16.0019 0.469981 13.7695 1.82054C11.7444 3.03799 9.66972 5.10121 7.93102 7.7431C6.27196 10.2631 5.01304 13.1899 4.34077 16.013C3.71045 18.6695 3.72365 21.0751 4.55456 22.0279C5.41095 23.0139 7.28471 22.5856 9.57075 21.2071C11.6456 19.9541 13.7485 17.8966 15.4865 15.2547C17.1026 12.8262 18.2927 10.0543 18.9648 7.44143C19.2222 6.6823 19.0096 5.85859 18.4094 5.35522C17.8092 4.85185 16.9693 4.82606 16.337 5.29344C15.7047 5.76082 15.522 6.56905 16.0317 7.15795C15.478 9.26466 14.4757 11.5711 13.1104 13.6587C11.5772 15.9861 9.77063 17.7234 8.13507 18.7104C6.61876 19.6253 5.69451 19.7019 5.78322 19.5967C5.87193 19.4916 6.2477 18.1435 6.79155 15.8484C7.38533 13.3768 8.49474 10.8042 9.93938 8.6245C11.4735 6.27709 13.2551 4.54293 14.8907 3.5559C16.4039 2.64104 17.3281 2.56439 17.2394 2.66965C17.1507 2.77492 16.7992 3.76159 16.1565 5.92397C15.9399 6.68602 16.1947 7.4965 16.8262 7.9343C17.4577 8.37209 18.3052 8.27788 18.7204 7.63636L18.7204 6.21922Z" fill="#61DAFB"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M5.27965 6.21922C4.48845 3.77023 4.50309 1.84099 5.33396 0.992737C6.16484 0.144485 7.99815 0.469981 10.2305 1.82054C12.2556 3.03799 14.3303 5.10121 16.069 7.7431C17.728 10.2631 18.987 13.1899 19.6592 16.013C20.2896 18.6695 20.2764 21.0751 19.4454 22.0279C18.589 23.0139 16.7153 22.5856 14.4293 21.2071C12.3544 19.9541 10.2515 17.8966 8.51345 15.2547C6.89742 12.8262 5.70727 10.0543 5.03524 7.44143C4.77779 6.6823 4.99042 5.85859 5.59062 5.35522C6.19082 4.85185 7.03075 4.82606 7.66305 5.29344C8.29535 5.76082 8.47805 6.56905 7.96826 7.15795C8.52204 9.26466 9.52427 11.5711 10.8896 13.6587C12.4228 15.9861 14.2294 17.7234 15.8649 18.7104C17.3812 19.6253 18.3055 19.7019 18.2168 19.5967C18.1281 19.4916 17.7523 18.1435 17.2085 15.8484C16.6147 13.3768 15.5053 10.8042 14.0606 8.6245C12.5265 6.27709 10.7449 4.54293 9.10931 3.5559C7.59605 2.64104 6.6719 2.56439 6.76061 2.66965C6.84932 2.77492 7.20085 3.76159 7.84351 5.92397C8.06014 6.68602 7.80531 7.4965 7.17384 7.9343C6.54237 8.37209 5.6948 8.27788 5.27965 7.63636L5.27965 6.21922Z" fill="#61DAFB"/>
                    </svg>
                  </div>
                  <div className={`${styles.icon} ${styles.node}`}>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 4.24L6.85 14.15V33.85L24 43.76L41.15 33.85V14.15L24 4.24Z" fill="#689F63"/>
                      <path d="M25.96 38.1C25.51 38.1 25.06 37.98 24.65 37.75L20.79 35.44C20.17 35.09 20.47 34.98 20.7 34.91C21.55 34.63 21.72 34.56 22.57 34.09C22.68 34.04 22.81 34.06 22.92 34.13L25.92 35.96C26.06 36.03 26.24 36.03 26.36 35.96L38.82 28.75C38.96 28.67 39.05 28.51 39.05 28.35V13.93C39.05 13.76 38.96 13.61 38.81 13.53L26.36 6.32C26.22 6.24 26.05 6.24 25.91 6.32L13.46 13.53C13.31 13.61 13.22 13.77 13.22 13.93V28.35C13.22 28.51 13.31 28.67 13.46 28.74L16.88 30.7C18.8 31.67 19.99 30.45 19.99 29.24V15.3C19.99 15.07 20.17 14.9 20.4 14.9H22.1C22.32 14.9 22.5 15.07 22.5 15.3V29.24C22.5 32 20.85 33.61 18.29 33.61C17.57 33.61 17 33.61 15.35 32.78L12.09 30.92C11.28 30.46 10.8 29.61 10.8 28.7V13.85C10.8 12.93 11.28 12.09 12.09 11.63L24.65 4.37C25.44 3.93 26.56 3.93 27.34 4.37L39.89 11.63C40.7 12.09 41.19 12.93 41.19 13.85V28.7C41.19 29.61 40.7 30.46 39.89 30.92L27.34 38.18C26.93 38.39 26.47 38.5 25.96 38.5L25.96 38.1Z" fill="#689F63"/>
                      <path d="M29.23 28.47C23.71 28.47 22.47 26.15 22.47 24.23C22.47 24 22.65 23.83 22.88 23.83H24.62C24.82 23.83 24.98 23.97 25.01 24.16C25.25 25.45 25.83 26.07 29.23 26.07C31.97 26.07 33.11 25.61 33.11 24.26C33.11 23.46 32.79 22.87 28.57 22.45C25.01 22.08 22.83 21.24 22.83 18.26C22.83 15.52 25.2 13.88 28.8 13.88C32.87 13.88 35.11 15.43 35.42 18.7C35.43 18.82 35.39 18.93 35.3 19.01C35.22 19.09 35.11 19.13 35 19.13H33.25C33.06 19.13 32.9 19 32.86 18.83C32.38 17.19 31.28 16.29 28.8 16.29C26.05 16.29 25.58 17.4 25.58 18.18C25.58 19.15 26.14 19.47 30.09 20.01C34 20.54 35.85 21.35 35.85 24.28C35.85 27.23 33.33 28.94 29.23 28.94V28.47Z" fill="#689F63"/>
                    </svg>
                  </div>
                </div>
                <div className={styles.nodeLogo}>
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
            
            <div className={styles.cardContent}>
              <div className={styles.cardStep}>01</div>
              <h3 className={styles.cardTitle}>Discovery & Strategy</h3>
              <p className={styles.cardDescription}>
                We dive deep into your business reality before writing a single line of code. Your goals become our roadmap, creating strategic foundations that support every pixel and function.
              </p>
            </div>
          </motion.div>
          
          {/* Process Card 2 */}
          <motion.div 
            className={styles.processCard}
            variants={itemVariants}
            whileHover={shouldReduceMotion ? {} : { y: -5, transition: { duration: 0.2 } }}
          >
            <div className={styles.cardImageContainer}>
              <div className={styles.cardImage}>
                {/* Code editor mockup */}
                <div className={styles.codeEditor}>
                  <div className={styles.codeHeader}>
                    <div className={styles.dots}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className={styles.tabs}>
                      <span className={styles.activeTab}>HTML</span>
                      <span>NextJs</span>
                      <span>CSS</span>
                    </div>
                  </div>
                  <div className={styles.codeContent}>
                    <div className={styles.lineNumbers}>
                      <span>1</span>
                      <span>2</span>
                      <span>3</span>
                      <span>4</span>
                      <span>5</span>
                      <span>6</span>
                    </div>
                    <div className={styles.codeText}>
                      <div><span className={styles.tag}>&lt;html</span> <span className={styles.attr}>lang=</span><span className={styles.value}>"en"</span><span className={styles.tag}>&gt;</span></div>
                      <div><span className={styles.tag}>&lt;head&gt;</span></div>
                      <div>  <span className={styles.tag}>&lt;meta</span> <span className={styles.attr}>charset=</span><span className={styles.value}>"UTF-8"</span><span className={styles.tag}>&gt;</span></div>
                      <div>  <span className={styles.tag}>&lt;meta</span> <span className={styles.attr}>name=</span><span className={styles.value}>"viewport"</span> <span className={styles.attr}>content=</span><span className={styles.value}>"width=device-width, initial-scale=1.0"</span><span className={styles.tag}>&gt;</span></div>
                      <div className={styles.codeCursor}>  <span className={styles.tag}>&lt;title&gt;</span>Andrei<span className={styles.tag}>&lt;/title&gt;</span></div>
                      <div>  <span className={styles.tag}>&lt;/head&gt;</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.cardContent}>
              <div className={styles.cardStep}>02</div>
              <h3 className={styles.cardTitle}>Design & Develop</h3>
              <p className={styles.cardDescription}>
                Vision becomes reality. Our collaborative approach eliminates the handoff gap, delivering experiences where beauty and functionality are inseparable from the start.
              </p>
            </div>
          </motion.div>
          
          {/* Process Card 3 */}
          <motion.div 
            className={styles.processCard}
            variants={itemVariants}
            whileHover={shouldReduceMotion ? {} : { y: -5, transition: { duration: 0.2 } }}
          >
            <div className={styles.cardImageContainer}>
              <div className={styles.cardImage}>
                {/* Analytics dashboard */}
                <div className={styles.dashboard}>
                  <div className={styles.metricsContainer}>
                    <div className={styles.metric}>
                      <div className={styles.metricLabel}>Software speed</div>
                      <div className={styles.metricValue}>
                        <span>+38%</span>
                      </div>
                    </div>
                    <div className={styles.metric}>
                      <div className={styles.metricLabel}>Workflow efficiency</div>
                      <div className={styles.metricValue}>
                        <span>+25%</span>
                      </div>
                    </div>
                    <div className={styles.metric}>
                      <div className={styles.metricLabel}>Operational cost</div>
                      <div className={styles.metricValue}>
                        <span className={styles.negative}>-11%</span>
                      </div>
                    </div>
                    <div className={styles.metric}>
                      <div className={styles.metricLabel}>Update available</div>
                      <div className={styles.metricValue}>
                        <button className={styles.updateButton}>Update <span className={styles.arrow}>↑</span></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.cardContent}>
              <div className={styles.cardStep}>03</div>
              <h3 className={styles.cardTitle}>Maintain & Improve</h3>
              <p className={styles.cardDescription}>
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
