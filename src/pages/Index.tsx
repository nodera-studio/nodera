import React, { useEffect, lazy, Suspense } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Showcases from '../components/Showcases';
import CallToAction from '../components/CallToAction';
import WhatWeDo from '../components/WhatWeDo';
import { useIsMobile } from '../hooks/use-mobile';

// Lazy load the CustomCursor and TheProcess components which aren't needed immediately
const CustomCursor = lazy(() => import('../components/CustomCursor'));
const TheProcess = lazy(() => import('../components/TheProcess'));

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
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll();
  
  // Transform scroll progress into background color values
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8],
    ["rgba(255, 255, 255, 1)", "rgba(252, 252, 252, 1)", "rgba(255, 255, 255, 1)", "rgba(250, 250, 250, 1)", "rgba(255, 255, 255, 1)"]
  );

  // Fix for potential iOS overflow issues - MODIFIED TO AVOID SCROLL LOCK
  useEffect(() => {
    // Don't forcibly set overflow to 'hidden auto' as this can cause scroll lock
    // Only set overflowX to hidden to prevent horizontal scrolling
    document.documentElement.style.overflowX = 'hidden';
    document.body.style.overflowX = 'hidden';
    
    return () => {
      document.documentElement.style.overflowX = '';
      document.body.style.overflowX = '';
    };
  }, []);

  return (
    <motion.div 
      className="min-h-screen flex flex-col"
      style={{ backgroundColor }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {!isMobile && (
        <Suspense fallback={null}>
          <CustomCursor />
        </Suspense>
      )}
      
      <Header />
      
      <main className="overflow-x-hidden">
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
        
        <Suspense fallback={<div style={{ height: '600px' }} />}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={sectionVariants}
          >
            <TheProcess />
          </motion.div>
        </Suspense>
      </main>
    </motion.div>
  );
};

export default Index;
