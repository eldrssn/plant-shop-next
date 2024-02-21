import { FC } from 'react';
import Link from 'next/link';

import { TActionBox } from '@/common/types';

const OutlinedActionButton: FC<TActionBox> = ({
  href,
  onClick,
  className,
  children,
  type,
}) => {
  const classNames = `text-zinc-800 border border-zinc-800 font-bold py-4  ease-in-out transition-colors duration-300
  hover:bg-zinc-800 hover:text-stone-200 text-center md:max-w-[300px] ${className}`;

  return href ? (
    <Link href={href} className={classNames}>
      {children}
    </Link>
  ) : (
    <button onClick={onClick} type={type} className={classNames}>
      {children}
    </button>
  );
};

export { OutlinedActionButton };
