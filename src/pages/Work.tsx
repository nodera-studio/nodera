
import React from 'react';
import BreadcrumbNav from '../components/BreadcrumbNav';

const Work: React.FC = () => {
  return (
    <div className="work-page">
      <BreadcrumbNav 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Work', href: '/work', isCurrent: true }
        ]}
      />
      
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Our Work</h1>
        <p className="text-lg">Information about our work portfolio will be available soon.</p>
      </div>
    </div>
  );
};

export default Work;
