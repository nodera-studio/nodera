
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PricingSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-xl">Starting from</CardTitle>
              <div className="text-4xl font-bold mt-2">€2,500</div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-left mb-8">
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Custom design
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Responsive layout
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> CMS integration
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-xl">Custom</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-left mb-8">
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Complex functionalities
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> E-commerce capabilities
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Custom integrations
                </li>
              </ul>
              <Button variant="outline" className="w-full" asChild>
                <a href="/contact">Contact Us</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
