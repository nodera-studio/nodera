
import React from 'react';
import styles from '../styles/Showcases.module.css';
import { motion } from 'framer-motion';

const ShowcasesTitle: React.FC = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };
  
  return (
    <div className="flex flex-wrap justify-between items-center mb-20 md:mb-24 lg:mb-28 gap-4">
      <motion.h2 
        className="text-black font-medium tracking-tight"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Featured <span className="gradient-word">Projects</span>
      </motion.h2>
      <motion.a 
        href="#" 
        className={`${styles.hideOnMobile} view-all-link group flex items-center gap-2`}
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        View All 
        <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">→</span>
      </motion.a>
    </div>
  );
};

export default ShowcasesTitle;
