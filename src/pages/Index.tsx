import React, { lazy, Suspense } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Showcases from '../components/Showcases';
import CallToAction from '../components/CallToAction';
import WhatWeDo from '../components/WhatWeDo';
import Footer from '../components/Footer';
import { useIsMobile } from '../hooks/use-mobile';
import { useLocation } from 'react-router-dom';

const CustomCursor = lazy(() => import('../components/CustomCursor'));
const TheProcess = lazy(() => import('../components/TheProcess'));

const Index = () => {
  const isMobile = useIsMobile();
  const location = useLocation();
  
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {!isMobile && (
        <Suspense fallback={null}>
          <CustomCursor />
        </Suspense>
      )}

      <Header />

      <main className="relative flex-grow pt-[60px]">
        <section id="home">
          <Hero />
        </section>
        <div className="global-divider" />
        <section id="services" className="relative z-[55]">
          <Showcases />
        </section>
        <div className="global-divider" />
        <section id="work" className="relative z-30">
          <WhatWeDo />
        </section>
        <div className="global-divider" />
        <Suspense fallback={<div className="h-[600px]" />}>
          <section id="about" className="relative z-40">
            <TheProcess />
          </section>
        </Suspense>
        <div className="global-divider" />
        <section id="contact" className="relative z-50">
          <CallToAction />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
