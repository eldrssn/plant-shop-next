import React, { FC } from 'react';
import Link from 'next/link';

type PopularLinkProps = {
  title: string;
  href: string;
};

export const PopularLink: FC<PopularLinkProps> = ({ title, href }) => (
  <li key={title} className="basis-1/2">
    <Link href={href} className="block py-3 text-teal-700 hover:text-zinc-800 ">
      {title}
    </Link>
  </li>
);
