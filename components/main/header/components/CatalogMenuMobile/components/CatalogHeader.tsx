import { useContext } from 'react';

import { CloseMenuButton } from '@/components/ui/CloseMenuButton';
import { LogoIcon } from '@/components/ui/Icons/LogoIcon';
import { ArrowBackIcon } from '@/components/ui/Icons/ArrowBackIcon';
import { CatalogContext } from './CatalogContext';

const CatalogHeader = () => {
  const { closeMenu, isMainCategory, handleBackClick } =
    useContext(CatalogContext);

  return (
    <div className='flex flex-row justify-between px-8 py-5'>
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

export { CatalogHeader };
