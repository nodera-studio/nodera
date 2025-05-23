import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { LayoutDashboard, Bolt, CreditCard } from 'lucide-react';
import styles from './styles/TheProcess.module.css';
import ProcessCard from './process/ProcessCard';
// import ProcessTitle from './process/ProcessTitle'; // Old import
import SectionTitle from './ui/SectionTitle'; // New import

const TheProcess = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.3,
        delayChildren: shouldReduceMotion ? 0 : 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0.1 : 0.7, ease: [0.23, 1, 0.32, 1] }
    }
  };

  return (
    <section ref={ref} className={styles.processSection} aria-label="Our Process">
      {/* <ProcessTitle /> */}
      <SectionTitle title="The Process" />
      
      <div className={styles.container}>
        <motion.div 
          className={styles.processCards}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <ProcessCard 
              title="Discovery & Strategy"
              description="We dive into your business reality before coding. Your goals shape our roadmap, creating foundations for every pixel and function."
              icon={LayoutDashboard}
              iconColor="#007AFF"
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <ProcessCard 
              title="Design & Develop"
              description="Vision becomes reality. Our collaborative approach eliminates handoffs, creating experiences where beauty and functionality are inseparable."
              icon={Bolt}
              iconColor="#D000FF"
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <ProcessCard 
              title="Maintain & Improve"
              description="Launch day is just the beginning. Your product evolves with markets and users. Continuous refinement elevates good to exceptional."
              icon={CreditCard}
              iconColor="#10B981"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TheProcess;
