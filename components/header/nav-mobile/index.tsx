import { useContext } from 'react';

import { NavMobileContext } from '@/common/context/nav-mobile';

import { Header } from './Header';
import { List } from './List';

import { ToggleNavButton } from '@/components/ui/buttons/ToggleNavButton';
import { Background } from '@/components/ui/background';

const NavMobile = () => {
  const { isOpen, openMenu, closeMenu } = useContext(NavMobileContext);

  return (
    <>
      <div className="flex-1 w-1/3 h-4 lg:hidden">
        <ToggleNavButton onClick={openMenu} />
      </div>

      <Background onClick={closeMenu} isOpen={isOpen} />

      <nav
        className={`absolute left-0 top-0 max-w-[450px] w-full h-screen bg-backSecond z-20
          opacity-100 duration-1000 ease-in-out transition-transform -translate-x-full overflow-hidden
          ${isOpen ? ' translate-x-0' : ''}`}
      >
        <Header />
        <List />
      </nav>
    </>
  );
};

export { NavMobile };
