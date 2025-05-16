
import React from 'react';
import { useParams } from 'react-router-dom';
import BreadcrumbNav from '../components/BreadcrumbNav';

const ServiceDetail: React.FC = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  
  return (
    <div className="service-detail-page">
      <BreadcrumbNav 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: serviceSlug ? serviceSlug.replace(/-/g, ' ') : 'Service', href: `/services/${serviceSlug}`, isCurrent: true }
        ]}
      />
      
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Service: {serviceSlug ? serviceSlug.replace(/-/g, ' ') : ''}</h1>
        <p className="text-lg">Detailed information about this service will be available soon.</p>
      </div>
    </div>
  );
};

export default ServiceDetail;
