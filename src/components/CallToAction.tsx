
import React from 'react';
import styles from './CallToAction.module.css';

const CallToAction = () => {
  return (
    <div className={styles.cta}>
      <div className={styles.ctaText}>
        You've got a vision. We've got the code.<br />
        Let's build something remarkable.
      </div>
      <a href="#contact" className={styles.ctaButton}>
        Get in Touch
      </a>
    </div>
  );
};

export default CallToAction;
