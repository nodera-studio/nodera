
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { useEffect, useRef, MutableRefObject } from 'react';
import styles from '../styles/Showcases.module.css';
import { AnimationState } from './useCardAnimation';

interface CenterDetectionProps {
  containerRef: React.RefObject<HTMLDivElement>;
  firstCardRef: React.RefObject<HTMLDivElement>;
  animationState: AnimationState;
  setAnimationState: (state: AnimationState) => void;
  isCenterTriggerActive: MutableRefObject<boolean>;
  canAnimateOnCenter: MutableRefObject<boolean>;
  isMobile: boolean;
}

export const useCenterDetection = ({
  containerRef,
  firstCardRef,
  animationState,
  setAnimationState,
  isCenterTriggerActive,
  canAnimateOnCenter,
  isMobile
}: CenterDetectionProps) => {

  // Main scroll animation setup for detecting overall position
  const { scrollYProgress: mainScrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // First card scroll effect - to detect when centered in viewport
  const { scrollYProgress: firstCardCenterProgress } = useScroll({
    target: firstCardRef,
    offset: [
      // Adjust the center point offset for mobile to make it easier to trigger
      isMobile ? "start center" : "center center", 
      "end start"
    ] 
  });

  // Effect: Detect when the card hits the center trigger point
  useMotionValueEvent(firstCardCenterProgress, "change", (latest) => {
    // Make the center trigger area larger on mobile 
    const centerTriggerThreshold = isMobile ? 0.15 : 0.1;
    const isNowCentered = latest >= 0 && latest <= centerTriggerThreshold;

    // Always update the ref state if the centered status changes
    if (isNowCentered !== isCenterTriggerActive.current) {
      isCenterTriggerActive.current = isNowCentered;
      // If we scroll OUT of center, allow animation trigger next time we enter
      if (!isNowCentered) {
        canAnimateOnCenter.current = true;
      }
    }

    // --- State Transitions based on Centering (checked independently of ref update) ---
    if (isNowCentered && animationState === 'idle' && canAnimateOnCenter.current) {
      // Entered trigger zone while idle, start animating
      setAnimationState('animating');
      document.body.classList.add(styles.bodyScrollLocked);
    }
  });

  return {
    mainScrollYProgress,
    firstCardCenterProgress
  };
};
