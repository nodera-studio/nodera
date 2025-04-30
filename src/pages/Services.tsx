
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import Portfolio from '../components/Portfolio';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const serviceCategories = {
  websites: [
    {
      title: "Portfolio Websites",
      description: "Showcase your work with elegant, responsive design"
    },
    {
      title: "E-commerce Websites",
      description: "Sell products online with powerful shopping features"
    },
    {
      title: "Agency Websites",
      description: "Professional presence for service-based businesses"
    },
    {
      title: "Presentation Sites",
      description: "Sleek landing pages to promote products/services"
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

const ServiceCard = ({ title, description }: { title: string; description: string }) => (
  <Card className="h-full">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-base">{description}</CardDescription>
    </CardContent>
  </Card>
);

const Services = () => {
  const [activeTab, setActiveTab] = useState("websites");

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
            <Tabs 
              defaultValue="websites" 
              className="w-full" 
              onValueChange={setActiveTab}
              value={activeTab}
            >
              <TabsList className="grid w-full max-w-md mx-auto mb-12 grid-cols-2">
                <TabsTrigger value="websites">Website Services</TabsTrigger>
                <TabsTrigger value="applications">Web Application Services</TabsTrigger>
              </TabsList>
              <TabsContent value="websites" className="mt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  {serviceCategories.websites.map((service, index) => (
                    <ServiceCard
                      key={index}
                      title={service.title}
                      description={service.description}
                    />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="applications" className="mt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  {serviceCategories.applications.map((service, index) => (
                    <ServiceCard
                      key={index}
                      title={service.title}
                      description={service.description}
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
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

      <Footer />
    </div>
  );
};

export default Services;
