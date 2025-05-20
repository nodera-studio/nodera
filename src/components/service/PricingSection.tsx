
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Layout, ShoppingCart, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingSection = () => {
  return (
    <section className="py-16 md:py-24 px-6" style={{ backgroundColor: '#f9f9f9' }}>
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-comfortaa font-bold text-center mb-12">Service Pricing Overview</h2>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Websites Card */}
            <Card className="text-center border border-gray-100 flex flex-col">
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-4">
                  <Layout className="h-12 w-12 text-blue-500" />
                </div>
                <CardTitle className="text-2xl font-comfortaa mb-2">Websites</CardTitle>
                <div className="mb-1">
                  <span className="text-sm font-baloo text-gray-600 mr-1">From</span>
                  <span className="text-3xl font-baloo font-bold">€2,500</span>
                </div>
                <p className="text-gray-600 font-baloo">For a professional and effective online presence</p>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <ul className="space-y-3 text-left font-baloo mb-8">
                  <li className="flex items-start">
                    <span><strong>Tailored Visual Design:</strong> Crafted to reflect your unique brand and goals.</span>
                  </li>
                  <li className="flex items-start">
                    <span><strong>Responsive & SEO-Ready:</strong> Ensuring optimal viewing on all devices and foundational search visibility.</span>
                  </li>
                  <li className="flex items-start">
                    <span><strong>Comprehensive Launch Support:</strong> Guiding you from initial setup to a successful go-live.</span>
                  </li>
                </ul>
                <div className="mt-auto">
                  <Link to="/contact" className="inline-block">
                    <Button variant="primary" className="px-8 bg-black hover:bg-black">Get a Website Quote</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* E-commerce Card */}
            <Card className="text-center border border-gray-100 flex flex-col">
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-4">
                  <ShoppingCart className="h-12 w-12 text-blue-500" />
                </div>
                <CardTitle className="text-2xl font-comfortaa mb-2">Online Stores</CardTitle>
                <div className="mb-1">
                  <span className="text-sm font-baloo text-gray-600 mr-1">From</span>
                  <span className="text-3xl font-baloo font-bold">€3,500</span>
                </div>
                <p className="text-gray-600 font-baloo">To build, launch, and scale your online store</p>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <ul className="space-y-3 text-left font-baloo mb-8">
                  <li className="flex items-start">
                    <span><strong>Optimized for Sales & Conversion:</strong> User-friendly stores designed to turn visitors into customers.</span>
                  </li>
                  <li className="flex items-start">
                    <span><strong>Scalable Shopify Expertise:</strong> Leveraging a leading platform for robust growth and easy management.</span>
                  </li>
                  <li className="flex items-start">
                    <span><strong>Brand-Aligned Storefront:</strong> Beautifully designed to perfectly match your brand identity.</span>
                  </li>
                </ul>
                <div className="mt-auto">
                  <Link to="/contact" className="inline-block">
                    <Button variant="primary" className="px-8 bg-black hover:bg-black">Get an E-commerce Quote</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Web Applications Card */}
            <Card className="text-center border border-gray-100 flex flex-col">
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-4">
                  <Layers className="h-12 w-12 text-blue-500" />
                </div>
                <CardTitle className="text-2xl font-comfortaa mb-2">Web Applications</CardTitle>
                <div className="mb-1">
                  <span className="text-3xl font-baloo font-bold">Custom</span>
                </div>
                <p className="text-gray-600 font-baloo">For unique challenges requiring custom-built digital solutions</p>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <ul className="space-y-3 text-left font-baloo mb-8">
                  <li className="flex items-start">
                    <span><strong>Custom-Built Functionality:</strong> Engineered to solve your specific business challenges.</span>
                  </li>
                  <li className="flex items-start">
                    <span><strong>Intuitive User Experience (UX):</strong> Ensuring ease of use, even for complex systems.</span>
                  </li>
                  <li className="flex items-start">
                    <span><strong>Scalable & Secure Architecture:</strong> Built for reliable performance, security, and future growth.</span>
                  </li>
                </ul>
                <div className="mt-auto">
                  <Link to="/contact" className="inline-block">
                    <Button variant="primary" className="px-8 bg-black hover:bg-black">Discuss Your Application</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
          
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
      </div>
    </section>
  );
};

export default PricingSection;
