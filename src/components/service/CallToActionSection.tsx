
import React from 'react';
import { Button } from "@/components/ui/button";

const CallToActionSection = () => {
  return (
    <section className="py-16 px-6 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
        <Button size="lg" asChild>
          <a href="/contact">Contact Us</a>
        </Button>
      </div>
    </section>
  );
};

export default CallToActionSection;
