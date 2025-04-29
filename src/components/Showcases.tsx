
import React, { useEffect, useRef } from 'react';
import { useIsMobile } from '../hooks/use-mobile';
import styles from './styles/Showcases.module.css';
import { useTransform } from 'framer-motion';
import ShowcaseCard from './showcases/ShowcaseCard';
import { useCardAnimation } from './showcases/useCardAnimation';
import { useScrollEvents } from './showcases/useScrollEvents';
import { useCenterDetection } from './showcases/useCenterDetection';
import ShowcasesTitle from './showcases/ShowcasesTitle';

const Showcases = () => {
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const {
    firstCardRef,
    touchStartY,
    animationState,
    setAnimationState,
    isCenterTriggerActive,
    canAnimateOnCenter,
    customScrollProgress,
    smoothProgress,
    handleInteraction,
    cleanUp
  } = useCardAnimation();
  
  // Setup scroll and touch event handlers
  useScrollEvents({
    animationState,
    handleInteraction,
    isCenterTriggerActive,
    touchStartY,
    isMobile
  });
  
  // Setup center detection
  useCenterDetection({
    containerRef,
    firstCardRef,
    animationState,
    setAnimationState,
    isCenterTriggerActive,
    canAnimateOnCenter,
    isMobile
  });
  
  // Transform values for the second card based on our custom progress
  const secondCardY = useTransform(
    smoothProgress,
    [0, 1],
    ['100%', '0%']
  );
  
  const secondCardOpacity = useTransform(
    smoothProgress,
    [0, 0.1, 1],
    [0, 1, 1]
  );
  
  // Scale effect for first card when second card is coming on top
  const firstCardScale = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [1, 0.98, 0.95]
  );
  
  // Clean up on unmount
  useEffect(() => {
    return cleanUp;
  }, [cleanUp]);
  
  // --- Determine current visual state ---
  const showSecondCard = animationState !== 'idle';
  const applyScaling = animationState !== 'idle';
  const disableHover = animationState !== 'idle';

  return (
    <div className="bg-white py-16 md:py-24 lg:py-32 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <ShowcasesTitle />
        
        <div 
          ref={containerRef} 
          className={`${styles.cardStackContainer} relative`}
          aria-live="polite"
        >
          {/* First Card - Always visible but scales when second card appears */}
          <ShowcaseCard
            ref={firstCardRef}
            title="Museum CMS Platform"
            description="The behind-the-scenes system that powers museum mobile guides, intuitive for staff, informative for visitors."
            imageSrc="/lovable-uploads/nous-cms.png"
            imageAlt="Museum CMS Platform"
            disableHover={disableHover}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            style={{ 
              scale: applyScaling ? firstCardScale : 1,
              position: 'sticky', 
              // Adjust position to be more visible on mobile
              top: isMobile ? '15vh' : '20vh',
              zIndex: 10,
            }}
          />
          
          {/* Second Card - Animated to stack/unstack with parallax effect */}
          <ShowcaseCard
            title="Furnihaus Collection"
            description="Where craftsmanship meets digital presence. Elegantly showcasing custom furniture and connecting artisans with clients."
            imageSrc="/lovable-uploads/8379e5c3-25c3-48da-9e3b-916491ac1570.png"
            imageAlt="Furnihaus Collection"
            disableHover={disableHover}
            className="absolute w-full top-0 left-0"
            style={{
              y: secondCardY,
              opacity: secondCardOpacity,
              // Conditionally increase z-index higher than divider (50)
              zIndex: showSecondCard ? 60 : 20, 
              pointerEvents: showSecondCard ? 'auto' : 'none',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Showcases;
