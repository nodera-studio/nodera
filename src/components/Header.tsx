
import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile, useBreakpoint } from '../hooks/use-mobile';
import { Button } from "@/components/ui/button";
import { useLocation } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

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

    // Add backdrop blur effect when scrolling
    const header = document.querySelector(`.${styles.header}`);
    const handleScrollEffect = () => {
      if (window.scrollY > 10) {
        header?.classList.add(styles.headerScrolled);
      } else {
        header?.classList.remove(styles.headerScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScrollEffect);
    
    // Initial check
    handleScrollEffect();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
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

  const menuItems = [
    { title: 'Home', href: '#home', section: 'home' },
    { title: 'Services', href: '#services', section: 'services' },
    { title: 'Work', href: '#work', section: 'work' },
    { title: 'About', href: '#about', section: 'about' },
    { title: 'Contact', href: '#contact', section: 'contact' },
  ];

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
          {menuItems.map((item) => (
            <a 
              key={item.section}
              href={item.href} 
              className={`${styles.navLink} ${activeSection === item.section ? styles.active : ''}`}
            >
              {item.title}
            </a>
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
                  <a 
                    key={item.section}
                    href={item.href} 
                    className={styles.mobileNavLink}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </a>
                ))}
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
      
      <div className={styles.cta}>
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
