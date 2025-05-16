
import React from 'react';
import Hero from '../components/Hero';
import WhatWeDo from '../components/WhatWeDo';
import TheProcess from '../components/TheProcess';
import Portfolio from '../components/Portfolio';
import Showcases from '../components/Showcases';
import CallToAction from '../components/CallToAction';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <TheProcess />
      <Portfolio />
      <Showcases />
      <CallToAction />
    </>
  );
};

export default HomePage;
