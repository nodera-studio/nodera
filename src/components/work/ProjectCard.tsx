
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
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
        
        {/* Image - replaced browser window with direct image */}
        <div className="mt-2 w-full max-w-[450px]">
          <img 
            src="/lovable-uploads/nous.svg" 
            alt={project.title}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
