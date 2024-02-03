import { FC } from 'react';
import { TMainCategories } from '../types';

const MainCategories: FC<TMainCategories> = ({ catalog, showMenu }) => (
  <ul className='flex flex-row h-full pl-12'>
    {catalog.map((item) => (
      <li
        key={item.title}
        onMouseEnter={showMenu(item)}
        className='m-3 py-5 cursor-pointer relative my-auto overflow-hidden before:content-[""] before:w-6 before:h-[1px] before:duration-300
        before:bg-black before:absolute before:bottom-3 before:-translate-x-full hover:before:translate-x-0 before:transition-transform'
      >
        {item.title}
      </li>
    ))}
  </ul>
);

export { MainCategories };
