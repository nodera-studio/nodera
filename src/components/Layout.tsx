import React, { Suspense, lazy } from 'react';

// Lazy load the CustomCursor component
// const CustomCursor = lazy(() => import('./CustomCursor'));

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // All states (isMobile, cursorMounted, isTouchDevice) and useEffect related to CustomCursor have been removed.

  return (
    <>
      {/* CustomCursor rendering block and its related div have been removed. */}
      <div className="app-content">
        {children}
      </div>
    </>
  );
};

export default Layout;
