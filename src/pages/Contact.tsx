
import React from 'react';
import BreadcrumbNav from '../components/BreadcrumbNav';

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <BreadcrumbNav 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Contact', href: '/contact', isCurrent: true }
        ]}
      />
      
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <p className="text-lg">Contact information will be available soon.</p>
      </div>
    </div>
  );
};

export default Contact;
