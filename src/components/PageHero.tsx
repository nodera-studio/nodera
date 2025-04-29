
import React from 'react';
import styles from './PageHero.module.css';
import { motion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  subtitle: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle }) => {
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
        className={styles.heroContent}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 0.2, 
          duration: 0.5,
          ease: [0.16, 1, 0.3, 1] 
        }}
      >
        <motion.h1 
          className="font-comfortaa"
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
          className="hero-subtitle mt-4 max-w-2xl mx-auto"
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
