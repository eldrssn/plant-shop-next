'use client';

import { Suspense, useState } from 'react';

import { LogoIcon } from '@/components/ui/icons/LogoIcon';
import { Icon } from '@/components/ui/icons/Icon';

import { Nav } from './Nav';
import { SearchBar } from '../search-bar';
import { CartButton } from './CartButton';

const Header = () => {
  const [isOpenedSearchBar, setIsOpenSearchBar] = useState(false);

  const toggleSearchBar = () =>
    setIsOpenSearchBar((isOpenedSearchBar) => !isOpenedSearchBar);
  
  return (
    <>
      <header className="sticky top-0 z-20 w-full h-16 shadow-lg bg-white/80 lg:h-20 backdrop-blur-sm">
        <div className="max-w-[75rem] w-full flex flex-row items-center m-auto h-full">
          <Nav />

          <div className="flex justify-center flex-1 w-1/3 lg:flex-none lg:w-auto lg:-order-1 lg:justify-start lg:px-2">
            <LogoIcon />
          </div>

          <div className="flex-1 w-1/3 ">
            <div className="flex flex-row float-right clear-both pr-4">
              <button className="p-3" onClick={toggleSearchBar}>
                <Icon width="20px" height="25px" svgId="icon-magnify-glass" />
              </button>

              <CartButton />
            </div>
          </div>
        </div>
      </header>

      <Suspense>
        <SearchBar handleClose={toggleSearchBar} isOpen={isOpenedSearchBar} />
      </Suspense>
    </>
  );
};

export { Header };
