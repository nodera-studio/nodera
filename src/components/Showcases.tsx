
import React from 'react';
import ShowcasesTitle from './showcases/ShowcasesTitle';
import ShowcaseCard from './showcases/ShowcaseCard';
import styles from './styles/Showcases.module.css';
import { motion } from 'framer-motion';

const Showcases = () => {
  return (
    <div className="bg-white py-24 md:py-32 lg:py-40 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <ShowcasesTitle />

        {/* Showcase cards with refined animation */}
        <div className={`${styles.cardStackContainer} space-y-28 md:space-y-36`}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <ShowcaseCard
              title="Museum CMS Platform"
              description="The behind-the-scenes system that powers museum mobile guides, intuitive for staff, informative for visitors. Designed with meticulous attention to usability and accessibility, creating seamless experiences for cultural institutions worldwide."
              imageSrc="/lovable-uploads/nous-cms.png"
              imageAlt="Museum CMS Platform"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <ShowcaseCard
              title="Furnihaus Collection"
              description="Where craftsmanship meets digital presence. Elegantly showcasing custom furniture and connecting artisans with clients. Our platform highlights the unique stories behind each piece while providing an intuitive browsing experience for discriminating collectors."
              imageSrc="/lovable-uploads/8379e5c3-25c3-48da-9e3b-916491ac1570.png"
              imageAlt="Furnihaus Collection"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Showcases;
