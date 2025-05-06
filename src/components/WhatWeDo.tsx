
import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';
import SectionTitle from './ui/SectionTitle';
import UserExperienceCard from './whatwedo/UserExperienceCard';
import PerformanceCard from './whatwedo/PerformanceCard';
import { useIsMobile, useBreakpoint, BREAKPOINTS } from '@/hooks/use-mobile';

const WhatWeDo = () => {
  const shouldReduceMotion = useReducedMotion();
  const breakpoint = useBreakpoint();
  const isMobile = useIsMobile();
  
  // Determine if we should use column layout
  const isColumnLayout = breakpoint === 'mobile' || breakpoint === 'small_tablet' || breakpoint === 'tablet';

  return (
    <div className="bg-white w-full">
      <SectionTitle title="What We Do" />
      
      <motion.div 
        className={`flex flex-col ${isColumnLayout ? '' : 'md:flex-row'} gap-2.5 max-w-full px-2.5`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, staggerChildren: 0.2 }}
      >
        <UserExperienceCard 
          shouldReduceMotion={shouldReduceMotion} 
          isMobile={isMobile} 
        />
        <PerformanceCard 
          shouldReduceMotion={shouldReduceMotion} 
          isMobile={isMobile} 
        />
      </motion.div>
    </div>
  );
};

export default WhatWeDo;
