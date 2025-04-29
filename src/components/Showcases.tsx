
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useIsMobile } from '../hooks/use-mobile';
import styles from './styles/Showcases.module.css';
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, useMotionValueEvent, useSpring, useMotionValue } from 'framer-motion';

const Showcases = () => {
  const isMobile = useIsMobile();
  const sectionTitleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const firstCardRef = useRef<HTMLDivElement>(null);
  const touchStartY = useRef<number | null>(null);
  
  // State management
  const [isCardCentered, setIsCardCentered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasAnimationCompleted, setHasAnimationCompleted] = useState(false);
  
  // Custom scroll progress value that we'll control
  const customScrollProgress = useMotionValue(0);
  const smoothProgress = useSpring(customScrollProgress, { damping: 30, stiffness: 90 });
  
  // Main scroll animation setup for detecting overall position
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // First card scroll effect - to detect when centered in viewport
  const firstCardScrollEffect = useScroll({
    target: firstCardRef,
    offset: ["center center", "start start"] 
  });
  
  // Transform values for the second card based on our custom progress
  const secondCardY = useTransform(
    smoothProgress,
    [0, 1],
    ['100%', '0%']
  );
  
  const secondCardOpacity = useTransform(
    smoothProgress,
    [0, 0.3, 1],
    [0, 1, 1]
  );
  
  // Scale effect for first card when second card is coming on top
  const firstCardScale = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [1, 0.98, 0.95]
  );
  
  // Detect when first card is centered in viewport
  useMotionValueEvent(firstCardScrollEffect.scrollYProgress, "change", (latest) => {
    // When scrollYProgress is close to 0.5, the card is centered
    if (latest >= 0.45 && latest <= 0.55) {
      setIsCardCentered(true);
    } else {
      setIsCardCentered(false);
    }
  });
  
  // Handle wheel events during animation
  const handleWheelEvent = useCallback((e: WheelEvent) => {
    if (!isAnimating) return;
    
    e.preventDefault();
    
    // Use wheel delta to drive animation progress
    const delta = e.deltaY;
    const progressStep = delta * 0.0015; // Adjust sensitivity
    const newProgress = Math.max(0, Math.min(1, customScrollProgress.get() + progressStep));
    customScrollProgress.set(newProgress);
    
    // When animation completes
    if (newProgress >= 1) {
      setHasAnimationCompleted(true);
      setIsAnimating(false);
      document.body.classList.remove(styles.bodyScrollLocked);
    }
    
    // When scrolling back up from completed state
    if (newProgress <= 0 && hasAnimationCompleted) {
      setHasAnimationCompleted(false);
      setIsAnimating(false);
      document.body.classList.remove(styles.bodyScrollLocked);
    }
  }, [isAnimating, hasAnimationCompleted, customScrollProgress]);
  
  // Handle touch events for mobile
  const handleTouchStart = useCallback((e: TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  }, []);
  
  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!touchStartY.current || !isAnimating) return;
    
    e.preventDefault();
    
    const touchY = e.touches[0].clientY;
    const deltaY = touchStartY.current - touchY;
    touchStartY.current = touchY;
    
    const progressStep = deltaY * 0.003; // Adjust sensitivity for touch
    const newProgress = Math.max(0, Math.min(1, customScrollProgress.get() + progressStep));
    customScrollProgress.set(newProgress);
    
    // When animation completes
    if (newProgress >= 1) {
      setHasAnimationCompleted(true);
      setIsAnimating(false);
      document.body.classList.remove(styles.bodyScrollLocked);
    }
    
    // When scrolling back up from completed state
    if (newProgress <= 0 && hasAnimationCompleted) {
      setHasAnimationCompleted(false);
      setIsAnimating(false);
      document.body.classList.remove(styles.bodyScrollLocked);
    }
  }, [isAnimating, hasAnimationCompleted, customScrollProgress]);
  
  const handleTouchEnd = useCallback(() => {
    touchStartY.current = null;
  }, []);
  
  // Watch for when card is centered to start animation
  useEffect(() => {
    if (isCardCentered && !isAnimating && !hasAnimationCompleted) {
      setIsAnimating(true);
      document.body.classList.add(styles.bodyScrollLocked);
    }
  }, [isCardCentered, isAnimating, hasAnimationCompleted]);
  
  // Add and remove event listeners for scroll control
  useEffect(() => {
    if (isAnimating) {
      if (isMobile) {
        window.addEventListener('touchstart', handleTouchStart, { passive: false });
        window.addEventListener('touchmove', handleTouchMove, { passive: false });
        window.addEventListener('touchend', handleTouchEnd);
      } else {
        window.addEventListener('wheel', handleWheelEvent, { passive: false });
      }
    }
    
    return () => {
      if (isMobile) {
        window.removeEventListener('touchstart', handleTouchStart);
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleTouchEnd);
      } else {
        window.removeEventListener('wheel', handleWheelEvent);
      }
    };
  }, [isAnimating, handleWheelEvent, handleTouchStart, handleTouchMove, handleTouchEnd, isMobile]);
  
  // Clean up on unmount
  useEffect(() => {
    return () => {
      document.body.classList.remove(styles.bodyScrollLocked);
    };
  }, []);
  
  // Fade in effect for section title
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
          className={`${styles.cardStackContainer} relative min-h-[600px] lg:min-h-[500px]`}
          aria-live="polite"
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
              scale: (isAnimating || hasAnimationCompleted) ? firstCardScale : 1,
              position: 'sticky', 
              top: '20vh',
              zIndex: isCardCentered ? 30 : 10,
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
              y: (isAnimating || hasAnimationCompleted) ? secondCardY : '100%',
              opacity: (isAnimating || hasAnimationCompleted) ? secondCardOpacity : 0,
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
