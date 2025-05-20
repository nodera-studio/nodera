
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Separator } from "@/components/ui/separator";

const PricingSection = () => {
  return (
    <section className="py-16 md:py-24 px-6" style={{ backgroundColor: '#f9f9f9' }}>
      <div className="container mx-auto">
        <Card className="max-w-7xl mx-auto rounded-xl overflow-hidden bg-white">
          <CardContent className="p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-comfortaa font-bold mb-6 text-left">Service Pricing Overview</h2>
            <p className="text-gray-600 font-baloo text-sm md:text-base mb-8">
              We offer competitive pricing for our range of digital solutions with transparent costs and no hidden fees.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {/* Websites Column */}
              <div className="flex flex-col">
                <div className="mb-4">
                  <h3 className="text-xl font-comfortaa mb-2">Websites</h3>
                  <div className="flex items-baseline">
                    <span className="text-xs font-baloo text-gray-600 mr-1">From</span>
                    <span className="text-2xl font-baloo font-bold">€2,500</span>
                  </div>
                </div>
                
                <Separator className="mb-4" />
                
                <div className="space-y-3 mb-4 flex-grow">
                  <p className="font-baloo text-sm">
                    <strong>Tailored Visual Design:</strong> Crafted to reflect your unique brand and goals.
                  </p>
                  <p className="font-baloo text-sm">
                    <strong>Responsive & SEO-Ready:</strong> Ensuring optimal viewing on all devices and foundational search visibility.
                  </p>
                  <p className="font-baloo text-sm">
                    <strong>Comprehensive Launch Support:</strong> Guiding you from initial setup to a successful go-live.
                  </p>
                </div>
                
                <Link 
                  to="/contact"
                  className="font-baloo font-medium text-sm inline-flex items-center transition-colors duration-200"
                  style={{ 
                    color: 'rgba(0, 122, 255, 0.9)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(0, 122, 255, 1)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(0, 122, 255, 0.9)'}
                >
                  Get a Website Quote
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Link>
              </div>

              {/* E-commerce Column */}
              <div className="flex flex-col">
                <div className="mb-4">
                  <h3 className="text-xl font-comfortaa mb-2">Online Stores</h3>
                  <div className="flex items-baseline">
                    <span className="text-xs font-baloo text-gray-600 mr-1">From</span>
                    <span className="text-2xl font-baloo font-bold">€3,500</span>
                  </div>
                </div>
                
                <Separator className="mb-4" />
                
                <div className="space-y-3 mb-4 flex-grow">
                  <p className="font-baloo text-sm">
                    <strong>Optimized for Sales & Conversion:</strong> User-friendly stores designed to turn visitors into customers.
                  </p>
                  <p className="font-baloo text-sm">
                    <strong>Scalable Shopify Expertise:</strong> Leveraging a leading platform for robust growth and easy management.
                  </p>
                  <p className="font-baloo text-sm">
                    <strong>Brand-Aligned Storefront:</strong> Beautifully designed to perfectly match your brand identity.
                  </p>
                </div>
                
                <Link 
                  to="/contact"
                  className="font-baloo font-medium text-sm inline-flex items-center transition-colors duration-200"
                  style={{ 
                    color: 'rgba(0, 122, 255, 0.9)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(0, 122, 255, 1)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(0, 122, 255, 0.9)'}
                >
                  Get an E-commerce Quote
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Link>
              </div>

              {/* Web Applications Column */}
              <div className="flex flex-col">
                <div className="mb-4">
                  <h3 className="text-xl font-comfortaa mb-2">Web Applications</h3>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-baloo font-bold">Custom</span>
                  </div>
                </div>
                
                <Separator className="mb-4" />
                
                <div className="space-y-3 mb-4 flex-grow">
                  <p className="font-baloo text-sm">
                    <strong>Custom-Built Functionality:</strong> Engineered to solve your specific business challenges.
                  </p>
                  <p className="font-baloo text-sm">
                    <strong>Intuitive User Experience (UX):</strong> Ensuring ease of use, even for complex systems.
                  </p>
                  <p className="font-baloo text-sm">
                    <strong>Scalable & Secure Architecture:</strong> Built for reliable performance, security, and future growth.
                  </p>
                </div>
                
                <Link 
                  to="/contact"
                  className="font-baloo font-medium text-sm inline-flex items-center transition-colors duration-200"
                  style={{ 
                    color: 'rgba(0, 122, 255, 0.9)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(0, 122, 255, 1)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(0, 122, 255, 0.9)'}
                >
                  Discuss Your Application
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
          
        {/* Contact Note */}
        <div className="mt-8 text-center">
          <p className="text-gray-700 font-baloo text-sm mb-3">
            Need a more detailed pricing estimate for your specific project?
          </p>
          <Link 
            to="/contact"
            className="font-baloo font-medium text-sm inline-flex items-center transition-colors duration-200"
            style={{ 
              color: 'rgba(0, 122, 255, 0.9)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(0, 122, 255, 1)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(0, 122, 255, 0.9)'}
          >
            Contact us for a custom quote
            <ArrowRight className="ml-2 h-3 w-3" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
