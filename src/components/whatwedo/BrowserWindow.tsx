
import React from 'react';
import { cn } from '@/lib/utils';
import styles from './BrowserWindow.module.css';

interface BrowserWindowProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export const BrowserWindow: React.FC<BrowserWindowProps> = ({ 
  children, 
  className,
  title
}) => {
  return (
    <div className={cn(styles.browserWindow, className)}>
      <div className={styles.browserHeader}>
        <div className={styles.browserDots}>
          <div className={`${styles.dot} bg-red-400`}></div>
          <div className={`${styles.dot} bg-yellow-400`}></div>
          <div className={`${styles.dot} bg-green-400`}></div>
        </div>
        {title && <div className={styles.browserTitle}>{title}</div>}
      </div>
      <div className={styles.browserContent}>
        {children}
      </div>
    </div>
  );
};

export default BrowserWindow;
