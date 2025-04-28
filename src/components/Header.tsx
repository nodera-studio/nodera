
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile, useBreakpoint } from '../hooks/use-mobile';
import { Sun, Moon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useTheme } from '@/hooks/use-theme';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const breakpoint = useBreakpoint();
  const isMobileOrSmaller = isMobile || breakpoint === 'small_landscape';
  const { pathname, hash } = useLocation();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // Active link check
  const isActive = (href: string) => {
    if (href === '#home' && (hash === '' || hash === '#home')) return true;
    return hash === href;
  };

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
            className={`${styles.navLink} ${isActive('#home') ? styles.active : ''}`}
          >
            Home
          </a>
          <a 
            href="#services" 
            className={`${styles.navLink} ${isActive('#services') ? styles.active : ''}`}
          >
            Services
          </a>
          <a 
            href="#work" 
            className={`${styles.navLink} ${isActive('#work') ? styles.active : ''}`}
          >
            Work
          </a>
          <a 
            href="#about" 
            className={`${styles.navLink} ${isActive('#about') ? styles.active : ''}`}
          >
            About
          </a>
          <a 
            href="#contact" 
            className={`${styles.navLink} ${isActive('#contact') ? styles.active : ''}`}
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
                  className={`${styles.mobileNavLink} ${isActive('#home') ? styles.active : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </a>
                <a 
                  href="#services" 
                  className={`${styles.mobileNavLink} ${isActive('#services') ? styles.active : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </a>
                <a 
                  href="#work" 
                  className={`${styles.mobileNavLink} ${isActive('#work') ? styles.active : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Work
                </a>
                <a 
                  href="#about" 
                  className={`${styles.mobileNavLink} ${isActive('#about') ? styles.active : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
                <a 
                  href="#contact" 
                  className={`${styles.mobileNavLink} ${isActive('#contact') ? styles.active : ''}`}
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

              <Button
                variant="ghost"
                size="icon"
                className={styles.mobileThemeToggle}
                onClick={() => {
                  setTheme(theme === 'dark' ? 'light' : 'dark');
                }}
              >
                {mounted && theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className={styles.headerActions}>
        <Button 
          variant="ghost"
          size="icon"
          className={styles.themeToggle}
          onClick={() => {
            setTheme(theme === 'dark' ? 'light' : 'dark');
          }}
        >
          {mounted && theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </Button>
      
        <Button 
          variant="primary"
          size="default"
          className={styles.sayHiButton}
          asChild
        >
          <a href="#contact">Say Hi</a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
