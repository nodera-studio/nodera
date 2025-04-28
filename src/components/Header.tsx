
import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import { motion } from 'framer-motion';
import { useIsMobile, useBreakpoint } from '../hooks/use-mobile';
import { Button } from "@/components/ui/button";
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const isMobile = useIsMobile();
  const breakpoint = useBreakpoint();
  const isMobileOrSmaller = isMobile || breakpoint === 'small_landscape';
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'work', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={styles.header}>
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
          <a 
            href="#home" 
            className={`${styles.navLink} ${activeSection === 'home' ? styles.active : ''}`}
          >
            Home
          </a>
          <a 
            href="#services" 
            className={`${styles.navLink} ${activeSection === 'services' ? styles.active : ''}`}
          >
            Services
          </a>
          <a 
            href="#work" 
            className={`${styles.navLink} ${activeSection === 'work' ? styles.active : ''}`}
          >
            Work
          </a>
          <a 
            href="#about" 
            className={`${styles.navLink} ${activeSection === 'about' ? styles.active : ''}`}
          >
            About
          </a>
          <a 
            href="#contact" 
            className={`${styles.navLink} ${activeSection === 'contact' ? styles.active : ''}`}
          >
            Contact
          </a>
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
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.6 }}
          >
            <div className={styles.mobileMenuContent}>
              <nav className={styles.mobileNav}>
                <a 
                  href="#home" 
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
      
      <Button 
        variant="primary"
        size="default"
        className={styles.sayHiButton}
        asChild
      >
        <a href="#contact">Say Hi</a>
      </Button>
    </header>
  );
};

export default Header;
