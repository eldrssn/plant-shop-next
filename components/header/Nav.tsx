'use client';

import { useWindowSize } from '@/common/hooks/useWindowSize';
import { NavMobileProvider } from '@/common/context/nav-mobile';
import { NavDesktop } from './nav-desktop';
import { NavMobile } from './nav-mobile';

const Nav = () => {
  const { isDesktop } = useWindowSize();

  return isDesktop ? (
    <NavDesktop />
  ) : (
    <NavMobileProvider>
      <NavMobile />
    </NavMobileProvider>
  );
};

export { Nav };
