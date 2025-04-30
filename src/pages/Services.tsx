import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import Portfolio from '../components/Portfolio';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import ServiceModal from '../components/ServiceModal';

// Service data with expanded information for modals
const serviceCategories = {
  websites: [
    {
      title: "Portfolio Websites",
      description: "Your work. Beautifully showcased on every device.",
      fullDescription: "A professionally designed portfolio website puts your best work front and center, establishing credibility and making a memorable impression on potential clients. We create visually striking, highly functional portfolios that adapt perfectly to any screen size.",
      features: [
        { title: "Custom Visual Design" },
        { title: "Mobile-Responsive Layout" },
        { title: "Content Management System (CMS)" },
        { title: "Optimized Image Galleries" },
        { title: "Contact & Inquiry Forms" },
        { title: "Basic SEO Setup" }
      ],
      idealFor: "Ideal for creative professionals, consultants, photographers, and small studios needing a strong visual showcase."
    },
    {
      title: "E-commerce Websites",
      description: "Sell your products online with a smooth, powerful shopping experience.",
      fullDescription: "Transform your business with a professionally designed online store that makes shopping easy and enjoyable for your customers. Our e-commerce solutions combine beautiful design with powerful functionality to drive conversions and build your brand.",
      features: [
        { title: "Intuitive Product Catalogs" },
        { title: "Secure Payment Processing" },
        { title: "Inventory Management" },
        { title: "Mobile Shopping Experience" },
        { title: "Order Tracking & Notifications" },
        { title: "Analytics Integration" }
      ],
      idealFor: "Perfect for retailers, artisans, and businesses looking to expand their sales channels online."
    },
    {
      title: "Agency Websites",
      description: "Give your service business a professional online presence.",
      fullDescription: "Establish trust and credibility with a polished website that effectively communicates your services, approach, and expertise. We create agency websites that attract clients and provide them with all the information they need to make a decision.",
      features: [
        { title: "Professional Service Pages" },
        { title: "Team & About Sections" },
        { title: "Case Study Showcases" },
        { title: "Client Testimonials" },
        { title: "Contact & Quote Request Forms" },
        { title: "Integration with CRM Systems" }
      ],
      idealFor: "Designed for marketing agencies, consultancies, law firms, and professional service providers."
    },
    {
      title: "Presentation Sites",
      description: "Sleek landing pages that brilliantly showcase your product or service.",
      fullDescription: "Make a powerful first impression with a focused, high-impact landing page that clearly communicates your value proposition and drives visitors toward a specific action. Our presentation sites are optimized for conversions.",
      features: [
        { title: "Compelling Value Proposition" },
        { title: "Streamlined User Journeys" },
        { title: "Clear Call-to-Action Elements" },
        { title: "Performance Optimization" },
        { title: "Analytics & Conversion Tracking" },
        { title: "A/B Testing Support" }
      ],
      idealFor: "Excellent for product launches, startups, events, and focused marketing campaigns."
    }
  ],
  applications: [
    {
      title: "Custom Web Applications",
      description: "Tailored solutions for your specific needs"
    },
    {
      title: "Client Portals",
      description: "Secure platforms for client interaction"
    },
    {
      title: "Content Management",
      description: "Easy-to-use systems to manage your content"
    },
    {
      title: "API Integrations",
      description: "Connect with third-party services and platforms"
    }
  ]
};

const technologies = [
  { name: "NextJS", logo: "/lovable-uploads/html.svg" },
  { name: "Webflow", logo: "/lovable-uploads/webflow.svg" },
  { name: "Framer", logo: "/lovable-uploads/social.svg" },
  { name: "NodeJS", logo: "/lovable-uploads/js.svg" },
  { name: "MongoDB", logo: "/lovable-uploads/supabase-logo-icon.svg" },
];

const ServiceCard = ({ 
  title, 
  description, 
  index,
  onOpenModal 
}: { 
  title: string; 
  description: string; 
  index: number;
  onOpenModal: () => void;
}) => (
  <div 
    onClick={onOpenModal}
    className={cn(
      "bg-white rounded-xl px-7 py-6 transition-all cursor-pointer",
      "border border-[#EAEAEA] hover:shadow-sm mb-6",
      "flex justify-between items-center"
    )}
  >
    <div className="flex-grow">
      <h3 className="font-comfortaa font-bold text-[22px] text-[#1D1D1F] mb-3">
        {title}
      </h3>
      <p className="font-comfortaa font-normal text-[16px] text-[#6E6E73] leading-[1.6]">
        {description}
      </p>
    </div>
    <div className="flex-shrink-0 ml-6">
      <ChevronRight 
        className="text-[#6E6E73] w-5 h-5 group-hover:translate-x-1 transition-transform" 
        aria-hidden="true"
      />
    </div>
  </div>
);

const Services = () => {
  const [activeTab, setActiveTab] = useState("websites");
  const [selectedService, setSelectedService] = useState<null | {
    title: string;
    description: string;
    fullDescription: string;
    features: { title: string }[];
    idealFor?: string;
  }>(null);
  
  const handleOpenModal = (service: typeof selectedService) => {
    setSelectedService(service);
  };
  
  const handleCloseModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />

      <main className="relative flex-grow pt-[60px]">
        <PageHero 
          title="Our Services" 
          subtitle="Tailored digital solutions for your business" 
        />

        <section className="py-16 px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl font-comfortaa font-bold text-center mb-12">Website Services</h2>
            <div className="max-w-3xl mx-auto">
              {serviceCategories.websites.map((service, index) => (
                <ServiceCard
                  key={index}
                  index={index}
                  title={service.title}
                  description={service.description}
                  onOpenModal={() => handleOpenModal(service)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Insert Portfolio section here */}
        <Portfolio />

        <section className="py-16 px-6 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Technologies</h2>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {technologies.map((tech, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <img src={tech.logo} alt={tech.name} className="w-12 h-12" />
                  </div>
                  <span className="mt-3 font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

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

        <section className="py-16 px-6 bg-gray-900 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
            <Button size="lg" asChild>
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </section>
      </main>

      {selectedService && (
        <ServiceModal
          isOpen={!!selectedService}
          onClose={handleCloseModal}
          title={selectedService.title}
          description={selectedService.fullDescription}
          features={selectedService.features}
          idealFor={selectedService.idealFor}
        />
      )}

      <Footer />
    </div>
  );
};

export default Services;
