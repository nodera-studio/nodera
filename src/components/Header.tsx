
import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile, useBreakpoint } from '../hooks/use-mobile';
import { Button } from "@/components/ui/button";
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const breakpoint = useBreakpoint();
  const isMobileOrSmaller = isMobile || breakpoint === 'small_landscape';
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Add backdrop blur effect when scrolling
    const handleScrollEffect = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScrollEffect);
    
    // Initial check
    handleScrollEffect();
    
    return () => {
      window.removeEventListener('scroll', handleScrollEffect);
    };
  }, []);

  useEffect(() => {
    // Prevent body scrolling when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const menuItems = [
    { title: 'Home', path: '/' },
    { title: 'Services', path: '/services' },
    { title: 'Work', path: '/work' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
      <div className={styles.headerBg} />
      
      <div className={styles.logo}>
        <Link to="/">
          <img 
            src="/lovable-uploads/logo.png" 
            alt="Nodera Logo" 
            className={styles.logoImg} 
            loading="eager"
          />
        </Link>
      </div>
      
      {!isMobileOrSmaller ? (
        <nav className={styles.nav}>
          {menuItems.map((item) => (
            <Link 
              key={item.path}
              to={item.path}
              className={`${styles.navLink} ${isActive(item.path) ? styles.active : ''}`}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : (
        <motion.button 
          className={styles.mobileMenuButton}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          >
            <div className={styles.mobileMenuContent}>
              <nav className={styles.mobileNav}>
                {menuItems.map((item) => (
                  <Link 
                    key={item.path}
                    to={item.path}
                    className={styles.mobileNavLink}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
              
              <div className={styles.mobileCta}>
                <Button
                  variant="accent"
                  size="default" 
                  asChild
                >
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Say Hi
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className={styles.cta}>
        <Button 
          variant="primary"
          size="default"
          className={styles.sayHiButton}
          asChild
        >
          <Link to="/contact">Get Started</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
