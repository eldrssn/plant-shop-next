import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { WithTransition } from '@/common/hocs/WithTransition';

import { SubMenuList } from './SubMenuList';
import { defaultStyle, transitionStyles } from './animation';
import { MenuListProps } from './types';

const Categories: FC<MenuListProps> = ({
  submenu,
  closeMenu,
  picture,
  isOpenMenu,
}) => {
  const [mainSubcategory, ...subcategories] = submenu || [];

  if (!mainSubcategory) {
    return null;
  }

  return (
    <WithTransition
      style={{
        defaultStyle,
        transitionStyles,
      }}
      isOpen={!!isOpenMenu}
      classNames="bg-white border-t w-full top-[80px] z-20 left-0 absolute"
    >
      <div
        onMouseLeave={closeMenu}
        className={`flex flex-row max-w-[1680px] [@media(min-width:1200px)]:pl-20 pl-5 m-auto h-full 
        ${isOpenMenu ? '' : ' h-0'}`}
      >
        <div className="ml-auto flex flex-row basis-2/3 max-w-[53.5rem] mt-12">
          <Link
            href={mainSubcategory.href || ''}
            className="text-xl font-medium basis-1/5 [@media(min-width:1200px)]:basis-1/4"
          >
            {mainSubcategory.title}
          </Link>

          <SubMenuList submenu={subcategories} isOpenMenu={isOpenMenu} />
        </div>
        <div className="relative w-full h-full overflow-hidden aspect-square basis-1/3">
          {picture && (
            <Image
              fill={true}
              src={picture}
              alt={mainSubcategory.title}
              className="object-cover object-center h-full"
              priority={true}
            />
          )}
        </div>
      </div>
    </WithTransition>
  );
};

export { Categories };
