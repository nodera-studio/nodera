
import React, { useEffect } from 'react';
import styles from './CustomCursor.module.css';

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');
    if (!cursor) return;

    const moveHandler = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      document.documentElement.style.setProperty('--x', `${clientX}px`);
      document.documentElement.style.setProperty('--y', `${clientY}px`);

      // Check if hovering over interactive elements
      const targetElement = document.elementFromPoint(clientX, clientY);
      const isInteractive = targetElement?.closest('a, button, [role="button"], input[type="submit"]');

      if (isInteractive) {
        cursor.classList.add(styles.interactive);
      } else {
        cursor.classList.remove(styles.interactive);
      }
    };

    document.addEventListener('mousemove', moveHandler);

    // Hide cursor when mouse leaves the window
    const mouseLeaveHandler = () => {
      cursor.classList.add(styles.hidden);
    };

    // Show cursor when mouse enters the window
    const mouseEnterHandler = () => {
      cursor.classList.remove(styles.hidden);
    };

    document.addEventListener('mouseleave', mouseLeaveHandler);
    document.addEventListener('mouseenter', mouseEnterHandler);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', moveHandler);
      document.removeEventListener('mouseleave', mouseLeaveHandler);
      document.removeEventListener('mouseenter', mouseEnterHandler);
    };
  }, []);

  return <div id="custom-cursor" className={styles.customCursor} />;
};

export default CustomCursor;
