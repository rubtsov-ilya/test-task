'use client';

import { FC, ReactNode, useEffect, useRef } from 'react';
import Scrollbar from 'smooth-scrollbar';

import styles from './SmoothScroll.module.scss';

interface SmoothScrollProps {
  children: ReactNode;
}

export const SmoothScroll: FC<SmoothScrollProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollbar = Scrollbar.init(container, {
      damping: 0.08,
      alwaysShowTracks: false,
      thumbMinSize: 20,
    });

    return () => {
      if (scrollbar) {
        scrollbar.destroy();
      }
    };
  }, []);

  return (
    <div ref={containerRef} className={styles['smooth-scroll']}>
      {children}
    </div>
  );
};
