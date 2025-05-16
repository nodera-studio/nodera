
import React from 'react';
import { Outlet } from 'react-router-dom';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="app-content w-full mx-auto">
      {children || <Outlet />}
    </div>
  );
};

export default Layout;
