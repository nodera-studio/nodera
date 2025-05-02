import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';
import { useBreakpoint } from '../hooks/use-mobile';

const Hero: React.FC = () => {
  const title = "Nodera";
  const subtitle = "Web Studio";
  
  const breakpoint = useBreakpoint();
  const isMobileView = breakpoint === 'mobile';
  
  return (
    <div className={styles.hero}>
      <div className={styles.heroBackgroundContainer}>
        <img 
          src="/lovable-uploads/logo.png" 
          alt="Blurred logo background" 
          className={styles.heroBackground}
          loading="eager"
          style={{ 
            transform: `translate(-50%, -50%) scale(1.5)`,
            filter: isMobileView ? 'blur(30px)' : 'blur(40px)',
            opacity: 0.4,
          }} 
        />
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <div className={styles.heroContent}>
          <h1 className="text-white m-0 !text-9xl">
            {title}
          </h1>
          <span className="hero-subtitle text-white m-0 !text-4xl font-bold">
            {subtitle}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
