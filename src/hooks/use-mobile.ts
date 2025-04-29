
import { useState, useEffect } from 'react';

export type Breakpoint = 'mobile' | 'small_landscape' | 'tablet' | 'desktop' | 'large';

export const useBreakpoint = (): Breakpoint => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('desktop');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setBreakpoint('mobile');
      } else if (width >= 640 && width < 768) {
        setBreakpoint('small_landscape');
      } else if (width >= 768 && width < 1024) {
        setBreakpoint('tablet');
      } else if (width >= 1024 && width < 1280) {
        setBreakpoint('desktop');
      } else {
        setBreakpoint('large');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return breakpoint;
};

export const useIsMobile = (): boolean => {
  const breakpoint = useBreakpoint();
  return breakpoint === 'mobile';
};
