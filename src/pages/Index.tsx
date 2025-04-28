
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
      {/* Skip to content link for keyboard navigation */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:p-4 focus:bg-white focus:text-black focus:outline focus:outline-2 focus:outline-primary"
      >
        Skip to main content
      </a>

      {!isMobile && (
        <Suspense fallback={null}>
          <CustomCursor />
        </Suspense>
      )}

      <Header />

      <main id="main-content" className="relative flex-grow" tabIndex={-1}>
        <section aria-label="Hero Section">
          <Hero />
        </section>
        <div className="global-divider" aria-hidden="true" />
        <section className="relative z-10">
          <Showcases />
        </section>
        <div className="global-divider" aria-hidden="true" />
        <section className="relative z-30">
          <WhatWeDo />
        </section>
        <div className="global-divider" aria-hidden="true" />
        <Suspense fallback={<div style={{ height: '600px' }} />}>
          <section className="relative z-40">
            <TheProcess />
          </section>
        </Suspense>
        <div className="global-divider" aria-hidden="true" />
        <section className="relative z-50">
          <CallToAction />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
