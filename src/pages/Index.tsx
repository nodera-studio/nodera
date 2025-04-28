
import React, { lazy, Suspense } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Showcases from '../components/Showcases';
import CallToAction from '../components/CallToAction';
import WhatWeDo from '../components/WhatWeDo';
import Footer from '../components/Footer';
import { useIsMobile } from '../hooks/use-mobile';

const CustomCursor = lazy(() => import('../components/CustomCursor'));
const TheProcess = lazy(() => import('../components/TheProcess'));

const Index = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen flex flex-col">
      {!isMobile && (
        <Suspense fallback={null}>
          <CustomCursor />
        </Suspense>
      )}
      
      <Header />
      
      <main className="relative flex-grow">
        <section>
          <Hero />
        </section>
        <div className="w-full h-0.5 bg-[#F1F1F1] my-12" />
        <section className="relative z-10 -mt-24 md:-mt-32 mask-fade-in-top">
          <Showcases />
        </section>
        <div className="w-full h-0.5 bg-[#F1F1F1] my-12" />
        <section className="relative z-30 -mt-16 md:-mt-24 mask-fade-in-top">
          <WhatWeDo />
        </section>
        <Suspense fallback={<div style={{ height: '600px' }} />}>
          <section className="relative z-40 -mt-16 md:-mt-24 mask-fade-in-top">
            <TheProcess />
          </section>
        </Suspense>
        <section className="relative z-50">
          <CallToAction />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
