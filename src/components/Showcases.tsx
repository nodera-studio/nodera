import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useIsMobile } from '../hooks/use-mobile';
import styles from './styles/Showcases.module.css';
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, useMotionValueEvent, useSpring, useMotionValue, MotionValue } from 'framer-motion';

// Define animation states
type AnimationState = 'idle' | 'animating' | 'completed';

const Showcases = () => {
  const isMobile = useIsMobile();
  const sectionTitleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const firstCardRef = useRef<HTMLDivElement>(null);
  const touchStartY = useRef<number | null>(null);
  
  // State management
  const [animationState, setAnimationState] = useState<AnimationState>('idle');
  // Track if the card is *currently* positioned at the center trigger point
  const isCenterTriggerActive = useRef(false);
  // Ref to control if animation can start when centered (prevents immediate restart on scroll up)
  const canAnimateOnCenter = useRef(true);
  // A small cooldown timer ID to automatically re-enable animations after rapid scrolls
  const canAnimateCooldownId = useRef<NodeJS.Timeout | null>(null);
  
  // Custom scroll progress value that we'll control
  const customScrollProgress = useMotionValue(0);
  const smoothProgress = useSpring(customScrollProgress, { damping: 30, stiffness: 90 });
  
  // Main scroll animation setup for detecting overall position
  const { scrollYProgress: mainScrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // First card scroll effect - to detect when centered in viewport
  const { scrollYProgress: firstCardCenterProgress } = useScroll({
    target: firstCardRef,
    offset: ["center center", "end start"] // 0 = center, 1 = end (top)
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
  
  // Handle interaction with scroll
  const handleInteraction = useCallback((delta: number) => {
    const currentProgress = customScrollProgress.get();
    const progressStep = delta * (isMobile ? 0.003 : 0.0015); // Adjust sensitivity
    let newProgress = currentProgress + progressStep;

    console.log(`handleInteraction: delta=${delta.toFixed(2)}, currentProgress=${currentProgress.toFixed(2)}, newProgress=${newProgress.toFixed(2)}, state=${animationState}`);

    // Clamp progress between 0 and 1
    newProgress = Math.max(0, Math.min(1, newProgress));

    // Only update if there's a change (prevents unnecessary updates)
    if (newProgress !== currentProgress) {
        customScrollProgress.set(newProgress);
    }

    // --- State Transitions based on Progress ---
    if (animationState === 'animating') {
      if (newProgress >= 1) {
        console.log("Transition: animating -> completed (progress >= 1)");
        setAnimationState('completed');
        console.log("Unlocking scroll (progress >= 1)");
        document.body.classList.remove(styles.bodyScrollLocked);
      } else if (newProgress <= 0) {
        console.log("Transition: animating -> idle (progress <= 0)");
        setAnimationState('idle');
        console.log("Unlocking scroll (progress <= 0 in animating)");
        document.body.classList.remove(styles.bodyScrollLocked);
        // Prevent immediate re-animation if still centered after scrolling up
        canAnimateOnCenter.current = false; 
        console.log("Set canAnimateOnCenter to false");
        // Start a short cooldown to re-enable animation even if still centered
        if (canAnimateCooldownId.current) clearTimeout(canAnimateCooldownId.current);
        canAnimateCooldownId.current = setTimeout(() => {
          canAnimateOnCenter.current = true;
          console.log("Cooldown elapsed: canAnimateOnCenter reset to true");
        }, 300); // 0.3s cooldown
      }
    } else if (animationState === 'completed') {
        if (newProgress < 1 && newProgress > 0) {
            if (isCenterTriggerActive.current) {
                console.log("Transition: completed -> animating (scrolled back into view)");
                setAnimationState('animating');
                console.log("Locking scroll (re-entering animating)");
                document.body.classList.add(styles.bodyScrollLocked);
            } else {
                 console.log("Condition: In completed, scrolled back (progress < 1), but NOT centered. State remains completed, scroll remains unlocked.")
            }
        } else if (newProgress <= 0) {
            console.log("Transition: completed -> idle (progress <= 0)");
            setAnimationState('idle');
            // Ensure scroll is unlocked, although it should already be
            if (document.body.classList.contains(styles.bodyScrollLocked)) {
                console.warn("Scroll was locked in completed state when progress hit 0. Unlocking now.");
                document.body.classList.remove(styles.bodyScrollLocked);
            }
        }
    }
  }, [customScrollProgress, animationState, isMobile]);
  
  // Handle wheel events during animation
  const handleWheelEvent = useCallback((e: WheelEvent) => {
    // Only PREVENT default scroll when actively animating
    if (animationState === 'animating') {
        console.log("handleWheelEvent: Preventing default scroll (state=animating)");
        e.preventDefault();
        handleInteraction(e.deltaY);
    } 
    // If completed and centered, still handle interaction for scroll-up, but DO NOT prevent default scroll-down.
    else if (animationState === 'completed' && isCenterTriggerActive.current) {
        console.log("handleWheelEvent: Handling interaction for scroll-up, allowing default scroll-down (state=completed, centered)");
        handleInteraction(e.deltaY); // Allow driving progress back down
        // No e.preventDefault() here
    }
    else {
        console.log("handleWheelEvent: Allowing default scroll (state != animating and not (completed+centered))");
    }
  }, [handleInteraction, animationState]);
  
  // Handle touch events for mobile
  const handleTouchStart = useCallback((e: TouchEvent) => {
    // Track start position if animating OR if completed+centered (to allow scroll-up)
    if (animationState === 'animating' || (animationState === 'completed' && isCenterTriggerActive.current)) {
        touchStartY.current = e.touches[0].clientY;
        console.log("handleTouchStart: Tracking touch", { state: animationState, centered: isCenterTriggerActive.current });
    } else {
        touchStartY.current = null;
        console.log("handleTouchStart: Not tracking touch", { state: animationState, centered: isCenterTriggerActive.current });
    }
  }, [animationState]);
  
  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (touchStartY.current === null) return;

    // Only PREVENT default scroll when actively animating
    if (animationState === 'animating') {
        console.log("handleTouchMove: Preventing default scroll (state=animating)");
        e.preventDefault();
        const touchY = e.touches[0].clientY;
        const deltaY = touchStartY.current - touchY;
        touchStartY.current = touchY;
        handleInteraction(deltaY);
    } 
    // If completed and centered, still handle interaction for scroll-up, but DO NOT prevent default scroll-down.
    else if (animationState === 'completed' && isCenterTriggerActive.current) {
        console.log("handleTouchMove: Handling interaction for scroll-up, allowing default scroll-down (state=completed, centered)");
        const touchY = e.touches[0].clientY;
        const deltaY = touchStartY.current - touchY;
        touchStartY.current = touchY;
        handleInteraction(deltaY); // Allow driving progress back down
        // No e.preventDefault() here
    } else {
        console.log("handleTouchMove: Allowing default scroll (state != animating and not (completed+centered))");
        // Reset touch tracking if default scroll is allowed mid-drag
        touchStartY.current = null; 
    }
  }, [handleInteraction, animationState]);
  
  const handleTouchEnd = useCallback(() => {
    console.log("handleTouchEnd: Resetting touch start Y");
    touchStartY.current = null;
  }, []);
  
  // Effect 1: Detect when the card hits the center trigger point
  useMotionValueEvent(firstCardCenterProgress, "change", (latest) => {
    const isNowCentered = latest >= 0 && latest <= 0.1;
    console.log(`CenterCheck: latest=${latest.toFixed(2)}, isNowCentered=${isNowCentered}, wasCentered=${isCenterTriggerActive.current}, state=${animationState}`);

    // Always update the ref state if the centered status changes
    if (isNowCentered !== isCenterTriggerActive.current) {
        isCenterTriggerActive.current = isNowCentered;
        console.log(`CenterCheck: Center trigger ref updated to ${isNowCentered}`);
        // If we scroll OUT of center, allow animation trigger next time we enter
        if (!isNowCentered) {
            canAnimateOnCenter.current = true;
            console.log("Reset canAnimateOnCenter to true (left center)");
        }
    }

    // --- State Transitions based on Centering (checked independently of ref update) ---
    if (isNowCentered && animationState === 'idle' && canAnimateOnCenter.current) {
        // Entered trigger zone while idle, start animating
        console.log("Transition: idle -> animating (centered & allowed)");
        setAnimationState('animating');
        console.log("Locking scroll (entering animating)");
        document.body.classList.add(styles.bodyScrollLocked);
    } else if (!isNowCentered && animationState === 'animating') {
       console.log("Condition: Left center while animating. State remains animating.")
        // Allow animation to finish even if center is left
    } else if (!isNowCentered && animationState === 'completed') {
        console.log("Condition: Left center after completed. State remains completed.")
         // If they scroll back up now, handleInteraction will check isCenterTriggerActive
         // before deciding to re-enter 'animating' state.
    }
  });
  
  // Effect 2: Add/Remove global scroll/touch listeners based on animation state
  useEffect(() => {
    // We need listeners if animating OR if completed and centered (to allow scroll up)
    const shouldListen = animationState === 'animating' || (animationState === 'completed' && isCenterTriggerActive.current);
    console.log(`Effect (Listeners): State=${animationState}, Centered=${isCenterTriggerActive.current}, ShouldListen=${shouldListen}`);

    if (shouldListen) {
      console.log("Effect (Listeners): Adding listeners");
      if (isMobile) {
        window.addEventListener('touchstart', handleTouchStart, { passive: true }); // Start can be passive
        window.addEventListener('touchmove', handleTouchMove, { passive: false }); // Move needs prevention
        window.addEventListener('touchend', handleTouchEnd);
      } else {
        window.addEventListener('wheel', handleWheelEvent, { passive: false }); // Wheel needs prevention
      }
    } else {
      console.log("Effect (Listeners): Listeners should NOT be active (or will be removed).");
    }

    // Cleanup function
    return () => {
      console.log("Effect (Listeners): Cleanup - Removing listeners");
      if (isMobile) {
        window.removeEventListener('touchstart', handleTouchStart);
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleTouchEnd);
      } else {
        window.removeEventListener('wheel', handleWheelEvent);
      }
    };
    // Rerun this effect if state changes OR if centered status changes while completed
  }, [animationState, isMobile, handleWheelEvent, handleTouchStart, handleTouchMove, handleTouchEnd]);
  
  // Clean up on unmount
  useEffect(() => {
    console.log("Effect (Mount/Unmount): Adding unmount cleanup for scroll lock.");
    return () => {
      console.log("Effect (Unmount): Removing body scroll lock if present.");
      document.body.classList.remove(styles.bodyScrollLocked);
      if (canAnimateCooldownId.current) clearTimeout(canAnimateCooldownId.current);
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
    
    const currentTitleRef = sectionTitleRef.current; // Capture ref value
    if (currentTitleRef) {
      observer.observe(currentTitleRef);
    }
    
    return () => {
      if (currentTitleRef) {
        observer.unobserve(currentTitleRef);
      }
    };
  }, []);

  // --- Determine current visual state ---
  const showSecondCard = animationState !== 'idle';
  const applyScaling = animationState !== 'idle';
  const disableHover = animationState !== 'idle';
  console.log(`Render: state=${animationState}, showSecondCard=${showSecondCard}, applyScaling=${applyScaling}, disableHover=${disableHover}`);

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
          className={`${styles.cardStackContainer} relative`}
          aria-live="polite"
        >
          {/* First Card - Always visible but scales when second card appears */}
          <motion.div 
            ref={firstCardRef}
            className={`${styles.showcaseCard} ${disableHover ? styles.noHoverEffect : ''}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            style={{ 
              scale: applyScaling ? firstCardScale : 1,
              position: 'sticky', 
              top: '20vh',
              zIndex: 10,
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
            className={`${styles.showcaseCard} ${disableHover ? styles.noHoverEffect : ''} absolute w-full top-0 left-0`}
            style={{
              y: secondCardY,
              opacity: secondCardOpacity,
              // Conditionally increase z-index higher than divider (50)
              zIndex: showSecondCard ? 60 : 20, 
              pointerEvents: showSecondCard ? 'auto' : 'none',
            }}
            aria-hidden={!showSecondCard}
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
