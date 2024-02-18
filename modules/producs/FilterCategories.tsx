import { Filter } from '@/models/Filters';
import { FilterCategory } from './FilterCategory';
import { filtersArray } from '@/content/filters';
import { FC } from 'react';

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
