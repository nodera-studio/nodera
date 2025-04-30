
import React from 'react';
import { Button } from "@/components/ui/button";
import styles from './CallToAction.module.css';

const CallToAction = () => {
  return (
    <div className={styles.ctaContainer}>
      <div className={styles.ctaContentBox}>
        <h2 className={styles.ctaHeading}>
          You've got a vision. We've got the code.
        </h2>
        <p className={styles.ctaSubheading}>
          Let's build something remarkable.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
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
