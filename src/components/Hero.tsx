
import React, { useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
  const { scrollYProgress } = useScroll({
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  
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
  
  const titleLetters = useMemo(() => (
    title.split("").map((letter, index) => (
      <motion.span key={index} variants={letterVariants}>
        {letter}
      </motion.span>
    ))
  ), []);

  return (
    <div className={styles.hero}>
      <motion.img 
        src="/lovable-uploads/logo.png" 
        alt="Blurred logo background" 
        className={styles.heroBackground}
        style={{ 
          y: backgroundY, 
          opacity,
          willChange: 'transform, opacity',
          transition: 'transform 0.15s cubic-bezier(0.17, 0.67, 0.83, 0.67)' // Add smooth CSS transition
        }}
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
