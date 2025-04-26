
import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <img 
        src="/lovable-uploads/logo.png" 
        alt="Blurred logo background" 
        className={styles.heroBackground} 
      />
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Nodera</h1>
        <h2 className={styles.heroSubtitle}>Web Studio</h2>
      </div>
    </div>
  );
};

export default Hero;
