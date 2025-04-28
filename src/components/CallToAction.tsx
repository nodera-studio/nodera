
import React from 'react';
import { Button } from "@/components/ui/button";
import styles from './CallToAction.module.css';

const CallToAction = () => {
  return (
    <section id="contact" className={styles.ctaContainer} aria-labelledby="cta-heading">
      {/* Bottom decorative text - positioned to appear partially cut off */}
      <div className={styles.ctaNodera} aria-hidden="true">
        <h1 className={styles.ctaNoderaTxt}>
          Nodera
        </h1>
      </div>
      
      {/* Central content - positioned toward the top */}
      <div className={styles.ctaContentBox}>
        <div className="mb-4">
          <p id="cta-heading" className={`${styles.ctaText} mb-4 whitespace-nowrap`}>
            You've got a vision. We've got the code.
          </p>
          <p className={`${styles.ctaText} ${styles.gradientText}`}>
            Let's build something remarkable.
          </p>
        </div>
        
        <div className="flex gap-4">
          <Button
            variant="primary"
            size="lg"
            asChild
          >
            <a href="#contact" aria-label="Contact us to discuss your project">
              Get in Touch
            </a>
          </Button>
          
          <Button
            variant="secondary"
            size="lg"
            asChild
          >
            <a href="#services" aria-label="View our available services">
              View Services
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
