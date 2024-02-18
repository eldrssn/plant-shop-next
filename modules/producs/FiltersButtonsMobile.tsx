'use client';
import { FC, useState } from 'react';

import { Icon } from '@/components/ui/icons/Icon';
import { Sorting } from './Sorting';
import { FiltersPopupMobile } from './FiltersPopupMobile';
import { Filter } from '@/models/Filters';

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
      <div className="flex mb-10 px-3 md:hidden">
        <button
          type="button"
          className="flex justify-between items-center basis-1/2 gap-10 text-left font-bold px-6 py-4 border-b bg-emerald-200"
          onClick={toggleFilters}
        >
          Filter
          <Icon svgId="icon-filter-arrow-down" width="16" height="16" />
        </button>

        <Sorting />
      </div>

      <FiltersPopupMobile
        closeFilters={toggleFilters}
        isOpen={isOpenFilters}
        filters={filters}
      />
    </>
  );
};
