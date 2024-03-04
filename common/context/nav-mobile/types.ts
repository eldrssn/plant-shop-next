import { TMenuItem } from '@/components/header/types';

export type TNavContext = {
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
