import { TMenuItem } from '@/components/header/types';

export type TSubMenuItem = {
  submenu: TMenuItem | null;
};

export type MenuListProps = {
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
