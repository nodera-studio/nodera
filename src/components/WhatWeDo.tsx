
import React from 'react';
import { useReducedMotion } from 'framer-motion';
import WhatWeDoTitle from './whatwedo/WhatWeDoTitle';
import UserExperienceCard from './whatwedo/UserExperienceCard';
import PerformanceCard from './whatwedo/PerformanceCard';

const WhatWeDo = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="bg-white px-4 py-10 md:py-16 container mx-auto">
      <WhatWeDoTitle />
      
      <div className="flex flex-col md:flex-row gap-8 mt-8">
        <UserExperienceCard shouldReduceMotion={shouldReduceMotion} />
        <PerformanceCard shouldReduceMotion={shouldReduceMotion} />
      </div>
    </div>
  );
};

export default WhatWeDo;
