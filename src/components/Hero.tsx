
import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';
import { useBreakpoint } from '../hooks/use-mobile';

const Hero: React.FC = () => {
  const title = "Nodera";
  const subtitle = "Design Studio";
  
  const [scrollY, setScrollY] = useState(0);
  const breakpoint = useBreakpoint();
  const isMobileView = breakpoint === 'mobile';
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const parallaxOffset = scrollY * 0.3;
  
  return (
    <div className={styles.hero}>
      <div className={styles.heroBackgroundContainer}>
        <img 
          src="/lovable-uploads/logo.png" 
          alt="Blurred logo background" 
          className={styles.heroBackground}
          loading="eager"
          style={{ 
            transform: `translate(-50%, -50%) scale(1.5) translateY(${parallaxOffset * 0.8}px)`,
            filter: isMobileView ? 'blur(30px)' : 'blur(40px)',
            opacity: 0.4,
          }} 
        />
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <div className={styles.heroContent}>
          <h1 className="text-black m-0">
            {title}
          </h1>
          <span className="hero-subtitle text-black m-0">
            {subtitle}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
