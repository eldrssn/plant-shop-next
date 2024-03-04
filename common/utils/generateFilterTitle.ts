import { Filter } from '@/common/models/Filters';
import { MAX_TITLES_COUNT } from '../constants';
import { SearchParams } from '../types';

type Props = {
  filters: Filter[];
  slugs: SearchParams;
  isHead?: boolean;
};

export const generateFilterTitle = ({ filters, slugs, isHead }: Props) => {
  const connector = isHead ? ' | ' : ' - ';
  const filterTitles: string[] = [];

  if (slugs.search) {
    return `Search: ${slugs.search}`;
  }

  filters.forEach((filter) => {
    const paramValues = slugs[filter.slug] || [];

    filter.variants.forEach((variant) => {
      if (paramValues.includes(variant.slug)) {
        filterTitles.push(variant.title);
      }
    });
  });

  if (filterTitles.length === 0) {
    return 'All Products';
  }

  if (filterTitles.length > MAX_TITLES_COUNT) {
    return filterTitles.slice(0, MAX_TITLES_COUNT).join(connector);
  }

  return filterTitles.join(connector);
};
