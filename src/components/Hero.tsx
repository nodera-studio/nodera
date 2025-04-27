
import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  const title = "Nodera";
  const subtitle = "Web Studio";
  
  return (
    <div className={styles.hero}>
      <div className={styles.heroBackgroundContainer}>
        <img 
          src="/lovable-uploads/logo.png" 
          alt="Blurred logo background" 
          className={styles.heroBackground}
          loading="eager"
        />
      </div>
      
      <div className={styles.heroContent}>
        <h1 className="font-comfortaa font-bold text-[clamp(60px,10vw,150px)] inner-shadow-text m-0 leading-[0.9] tracking-tight">
          {title}
        </h1>
        <h2 className="font-comfortaa font-bold text-[clamp(24px,5vw,48px)] m-0 bg-gradient-to-r from-[#333333] to-[#666666] bg-clip-text text-transparent tracking-wide">
          {subtitle}
        </h2>
      </div>
    </div>
  );
};

export default Hero;
