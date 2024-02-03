import { FC } from 'react';
import { TCatalogItem } from '../types';

const CatalogItem: FC<TCatalogItem> = ({ title, children, onClick }) => {
  const isChildren = !!children && children?.length > 0;

  return (
    <li
      onClick={onClick}
      className='relative flex flex-row justify-between px-8 py-3 cursor-pointer'
    >
      <p className='text-2xl'>{title}</p>
      {isChildren && (
        <span className='absolute content-[""] border-t-2 border-t-black border-r-2 border-r-black rotate-45 top-[24px] right-8 w-[10px] h-[10px]' />
      )}
    </li>
  );
};

export { CatalogItem };
