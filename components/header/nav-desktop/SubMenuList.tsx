import { FC } from 'react';
import { SubMenuItem } from './SubMenuItem';
import { MenuListProps } from './types';

const SubMenuList: FC<MenuListProps> = ({ submenu, className }) => (
  <div className="relative">
    <article className={`min-w-[200px] ${className}`}>
      {submenu?.map((menu, index) => (
        <SubMenuItem submenu={menu} key={index} />
      ))}
    </article>
  </div>
);

export { SubMenuList };
