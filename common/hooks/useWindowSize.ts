'use client';

import { DESKTOP_WIDTH, TABLET_WIDTH } from '@/common/constants';
import { useEffect, useState } from 'react';

type WindowSidesType = {
  windowWidth: number | null;
  windowHeight: number | null;
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSidesType>({
    windowWidth: null,
    windowHeight: null,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        windowWidth: window?.innerWidth,
        windowHeight: window?.innerHeight,
      });
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      handleResize();
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  const { windowWidth, windowHeight } = windowSize;

  return {
    windowWidth,
    windowHeight,
    isDesktop: windowWidth && DESKTOP_WIDTH < windowWidth,
    isTablet: windowWidth && TABLET_WIDTH < windowWidth,
  };
};

export { useWindowSize };
