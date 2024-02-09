import { useContext } from 'react';

import { ToggleNavButton } from '@/components/ui/toggle-nav-button';
import { NavMobileContext } from '@/common/context/nav-mobile';

import { Header } from './Header';
import { List } from './List';

import clsx from 'clsx';
import { Background } from '@/components/ui/background';

const NavMobile = () => {
  const { isOpen, openMenu, closeMenu } = useContext(NavMobileContext);

  return (
    <>
      <div className="flex-1 w-1/3 h-4">
        <ToggleNavButton onClick={openMenu} />
      </div>

      <Background onClick={closeMenu} isOpen={isOpen} />

      <nav
        className={clsx(
          `absolute left-0 top-0 max-w-[700px] w-full h-screen bg-backSecond z-20
          opacity-100 duration-200 transition-transform -translate-x-full overflow-hidden`,
          {
            'translate-x-0': isOpen,
          }
        )}
      >
        <Header />
        <List />
      </nav>
    </>
  );
};

export { NavMobile };
