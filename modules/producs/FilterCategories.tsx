import { FC } from 'react';

import { Filter } from '@/models/Filters';
import { DEFAULT_OPEN_FILTERS } from '@/common/constants';
import { FilterCategory } from './FilterCategory';

type FilterCategoriesProps = {
  filters: Filter[];
};

export const FilterCategories: FC<FilterCategoriesProps> = ({ filters }) => (
  <div className="mb-20">
    {filters.map((filter, i) => (
      <FilterCategory
        key={filter.slug}
        isOpen={i < DEFAULT_OPEN_FILTERS}
        {...filter}
      />
    ))}
  </div>
);
