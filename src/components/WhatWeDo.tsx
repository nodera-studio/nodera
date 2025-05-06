
import React from 'react';
import { useReducedMotion } from 'framer-motion';
import WhatWeDoTitle from './whatwedo/WhatWeDoTitle';
import UserExperienceCard from './whatwedo/UserExperienceCard';
import PerformanceCard from './whatwedo/PerformanceCard';
import { useIsMobile } from '@/hooks/use-mobile';

const WhatWeDo = () => {
  const shouldReduceMotion = useReducedMotion();
  const isMobile = useIsMobile();

  return (
    <div className="bg-white px-4 py-12">
      <WhatWeDoTitle />
      
      <div className="flex flex-col md:flex-row gap-2.5 max-w-7xl mx-auto px-2.5">
        <UserExperienceCard shouldReduceMotion={shouldReduceMotion} isMobile={isMobile} />
        <PerformanceCard shouldReduceMotion={shouldReduceMotion} isMobile={isMobile} />
      </div>
    </div>
  );
};

export default WhatWeDo;
