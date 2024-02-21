import { FC } from 'react';
import { TItem } from './types';
import Link from 'next/link';

const Item: FC<TItem> = ({ title, children, onClick, href }) => {
  const isChildren = !!children && children?.length > 0;

  return (
    <li
      onClick={onClick}
      className="relative flex flex-row justify-between px-8 py-3 cursor-pointer"
    >
      {!isChildren && href ? (
        <Link href={href} className="text-2xl">
          {title}
        </Link>
      ) : (
        <p className="text-2xl">{title}</p>
      )}
      {isChildren && (
        <span className='absolute content-[""] border-t-2 border-t-black border-r-2 border-r-black rotate-45 top-[24px] right-8 w-[10px] h-[10px]' />
      )}
    </li>
  );
};

export { Item };
