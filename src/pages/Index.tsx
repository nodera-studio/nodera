import React, { lazy, Suspense, useState, useEffect } from 'react';
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
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
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
          <Hero scrollY={scrollY} />
        </section>
        <div className="w-full h-0.5 bg-[#F1F1F1] my-12" />
        <section className="relative z-10 -mt-24 md:-mt-32 mask-fade-in-top">
          <Showcases />
        </section>
        <div className="w-full h-0.5 bg-[#F1F1F1] my-12" />
        <section className="relative z-30 -mt-16 md:-mt-24 mask-fade-in-top">
          <WhatWeDo />
        </section>
        <div className="w-full h-0.5 bg-[#F1F1F1] my-12" />
        <Suspense fallback={<div style={{ height: '600px' }} />}>
          <section className="relative z-40 -mt-16 md:-mt-24 mask-fade-in-top">
            <TheProcess />
          </section>
        </Suspense>
        <div className="w-full h-0.5 bg-[#F1F1F1] mt-12" />
        <section className="relative z-20">
          <CallToAction />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
