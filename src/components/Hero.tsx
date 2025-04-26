
import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <img 
        src="/lovable-uploads/878e6fc6-886c-4171-b667-4e5c5ea3f8cb.png" 
        alt="" 
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
