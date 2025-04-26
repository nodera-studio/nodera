import React, { useEffect, useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isSticky ? styles.isSticky : ''}`}>
      <div className={styles.headerBg} />
      <div className={styles.logo}>
        <img 
          src="/lovable-uploads/logo.png" 
          alt="Nodera Logo" 
          className={styles.logoImg} 
        />
      </div>
      
      <nav className={styles.nav}>
        <a href="#" className={styles.navLink}>Home</a>
        <a href="#services" className={styles.navLink}>Services</a>
        <a href="#work" className={styles.navLink}>Work</a>
        <a href="#about" className={styles.navLink}>About</a>
      </nav>
      
      <div className={styles.cta}>
        <a href="#contact" className={styles.ctaButton}>Say Hi</a>
      </div>
    </header>
  );
};

export default Header;
