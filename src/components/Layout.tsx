
import React from 'react';
import { useBreakpoint } from '@/hooks/use-mobile';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className = '' }) => {
  return (
    <div className={`app-content w-full mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Layout;
