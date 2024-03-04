'use client';
import { ChangeEvent, FC } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

import { Variant } from '@/common/models/Filters';

type FilterVariantProps = {
  titleSlug: string;
  variant: Variant;
};

export const FilterVariant: FC<FilterVariantProps> = ({
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
        className="flex items-center justify-between px-6 py-1 text-sm transition-colors duration-300 cursor-pointer hover:text-teal-700"
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
