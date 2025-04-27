
import React, { lazy, Suspense } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Showcases from '../components/Showcases';
import CallToAction from '../components/CallToAction';
import WhatWeDo from '../components/WhatWeDo';
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
      
      <main className="relative">
        <section>
          <Hero />
        </section>
        
        <section>
          <Showcases />
        </section>
        
        <section>
          <CallToAction />
        </section>
        
        <section>
          <WhatWeDo />
        </section>
        
        <Suspense fallback={<div style={{ height: '600px' }} />}>
          <section>
            <TheProcess />
          </section>
        </Suspense>
      </main>
    </div>
  );
};

export default Index;
