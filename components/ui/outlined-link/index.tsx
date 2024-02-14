import { TActionBox } from '@/common/types';
import { FC } from 'react';

const OutlinedLink: FC<TActionBox> = ({ href = '#', className, children }) => (
  <a
    href={href}
    className={`text-zinc-800 border border-zinc-800 font-bold py-4  ease-in-out transition-colors duration-300
          hover:bg-zinc-800 hover:text-stone-200 text-center md:max-w-[300px] ${className}`}
  >
    {children}
  </a>
);

export { OutlinedLink };
