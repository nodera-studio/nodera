import React from 'react';
// import ShowcasesTitle from './showcases/ShowcasesTitle'; // Old import
import SectionTitle from './ui/SectionTitle'; // New import
import ShowcaseCard from './showcases/ShowcaseCard';
import styles from './styles/Showcases.module.css';

const Showcases = () => {
  return (
    <div className="bg-white">
      {/* <ShowcasesTitle /> */}
      <SectionTitle title="Digital Showcases" />

      <div className="flex flex-col md:flex-row gap-2.5 px-2.5">
        <ShowcaseCard
          title="Museum CMS Platform"
          description="The behind-the-scenes system that powers museum mobile guides, intuitive for staff, informative for visitors."
          imageSrc="/lovable-uploads/nous-cms.png"
          imageAlt="Museum CMS Platform"
          gradientDirection="to-br"
          gradientColor="from-purple-300"
        />

        <ShowcaseCard
          title="Furnihaus Collection"
          description="Where craftsmanship meets digital presence. Elegantly showcasing custom furniture and connecting artisans with clients."
          imageSrc="/lovable-uploads/furnihaus.png"
          imageAlt="Furnihaus Collection"
          gradientDirection="to-bl"
          gradientColor="from-blue-500"
        />
      </div>
    </div>
  );
};

export default Showcases;
