
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WorkHero from '../components/work/WorkHero';
import ProjectCard from '../components/work/ProjectCard';
import { projectsData } from '../data/projectsData';

const Work: React.FC = () => {
  // Group projects by category for rendering in sections
  const webApplications = projectsData.filter(project => project.category === 'Web Applications');
  const websites = projectsData.filter(project => project.category === 'Websites');

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-gray-50">
      <Header />
      <main className="relative flex-grow pt-[60px]">
        {/* Hero Section */}
        <WorkHero />
        
        {/* Project Grid Section - Added significant top padding to accommodate the overlapping showcase */}
        <section className="pt-[280px] md:pt-[320px] pb-16 md:pb-24 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            {/* Web Applications Section */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-comfortaa font-bold mb-8 border-b pb-4">Web Applications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {webApplications.map((project) => (
                  <ProjectCard 
                    key={project.id}
                    project={project}
                  />
                ))}
              </div>
            </div>

            {/* Websites Section */}
            <div>
              <h2 className="text-2xl md:text-3xl font-comfortaa font-bold mb-8 border-b pb-4">Websites</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {websites.map((project) => (
                  <ProjectCard 
                    key={project.id}
                    project={project}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Client Logos Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-comfortaa font-bold text-center mb-12">Trusted by Leading Brands</h2>
            
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 max-w-4xl mx-auto">
              {/* Client logos would go here */}
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <div className="text-gray-400 text-xs">Client Logo</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Work;
