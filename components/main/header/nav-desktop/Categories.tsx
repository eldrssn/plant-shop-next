import { FC } from 'react';
import clsx from 'clsx';
import Image from 'next/image';

import { WithTransition } from '@/common/hocs/WithTransition';

import { SubMenuList } from './SubMenuList';
import { defaultStyle, transitionStyles } from './constants';
import { TSubMenuList } from './types';

const Categories: FC<TSubMenuList> = ({
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
        className={clsx(
          'flex flex-row max-w-[1680px] [@media(min-width:1200px)]:pl-20 pl-5 m-auto h-full',
          {
            'h-0': !isOpenMenu,
          }
        )}
      >
        <div className="ml-auto flex flex-row basis-2/3 max-w-[53.5rem] mt-12">
          <div className="text-xl font-medium basis-1/5 [@media(min-width:1200px)]:basis-1/4">
            {mainSubcategory.title}
          </div>

          <SubMenuList submenu={subcategories} isOpenMenu={isOpenMenu} />
        </div>
        <div className="relative h-full w-full overflow-hidden aspect-square basis-1/3">
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
