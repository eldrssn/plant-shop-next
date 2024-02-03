import { FC, useState } from 'react';

import { TMenuItem } from '@/components/main/header/types';

import { SubMenuList } from './SubMenuList';
import { TSubMenuItem } from '../types';

const SubMenuItem: FC<TSubMenuItem> = ({ submenu }) => {
  const [menu, setMenu] = useState<TMenuItem[] | null>(null);

  if (!submenu) {
    return null;
  }

  const { title, children } = submenu;
  const showSubMenu = (children?: TMenuItem[]) => () => {
    if (children?.length) {
      setMenu(children);
    }
  };
  const closeSubMenu = () => {
    setMenu(null);
  };

  return (
    <div
      onMouseEnter={showSubMenu(children)}
      onMouseLeave={closeSubMenu}
      key={title}
      className='relative flex flex-row justify-between py-1 cursor-pointer'
    >
      <p className='text-md'>{title}</p>
      {children?.length && (
        <span className='absolute content-[""] border-t border-t-black border-r border-r-black rotate-45 top-[14px] right-8 w-[8px] h-[8px]' />
      )}
      <SubMenuList submenu={menu} className='absolute left-0 -top-1' />
    </div>
  );
};

export { SubMenuItem };
