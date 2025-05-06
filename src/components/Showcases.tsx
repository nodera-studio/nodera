
import React from 'react';
import SectionTitle from './ui/SectionTitle';
import ShowcaseCard from './showcases/ShowcaseCard';
import styles from './styles/Showcases.module.css';
import { useBreakpoint } from '@/hooks/use-mobile';
import { motion } from 'framer-motion';

const Showcases = () => {
  const breakpoint = useBreakpoint();
  
  // Determine if we should use column layout
  const isColumnLayout = breakpoint === 'mobile' || breakpoint === 'small_tablet' || breakpoint === 'tablet';

  return (
    <div className="bg-white w-full py-0 md:py-6">
      <SectionTitle title="Digital Showcases" />

      <motion.div 
        className={`flex flex-col ${isColumnLayout ? '' : 'md:flex-row'} gap-2.5 px-2.5 md:px-4 lg:px-6 xl:px-8`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full"
        >
          <ShowcaseCard
            title="Museum CMS Platform"
            description="The behind-the-scenes system that powers museum mobile guides, intuitive for staff, informative for visitors."
            imageSrc="/lovable-uploads/nous-cms.png"
            imageAlt="Museum CMS Platform"
            gradientDirection="to-br"
            gradientColor="from-purple-300"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full"
        >
          <ShowcaseCard
            title="Furnihaus Collection"
            description="Where craftsmanship meets digital presence. Elegantly showcasing custom furniture and connecting artisans with clients."
            imageSrc="/lovable-uploads/furnihaus.png"
            imageAlt="Furnihaus Collection"
            gradientDirection="to-bl"
            gradientColor="from-blue-500"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Showcases;
