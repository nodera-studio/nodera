
import React from 'react';
import { Button } from "@/components/ui/button";

const CallToActionSection = () => {
  return (
    <section className="py-24 px-6 bg-white text-black">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-comfortaa mb-4">Ready to get started?</h2>
        <p className="mb-8 text-lg md:text-xl font-medium text-gray-600 max-w-2xl mx-auto">
          Let us help you bring your digital vision to life with our expertise.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="default" variant="primary" asChild>
            <a href="/contact">Contact Us</a>
          </Button>
          
          <Button size="default" variant="secondary" asChild>
            <a href="/services">View Services</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
