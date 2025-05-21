import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Search, Star, MoreHorizontal } from 'lucide-react';
import { Project } from '../../data/projectsData';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-[#f9f9f9] overflow-hidden">
      <div className="p-8 flex flex-col items-center text-center">
        {/* Top section with category and title */}
        <div className="mb-4">
          <span className="text-sm font-semibold text-gray-600 mb-3 block font-baloo">{project.subcategory}</span>
          <h3 className="text-3xl font-baloo font-bold mb-4">{project.title}</h3>
        </div>
        
        {/* Description - slightly increased font size */}
        <p className="text-gray-600 font-baloo text-base mb-4 max-w-prose mx-auto">{project.description}</p>
        
        {/* CTA */}
        <Link 
          to={`/work/${project.slug}`}
          className="font-baloo font-medium inline-flex items-center text-blue-500 hover:text-blue-600 mb-6"
        >
          Learn more
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
        
        {/* Enhanced Browser UI Mockup */}
        <div className="mt-2 w-full max-w-[450px] border border-gray-200 overflow-hidden shadow-sm rounded-t-xl">
          {/* Browser Top Bar with window dots, address bar and icons */}
          <div className="bg-[#f3f3f3] border-b border-gray-200 p-2 flex items-center">
            {/* Window management dots */}
            <div className="flex items-center gap-1.5 mr-4 ml-1">
              <div className="w-3 h-3 rounded-full bg-[#ea384c]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd44]"></div>
              <div className="w-3 h-3 rounded-full bg-[#00ca4e]"></div>
            </div>
            
            {/* Address bar with project title */}
            <div className="flex-grow flex items-center bg-[#e1e1e1] rounded-md px-2 py-1 mx-1">
              <Globe className="h-3.5 w-3.5 text-gray-500 mr-1.5" />
              <span className="text-xs text-gray-700 font-medium truncate">{project.title}</span>
            </div>
            
            {/* Browser action icons */}
            <div className="flex items-center ml-2 gap-3">
              <Search className="h-3.5 w-3.5 text-gray-500" />
              <Star className="h-3.5 w-3.5 text-gray-500" />
              <MoreHorizontal className="h-3.5 w-3.5 text-gray-500" />
            </div>
          </div>
          
          {/* Browser Content Area with scrollable image */}
          <div className="bg-white h-[240px] overflow-auto">
            <img 
              src="/lovable-uploads/nodera.webp" 
              alt={project.title}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
