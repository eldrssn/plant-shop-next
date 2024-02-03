'use client';

import { FC, createContext, useCallback, useEffect, useState } from 'react';

import { useToggleMenu } from '@/hooks/useToggleMenu';
import { catalog } from '@/content/catalog';
import { Children } from '@/types';
import { TMenuItem } from '@/components/main/header/types';

import { TCatalogContent } from '../types';
import { initianCatalogContext } from '../constants';

export const CatalogContext = createContext<TCatalogContent>(
  initianCatalogContext
);

const CatalogContextProvider: FC<Children> = ({ children }) => {
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
    <CatalogContext.Provider value={value}>{children}</CatalogContext.Provider>
  );
};

export { CatalogContextProvider };
