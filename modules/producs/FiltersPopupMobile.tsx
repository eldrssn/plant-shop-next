'use client';
import { FC } from 'react';

import { Icon } from '@/components/ui/icons/Icon';
import { OutlinedLink } from '@/components/ui/outlined-link';
import { FilledActionBox } from '@/components/ui/filled-action-button';
import useBodyOverflow from '@/common/hooks/useBodyOverflow';
import { WithTransition } from '@/common/hocs/WithTransition';

import { FilterCategories } from './FilterCategories';
import { defaultStyle, transitionStyles } from './animation';

type TFiltersPopupMobile = {
  closeFilters: () => void;
  isOpen: boolean;
};

export const FiltersPopupMobile: FC<TFiltersPopupMobile> = ({
  closeFilters,
  isOpen,
}) => {
  useBodyOverflow(isOpen);

  return (
    <WithTransition
      style={{
        defaultStyle,
        transitionStyles,
      }}
      isOpen={isOpen}
      classNames="absolute top-0 z-20 bottom-0 left-0 right-0 bg-white overflow-hidden"
    >
      <form className="absolute top-0 bottom-0 left-0 right-0 overflow-auto">
        <div className="px-6 py-4 mb-3 border-b bg-emerald-200 flex justify-between items-center">
          <p className="font-bold">Filters</p>

          <button type="button" onClick={closeFilters}>
            <Icon svgId="icon-filer-close" width="15" height="15" />
          </button>
        </div>

        <FilterCategories />

        <div className="fixed bottom-0 left-0 right-0 flex bg-white">
          <OutlinedLink onClick={closeFilters} className="basis-1/2">
            Reset
          </OutlinedLink>
          <FilledActionBox onClick={closeFilters} className="basis-1/2">
            Apply
          </FilledActionBox>
        </div>
      </form>
    </WithTransition>
  );
};