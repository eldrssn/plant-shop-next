'use client';
import { FilterCategory } from './FilterCategory';
import { filtersArray } from '@/content/filters';

export const FilterCategories = () => (
  <div className="mb-20">
    {filtersArray.map((filter) => (
      <FilterCategory key={filter.title} {...filter} />
    ))}
  </div>
);
