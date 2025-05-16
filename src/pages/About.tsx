
import React from 'react';
import BreadcrumbNav from '../components/BreadcrumbNav';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <BreadcrumbNav 
        items={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about', isCurrent: true }
        ]}
      />
      
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <p className="text-lg">Information about our company will be available soon.</p>
      </div>
    </div>
  );
};

export default About;
