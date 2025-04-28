
import React from 'react';
import { Button } from "@/components/ui/button";
import styles from './CallToAction.module.css';

const CallToAction = () => {
  return (
    <div className={`${styles.ctaSection} relative overflow-hidden py-24 text-center`}>
      {/* Bottom decorative text */}
      <div className={styles.decorativeText} aria-hidden="true">
        Nodera
      </div>
      
      {/* Central content container */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8 space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium">
              You've got a vision. We've got the code.
            </h2>
            <p className={`${styles.gradientText} text-2xl sm:text-3xl md:text-4xl font-medium`}>
              Let's build something remarkable.
            </p>
          </div>
          
          <Button
            asChild
            size="lg"
            className={`${styles.ctaButton} relative z-10 transition-all duration-300`}
          >
            <a href="#contact">
              Get in Touch
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
