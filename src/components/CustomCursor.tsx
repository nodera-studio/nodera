
import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const element = document.elementFromPoint(e.clientX, e.clientY);
      if (element) {
        const isInteractive = 
          element.tagName === 'A' || 
          element.tagName === 'BUTTON' ||
          element.closest('a') !== null ||
          element.closest('button') !== null ||
          element.classList.contains('cursor-pointer') ||
          element.closest('.cursor-pointer') !== null;
        
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
  }, []);

  // Smaller cursor size (changed from 30px to 20px)
  // And different color/size on hover (scale 1.5 instead of 1.2)
  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '20px', // Smaller size
        height: '20px', // Smaller size
        borderRadius: '50%',
        background: isHovering 
          ? 'linear-gradient(to bottom, #8B5CF6, #3B82F6)' // Different color on hover
          : 'linear-gradient(to bottom, #D1A2FF, #007AFF)',
        pointerEvents: 'none',
        zIndex: 9999,
        transform: `translate(${mousePosition.x - 10}px, ${mousePosition.y - 10}px) scale(${isHovering ? 1.5 : 1})`, // Adjusted position for smaller size
        transition: 'transform 0.2s ease-out, background 0.3s ease-out'
      }}
    />
  );
};

export default CustomCursor;
