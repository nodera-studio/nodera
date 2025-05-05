
import React, { ReactNode } from 'react';
import styles from '../WhatWeDo.module.css';

interface BrowserWindowProps {
  children: ReactNode;
}

const BrowserWindow: React.FC<BrowserWindowProps> = ({ children }) => {
  return (
    <div className={`${styles.browserWindow} w-full max-w-lg mt-4`}>
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
