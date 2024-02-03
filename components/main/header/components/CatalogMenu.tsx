'use client';

import { useWindowSize } from '@/hooks/useWindowSize';
import { CatalogMenuDesktop } from './CatalogMenuDesktop';
import { CatalogMenuMobile } from './CatalogMenuMobile';
import { CatalogContextProvider } from './CatalogMenuMobile/components/CatalogContext';

const CatalogMenu = () => {
  const { isDesktop } = useWindowSize();

  return isDesktop ? (
    <CatalogMenuDesktop />
  ) : (
    <CatalogContextProvider>
      <CatalogMenuMobile />
    </CatalogContextProvider>
  );
};

export { CatalogMenu };
