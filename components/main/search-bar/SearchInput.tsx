import { Icon } from '@/components/ui/icons/Icon';
import React from 'react';

export const SearchInput = () => (
  <div className="relative w-full bg-white mb-16">
    <input type="text" className="w-full border border-neutral-200 p-5" />
    <div className="absolute top-0 right-0 bg-teal-700 h-[75%] aspect-square m-2 grid place-content-center cursor-pointer">
      <Icon
        svgId="icon-magnify-glass"
        width="23px"
        height="23px"
        className="fill-white"
      />
    </div>
  </div>
);
