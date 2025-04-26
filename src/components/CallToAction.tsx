
import React from 'react';
import styles from './CallToAction.module.css';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <div className={styles.cta}>
      <motion.div 
        className={styles.ctaText}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        You've got a vision. We've got the code.<br />
        Let's build something remarkable.
      </motion.div>
      <motion.a 
        href="#contact" 
        className={styles.ctaButton}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        whileHover={{ 
          scale: 1.03,
          backgroundColor: "#333",
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.98 }}
      >
        Get in Touch
      </motion.a>
    </div>
  );
};

export default CallToAction;
