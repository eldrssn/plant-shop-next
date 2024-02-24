import { FC } from 'react';

import { Filter } from '@/models/Filters';
import { FilterCategory } from './FilterCategory';

type FilterCategoriesProps = {
  filters: Filter[];
};

export const FilterCategories: FC<FilterCategoriesProps> = ({ filters }) => (
  <div className="mb-20">
    {filters.map((filter) => (
      <FilterCategory key={filter.slug} {...filter} />
    ))}
  </div>
);
