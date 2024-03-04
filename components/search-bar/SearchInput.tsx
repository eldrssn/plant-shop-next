'use client';

import React, { FC, FormEvent, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

import { Icon } from '@/components/ui/icons/Icon';
import { PRODUCTS_SLUG } from '@/common/constants';

type SearchInputProps = {
  isOpen: boolean;
};

export const SearchInput: FC<SearchInputProps> = ({ isOpen }) => {
  const { replace } = useRouter();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current && inputRef.current.focus();
      return;
    }

    setQuery('');
  }, [isOpen]);

  const handleSumbit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setQuery('');
    replace(`/${PRODUCTS_SLUG}?${'search'}=${query}`);
  };

  return (
    <form onSubmit={handleSumbit} className="relative w-full mb-16 bg-white">
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        className="w-full p-5 border border-neutral-200"
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
