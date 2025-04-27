
import * as React from "react"

export const BREAKPOINTS = {
  MOBILE: 640,  // Mobile phones
  SMALL_LANDSCAPE: 767, // Landscape phones, foldable devices
  TABLET: 1024, // Tablets and small laptops
  LAPTOP: 1440, // Standard laptops
  MONITOR: 1441 // Large monitors and above
}

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${BREAKPOINTS.MOBILE}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < BREAKPOINTS.MOBILE)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < BREAKPOINTS.MOBILE)
    return () => mql.removeEventListener("change", onChange)
  }, [])

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
    
    // Add resize listener
    window.addEventListener('resize', updateBreakpoint)
    
    // Cleanup
    return () => window.removeEventListener('resize', updateBreakpoint)
  }, [])

  return breakpoint
}
