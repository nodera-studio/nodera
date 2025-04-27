
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
  // Simple variants for text animation - reduced animations overall
  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const title = "Nodera";
  const subtitle = "Web Studio";
  
  // Simplified letter animation - removed staggering for better performance
  const titleLetters = useMemo(() => (
    <h1 className={styles.heroTitle}>{title}</h1>
  ), []);

  return (
    <div className={styles.hero}>
      {/* Static background image - no more animation */}
      <div className={styles.heroBackgroundContainer}>
        <img 
          src="/lovable-uploads/logo.png" 
          alt="Blurred logo background" 
          className={styles.heroBackground}
          loading="eager"
        />
      </div>
      
      <motion.div 
        className={styles.heroContent}
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        {titleLetters}
        
        <motion.h2 
          className={styles.heroSubtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 0.6, 
            ease: "easeOut",
            delay: 0.3
          }}
        >
          {subtitle}
        </motion.h2>
      </motion.div>
    </div>
  );
};

export default Hero;
