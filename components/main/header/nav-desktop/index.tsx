'use client';

import { useState } from 'react';

import { TMenuItem } from '@/components/main/header/types';
import { Background } from '@/components/ui/background';
import { catalog } from '@/content/catalog';

import { MainCategories } from './MainCategories';
import { Categories } from './Categories';

const NavDesktop = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [currentSubMenu, setCurrentSubMenu] = useState<TMenuItem[] | null>(
    null
  );
  const [picture, setPicture] = useState<string>('');

  const showMenu = (menu?: TMenuItem) => () => {
    setIsOpenMenu(true);
    const { children, picture } = menu || {};

    children && setCurrentSubMenu(children);
    picture && setPicture(picture);
  };

  const closeMenu = () => {
    setIsOpenMenu(false);
    setPicture('');
  };

  return (
    <nav className="w-full">
      <MainCategories catalog={catalog} showMenu={showMenu} />

      {isOpenMenu && <Background className="lg:top-20" />}

      <Categories
        submenu={currentSubMenu}
        closeMenu={closeMenu}
        picture={picture}
        isOpenMenu={isOpenMenu}
      />
    </nav>
  );
};

export { NavDesktop };
