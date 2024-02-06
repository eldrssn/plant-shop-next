import { useContext } from 'react';

import { CloseMenuButton } from '@/components/ui/close-menu-button';
import { LogoIcon } from '@/components/ui/icons/LogoIcon';
import { ArrowBackIcon } from '@/components/ui/icons/ArrowBackIcon';
import { NavMobileContext } from '@/common/context/nav-mobile';

const Header = () => {
  const { closeMenu, isMainCategory, handleBackClick } =
    useContext(NavMobileContext);

  return (
    <div className="flex flex-row justify-between px-8 py-5">
      {!isMainCategory ? (
        <button onClick={handleBackClick}>
          <ArrowBackIcon />
        </button>
      ) : (
        <LogoIcon />
      )}
      <CloseMenuButton onClick={closeMenu} />
    </div>
  );
};

export { Header };
