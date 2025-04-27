
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
  // No more useScroll for performance reasons
  
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1] 
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  };

  const title = "Nodera";
  const subtitle = "Web Studio";
  
  // Use useMemo to optimize letter splitting
  const titleLetters = useMemo(() => (
    title.split("").map((letter, index) => (
      <motion.span key={index} variants={letterVariants}>
        {letter}
      </motion.span>
    ))
  ), []);

  return (
    <div className={styles.hero}>
      {/* Background image with CSS transitions instead of JS animations */}
      <img 
        src="/lovable-uploads/logo.png" 
        alt="Blurred logo background" 
        className={styles.heroBackground}
        loading="eager"
      />
      <motion.div 
        className={styles.heroContent}
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        <motion.h1 
          className={styles.heroTitle}
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          {titleLetters}
        </motion.h1>
        
        <motion.h2 
          className={styles.heroSubtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            ease: [0.23, 1, 0.32, 1],
            delay: 0.4 
          }}
        >
          {subtitle}
        </motion.h2>
      </motion.div>
    </div>
  );
};

export default Hero;
