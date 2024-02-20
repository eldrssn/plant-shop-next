'use client';

import { ORDER_KEY } from '@/common/constants/lib';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent } from 'react';

const optionsArray = [
  { title: 'Sort by: Price (low to high)', value: 'price:asc' },
  { title: 'Sort by: Price (high to low)', value: 'price:desc' },
  // TODO: next step
  // { title: 'Sort by: Recommended', value: 'rank:desc' },
  // { title: 'Sort by: Most popular', value: 'popularity:desc' },
  // { title: 'Sort by: Newest', value: 'created:desc' },
];

export const Sorting = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const current = new URLSearchParams(Array.from(searchParams.entries()));

  const onSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value.trim();

    if (!value) {
      current.delete(ORDER_KEY);
    } else {
      current.set(ORDER_KEY, event.target.value);
    }

    const search = current.toString();
    const query = search ? `?${search}` : '';

    router.push(`${pathname}${query}`);
  };

  return (
    <select
      className="basis-1/2 font-bold px-6 py-4 border-b break-words font-sm md:font-normal md:min-w-1/3 md:w-1/3 md:basis-1/3 md:border md:mr-3"
      name="order"
      value={current.get('order') || ''}
      onChange={onSelect}
    >
      <option value="">Sort By</option>
      {optionsArray.map((option) => (
        <option key={option.value} value={option.value}>
          {option.title}
        </option>
      ))}
    </select>
  );
};
