
import React, { useState, useEffect, useCallback } from 'react';
import styles from './Header.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile, useBreakpoint } from '../hooks/use-mobile';
import { Button } from "@/components/ui/button";
import { Link, useLocation } from 'react-router-dom';

const menuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { 
    opacity: 1, 
    height: "100vh",
    transition: { 
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    }
  },
  exit: { 
    opacity: 0, 
    height: 0,
    transition: { 
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    }
  }
};

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const breakpoint = useBreakpoint();
  const isMobileOrSmaller = isMobile || breakpoint === 'small_landscape';
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  // Debounced scroll handler for better performance
  const handleScrollEffect = useCallback(() => {
    if (window.scrollY > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, []);

  useEffect(() => {
    // Use passive event listener for better performance
    window.addEventListener('scroll', handleScrollEffect, { passive: true });
    
    // Initial check
    handleScrollEffect();
    
    return () => {
      window.removeEventListener('scroll', handleScrollEffect);
    };
  }, [handleScrollEffect]);

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

  // Close mobile menu when route changes
  useEffect(() => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [location.pathname]);

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
          <motion.img 
            src="/lovable-uploads/logo.png" 
            alt="Nodera Logo" 
            className={styles.logoImg} 
            loading="eager"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
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
          <motion.div 
            className={`${styles.menuBar} ${mobileMenuOpen ? styles.open : ''}`}
            transition={{ duration: 0.2 }}
          ></motion.div>
          <motion.div 
            className={`${styles.menuBar} ${mobileMenuOpen ? styles.open : ''}`}
            transition={{ duration: 0.2, delay: 0.05 }}
          ></motion.div>
          <motion.div 
            className={`${styles.menuBar} ${mobileMenuOpen ? styles.open : ''}`}
            transition={{ duration: 0.2, delay: 0.1 }}
          ></motion.div>
        </motion.button>
      )}
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className={styles.mobileMenu}
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div className={styles.mobileMenuContent}>
              <motion.nav className={styles.mobileNav}>
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <Link 
                      to={item.path}
                      className={`${styles.mobileNavLink} ${isActive(item.path) ? styles.active : ''}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>
              
              <motion.div 
                className={styles.mobileCta}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button
                  variant="accent"
                  size="default" 
                  asChild
                  className="shadow-lg"
                >
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Say Hi
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
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
