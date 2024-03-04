'use client';
import { FC, Suspense, useState } from 'react';

import { Icon } from '@/components/ui/icons/Icon';
import { Filter } from '@/common/models/Filters';
import { Sorting } from './Sorting';
import { FiltersPopupMobile } from './FiltersPopupMobile';

type FiltersButtonsMobileProps = {
  filters: Filter[];
};

export const FiltersButtonsMobile: FC<FiltersButtonsMobileProps> = ({
  filters,
}) => {
  const [isOpenFilters, setIsOpenFilters] = useState(false);

  const toggleFilters = () =>
    setIsOpenFilters((isOpenFilters) => !isOpenFilters);

  return (
    <>
      <div className="flex px-3 mb-10 md:hidden">
        <button
          type="button"
          className="flex items-center justify-between gap-10 px-6 py-4 font-bold text-left border-b basis-1/2 bg-emerald-200"
          onClick={toggleFilters}
        >
          Filter
          <Icon svgId="icon-filter-arrow-down" width="16" height="16" />
        </button>

        <Suspense>
          <Sorting />
        </Suspense>
      </div>

      <FiltersPopupMobile
        closeFilters={toggleFilters}
        isOpen={isOpenFilters}
        filters={filters}
      />
    </>
  );
};
