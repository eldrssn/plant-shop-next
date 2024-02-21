import { popularSearchLinks } from '@/content/header';
import React from 'react';
import { PopularLink } from './PopularLink';

export const PopularLinks = () => (
  <div>
    <h3 className="font-bold text-zinc-800 mb-6">Popular</h3>
    <ul className="flex justify-between flex-wrap">
      {popularSearchLinks.map((link) => (
        <PopularLink {...link} key={link.title} />
      ))}
    </ul>
  </div>
);
