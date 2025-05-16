
import React from 'react';
import { useBreakpoint } from '@/hooks/use-mobile';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="app-content w-full mx-auto">
      {children}
    </div>
  );
};

export default Layout;
