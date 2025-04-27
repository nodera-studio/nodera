
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
        <div className="gradient-lights bg-[#D1A2FF] w-[300px] h-[300px] left-[-100px] top-[20%]" />
        <div className="gradient-lights bg-[#007AFF] w-[250px] h-[250px] right-[-50px] bottom-[30%]" 
          style={{ animationDelay: "-5s" }}
        />
        <div className="gradient-lights bg-[#9b87f5] w-[200px] h-[200px] left-[40%] top-[-50px]"
          style={{ animationDelay: "-10s" }}
        />
      </div>
      
      <div className={styles.heroContent}>
        <h1 className="font-comfortaa font-bold text-[clamp(60px,10vw,150px)] text-white m-0 leading-[0.9] tracking-tight">
          {title}
        </h1>
        <h2 className="font-comfortaa font-bold text-[clamp(24px,5vw,48px)] m-0 text-white tracking-wide">
          {subtitle}
        </h2>
      </div>
    </div>
  );
};

export default Hero;
