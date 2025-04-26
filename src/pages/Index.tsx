
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Showcases from '../components/Showcases';
import CallToAction from '../components/CallToAction';
import WhatWeDo from '../components/WhatWeDo';
import CustomCursor from '../components/CustomCursor';
import { MotionConfig } from 'framer-motion';

// Check if we're in a browser environment
const isBrowser = typeof window !== 'undefined';

// Check for user preference
const prefersReducedMotion = isBrowser && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const Index = () => {
  return (
    <MotionConfig transition={{ 
      duration: prefersReducedMotion ? 0 : 0.4,
      ease: "easeInOut" 
    }}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main>
          <Hero />
          <Showcases />
          <CallToAction />
          <WhatWeDo />
        </main>
        <CustomCursor />
      </div>
    </MotionConfig>
  );
};

export default Index;
