'use client';
import { FC, useState } from 'react';
import { Icon } from '@/components/ui/icons/Icon';
import { Variant } from '@/models/Filters';
import { FilterVariant } from './FilterVariant';

type TFilterCategory = {
  title: string;
  slug: string;
  variants: Variant[];
};

export const FilterCategory: FC<TFilterCategory> = ({
  title,
  slug: titleSlug,
  variants,
}) => {
  const [isOpenList, setIsOpenList] = useState(true);

  const toggleList = () => setIsOpenList((isOpenList) => !isOpenList);

  return (
    <div>
      <div
        className="px-6 py-4 cursor-pointer flex justify-between items-center duration-300 transition-colors hover:text-teal-700 "
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
            <FilterVariant
              variant={variant}
              titleSlug={titleSlug}
              key={variant.slug}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
