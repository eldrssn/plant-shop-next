import { FC } from 'react';
import Link from 'next/link';

import { TActionBox } from '@/common/types';

const FilledActionBox: FC<TActionBox> = ({
  href,
  className,
  children,
  onClick,
  type,
}) => {
  const classNames = `w-full text-white bg-teal-700 font-bold py-4 px-10 block max-w-[300px] ease-in-out transition-colors duration-300
      hover:bg-teal-700/80 text-center ${className}`;

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

export { FilledActionBox };
