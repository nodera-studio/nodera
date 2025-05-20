
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WorkHero from '../components/work/WorkHero';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';
import CallToActionSection from '../components/service/CallToActionSection';

const Work: React.FC = () => {
  // Sample projects data - in a real application, this would come from a data file or API
  const projects = [
    {
      id: 1,
      title: "Furnihaus",
      category: "E-commerce",
      description: "A modern furniture e-commerce platform with a focus on user experience and seamless shopping.",
      image: "/lovable-uploads/furnihaus.png",
      link: "/work/furnihaus"
    },
    {
      id: 2,
      title: "Nous CMS",
      category: "Content Management",
      description: "A powerful content management system built for enterprise needs with advanced publishing workflows.",
      image: "/lovable-uploads/nous-cms.png",
      link: "/work/nous-cms"
    },
    // Additional projects would be added here
  ];
  
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-gray-50">
      <Header />
      <main className="relative flex-grow pt-[60px]">
        {/* Hero Section */}
        <WorkHero />
        
        {/* Projects Grid Section */}
        <section className="py-16 md:py-24" style={{ backgroundColor: '#f1f3fb' }}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-comfortaa font-bold text-center mb-16">Featured Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {projects.map((project) => (
                <Card key={project.id} className="overflow-hidden border-0 bg-white shadow-md rounded-xl">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="text-sm font-baloo font-medium text-blue-600 mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-2xl font-comfortaa font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-5 font-baloo">
                      {project.description}
                    </p>
                    <Link 
                      to={project.link}
                      className="font-baloo font-medium inline-flex items-center transition-colors duration-200"
                      style={{ 
                        color: 'rgba(0, 122, 255, 0.9)'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(0, 122, 255, 1)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(0, 122, 255, 0.9)'}
                    >
                      View case study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* View All Projects link */}
            <div className="text-center mt-16">
              <Link 
                to="/work/all"
                className="font-baloo font-medium inline-flex items-center transition-colors duration-200"
                style={{ 
                  color: 'rgba(0, 122, 255, 0.9)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(0, 122, 255, 1)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(0, 122, 255, 0.9)'}
              >
                View all our projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
        
        {/* Client Logos Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-comfortaa font-bold text-center mb-12 text-gray-700">
              Trusted by innovative companies
            </h2>
            
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 max-w-4xl mx-auto">
              {/* Client logos would go here - using gray placeholders */}
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-24 h-12 md:w-32 md:h-16 bg-gray-200 rounded-md flex items-center justify-center">
                  <span className="text-gray-400 font-medium">Client {i}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Final Call to Action Section */}
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
};

export default Work;
