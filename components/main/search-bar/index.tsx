import React, { FC } from 'react';

import { Background } from '@/components/ui/background';
import { WithTransition } from '@/common/hocs/WithTransition';

import { SearchInput } from './SearchInput';
import { PopularLinks } from './PopularLinks';
import { CloseButton } from './CloseButton';

import { defaultStyle, transitionStyles } from './animation';

type TSearchBar = {
  handleClose: () => void;
  isOpen: boolean;
};

export const SearchBar: FC<TSearchBar> = ({ handleClose, isOpen }) => {
  return (
    <>
      <Background onClick={handleClose} isOpen={isOpen} />

      <WithTransition
        style={{
          defaultStyle,
          transitionStyles,
        }}
        isOpen={isOpen}
        classNames="fixed top-16 flex w-full z-10 flex-col items-center h-auto md:bg-zinc-50 bg-zinc-50/80 backdrop-blur-sm shadow-lg"
      >
        <>
          <div className="ml-auto">
            <CloseButton onClick={handleClose} />
          </div>

          <div className="w-[80%] mb-8">
            <SearchInput />
            <PopularLinks />
          </div>
        </>
      </WithTransition>
    </>
  );
};
