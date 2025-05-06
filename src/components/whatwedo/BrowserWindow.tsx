
import React, { ReactNode, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './BrowserWindow.module.css';

interface BrowserWindowProps {
  children: ReactNode;
  className?: string;
}

const BrowserWindow: React.FC<BrowserWindowProps> = ({ children, className = '' }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${styles.browserWindow} ${className} w-full`}>
      <div className={styles.browserHeader}>
        <div className={styles.browserDots}>
          <div className={`${styles.dot} bg-red-400`}></div>
          <div className={`${styles.dot} bg-yellow-400`}></div>
          <div className={`${styles.dot} bg-green-400`}></div>
        </div>
      </div>
      <motion.div 
        className={`${styles.browserContent} bg-white relative`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
        
        {/* Loading overlay */}
        <motion.div 
          className="absolute inset-0 bg-white z-10 flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onAnimationComplete={() => {
            const elem = document.querySelector(`.${styles.browserContent} .absolute.inset-0`);
            if (elem) {
              elem.classList.add('pointer-events-none');
            }
          }}
        >
          <motion.div 
            className="w-8 h-8 border-2 border-blue-300 border-t-blue-500 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BrowserWindow;
