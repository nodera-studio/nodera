
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Project } from '../../data/projectsData';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="p-6 flex flex-col h-full">
        {/* Top section with category and title */}
        <div className="mb-4">
          <span className="text-sm font-medium text-blue-600 mb-2 block">{project.subcategory}</span>
          <h3 className="text-xl font-comfortaa font-bold mb-3">{project.title}</h3>
        </div>
        
        {/* Description */}
        <p className="text-gray-600 font-baloo mb-4 flex-grow">{project.description}</p>
        
        {/* CTA */}
        <Link 
          to={`/work/${project.slug}`}
          className="font-baloo font-medium inline-flex items-center transition-colors duration-200 text-blue-500 hover:text-blue-600 mb-6"
        >
          Learn more
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
        
        {/* Image */}
        <div className="mt-auto rounded-md overflow-hidden">
          <img 
            src={project.imageSrc} 
            alt={project.title} 
            className="w-full h-auto object-cover transform transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
