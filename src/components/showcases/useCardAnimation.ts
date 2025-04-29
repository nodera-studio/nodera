
import { useState, useRef, useCallback } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';
import styles from '../styles/Showcases.module.css';

// Define animation states
export type AnimationState = 'idle' | 'animating' | 'completed';

export const useCardAnimation = () => {
  const isMobile = useIsMobile();
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
  const smoothProgress = useSpring(customScrollProgress, { 
    damping: isMobile ? 20 : 30, 
    stiffness: isMobile ? 70 : 90
  });
  
  // Handle interaction with scroll - optimized for mobile
  const handleInteraction = useCallback((delta: number) => {
    const currentProgress = customScrollProgress.get();
    // Increase sensitivity for mobile devices
    const progressStep = delta * (isMobile ? 0.005 : 0.0015); 
    let newProgress = currentProgress + progressStep;

    // Clamp progress between 0 and 1
    newProgress = Math.max(0, Math.min(1, newProgress));

    // Only update if there's a change (prevents unnecessary updates)
    if (newProgress !== currentProgress) {
        customScrollProgress.set(newProgress);
    }

    // --- State Transitions based on Progress ---
    if (animationState === 'animating') {
      if (newProgress >= 1) {
        setAnimationState('completed');
        document.body.classList.remove(styles.bodyScrollLocked);
      } else if (newProgress <= 0) {
        setAnimationState('idle');
        document.body.classList.remove(styles.bodyScrollLocked);
        // Prevent immediate re-animation if still centered after scrolling up
        canAnimateOnCenter.current = false;
        // Start a short cooldown to re-enable animation even if still centered
        if (canAnimateCooldownId.current) clearTimeout(canAnimateCooldownId.current);
        canAnimateCooldownId.current = setTimeout(() => {
          canAnimateOnCenter.current = true;
        }, 300); // 0.3s cooldown
      }
    } else if (animationState === 'completed') {
      if (newProgress < 1 && newProgress > 0) {
        if (isCenterTriggerActive.current) {
          setAnimationState('animating');
          document.body.classList.add(styles.bodyScrollLocked);
        }
      } else if (newProgress <= 0) {
        setAnimationState('idle');
        if (document.body.classList.contains(styles.bodyScrollLocked)) {
          document.body.classList.remove(styles.bodyScrollLocked);
        }
      }
    }
  }, [customScrollProgress, animationState, isMobile]);
  
  // Clean up function
  const cleanUp = useCallback(() => {
    document.body.classList.remove(styles.bodyScrollLocked);
    if (canAnimateCooldownId.current) clearTimeout(canAnimateCooldownId.current);
  }, []);

  return {
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
  };
};
