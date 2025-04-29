
import { useCallback, useEffect } from 'react';
import styles from '../styles/Showcases.module.css';
import { AnimationState } from './useCardAnimation';

interface ScrollEventProps {
  animationState: AnimationState;
  handleInteraction: (delta: number) => void;
  isCenterTriggerActive: React.MutableRefObject<boolean>;
  touchStartY: React.MutableRefObject<number | null>;
  isMobile: boolean;
}

export const useScrollEvents = ({
  animationState,
  handleInteraction,
  isCenterTriggerActive,
  touchStartY,
  isMobile
}: ScrollEventProps) => {

  // Handle wheel events during animation
  const handleWheelEvent = useCallback((e: WheelEvent) => {
    // Only PREVENT default scroll when actively animating
    if (animationState === 'animating') {
        e.preventDefault();
        handleInteraction(e.deltaY);
    } 
    // If completed and centered, still handle interaction for scroll-up, but DO NOT prevent default scroll-down.
    else if (animationState === 'completed' && isCenterTriggerActive.current) {
        handleInteraction(e.deltaY); // Allow driving progress back down
    }
  }, [handleInteraction, animationState, isCenterTriggerActive]);
  
  // Handle touch events for mobile
  const handleTouchStart = useCallback((e: TouchEvent) => {
    // Track start position if animating OR if completed+centered (to allow scroll-up)
    if (animationState === 'animating' || (animationState === 'completed' && isCenterTriggerActive.current)) {
        touchStartY.current = e.touches[0].clientY;
    } else {
        touchStartY.current = null;
    }
  }, [animationState, isCenterTriggerActive, touchStartY]);
  
  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (touchStartY.current === null) return;

    // Only PREVENT default scroll when actively animating
    if (animationState === 'animating') {
        e.preventDefault();
        const touchY = e.touches[0].clientY;
        const deltaY = touchStartY.current - touchY;
        touchStartY.current = touchY;
        handleInteraction(deltaY);
    } 
    // If completed and centered, still handle interaction for scroll-up, but DO NOT prevent default scroll-down.
    else if (animationState === 'completed' && isCenterTriggerActive.current) {
        const touchY = e.touches[0].clientY;
        const deltaY = touchStartY.current - touchY;
        touchStartY.current = touchY;
        handleInteraction(deltaY); // Allow driving progress back down
    } else {
        // Reset touch tracking if default scroll is allowed mid-drag
        touchStartY.current = null; 
    }
  }, [handleInteraction, animationState, isCenterTriggerActive, touchStartY]);
  
  const handleTouchEnd = useCallback(() => {
    touchStartY.current = null;
  }, [touchStartY]);
  
  // Effect: Add/Remove global scroll/touch listeners based on animation state
  useEffect(() => {
    // We need listeners if animating OR if completed and centered (to allow scroll up)
    const shouldListen = animationState === 'animating' || (animationState === 'completed' && isCenterTriggerActive.current);

    if (shouldListen) {
      if (isMobile) {
        window.addEventListener('touchstart', handleTouchStart, { passive: true }); // Start can be passive
        window.addEventListener('touchmove', handleTouchMove, { passive: false }); // Move needs prevention
        window.addEventListener('touchend', handleTouchEnd);
      } else {
        window.addEventListener('wheel', handleWheelEvent, { passive: false }); // Wheel needs prevention
      }
    }

    // Cleanup function
    return () => {
      if (isMobile) {
        window.removeEventListener('touchstart', handleTouchStart);
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleTouchEnd);
      } else {
        window.removeEventListener('wheel', handleWheelEvent);
      }
    };
    // Rerun this effect if state changes OR if centered status changes while completed
  }, [animationState, isMobile, handleWheelEvent, handleTouchStart, handleTouchMove, handleTouchEnd, isCenterTriggerActive]);
  
  return {
    handleWheelEvent,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd
  };
};
