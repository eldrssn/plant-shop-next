'use client';
import { ChangeEvent, FC } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

import { Variant } from '@/models/Filters';

type TFilterVariant = {
  titleSlug: string;
  variant: Variant;
};

export const FilterVariant: FC<TFilterVariant> = ({
  variant: { title, slug },
  titleSlug,
}) => {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(Array.from(searchParams.entries()));

    if (event.target.checked) {
      params.append(titleSlug, slug);
    } else {
      const existingValues = params.getAll(titleSlug);

      params.delete(titleSlug);
      existingValues
        .filter((el) => el !== slug)
        .forEach((el) => params.append(titleSlug, el));
    }

    replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  };

  return (
    <li key={slug}>
      <label
        htmlFor={slug}
        className="px-6 py-1 flex justify-between items-center text-sm duration-300 transition-colors hover:text-teal-700 cursor-pointer"
      >
        {title}
        <input
          id={slug}
          type="checkbox"
          name={slug}
          className="cursor-pointer"
          checked={searchParams.has(titleSlug, slug)}
          onChange={handleChange}
        />
      </label>
    </li>
  );
};
