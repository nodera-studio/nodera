
import React from 'react';
import ShowcasesTitle from './showcases/ShowcasesTitle';
import ShowcaseCard from './showcases/ShowcaseCard';
import styles from './styles/Showcases.module.css';
import { motion } from 'framer-motion';

const Showcases = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <div className="bg-white py-20 md:py-32 lg:py-36 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <ShowcasesTitle />

        {/* Showcase cards with animation */}
        <motion.div 
          className={styles.cardStackContainer}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={cardVariants}>
            <ShowcaseCard
              title="Museum CMS Platform"
              description="The behind-the-scenes system that powers museum mobile guides, intuitive for staff, informative for visitors. Created with a focus on accessibility and ease of use."
              imageSrc="/lovable-uploads/nous-cms.png"
              imageAlt="Museum CMS Platform"
              category="Enterprise Solution"
            />
          </motion.div>

          <motion.div variants={cardVariants}>
            <ShowcaseCard
              title="Furnihaus Collection"
              description="Where craftsmanship meets digital presence. Elegantly showcasing custom furniture and connecting artisans with clients. A minimal design that lets the products speak for themselves."
              imageSrc="/lovable-uploads/8379e5c3-25c3-48da-9e3b-916491ac1570.png"
              imageAlt="Furnihaus Collection"
              category="E-Commerce"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Showcases;
