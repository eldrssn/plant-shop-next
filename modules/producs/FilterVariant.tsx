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
  const pathArray = pathname.split('/');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const slugIndex = pathArray.indexOf(slug);

    if (event.target.checked) {
      if (slugIndex === -1) {
        pathArray.push(titleSlug, slug);
      }
    } else {
      if (slugIndex !== -1) {
        pathArray.splice(slugIndex - 1, 2);
      }
    }

    const newPath = pathArray.join('/');

    replace(`${newPath}?${searchParams.toString()}`, {
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
          checked={!!pathname.split('/').includes(slug)}
          onChange={handleChange}
        />
      </label>
    </li>
  );
};
