import { MobileMenuButton } from '@/components/ui/MobileMenuButton/MobileMenuButton';

import { CatalogHeader } from './components/CatalogHeader';
import { CatalogList } from './components/CatalogList';
import { useContext } from 'react';
import { CatalogContext } from './components/CatalogContext';

import clsx from 'clsx';
import { Background } from '@/components/ui/Background/Background';

const CatalogMenuMobile = () => {
  const { isOpen, openMenu, closeMenu } = useContext(CatalogContext);

  return (
    <>
      <div className="flex-1 w-1/3 h-4">
        <MobileMenuButton onClick={openMenu} />
      </div>

      {isOpen && <Background onClick={closeMenu} />}

      <nav
        className={clsx(
          `absolute left-0 top-0 max-w-[700px] w-full h-screen bg-backSecond 
          opacity-100 duration-200 transition-transform -translate-x-full overflow-hidden`,
          {
            'translate-x-0': isOpen,
          }
        )}
      >
        <CatalogHeader />
        <CatalogList />
      </nav>
    </>
  );
};

export { CatalogMenuMobile };
