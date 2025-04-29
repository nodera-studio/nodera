
import React from 'react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHero = ({ title, subtitle, backgroundImage }: PageHeroProps) => {
  const bgStyle = backgroundImage 
    ? { backgroundImage: `url(${backgroundImage})` }
    : {};

  return (
    <div 
      className="relative bg-gray-900 text-white py-16 md:py-24"
      style={bgStyle}
    >
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200">{subtitle}</p>
        )}
      </div>
      {backgroundImage && (
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      )}
    </div>
  );
};

export default PageHero;
