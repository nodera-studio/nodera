
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import BreadcrumbNav from '../components/BreadcrumbNav';
import { Button } from "@/components/ui/button";
import { CheckIcon } from 'lucide-react';
import serviceCategories, { ServiceItem } from '../data/serviceData';
import { cn } from "@/lib/utils";

const ServiceDetail: React.FC = () => {
  // Get the service slug from URL params
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  
  // Find the service data that matches the slug
  const service = serviceCategories.mainServices.find(
    service => convertToSlug(service.title) === serviceSlug
  );

  // If service not found, show a not found message
  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-[60px] flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-3xl font-comfortaa font-bold mb-4">Service Not Found</h1>
            <p className="mb-6">We couldn't find the service you're looking for.</p>
            <Button asChild>
              <Link to="/services">Back to Services</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Function to create slugs from titles
  function convertToSlug(title: string): string {
    return title
      .toLowerCase()
      .replace(/[^\w ]+/g, '')
      .replace(/ +/g, '-');
  }

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-gray-50">
      <Header />
      <main className="relative flex-grow pt-[60px]">
        {/* Hero Section */}
        <PageHero
          title={service.title}
          subtitle={service.description}
        />

        {/* Service Detail Content */}
        <section className="py-16 md:py-20 lg:py-24 px-4 sm:px-6">
          <div className="container mx-auto max-w-4xl">
            {/* Breadcrumb navigation */}
            <BreadcrumbNav 
              items={[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/services' },
                { label: service.title, isCurrent: true }
              ]} 
            />

            {/* Full Description */}
            <div className="mb-16">
              <p className="text-[17px] font-comfortaa leading-relaxed text-[#1D1D1F]">
                {service.fullDescription}
              </p>
            </div>

            {/* Design Approach */}
            {service.designApproach && (
              <div className="mb-16">
                <h2 className="text-2xl font-comfortaa font-bold text-[#1D1D1F] mb-4">
                  Our Design Approach
                </h2>
                <p className="text-[17px] font-comfortaa leading-relaxed text-[#1D1D1F]">
                  {service.designApproach}
                </p>
              </div>
            )}

            {/* Technology Options */}
            {service.technologyOptions && service.technologyOptions.length > 0 && (
              <div className="mb-16">
                <h2 className="text-2xl font-comfortaa font-bold text-[#1D1D1F] mb-4">
                  {service.title === 'E-commerce Solutions' ? 'Core Platform' : 'Technologies We Use'}
                </h2>
                <div className="space-y-6">
                  {service.technologyOptions.map((tech, index) => (
                    <div 
                      key={index} 
                      className="bg-white rounded-xl p-6 border border-gray-100"
                    >
                      <h3 className="text-xl font-comfortaa font-bold text-[#1D1D1F] mb-2">
                        {tech.name}
                      </h3>
                      <p className="text-[15px] font-comfortaa text-[#1D1D1F] leading-relaxed">
                        {tech.description}
                      </p>
                    </div>
                  ))}
                </div>
                {service.title === 'Websites' && (
                  <p className="text-[14px] text-[#6E6E73] mt-4 italic font-comfortaa">
                    *(Platform choice impacts cost and timeline. We'll guide you to the best fit.)*
                  </p>
                )}
                {service.title === 'Web Applications' && (
                  <p className="text-[14px] text-[#6E6E73] mt-4 italic font-comfortaa">
                    *(The specific architecture and stack are chosen collaboratively based on detailed project analysis to ensure optimal performance, scalability, and maintainability.)*
                  </p>
                )}
              </div>
            )}

            {/* What's Included */}
            {service.standardInclusions && service.standardInclusions.length > 0 && (
              <div className="mb-16">
                <h2 className="text-2xl font-comfortaa font-bold text-[#1D1D1F] mb-4">
                  What's Included
                </h2>
                <div className={cn(
                  "grid gap-3",
                  service.standardInclusions.length > 5 ? "md:grid-cols-2" : "grid-cols-1"
                )}>
                  {service.standardInclusions.map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-start"
                    >
                      <CheckIcon className="h-5 w-5 mr-3 mt-[3px] text-blue-600 flex-shrink-0" />
                      <span className="text-[16px] font-comfortaa text-[#1D1D1F]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Available Add-ons */}
            {service.optionalAddOns && (
              <div className="mb-16">
                <h2 className="text-2xl font-comfortaa font-bold text-[#1D1D1F] mb-4">
                  Available Add-ons
                </h2>
                <p className="text-[17px] font-comfortaa leading-relaxed text-[#1D1D1F]">
                  {service.optionalAddOns}
                </p>
              </div>
            )}

            {/* Ideal For */}
            {service.idealFor && (
              <div className="mb-16 bg-white rounded-xl p-6 border border-gray-100">
                <h2 className="text-2xl font-comfortaa font-bold text-[#1D1D1F] mb-4">
                  Who Is This For?
                </h2>
                <p className="text-[17px] font-comfortaa leading-relaxed text-[#1D1D1F]">
                  {service.idealFor}
                </p>
              </div>
            )}

            {/* CTA Section */}
            <div className="text-center mt-16">
              <h2 className="text-2xl font-comfortaa font-bold text-[#1D1D1F] mb-4">
                Ready to get started?
              </h2>
              <p className="text-[17px] font-comfortaa text-[#6E6E73] mb-8 max-w-md mx-auto">
                Let's discuss how we can help bring your {service.title.toLowerCase()} project to life.
              </p>
              <Button asChild size="lg" className="font-comfortaa">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
