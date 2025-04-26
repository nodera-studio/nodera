
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Check if cursor is over an interactive element
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
    
    // Add cursor: none to body
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.style.cursor = 'auto';
    };
  }, []);

  const cursorVariants = {
    default: {
      x: mousePosition.x - 15,
      y: mousePosition.y - 15,
      scale: 1
    },
    hover: {
      x: mousePosition.x - 15,
      y: mousePosition.y - 15,
      scale: 1.2
    }
  };

  return (
    <motion.div
      className="custom-cursor"
      variants={cursorVariants}
      animate={isHovering ? 'hover' : 'default'}
      transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #D1A2FF, #007AFF)',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'exclusion',
      }}
    />
  );
};

export default CustomCursor;
