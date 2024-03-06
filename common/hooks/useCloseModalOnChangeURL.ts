'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export const useCloseModalOnChangeURL = (
  isOpen: boolean,
  onClick: () => void
) => {
  const params = usePathname();
  const searchParams = useSearchParams();
  
  useEffect(() => {
    isOpen && onClick();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params, searchParams.toString()]);
};
