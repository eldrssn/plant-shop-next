'use client'

import { useEffect, useState } from 'react';

export const useInViewportOnce = (ref: React.RefObject<HTMLDivElement>) => {
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const viewHeight =
          window.innerHeight || document.documentElement.clientHeight;
        const isVisible = !(rect.bottom < 0 || rect.top - viewHeight >= 0);

        if (isVisible && !isInViewport) {
          setIsInViewport(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isInViewport, ref]);

  return isInViewport;
};
