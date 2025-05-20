
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Separator } from "@/components/ui/separator";

const PricingSection = () => {
  return (
    <section className="py-16 md:py-24 px-6" style={{ backgroundColor: '#f9f9f9' }}>
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-comfortaa font-bold text-center mb-12">Service Pricing Overview</h2>
        
        {/* White card with rounded corners containing all pricing content */}
        <Card className="max-w-7xl mx-auto rounded-xl overflow-hidden bg-white">
          <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {/* Websites Column */}
              <div className="flex flex-col">
                <div className="mb-6">
                  <h3 className="text-2xl font-comfortaa mb-2">Websites</h3>
                  <div className="flex items-baseline">
                    <span className="text-sm font-baloo text-gray-600 mr-1">From</span>
                    <span className="text-3xl font-baloo font-bold">€2,500</span>
                  </div>
                </div>
                
                <Separator className="mb-6" />
                
                <div className="space-y-4 mb-6 flex-grow">
                  <p className="font-baloo">
                    <strong>Tailored Visual Design:</strong> Crafted to reflect your unique brand and goals.
                  </p>
                  <p className="font-baloo">
                    <strong>Responsive & SEO-Ready:</strong> Ensuring optimal viewing on all devices and foundational search visibility.
                  </p>
                  <p className="font-baloo">
                    <strong>Comprehensive Launch Support:</strong> Guiding you from initial setup to a successful go-live.
                  </p>
                </div>
                
                <Link 
                  to="/contact"
                  className="font-baloo font-medium inline-flex items-center transition-colors duration-200"
                  style={{ 
                    color: 'rgba(0, 122, 255, 0.9)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(0, 122, 255, 1)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(0, 122, 255, 0.9)'}
                >
                  Get a Website Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              {/* E-commerce Column */}
              <div className="flex flex-col">
                <div className="mb-6">
                  <h3 className="text-2xl font-comfortaa mb-2">Online Stores</h3>
                  <div className="flex items-baseline">
                    <span className="text-sm font-baloo text-gray-600 mr-1">From</span>
                    <span className="text-3xl font-baloo font-bold">€3,500</span>
                  </div>
                </div>
                
                <Separator className="mb-6" />
                
                <div className="space-y-4 mb-6 flex-grow">
                  <p className="font-baloo">
                    <strong>Optimized for Sales & Conversion:</strong> User-friendly stores designed to turn visitors into customers.
                  </p>
                  <p className="font-baloo">
                    <strong>Scalable Shopify Expertise:</strong> Leveraging a leading platform for robust growth and easy management.
                  </p>
                  <p className="font-baloo">
                    <strong>Brand-Aligned Storefront:</strong> Beautifully designed to perfectly match your brand identity.
                  </p>
                </div>
                
                <Link 
                  to="/contact"
                  className="font-baloo font-medium inline-flex items-center transition-colors duration-200"
                  style={{ 
                    color: 'rgba(0, 122, 255, 0.9)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(0, 122, 255, 1)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(0, 122, 255, 0.9)'}
                >
                  Get an E-commerce Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              {/* Web Applications Column */}
              <div className="flex flex-col">
                <div className="mb-6">
                  <h3 className="text-2xl font-comfortaa mb-2">Web Applications</h3>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-baloo font-bold">Custom</span>
                  </div>
                </div>
                
                <Separator className="mb-6" />
                
                <div className="space-y-4 mb-6 flex-grow">
                  <p className="font-baloo">
                    <strong>Custom-Built Functionality:</strong> Engineered to solve your specific business challenges.
                  </p>
                  <p className="font-baloo">
                    <strong>Intuitive User Experience (UX):</strong> Ensuring ease of use, even for complex systems.
                  </p>
                  <p className="font-baloo">
                    <strong>Scalable & Secure Architecture:</strong> Built for reliable performance, security, and future growth.
                  </p>
                </div>
                
                <Link 
                  to="/contact"
                  className="font-baloo font-medium inline-flex items-center transition-colors duration-200"
                  style={{ 
                    color: 'rgba(0, 122, 255, 0.9)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(0, 122, 255, 1)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(0, 122, 255, 0.9)'}
                >
                  Discuss Your Application
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
          
        {/* Contact Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-700 font-baloo text-lg mb-4">
            Need a more detailed pricing estimate for your specific project?
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
      </div>
    </section>
  );
};

export default PricingSection;
