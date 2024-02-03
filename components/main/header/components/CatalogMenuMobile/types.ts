import { TMenuItem } from '@/components/main/header/types';

export type TCatalogContent = {
  isOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
  isMounted: boolean;
  remount: () => void;
  handleItemClick: (item: TMenuItem) => () => void;
  currentMenu: TMenuItem[];
  isMainCategory: boolean;
  handleBackClick: () => void;
};

export type TCatalogItem = TMenuItem & {
  onClick: () => void;
};
