'use client';
import { FC } from 'react';
import { usePathname } from 'next/navigation';

import { Icon } from '@/components/ui/icons/Icon';
import { OutlinedActionButton } from '@/components/ui/buttons/OutlinedActionButton';
import { FilledActionButton } from '@/components/ui/buttons/FilledActionButton';
import useBodyOverflow from '@/common/hooks/useBodyOverflow';
import { WithTransition } from '@/common/hocs/WithTransition';
import { PRODUCTS_SLUG } from '@/common/constants';
import { Filter } from '@/common/models/Filters';

import { FilterCategories } from './FilterCategories';
import { defaultStyle, transitionStyles } from './animation';

type TFiltersPopupMobile = {
  closeFilters: () => void;
  isOpen: boolean;
  filters: Filter[];
};

export const FiltersPopupMobile: FC<TFiltersPopupMobile> = ({
  closeFilters,
  isOpen,
  filters,
}) => {
  const pathname = usePathname();
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
      <div className="absolute top-0 bottom-0 left-0 right-0 overflow-auto">
        <div className="flex items-center justify-between px-6 py-4 mb-3 border-b bg-emerald-200">
          <p className="font-bold">Filters</p>

          <button type="button" onClick={closeFilters}>
            <Icon svgId="icon-filer-close" width="15" height="15" />
          </button>
        </div>

        <FilterCategories filters={filters} />

        <div className="fixed bottom-0 left-0 right-0 flex bg-white">
          <OutlinedActionButton
            href={`/${PRODUCTS_SLUG}`}
            className="basis-1/2"
          >
            Reset
          </OutlinedActionButton>
          <FilledActionButton onClick={closeFilters} className="basis-1/2">
            Apply
          </FilledActionButton>
        </div>
      </div>
    </WithTransition>
  );
};
