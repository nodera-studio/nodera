
import React from 'react';
import { Outlet } from 'react-router-dom';
import { useBreakpoint } from '@/hooks/use-mobile';

const Layout: React.FC = () => {
  return (
    <div className="app-content w-full mx-auto">
      <Outlet />
    </div>
  );
};

export default Layout;
