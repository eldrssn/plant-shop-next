'use client';

import { FC, createContext, useCallback, useEffect, useState } from 'react';

import { useToggleMenu } from '@/common/hooks/useToggleMenu';
import { catalog } from '@/content/catalog';
import { Children } from '@/common/types';
import { TMenuItem } from '@/components/main/header/types';

import { TNavContext } from './types';
import { initialNavContext } from './constants';

export const NavMobileContext = createContext<TNavContext>(initialNavContext);

const NavMobileProvider: FC<Children> = ({ children }) => {
  const { isOpen, openMenu, closeMenu } = useToggleMenu();
  const [isMounted, setIsMounted] = useState(isOpen);
  const [menuList, setMenuList] = useState<TMenuItem[][]>([catalog]);

  const toggleMount = useCallback(() => {
    setIsMounted((isMounted) => !isMounted);
  }, [setIsMounted]);

  const remount = useCallback(() => {
    toggleMount();
    setTimeout(() => {
      toggleMount();
    });
  }, [toggleMount]);

  const handleBackClick = () => {
    setMenuList((menuList) => menuList.slice(0, menuList.length - 1));
    remount();
  };

  const handleItemClick = useCallback(
    (item: TMenuItem) => () => {
      if (!item.children) {
        return;
      }
      setMenuList([...menuList, item.children]);
      remount();
    },
    [menuList, remount]
  );

  const isMainCategory = menuList.length === 1;

  useEffect(() => {
    return () => {
      toggleMount();
      setMenuList([catalog]);
    };
  }, [isOpen, toggleMount]);

  const currentMenu = menuList[menuList.length - 1];

  const value = {
    isOpen,
    openMenu,
    closeMenu,
    isMounted,
    remount,
    handleItemClick,
    currentMenu,
    isMainCategory,
    handleBackClick,
  };
  return (
    <NavMobileContext.Provider value={value}>
      {children}
    </NavMobileContext.Provider>
  );
};

export { NavMobileProvider };
