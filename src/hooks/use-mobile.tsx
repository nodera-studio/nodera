
import * as React from "react"

export const BREAKPOINTS = {
  MOBILE: 480,  // Mobile phones - Portrait / Landscape
  SMALL_TABLET: 600, // Large Phones - Landscape / Small Tablets - Portrait
  TABLET: 770, // Tablets - Landscape / Portrait, Small Laptops
  DESKTOP: 1280, // Standard Desktops / Laptops
  LARGE_DESKTOP: 1440, // Large Desktops / Laptops
  WIDE: 1920 // Full HD Desktops
}

// Optimize performance by creating a single shared media query list for each breakpoint
let mqlCache: Record<string, MediaQueryList> = {}

const getMql = (breakpoint: number): MediaQueryList => {
  const key = `max-${breakpoint}`;
  if (!mqlCache[key]) {
    mqlCache[key] = window.matchMedia(`(max-width: ${breakpoint}px)`);
  }
  return mqlCache[key];
}

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = getMql(BREAKPOINTS.MOBILE);
    
    // Set initial state immediately based on current match
    setIsMobile(mql.matches);
    
    // More efficient MediaQueryList event listener
    const onChange = () => setIsMobile(mql.matches);
    mql.addEventListener("change", onChange);
    
    return () => mql.removeEventListener("change", onChange);
  }, [])

  // Return boolean (never undefined) to prevent unnecessary re-renders
  return !!isMobile
}

export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = React.useState<string | undefined>(undefined)

  React.useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      if (width < BREAKPOINTS.MOBILE) {
        setBreakpoint('mobile')
      } else if (width < BREAKPOINTS.SMALL_TABLET) {
        setBreakpoint('small_tablet')
      } else if (width < BREAKPOINTS.TABLET) {
        setBreakpoint('tablet')
      } else if (width < BREAKPOINTS.DESKTOP) {
        setBreakpoint('desktop')
      } else if (width < BREAKPOINTS.LARGE_DESKTOP) {
        setBreakpoint('large_desktop')
      } else {
        setBreakpoint('wide')
      }
    }

    // Initial check
    updateBreakpoint()
    
    // More efficient resize handling with throttling to reduce callbacks
    let timeout: number | null = null;
    const handleResize = () => {
      if (timeout) return;
      timeout = window.setTimeout(() => {
        timeout = null;
        updateBreakpoint();
      }, 100); // 100ms throttle
    };
    
    window.addEventListener('resize', handleResize, { passive: true });
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (timeout) clearTimeout(timeout);
    }
  }, [])

  return breakpoint
}
