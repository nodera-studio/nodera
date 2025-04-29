
import React from 'react';
import { Button } from "@ui/button";
import styles from './CallToAction.module.css';

const CallToAction = () => {
  return (
    <div className={styles.ctaContainer}>
      <div className={styles.ctaNodera}>
        <h1 className={styles.ctaNoderaTxt}>
          Nodera
        </h1>
      </div>
      
      <div className={styles.ctaContentBox}>
        <div className="mb-6">
          {/* Added the visionCodeContainer div to group these elements */}
          <div className={styles.visionCodeContainer}>
            <p className={`${styles.ctaText} mb-2 md:mb-0`}>
              You've got a vision.
            </p>
            <p className={`${styles.ctaText}`}>
              We've got the code.
            </p>
          </div>
          <p className={`${styles.ctaText} ${styles.gradientText} mt-4`}>
            Let's build something remarkable.
          </p>
        </div>
        
        <div className="flex gap-4 mb-8">
          <Button
            variant="primary"
            size="lg"
            asChild
          >
            <a href="#contact">
              Get in Touch
            </a>
          </Button>
          
          <Button
            variant="secondary"
            size="lg"
            asChild
          >
            <a href="#services">
              View Services
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
