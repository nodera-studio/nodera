
import React, { lazy, Suspense } from 'react';
import { useIsMobile } from '../hooks/use-mobile';

const CustomCursor = lazy(() => import('./CustomCursor'));

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isMobile = useIsMobile();

  return (
    <>
      {!isMobile && (
        <Suspense fallback={null}>
          <CustomCursor />
        </Suspense>
      )}
      {children}
    </>
  );
};

export default Layout;
