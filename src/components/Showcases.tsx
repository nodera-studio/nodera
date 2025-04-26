
import React from 'react';
import styles from './Showcases.module.css';

const Showcases = () => {
  return (
    <div className={styles.showcases}>
      <div className={styles.showcasesHeader}>
        <h2 className={styles.showcasesTitle}>Digital Showcases</h2>
        <a href="#" className={styles.viewAllLink}>View All →</a>
      </div>
      
      <div className={styles.showcaseCard}>
        <div className={styles.showcaseContent}>
          <h3 className={styles.showcaseTitle}>Nous CMS</h3>
          <p className={styles.showcaseDescription}>
            The behind-the-scenes system that powers museum mobile guides, intuitive for staff, informative for visitors.
          </p>
          <div className={styles.showcaseButtons}>
            <a href="#" className={styles.showcaseButtonPrimary}>The Full Story</a>
            <a href="#" className={styles.showcaseButtonSecondary}>More Creations</a>
          </div>
        </div>
        <div className={styles.showcaseImage}>
          <img 
            src="/lovable-uploads/8379e5c3-25c3-48da-9e3b-916491ac1570.png" 
            alt="Nous CMS" 
            className={styles.showcaseImg} 
          />
        </div>
      </div>
      
      <div className={styles.showcaseCard}>
        <div className={styles.showcaseImage}>
          <img 
            src="/lovable-uploads/38a39c7f-cf6a-45fb-927c-be92ae2b7adc.png" 
            alt="Furnihaus" 
            className={styles.showcaseImg} 
          />
        </div>
        <div className={styles.showcaseContent}>
          <h3 className={styles.showcaseTitle}>Furnihaus Collection</h3>
          <p className={styles.showcaseDescription}>
            Where craftsmanship meets digital presence. Elegantly showcasing custom furniture and connecting artisans with clients.
          </p>
          <div className={styles.showcaseButtons}>
            <a href="#" className={styles.showcaseButtonSecondary}>More Creations</a>
            <a href="#" className={styles.showcaseButtonPrimary}>The Full Story</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcases;
