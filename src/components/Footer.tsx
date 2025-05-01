
import React from 'react';
import { useBreakpoint } from '../hooks/use-mobile';
import MobileFooter from './footer/MobileFooter';
import DesktopFooter from './footer/DesktopFooter';
import { footerSections, socialLinks } from './footer/footerData';

const Footer = () => {
  const breakpoint = useBreakpoint();
  const isMobileOrTablet = breakpoint === 'mobile' || breakpoint === 'small_landscape' || breakpoint === 'tablet';
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-[#f5f5f7] text-[#6e6e73]">
      {isMobileOrTablet ? (
        // Mobile and tablet footer (Apple-style)
        <MobileFooter 
          footerSections={footerSections} 
          currentYear={currentYear} 
        />
      ) : (
        // Desktop footer (simpler version)
        <DesktopFooter 
          footerSections={footerSections}
          socialLinks={socialLinks}
          currentYear={currentYear}
        />
      )}
    </footer>
  );
};

export default Footer;
