
import React, { useEffect } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Showcases from '../components/Showcases';
import CallToAction from '../components/CallToAction';
import WhatWeDo from '../components/WhatWeDo';
import TheProcess from '../components/TheProcess';
import CustomCursor from '../components/CustomCursor';

// Check if code is running in browser (client-side)
const isBrowser = typeof window !== 'undefined';

// Animation variants for scroll-triggered animations
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.23, 1, 0.32, 1],
    }
  }
};

const Index = () => {
  // Skip CustomCursor for mobile devices
  const isMobile = isBrowser && window.innerWidth <= 768;
  const { scrollYProgress } = useScroll();
  
  // Transform scroll progress into background color values
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8],
    ["rgba(255, 255, 255, 1)", "rgba(252, 252, 252, 1)", "rgba(255, 255, 255, 1)", "rgba(250, 250, 250, 1)", "rgba(255, 255, 255, 1)"]
  );

  return (
    <motion.div 
      className="min-h-screen flex flex-col"
      style={{ backgroundColor }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {!isMobile && <CustomCursor />}
      <Header />
      <main>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
        >
          <Hero />
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
        >
          <Showcases />
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
        >
          <CallToAction />
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
        >
          <WhatWeDo />
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
        >
          <TheProcess />
        </motion.div>
      </main>
    </motion.div>
  );
};

export default Index;
