import React from 'react';
import ShowcasesTitle from './showcases/ShowcasesTitle';
import ShowcaseCard from './showcases/ShowcaseCard';
import styles from './styles/Showcases.module.css';

const Showcases = () => {
  return (
    <div className="bg-white py-16 md:py-24 lg:py-32 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <ShowcasesTitle />

        {/* Showcase cards (static, no animation) */}
        <div className={`${styles.cardStackContainer} space-y-20`}>
          <ShowcaseCard
            title="Museum CMS Platform"
            description="The behind-the-scenes system that powers museum mobile guides, intuitive for staff, informative for visitors."
            imageSrc="/lovable-uploads/nous-cms.png"
            imageAlt="Museum CMS Platform"
          />

          <ShowcaseCard
            title="Furnihaus Collection"
            description="Where craftsmanship meets digital presence. Elegantly showcasing custom furniture and connecting artisans with clients."
            imageSrc="/lovable-uploads/8379e5c3-25c3-48da-9e3b-916491ac1570.png"
            imageAlt="Furnihaus Collection"
          />
        </div>
      </div>
    </div>
  );
};

export default Showcases;
