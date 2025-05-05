
import React, { ReactNode } from 'react';
import styles from './BrowserWindow.module.css';

interface BrowserWindowProps {
  children: ReactNode;
}

const BrowserWindow: React.FC<BrowserWindowProps> = ({ children }) => {
  return (
    <div className={`${styles.browserWindow} w-full max-w-lg mt-4 shadow-xl`}>
      <div className={`${styles.browserHeader} bg-gradient-to-r from-gray-900 to-gray-800`}>
        <div className={styles.browserDots}>
          <div className={`${styles.dot} bg-red-400`}></div>
          <div className={`${styles.dot} bg-yellow-400`}></div>
          <div className={`${styles.dot} bg-green-400`}></div>
        </div>
      </div>
      <div className={`${styles.browserContent} bg-white bg-opacity-95 backdrop-blur-sm border border-gray-100`}>
        {children}
      </div>
    </div>
  );
};

export default BrowserWindow;
