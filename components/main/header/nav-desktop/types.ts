import { TMenuItem } from '@/components/main/header/types';

export type TSubMenuItem = {
  submenu: TMenuItem | null;
};

export type TSubMenuList = {
  submenu: TMenuItem[] | null;
  isOpenMenu?: boolean;
  closeMenu?: () => void;
  className?: string;
  picture?: string;
};

export type TMainCategories = {
  catalog: TMenuItem[];
  showMenu: (menu?: TMenuItem) => () => void;
};
