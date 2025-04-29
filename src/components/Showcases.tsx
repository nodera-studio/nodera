
import React, { useEffect, useRef } from 'react';
import { useIsMobile } from '../hooks/use-mobile';
import styles from './styles/Showcases.module.css';
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from 'framer-motion';

const Showcases = () => {
  const isMobile = useIsMobile();
  const sectionTitleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const firstCardRef = useRef<HTMLDivElement>(null);
  
  // Scroll animation setup
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Transform values for the second card based on scroll position
  const secondCardY = useTransform(scrollYProgress, 
    [0.1, 0.3, 0.7, 0.9], 
    ['100%', '0%', '0%', '-100%']
  );
  
  const secondCardOpacity = useTransform(scrollYProgress,
    [0.05, 0.2, 0.8, 0.95],
    [0, 1, 1, 0]
  );

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    
    if (sectionTitleRef.current) {
      observer.observe(sectionTitleRef.current);
    }
    
    return () => {
      if (sectionTitleRef.current) {
        observer.unobserve(sectionTitleRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-white py-16 md:py-24 lg:py-32 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between items-center mb-12 md:mb-16 lg:mb-20 gap-4">
          <h2 ref={sectionTitleRef} className="text-black section-title">
            Digital <span className="gradient-word">Showcases</span>
          </h2>
          <a 
            href="#" 
            className={styles.hideOnMobile + " view-all-link"}
          >
            View All →
          </a>
        </div>
        
        <div ref={containerRef} className="flex flex-col gap-8 lg:gap-12 relative">
          {/* First Card - Always visible */}
          <motion.div 
            ref={firstCardRef}
            className={`${styles.showcaseCard} z-10`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
              <div className="lg:w-1/2 space-y-4 order-2 lg:order-1">
                <h3 className="">Museum CMS Platform</h3>
                <p className="text-gray-600 mb-3">
                  The behind-the-scenes system that powers museum mobile guides, intuitive for staff, informative for visitors.
                </p>
                <div className="flex flex-wrap gap-4 mt-3">
                  <Button
                    variant="primary"
                    size="lg"
                    asChild
                  >
                    <a href="#">The Full Story</a>
                  </Button>
                  <Button
                    variant="secondary"
                    size="lg"
                    asChild
                  >
                    <a href="#">More Creations</a>
                  </Button>
                </div>
              </div>
              <div className="lg:w-1/2 order-1 lg:order-2">
                <img 
                  src="/lovable-uploads/nous-cms.png" 
                  alt="Museum CMS Platform" 
                  className="showcase-image rounded-xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>
          
          {/* Second Card - Animated to stack/unstack */}
          <motion.div 
            className={`${styles.showcaseCard} absolute w-full`}
            style={{ 
              y: secondCardY,
              opacity: secondCardOpacity,
              zIndex: 20
            }}
            transition={{ type: "spring", stiffness: 50 }}
          >
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
              <div className="lg:w-1/2 space-y-4 order-2 lg:order-1">
                <h3 className="">Furnihaus Collection</h3>
                <p className="text-gray-600 mb-3">
                  Where craftsmanship meets digital presence. Elegantly showcasing custom furniture and connecting artisans with clients.
                </p>
                <div className="flex flex-wrap gap-4 mt-3">
                  <Button
                    variant="primary"
                    size="lg"
                    asChild
                  >
                    <a href="#">The Full Story</a>
                  </Button>
                  <Button
                    variant="secondary"
                    size="lg"
                    asChild
                  >
                    <a href="#">More Creations</a>
                  </Button>
                </div>
              </div>
              <div className="lg:w-1/2 order-1 lg:order-2">
                <img 
                  src="/lovable-uploads/8379e5c3-25c3-48da-9e3b-916491ac1570.png" 
                  alt="Furnihaus Collection" 
                  className="showcase-image rounded-xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Showcases;
