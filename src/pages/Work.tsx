
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import WorkHero from '../components/work/WorkHero';
import { Link } from 'react-router-dom';

const Work: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-gray-50">
      <Header />
      <main className="relative flex-grow pt-[60px]">
        {/* Hero Section */}
        <WorkHero />
        
        {/* Project Grid Section - Added significant top padding to accommodate the overlapping showcase */}
        <section className="pt-[240px] md:pt-[320px] pb-16 md:pb-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-comfortaa font-bold text-center mb-16">Featured Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Project cards would go here */}
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  {/* Project image would go here */}
                  <div className="w-full h-0 pt-[56.25%] relative">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500">Project Image</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-comfortaa font-bold mb-2">Project Name</h3>
                  <p className="text-gray-600 font-baloo mb-4">Brief description of the project and what was accomplished.</p>
                  <Link 
                    to="/work/project-name"
                    className="font-baloo font-medium inline-flex items-center transition-colors duration-200 text-blue-500 hover:text-blue-600"
                  >
                    View Case Study
                  </Link>
                </div>
              </div>
              
              {/* Repeat for other projects */}
              {/* More project cards would be added dynamically in a real implementation */}
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
