
import React, { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  
  useEffect(() => {
    // Skip custom cursor for users who prefer reduced motion
    if (shouldReduceMotion) {
      return;
    }
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const element = document.elementFromPoint(e.clientX, e.clientY);
      if (element) {
        const isInteractive = 
          element.tagName === 'A' || 
          element.tagName === 'BUTTON' ||
          element.closest('a') !== null ||
          element.closest('button') !== null;
        
        setIsHovering(isInteractive);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.style.cursor = 'auto';
    };
  }, [shouldReduceMotion]);

  // Don't render custom cursor for users who prefer reduced motion
  if (shouldReduceMotion) {
    return null;
  }

  const cursorStyle = {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    background: 'linear-gradient(to bottom, #D1A2FF, #007AFF)',
    pointerEvents: 'none' as const,
    zIndex: 9999,
    transform: `translate(${mousePosition.x - 15}px, ${mousePosition.y - 15}px) scale(${isHovering ? 1.2 : 1})`,
    transition: 'transform 0.2s ease-out'
  };

  return <div style={cursorStyle} aria-hidden="true" />;
};

export default CustomCursor;
