
import * as React from "react"

export const BREAKPOINTS = {
  MOBILE: 640,  // Mobile phones
  SMALL_LANDSCAPE: 767, // Landscape phones, foldable devices
  TABLET: 1024, // Tablets and small laptops
  LAPTOP: 1440, // Standard laptops
  MONITOR: 1441 // Large monitors and above
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
      } else if (width < BREAKPOINTS.SMALL_LANDSCAPE) {
        setBreakpoint('small_landscape')
      } else if (width < BREAKPOINTS.TABLET) {
        setBreakpoint('tablet')
      } else if (width < BREAKPOINTS.LAPTOP) {
        setBreakpoint('laptop')
      } else {
        setBreakpoint('monitor')
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
