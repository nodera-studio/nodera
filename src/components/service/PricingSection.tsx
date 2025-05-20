
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingSection = () => {
  return (
    <section className="py-16 md:py-24 px-6" style={{ backgroundColor: '#f9f9f9' }}>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between max-w-6xl mx-auto">
          {/* Left column - Text content */}
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
            <h2 className="text-3xl md:text-4xl font-comfortaa font-bold mb-6">Pricing that scales with your business</h2>
            <p className="text-gray-700 font-baloo text-lg mb-8">
              We provide transparent pricing options to meet your specific needs. Whether you're 
              starting with a basic website or need a complete digital solution, our pricing 
              structure is designed to deliver maximum value.
            </p>
            <Link 
              to="/contact"
              className="font-baloo font-medium inline-flex items-center transition-colors duration-200"
              style={{ 
                color: 'rgba(0, 122, 255, 0.9)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(0, 122, 255, 1)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(0, 122, 255, 0.9)'}
            >
              Contact us for a custom quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          {/* Right column - Pricing cards */}
          <div className="md:w-1/2">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="text-center shadow-sm border border-gray-100">
                <CardHeader>
                  <CardTitle className="text-xl font-comfortaa">Starting from</CardTitle>
                  <div className="text-4xl font-comfortaa font-bold mt-2">€2,500</div>
                  <p className="text-gray-600 font-baloo mt-2">For Websites</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-left mb-8 font-baloo">
                    <li className="flex items-center">
                      <span className="mr-2 text-blue-500">✓</span> Custom design
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-blue-500">✓</span> Responsive layout
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-blue-500">✓</span> CMS integration
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-center shadow-sm border border-gray-100">
                <CardHeader>
                  <CardTitle className="text-xl font-comfortaa">Custom</CardTitle>
                  <p className="text-gray-600 font-baloo mt-2">For Web Applications</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-left mb-8 font-baloo">
                    <li className="flex items-center">
                      <span className="mr-2 text-blue-500">✓</span> Complex functionalities
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-blue-500">✓</span> E-commerce capabilities
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-blue-500">✓</span> Custom integrations
                    </li>
                  </ul>
                  <Link 
                    to="/contact"
                    className="font-baloo font-medium inline-flex items-center transition-colors duration-200 justify-center w-full"
                    style={{ 
                      color: 'rgba(0, 122, 255, 0.9)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(0, 122, 255, 1)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(0, 122, 255, 0.9)'}
                  >
                    Contact us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
