
import React from 'react';
import { Button } from "@/components/ui/button";
import styles from './CallToAction.module.css';

const CallToAction = () => {
  return (
    <div className={styles.ctaContainer}>
      {/* Bottom decorative text - positioned to appear partially cut off */}
      <div className={styles.ctaNodera}>
        <h1 className={styles.ctaNoderaTxt}>
          Nodera
        </h1>
      </div>
      
      {/* Central content - positioned toward the top */}
      <div className={styles.ctaContentBox}>
        <div className="mb-6">
          <p className={`${styles.ctaText} mb-2`}>
            You've got a vision.
          </p>
          <p className={`${styles.ctaText} mb-4`}>
            We've got the code.
          </p>
          <p className={`${styles.ctaText} ${styles.gradientText}`}>
            Let's build something remarkable.
          </p>
        </div>
        
        <div className="flex gap-4 mb-16">
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
