
import React, { useEffect, useState, useRef } from 'react';
import styles from './Header.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile, useBreakpoint } from '../hooks/use-mobile';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  
  const isMobile = useIsMobile();
  const breakpoint = useBreakpoint();
  const isMobileOrSmaller = isMobile || breakpoint === 'small_landscape';
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // For mobile, we use the simpler sticky logic
      if (isMobileOrSmaller) {
        setIsSticky(window.scrollY > 0);
        return;
      }

      // For desktop, we implement the dual-state system
      const scrollPosition = window.scrollY;
      const heroSection = document.querySelector('section'); // First section is usually the hero

      if (heroSection) {
        const heroSectionHeight = heroSection.getBoundingClientRect().height;
        const triggerPoint = heroSectionHeight * 0.2; // Trigger after scrolling 20% of the hero
        
        if (scrollPosition > triggerPoint) {
          setIsSticky(true);
          // Add a small delay before showing the sticky navbar for a smoother experience
          setTimeout(() => setIsStickyVisible(true), 100);
        } else {
          setIsStickyVisible(false);
          // Add delay to hide the sticky class after animation completes
          setTimeout(() => {
            if (window.scrollY <= triggerPoint) {
              setIsSticky(false);
            }
          }, 300);
        }
      }
    };
    
    // Use passive event listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileOrSmaller]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* Initial header - always visible on page load for non-mobile */}
      {!isMobileOrSmaller && (
        <header className={`${styles.headerInitial} ${isSticky ? styles.headerHidden : ''}`} ref={headerRef}>
          <div className={styles.headerBg} />
          
          <div className={styles.logo}>
            <img 
              src="/lovable-uploads/logo.png" 
              alt="Nodera Logo" 
              className={styles.logoImg} 
              loading="eager"
            />
          </div>
          
          <nav className={styles.nav}>
            <a href="#" className={styles.navLink}>Home</a>
            <a href="#services" className={styles.navLink}>Services</a>
            <a href="#work" className={styles.navLink}>Work</a>
            <a href="#about" className={styles.navLink}>About</a>
          </nav>
          
          <div className={styles.cta}>
            <Button
              variant="accent"
              size="default"
              asChild
            >
              <a href="#contact">Say Hi</a>
            </Button>
          </div>
        </header>
      )}
      
      {/* Sticky header - visible after scrolling for non-mobile or always for mobile */}
      <header 
        className={`
          ${styles.header} 
          ${isMobileOrSmaller ? (isSticky ? styles.isSticky : '') : styles.headerSticky} 
          ${isMobileOrSmaller ? '' : (isStickyVisible ? styles.headerStickyVisible : '')}
        `}
      >
        <div className={styles.headerBg} />
        
        <div className={styles.logo}>
          <img 
            src="/lovable-uploads/logo.png" 
            alt="Nodera Logo" 
            className={styles.logoImg} 
            loading="eager"
          />
        </div>
        
        {!isMobileOrSmaller ? (
          <nav className={styles.nav}>
            <a href="#" className={styles.navLink}>Home</a>
            <a href="#services" className={styles.navLink}>Services</a>
            <a href="#work" className={styles.navLink}>Work</a>
            <a href="#about" className={styles.navLink}>About</a>
          </nav>
        ) : (
          <motion.button 
            className={styles.mobileMenuButton}
            onClick={toggleMobileMenu}
            aria-label="Menu"
            whileTap={{ scale: 0.95 }}
          >
            <div className={`${styles.menuBar} ${mobileMenuOpen ? styles.open : ''}`}></div>
            <div className={`${styles.menuBar} ${mobileMenuOpen ? styles.open : ''}`}></div>
            <div className={`${styles.menuBar} ${mobileMenuOpen ? styles.open : ''}`}></div>
          </motion.button>
        )}
        
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className={styles.mobileMenu}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.6 }}
            >
              <div className={styles.mobileMenuContent}>
                <nav className={styles.mobileNav}>
                  <a 
                    href="#" 
                    className={styles.mobileNavLink}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </a>
                  <a 
                    href="#services" 
                    className={styles.mobileNavLink}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Services
                  </a>
                  <a 
                    href="#work" 
                    className={styles.mobileNavLink}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Work
                  </a>
                  <a 
                    href="#about" 
                    className={styles.mobileNavLink}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </a>
                  <a 
                    href="#contact" 
                    className={styles.mobileNavLink}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </a>
                </nav>
                
                <div className={styles.mobileCta}>
                  <Button
                    variant="accent"
                    size="default" 
                    asChild
                  >
                    <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                      Say Hi
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Only show CTA button on non-mobile screens */}
        <div className={styles.cta}>
          <Button
            variant="accent"
            size="default"
            asChild
          >
            <a href="#contact">Say Hi</a>
          </Button>
        </div>
      </header>
    </>
  );
};

export default Header;
