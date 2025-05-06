
import React from 'react';
import { Button } from "@/components/ui/button";
import styles from './CallToAction.module.css';
import { useBreakpoint } from '@/hooks/use-mobile';
import { motion } from 'framer-motion';

const CallToAction = () => {
  const breakpoint = useBreakpoint();
  
  // Get button size based on breakpoint
  const getButtonSize = () => {
    return breakpoint === 'mobile' ? 'sm' : 'default';
  };
  
  // Determine if we should stack buttons
  const shouldStackButtons = breakpoint === 'mobile';

  return (
    <div className={styles.ctaContainer}>
      <motion.div 
        className={styles.ctaContentBox}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 
          className={styles.ctaHeading}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          You've got a vision. We've got the code.
        </motion.h2>
        <motion.p 
          className={styles.ctaSubheading}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Let's build something remarkable.
        </motion.p>
        
        <motion.div 
          className={`flex ${shouldStackButtons ? 'flex-col' : 'flex-row'} gap-4 mt-6 justify-center`}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            variant="primary"
            size={getButtonSize()}
            asChild
            className={shouldStackButtons ? "w-full" : ""}
          >
            <a href="#contact">
              Get in Touch
            </a>
          </Button>
          
          <Button
            variant="secondary"
            size={getButtonSize()}
            asChild
            className={shouldStackButtons ? "w-full" : ""}
          >
            <a href="#services">
              View Services
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CallToAction;
