
import React from 'react';
import styles from './PageHero.module.css';
import { motion } from 'framer-motion';
import { useBreakpoint } from '../hooks/use-mobile';
import { Button } from './ui/button';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  preHeadline?: string;
  ctaText?: string;
  ctaLink?: string;
  isServicePage?: boolean;
}

const PageHero: React.FC<PageHeroProps> = ({ 
  title, 
  subtitle, 
  preHeadline = "Building with Nodera",
  ctaText = "Start Your Project",
  ctaLink = "#contact",
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
    } else {
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
    }
  };
  
  return (
    <div className={`${styles.pageHero} ${isServicePage ? styles.servicePage : ''}`}>
      <div className={styles.heroBackgroundContainer}>
        <motion.div 
          className={`${styles.heroBackground} ${isServicePage ? styles.serviceGradient : ''}`}
          initial={{ opacity: 0.7 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        ></motion.div>
      </div>
      
      <div className={`${styles.heroContent} ${getContentPadding()}`}>
        {isServicePage && preHeadline && (
          <motion.div 
            className="mb-3 md:mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-sm md:text-base text-white/80 font-baloo font-medium tracking-wider">
              {preHeadline}
            </span>
          </motion.div>
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
            className={`mt-4 sm:mt-6 max-w-2xl mx-auto ${isServicePage ? 'text-white/90' : 'text-[#6E6E73]'} text-base sm:text-lg md:text-xl font-normal`}
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
        
        {isServicePage && ctaText && (
          <motion.div
            className="mt-8 md:mt-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.7, 
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <Button 
              size={breakpoint === 'mobile' ? 'default' : 'lg'} 
              variant="accent" 
              className="font-medium px-6 py-2"
              asChild
            >
              <a href={ctaLink}>{ctaText}</a>
            </Button>
          </motion.div>
        )}
        
        {isServicePage && (
          <motion.div 
            className={styles.serviceVisual}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.9, 
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <div className={styles.mockupContainer}>
              <div className={styles.browserMockup}>
                <div className={styles.browserHeader}>
                  <div className={styles.browserControls}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className={styles.browserContent}>
                  <div className={styles.uiElement}></div>
                  <div className={styles.uiElement}></div>
                  <div className={styles.uiElement}></div>
                </div>
              </div>
              <div className={styles.codeMockup}>
                <div className={styles.codeLine}></div>
                <div className={styles.codeLine}></div>
                <div className={styles.codeLine}></div>
                <div className={styles.codeLine}></div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PageHero;
