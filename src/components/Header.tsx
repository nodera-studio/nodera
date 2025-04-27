
import React, { useEffect, useState } from 'react';
import styles from './Header.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile, useBreakpoint } from '../hooks/use-mobile';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const breakpoint = useBreakpoint();
  const isMobileOrSmaller = isMobile || breakpoint === 'small_landscape';

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    
    // Use passive event listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`${styles.header} ${isSticky ? styles.isSticky : ''}`}>
      <div className={styles.headerBg} />
      
      <div className={styles.logo}>
        <img 
          src="/lovable-uploads/logo.png" 
          alt="Nodera Logo" 
          className={styles.logoImg} 
          loading="eager" // Priority loading for logo
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
              
              {/* Add "Say Hi" button to mobile menu */}
              <div className={styles.mobileCta}>
                <a href="#contact" className={styles.ctaButton} onClick={() => setMobileMenuOpen(false)}>
                  Say Hi
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Only show CTA button on non-mobile screens */}
      <div className={styles.cta}>
        <a href="#contact" className={styles.ctaButton}>Say Hi</a>
      </div>
    </header>
  );
};

export default Header;
