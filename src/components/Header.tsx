
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    
    // When opening mobile menu, prevent body scrolling
    if (!mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  return (
    <header 
      className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}
      role="navigation" 
      aria-label="Main Navigation"
    >
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <a href="/" className={styles.logoLink} aria-label="Nodera Web Studio Homepage">
            <img 
              src="/lovable-uploads/logo.png" 
              alt="Nodera Web Studio Logo" 
              className={styles.logo} 
            />
            <span className={styles.logoText}>Nodera</span>
          </a>
        </div>

        <nav className={styles.desktopNav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="#showcases" className={styles.navLink}>Showcases</a>
            </li>
            <li className={styles.navItem}>
              <a href="#services" className={styles.navLink}>Services</a>
            </li>
            <li className={styles.navItem}>
              <a href="#about" className={styles.navLink}>About</a>
            </li>
            <li className={styles.navItem}>
              <Button variant="primary" size="sm" asChild>
                <a href="#contact">Contact</a>
              </Button>
            </li>
          </ul>
        </nav>

        <button 
          className={styles.mobileMenuButton}
          onClick={toggleMenu}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {mobileMenuOpen && (
          <div 
            className={styles.mobileMenu}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
          >
            <nav>
              <ul className={styles.mobileNavList}>
                <li className={styles.mobileNavItem}>
                  <a 
                    href="#showcases" 
                    className={styles.mobileNavLink}
                    onClick={toggleMenu}
                  >
                    Showcases
                  </a>
                </li>
                <li className={styles.mobileNavItem}>
                  <a 
                    href="#services" 
                    className={styles.mobileNavLink}
                    onClick={toggleMenu}
                  >
                    Services
                  </a>
                </li>
                <li className={styles.mobileNavItem}>
                  <a 
                    href="#about" 
                    className={styles.mobileNavLink}
                    onClick={toggleMenu}
                  >
                    About
                  </a>
                </li>
                <li className={styles.mobileNavItem}>
                  <Button 
                    variant="primary" 
                    size="lg" 
                    className="w-full" 
                    asChild
                  >
                    <a 
                      href="#contact"
                      onClick={toggleMenu}
                    >
                      Contact
                    </a>
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
