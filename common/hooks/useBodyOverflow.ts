'use client';

import { useEffect } from 'react';

const useBodyOverflow = (isOpen: boolean) => {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = previousOverflow;
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);
};

export default useBodyOverflow;