
import React from 'react';
import WhatWeDo from '../components/WhatWeDo';
import SectionTitle from '../components/ui/SectionTitle';
import CallToAction from '../components/CallToAction';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-white w-full">
      <div id="services" className="py-16 md:py-24">
        <SectionTitle title="Our Services" />
        <WhatWeDo />
      </div>
      <CallToAction />
    </div>
  );
};

export default ServicesPage;
