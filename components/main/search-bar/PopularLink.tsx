import Link from 'next/link';
import React, { FC } from 'react';

type TPopularLink = {
  title: string;
  href: string;
};

export const PopularLink: FC<TPopularLink> = ({ title, href }) => (
  <li key={title} className="basis-1/2">
    <Link href={href} className="text-teal-700 block py-3 hover:text-zinc-800 ">
      {title}
    </Link>
  </li>
);
