
import React from 'react';
import styles from './WhatWeDo.module.css';

const WhatWeDo = () => {
  return (
    <div className={styles.whatWeDo}>
      <h2 className={styles.whatWeDoTitle}>What We Do</h2>
      
      <div className={styles.featureBlocks}>
        <div className={styles.featureBlock}>
          <h3 className={styles.featureTitle}>The Art of User Experience</h3>
          <p className={styles.featureDescription}>
            Powerful code that anticipates challenges. Scalable architecture paired with intuitive interfaces transforms visions into digital reality, no compromise needed.
          </p>
        </div>
        
        <div className={styles.featureBlock}>
          <h3 className={styles.featureTitle}>Engineered for Performance</h3>
          <p className={styles.featureDescription}>
            Digital experiences that perform as beautifully as they look. Every element serves a purpose while engaging visitors and elevating brands. Simple outside, sophisticated inside.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
