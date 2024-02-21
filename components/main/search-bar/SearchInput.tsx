'use client';

import React, { FC, FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { Icon } from '@/components/ui/icons/Icon';
import { PRODUCTS_SLUG } from '@/common/constants';

type SearchInputProps = {
  isOpen: boolean;
};

export const SearchInput: FC<SearchInputProps> = ({ isOpen }) => {
  const { replace } = useRouter();
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!isOpen) {
      setQuery('');
    }
  }, [isOpen]);

  const handleSumbit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setQuery('');
    replace(`/${PRODUCTS_SLUG}?${'search'}=${query}`);
  };

  return (
    <form onSubmit={handleSumbit} className="relative w-full bg-white mb-16">
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        className="w-full border border-neutral-200 p-5"
      />

      <button
        type="submit"
        className="absolute top-0 right-0 bg-teal-700 h-[75%] aspect-square m-2 grid place-content-center"
      >
        <Icon
          svgId="icon-magnify-glass"
          width="23px"
          height="23px"
          className="fill-white"
        />
      </button>
    </form>
  );
};
