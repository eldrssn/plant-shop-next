'use client';

import { ChangeEvent } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { ORDER_KEY } from '@/common/constants';
import { optionsArray } from './constants';

export const Sorting = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentParams = new URLSearchParams(Array.from(searchParams.entries()));

  const onSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value.trim();

    if (!value) {
      currentParams.delete(ORDER_KEY);
    } else {
      currentParams.set(ORDER_KEY, event.target.value);
    }

    const search = currentParams.toString();
    const query = search ? `?${search}` : '';

    router.push(`${pathname}${query}`);
  };

  return (
    <select
      className="px-6 py-4 font-bold break-words border-b basis-1/2 font-sm md:font-normal md:min-w-1/3 md:w-1/3 md:basis-1/3 md:border md:mr-3"
      name="order"
      value={currentParams.get('order') || ''}
      onChange={onSelect}
    >
      <option value="">Sort By: Default</option>
      {optionsArray.map((option) => (
        <option key={option.value} value={option.value}>
          {option.title}
        </option>
      ))}
    </select>
  );
};
