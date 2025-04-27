
import React, { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Showcases from '../components/Showcases';
import CallToAction from '../components/CallToAction';
import WhatWeDo from '../components/WhatWeDo';
import { useIsMobile } from '../hooks/use-mobile';

// Lazy load the CustomCursor and TheProcess components which aren't needed immediately
const CustomCursor = lazy(() => import('../components/CustomCursor'));
const TheProcess = lazy(() => import('../components/TheProcess'));

// Simplified animation variants - less movement for better performance
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.8, 
      ease: "easeOut",
    }
  }
};

const Index = () => {
  const isMobile = useIsMobile();
  
  return (
    <motion.div 
      className="min-h-screen flex flex-col"
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
      
      <main className="relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
          className="relative z-10"
        >
          <Hero />
        </motion.div>
        
        {/* Additional sections with less motion effects */}
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
