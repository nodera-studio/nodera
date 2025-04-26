
import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img 
          src="/lovable-uploads/c03e6854-a218-4ae5-9090-b7137dff47a2.png" 
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
