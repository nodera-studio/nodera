
import React, { useEffect, useRef, useState } from 'react';
import { useIsMobile } from '../hooks/use-mobile';
import styles from './styles/Showcases.module.css';
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

const Showcases = () => {
  const isMobile = useIsMobile();
  const sectionTitleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const firstCardRef = useRef<HTMLDivElement>(null);
  const [isFirstCardCentered, setIsFirstCardCentered] = useState(false);
  
  // Main scroll animation setup
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // First card scroll effect - to create the pause effect
  const firstCardScrollEffect = useScroll({
    target: firstCardRef,
    offset: ["center center", "start start"] 
  });
  
  // Use this to detect when first card is centered in viewport
  useMotionValueEvent(firstCardScrollEffect.scrollYProgress, "change", (latest) => {
    // When scrollYProgress is close to 0.5, the card is centered
    if (latest >= 0.4 && latest <= 0.6) {
      setIsFirstCardCentered(true);
    } else {
      setIsFirstCardCentered(false);
    }
  });
  
  // Transform values for the second card based on scroll position
  // Adjusted to create the "wait until first card is centered" effect
  const secondCardY = useTransform(
    scrollYProgress, 
    [0.3, 0.45, 0.55, 0.7], // Shifted values to create the pause effect
    ['100%', '50%', '0%', '-100%']
  );
  
  const secondCardOpacity = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.6, 0.7],
    [0, 1, 1, 0]
  );
  
  // Scale effect for first card when second card is coming on top
  const firstCardScale = useTransform(
    scrollYProgress,
    [0.3, 0.45, 0.55, 0.7],
    [1, 1, 0.95, 0.95]
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
        
        <div 
          ref={containerRef} 
          className="flex flex-col gap-8 lg:gap-12 relative min-h-[600px] lg:min-h-[500px]"
          style={{ 
            perspective: '1000px', // Add 3D perspective for more depth
            position: 'relative'
          }}
        >
          {/* First Card - Always visible but scales when second card appears */}
          <motion.div 
            ref={firstCardRef}
            className={`${styles.showcaseCard} z-10`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            style={{ 
              scale: firstCardScale,
              position: 'sticky', 
              top: '20vh',
              zIndex: isFirstCardCentered ? 30 : 10,
            }}
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
          
          {/* Second Card - Animated to stack/unstack with parallax effect */}
          <motion.div 
            className={`${styles.showcaseCard} absolute w-full`}
            style={{ 
              y: secondCardY,
              opacity: secondCardOpacity,
              zIndex: 20,
              position: 'relative',
            }}
            transition={{ 
              type: "spring", 
              stiffness: 70, 
              damping: 20 
            }}
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
