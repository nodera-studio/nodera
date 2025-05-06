
import React, { ReactNode } from 'react';
import styles from './BrowserWindow.module.css';

interface BrowserWindowProps {
  children: ReactNode;
  className?: string;
}

const BrowserWindow: React.FC<BrowserWindowProps> = ({ children, className = '' }) => {
  return (
    <div className={`${styles.browserWindow} ${className} w-full`}>
      <div className={styles.browserHeader}>
        <div className={styles.browserDots}>
          <div className={`${styles.dot} bg-red-400`}></div>
          <div className={`${styles.dot} bg-yellow-400`}></div>
          <div className={`${styles.dot} bg-green-400`}></div>
        </div>
      </div>
      <div className={`${styles.browserContent} bg-white`}>
        {children}
      </div>
    </div>
  );
};

export default BrowserWindow;
