
import React from 'react';
import PageHero from '../components/PageHero';
import ServiceGrid from '../components/service/ServiceGrid';
import CallToActionSection from '../components/service/CallToActionSection';
import PricingSection from '../components/service/PricingSection';
import BreadcrumbNav from '../components/BreadcrumbNav';

const Services: React.FC = () => {
  return (
    <div className="services-page">
      <BreadcrumbNav 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services', isCurrent: true }
        ]}
      />
      
      <PageHero 
        preHeadline="Building with Nodera"
        title="Digital experiences, elevated."
        isServicePage={true}
        showVisualElement={true}
        showCTA={true}
        ctaText="Start Your Project"
      />
      
      <div className="container mx-auto px-4 py-16">
        <ServiceGrid />
        <PricingSection />
        <CallToActionSection />
      </div>
    </div>
  );
};

export default Services;
