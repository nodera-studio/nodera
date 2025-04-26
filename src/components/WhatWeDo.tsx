
import React from 'react';
import dynamic from 'next/dynamic';
import styles from './WhatWeDo.module.css';
import { motion } from 'framer-motion';

// Dynamically import the 3D scene to avoid SSR issues
const WhatWeDoScene = dynamic(() => import('./3d/WhatWeDoScene'), {
  ssr: false,
  loading: () => <div className={styles.sceneLoading}>Loading 3D Experience...</div>
});

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const WhatWeDo = () => {
  return (
    <div className={styles.whatWeDo}>
      <motion.h2 
        className={styles.whatWeDoTitle}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        What We Do
      </motion.h2>
      
      <WhatWeDoScene />
      
      <div className={styles.featureBlocks}>
        <motion.div 
          className={styles.featureBlock}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          whileHover={{ 
            y: -5, 
            boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            transition: { duration: 0.2, ease: "easeOut" }
          }}
        >
          <h3 className={styles.featureTitle}>The Art of User Experience</h3>
          <p className={styles.featureDescription}>
            Powerful code that anticipates challenges. Scalable architecture paired with intuitive interfaces transforms visions into digital reality, no compromise needed.
          </p>
        </motion.div>
        
        <motion.div 
          className={styles.featureBlock}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          whileHover={{ 
            y: -5, 
            boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            transition: { duration: 0.2, ease: "easeOut" }
          }}
        >
          <h3 className={styles.featureTitle}>Engineered for Performance</h3>
          <p className={styles.featureDescription}>
            Digital experiences that perform as beautifully as they look. Every element serves a purpose while engaging visitors and elevating brands. Simple outside, sophisticated inside.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatWeDo;
