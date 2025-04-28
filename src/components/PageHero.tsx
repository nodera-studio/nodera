
import React from 'react';
import styles from './PageHero.module.css';

interface PageHeroProps {
  title: string;
  subtitle: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle }) => {
  return (
    <div className={styles.pageHero}>
      <div className={styles.heroBackgroundContainer}>
        <div className={styles.heroBackground}></div>
      </div>
      <div className={styles.heroContent}>
        <h1 className="font-comfortaa">{title}</h1>
        <p className="hero-subtitle mt-4 max-w-2xl mx-auto">{subtitle}</p>
      </div>
    </div>
  );
};

export default PageHero;
