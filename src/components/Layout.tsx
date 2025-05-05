
import React, { lazy, Suspense, useState, useEffect } from 'react';
import { useIsMobile } from '../hooks/use-mobile';

// Lazy load the CustomCursor component
const CustomCursor = lazy(() => import('./CustomCursor'));

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isMobile = useIsMobile();
  const [cursorMounted, setCursorMounted] = useState(false);
  
  // Safely mount the cursor component only on desktop and after a delay
  useEffect(() => {
    if (!isMobile) {
      // Small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        setCursorMounted(true);
      }, 100);
      
      return () => {
        clearTimeout(timer);
        setCursorMounted(false);
      };
    }
  }, [isMobile]);

  return (
    <>
      {!isMobile && cursorMounted && (
        <Suspense fallback={null}>
          <div id="cursor-container">
            <CustomCursor />
          </div>
        </Suspense>
      )}
      <div className="app-content">
        {children}
      </div>
    </>
  );
};

export default Layout;
