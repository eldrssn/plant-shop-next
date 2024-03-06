import React, { FC } from 'react';

import { Background } from '@/components/ui/background';
import { WithTransition } from '@/common/hocs/WithTransition';

import { SearchInput } from './SearchInput';
import { PopularLinks } from './PopularLinks';
import { CloseButton } from './CloseButton';

import { defaultStyle, transitionStyles } from './animation';
import { useSearchParams } from 'next/navigation';

type SearchBarProps = {
  handleClose: () => void;
  isOpen: boolean;
};

export const SearchBar: FC<SearchBarProps> = ({ handleClose, isOpen }) => (
  <>
    <Background onClick={handleClose} isOpen={isOpen} className="z-0" />

    <WithTransition
      style={{
        defaultStyle,
        transitionStyles,
      }}
      isOpen={isOpen}
      classNames="fixed top-16 left-0 right-0 lg:top-20 flex w-full z-10 flex-col items-center h-auto md:bg-zinc-50 bg-zinc-50/80 backdrop-blur-sm shadow-lg"
    >
      <>
        <div className="ml-auto">
          <CloseButton onClick={handleClose} />
        </div>

        <div className="w-[80%] mb-8">
          <SearchInput isOpen={isOpen} />
          <PopularLinks />
        </div>
      </>
    </WithTransition>
  </>
);
