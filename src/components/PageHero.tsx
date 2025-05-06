
import React from 'react';
import styles from './PageHero.module.css';
import { motion } from 'framer-motion';
import { useBreakpoint } from '../hooks/use-mobile';

interface PageHeroProps {
  title: string;
  subtitle: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle }) => {
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
    <div className={styles.pageHero}>
      <div className={styles.heroBackgroundContainer}>
        <motion.div 
          className={styles.heroBackground}
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
        <motion.h1 
          className={`text-[#1D1D1F] font-bold ${getTitleClass()}`}
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
        <motion.p 
          className="mt-4 sm:mt-6 max-w-2xl mx-auto text-[#6E6E73] text-base sm:text-lg md:text-xl font-normal"
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
      </motion.div>
    </div>
  );
};

export default PageHero;
