'use client';
import { FC, Suspense, useState } from 'react';
import { Icon } from '@/components/ui/icons/Icon';
import { Variant } from '@/common/models/Filters';
import { FilterVariant } from './FilterVariant';

type FilterCategoryProps = {
  title: string;
  slug: string;
  variants: Variant[];
  isOpen: boolean;
};

export const FilterCategory: FC<FilterCategoryProps> = ({
  title,
  slug,
  variants,
  isOpen,
}) => {
  const [isOpenList, setIsOpenList] = useState(isOpen);

  const toggleList = () => setIsOpenList((isOpenList) => !isOpenList);

  return (
    <div>
      <div
        className="flex items-center justify-between px-6 py-4 transition-colors duration-300 cursor-pointer hover:text-teal-700 "
        onClick={toggleList}
      >
        <p className="font-bold">{title}</p>
        <Icon
          svgId="icon-filter-arrow-down"
          width="16"
          height="16"
          className={`fill-teal-700 transition-transform ${
            isOpenList ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </div>

      {isOpenList && (
        <ul className="mb-2">
          {variants.map((variant) => (
            <Suspense key={variant.slug}>
              <FilterVariant variant={variant} titleSlug={slug} />
            </Suspense>
          ))}
        </ul>
      )}
    </div>
  );
};
