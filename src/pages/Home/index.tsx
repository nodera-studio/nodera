
import React, { lazy, Suspense } from 'react';
import Header from '@/components/common/Header/Header';
import Hero from '@/components/common/Hero/Hero';
import Showcases from '@/components/home/Showcases/Showcases';
import CallToAction from '@/components/common/CallToAction/CallToAction';
import WhatWeDo from '@/components/home/WhatWeDo/WhatWeDo';
import Footer from '@/components/common/Footer/Footer';
import { useIsMobile } from '@/hooks/use-mobile';
import { useLocation } from 'react-router-dom';

const CustomCursor = lazy(() => import('@/components/common/CustomCursor/CustomCursor'));
const TheProcess = lazy(() => import('@/components/home/TheProcess/TheProcess'));

const Home = () => {
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
        <section id="services" className="relative z-10">
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

export default Home;
