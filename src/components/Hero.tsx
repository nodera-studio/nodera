import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  const title = "Nodera";
  const subtitle = "Web Studio";
  
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const parallaxOffset = scrollY * 0.3; // Adjust 0.3 factor for desired speed
  
  return (
    <div className={styles.hero}>
      <div className={styles.heroBackgroundContainer}>
        <div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-200/30 via-blue-200/20 to-blue-300/30 opacity-80 blur-3xl pointer-events-none"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        />
        <div
          className="absolute inset-0 rounded-full bg-gradient-to-b from-blue-100/20 to-white/60 opacity-75 blur-3xl pointer-events-none"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        />
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-transparent via-white/80 to-white pointer-events-none z-20" />
        <img 
          src="/lovable-uploads/logo.png" 
          alt="Blurred logo background" 
          className={`${styles.heroBackground} animate-pulse-logo`}
          loading="eager"
          style={{ transform: `translate(-50%, -50%) scale(1.5) translateY(${parallaxOffset * 0.8}px)` }} 
        />
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <div className={styles.heroContent}>
          <h1 className="text-white m-0 [text-shadow:0px_1px_2px_rgba(0,0,0,0.3)]">
            {title}
          </h1>
          <span 
            className="hero-subtitle m-0 text-white [text-shadow:0px_1px_2px_rgba(0,0,0,0.3)]" 
            style={{ 
              color: 'white', 
              WebkitBackgroundClip: 'unset', 
              WebkitTextFillColor: 'white',
              backgroundClip: 'unset',
              background: 'transparent'
            }}
          >
            {subtitle}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
