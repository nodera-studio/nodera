import React from 'react';
import { useReducedMotion } from 'framer-motion';
// import WhatWeDoTitle from './whatwedo/WhatWeDoTitle'; // Old import
import SectionTitle from './ui/SectionTitle'; // New import
import UserExperienceCard from './whatwedo/UserExperienceCard';
import PerformanceCard from './whatwedo/PerformanceCard';
import { useIsMobile } from '@/hooks/use-mobile';
import styles from './styles/Showcases.module.css';

const WhatWeDo = () => {
  const shouldReduceMotion = useReducedMotion();
  const isMobile = useIsMobile();

  return (
    <div className="bg-white">
      {/* <WhatWeDoTitle /> */}
      <SectionTitle title="What We Do" />
      
      <div className="flex flex-col md:flex-row gap-2.5 max-w-full px-2.5">
        <UserExperienceCard shouldReduceMotion={shouldReduceMotion} isMobile={isMobile} />
        <PerformanceCard shouldReduceMotion={shouldReduceMotion} isMobile={isMobile} />
      </div>
    </div>
  );
};

export default WhatWeDo;
