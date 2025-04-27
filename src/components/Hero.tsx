
import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  const title = "Nodera";
  const subtitle = "Web Studio";
  
  return (
    <div className={styles.hero}>
      {/* Static background image with no animations */}
      <div className={styles.heroBackgroundContainer}>
        <img 
          src="/lovable-uploads/logo.png" 
          alt="Blurred logo background" 
          className={styles.heroBackground}
          loading="eager"
        />
      </div>
      
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>{title}</h1>
        <h2 className={styles.heroSubtitle}>{subtitle}</h2>
      </div>
    </div>
  );
};

export default Hero;
