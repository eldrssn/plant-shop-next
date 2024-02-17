'use client';
import { FC, useState } from 'react';
import { Icon } from '@/components/ui/icons/Icon';

type TFilter = {
  id: string;
  name: string;
  value: string;
  label: string;
  count: number;
};
type TFilterCategory = {
  title: string;
  filters: TFilter[];
};

export const FilterCategory: FC<TFilterCategory> = ({ title, filters }) => {
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
          {filters.map(({ id, label, name, value }) => (
            <li key={id} className="">
              <label
                htmlFor={id}
                className="px-6 py-1 flex justify-between items-center text-sm duration-300 transition-colors hover:text-teal-700 cursor-pointer"
              >
                {label}
                <input
                  id={id}
                  type="checkbox"
                  name={name}
                  value={value}
                  className="cursor-pointer "
                />
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
