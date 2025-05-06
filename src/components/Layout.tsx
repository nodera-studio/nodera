
import React from 'react';
import { useBreakpoint } from '@/hooks/use-mobile';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const breakpoint = useBreakpoint();
  
  // Apply different padding based on breakpoint
  const getPadding = () => {
    switch (breakpoint) {
      case 'mobile':
        return 'px-4';
      case 'small_tablet':
        return 'px-6';
      case 'tablet':
        return 'px-8';
      case 'desktop':
        return 'px-10';
      case 'large_desktop':
      case 'wide':
        return 'px-16';
      default:
        return 'px-4';
    }
  };

  return (
    <div className={`app-content w-full mx-auto ${getPadding()}`}>
      {children}
    </div>
  );
};

export default Layout;
