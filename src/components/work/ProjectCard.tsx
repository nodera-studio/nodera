
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Browser } from 'lucide-react';
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
        <p className="text-gray-600 font-baloo text-base mb-4">{project.description}</p>
        
        {/* CTA */}
        <Link 
          to={`/work/${project.slug}`}
          className="font-baloo font-medium inline-flex items-center text-blue-500 hover:text-blue-600 mb-6"
        >
          Learn more
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
        
        {/* Browser UI with image - replaces the previous image */}
        <div className="mt-2 w-full max-w-[450px] border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          {/* Browser Tab UI */}
          <div className="bg-gray-100 border-b border-gray-200 p-2 flex items-center">
            <Browser className="h-4 w-4 text-gray-600 mr-2" />
            <div className="bg-white px-3 py-1 rounded-t-md border-t border-l border-r border-gray-300 text-xs text-gray-700 font-medium flex-shrink-0">
              {project.title}
            </div>
            <div className="flex-grow"></div>
          </div>
          
          {/* Browser Content Area with scrollable image */}
          <div className="bg-white h-[240px] overflow-auto">
            <img 
              src="/lovable-uploads/nous-cms.png" 
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
