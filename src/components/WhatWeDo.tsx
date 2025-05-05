
import React from 'react';
import { useReducedMotion } from 'framer-motion';
import WhatWeDoTitle from './whatwedo/WhatWeDoTitle';
import UserExperienceCard from './whatwedo/UserExperienceCard';
import PerformanceCard from './whatwedo/PerformanceCard';

const WhatWeDo = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="bg-white px-4 py-12">
      <WhatWeDoTitle />
      
      <div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto">
        <UserExperienceCard shouldReduceMotion={shouldReduceMotion} />
        <PerformanceCard shouldReduceMotion={shouldReduceMotion} />
      </div>
    </div>
  );
};

export default WhatWeDo;
