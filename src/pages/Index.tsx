
import React, { lazy, Suspense, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Showcases from '../components/Showcases';
import CallToAction from '../components/CallToAction';
import WhatWeDo from '../components/WhatWeDo';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';
import TheProcess from '../components/TheProcess';

const Index = () => {
  const location = useLocation();
  
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView();
        }, 0);
      }
    }
  }, [location.hash]);
  
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />

      <main className="relative flex-grow pt-[60px]">
        <section id="home" className="min-h-screen">
          <Hero />
        </section>
        {/* Removed relative z-index positioning and added negative margin to remove gaps */}
        <section id="services" className="mt-[-1px]">
          <Showcases />
        </section>
        <section id="work" className="mt-[-1px]">
          <WhatWeDo />
        </section>
        <section id="about" className="mt-[-1px]">
          <TheProcess />
        </section>
        <section id="contact" className="mt-[-1px]">
          <CallToAction />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
