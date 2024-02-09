import React, { FC } from 'react';

type TPopularLink = {
  link: {
    title: string;
    href: string;
    amount: number;
  };
};

export const PopularLink: FC<TPopularLink> = ({
  link: { title, href, amount },
}) => (
  <li key={title}>
    <a
      href={href}
      className="text-teal-700 flex justify-between py-3 hover:text-zinc-800 "
    >
      <p>{title}</p> <span>{amount}</span>
    </a>
  </li>
);
