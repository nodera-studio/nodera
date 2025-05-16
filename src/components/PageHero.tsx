
import React from 'react';
import styles from './PageHero.module.css';
import { motion } from 'framer-motion';
import { useBreakpoint } from '../hooks/use-mobile';
import { Button } from './ui/button';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  preHeadline?: string;
  showVisualElement?: boolean;
  showCTA?: boolean;
  ctaText?: string;
  isServicePage?: boolean;
}

const PageHero: React.FC<PageHeroProps> = ({ 
  title, 
  subtitle, 
  preHeadline,
  showVisualElement = false,
  showCTA = false,
  ctaText = "Start Your Project",
  isServicePage = false
}) => {
  const breakpoint = useBreakpoint();
  
  // Get responsive padding based on breakpoint
  const getContentPadding = () => {
    switch (breakpoint) {
      case 'mobile':
        return 'px-4';
      case 'small_tablet':
        return 'px-6';
      case 'tablet':
        return 'px-8';
      case 'desktop':
      case 'large_desktop':
      case 'wide':
        return 'px-10';
      default:
        return 'px-4';
    }
  };
  
  // Get responsive title size based on breakpoint
  const getTitleClass = () => {
    if (isServicePage) {
      switch (breakpoint) {
        case 'mobile':
          return 'text-4xl';
        case 'small_tablet':
          return 'text-5xl';
        case 'tablet':
        case 'desktop':
        case 'large_desktop':
        case 'wide':
          return 'text-6xl';
        default:
          return 'text-4xl';
      }
    }
    
    // Default styling for non-service pages
    switch (breakpoint) {
      case 'mobile':
        return 'text-3xl';
      case 'small_tablet':
        return 'text-4xl';
      case 'tablet':
        return 'text-5xl';
      case 'desktop':
      case 'large_desktop':
      case 'wide':
        return 'text-6xl';
      default:
        return 'text-4xl';
    }
  };
  
  return (
    <div className={`${styles.pageHero} ${isServicePage ? styles.servicePage : ''}`}>
      <div className={styles.heroBackgroundContainer}>
        <motion.div 
          className={`${styles.heroBackground} ${isServicePage ? styles.serviceBackground : ''}`}
          initial={{ opacity: 0.7 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        ></motion.div>
      </div>
      <motion.div 
        className={`${styles.heroContent} ${getContentPadding()}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 0.2, 
          duration: 0.5,
          ease: [0.16, 1, 0.3, 1] 
        }}
      >
        {preHeadline && isServicePage && (
          <motion.h2
            className="text-white text-lg sm:text-xl font-medium mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.3, 
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            {preHeadline}
          </motion.h2>
        )}
        
        <motion.h1 
          className={`${isServicePage ? 'text-white' : 'text-[#1D1D1F]'} font-bold ${getTitleClass()}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 0.4, 
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.p 
            className={`mt-4 sm:mt-6 max-w-2xl mx-auto ${isServicePage ? 'text-white' : 'text-[#6E6E73]'} text-base sm:text-lg md:text-xl font-normal`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.6, 
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            {subtitle}
          </motion.p>
        )}
        
        {showVisualElement && isServicePage && (
          <motion.div
            className={styles.visualElement}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.7, 
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <div className={styles.mockupContainer}>
              <div className={styles.browserWindow}>
                <div className={styles.browserControls}>
                  <span className={styles.browserDot}></span>
                  <span className={styles.browserDot}></span>
                  <span className={styles.browserDot}></span>
                </div>
                <div className={styles.browserContent}>
                  <div className={styles.codeBlock}>
                    <div className={styles.codeLine}></div>
                    <div className={styles.codeLine}></div>
                    <div className={styles.codeLine}></div>
                  </div>
                  <div className={styles.uiElements}>
                    <div className={styles.uiCard}></div>
                    <div className={styles.uiButton}></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
        
        {showCTA && isServicePage && (
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.8, 
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <Button 
              variant="secondary" 
              size="lg"
              className={styles.ctaButton}
            >
              {ctaText}
            </Button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default PageHero;
