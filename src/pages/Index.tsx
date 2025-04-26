
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Showcases from '../components/Showcases';
import CallToAction from '../components/CallToAction';
import WhatWeDo from '../components/WhatWeDo';
import TheProcess from '../components/TheProcess';
import CustomCursor from '../components/CustomCursor';

// Check if code is running in browser (client-side)
const isBrowser = typeof window !== 'undefined';

const Index = () => {
  // Skip CustomCursor for mobile devices
  const isMobile = isBrowser && window.innerWidth <= 768;

  return (
    <motion.div 
      className="min-h-screen flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {!isMobile && <CustomCursor />}
      <Header />
      <main>
        <Hero />
        <Showcases />
        <WhatWeDo />
        <TheProcess />
        <CallToAction />
      </main>
    </motion.div>
  );
};

export default Index;
