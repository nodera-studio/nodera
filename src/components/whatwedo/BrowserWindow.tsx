
import React, { ReactNode } from 'react';
import styles from './BrowserWindow.module.css';

interface BrowserWindowProps {
  children: ReactNode;
}

const BrowserWindow: React.FC<BrowserWindowProps> = ({ children }) => {
  return (
    <div className={`${styles.browserWindow} w-full max-w-lg mt-4`}>
      <div className={styles.browserHeader}>
        <div className={styles.browserDots}>
          <div className={`${styles.dot} bg-gradient-to-br from-red-400 to-red-500`}></div>
          <div className={`${styles.dot} bg-gradient-to-br from-yellow-400 to-yellow-500`}></div>
          <div className={`${styles.dot} bg-gradient-to-br from-green-400 to-green-500`}></div>
        </div>
      </div>
      <div className={`${styles.browserContent} bg-white/90 backdrop-blur-sm`}>
        {children}
      </div>
    </div>
  );
};

export default BrowserWindow;
