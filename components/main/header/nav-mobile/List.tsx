import { useContext } from 'react';

import { WithTransition } from '@/common/hocs/WithTransition';

import { Item } from './Item';
import { getDefaultStyles, transitionStyles } from './constants';
import { NavMobileContext } from '@/common/context/nav-mobile';

const List = () => {
  const { isMounted, currentMenu, handleItemClick } =
    useContext(NavMobileContext);

  return (
    <ul className="w-full mt-8">
      {currentMenu.map((item, index) => (
        <WithTransition
          key={item.title}
          style={{
            defaultStyle: getDefaultStyles(++index),
            transitionStyles,
          }}
          isOpen={isMounted}
        >
          <Item {...item} onClick={handleItemClick(item)} />
        </WithTransition>
      ))}
    </ul>
  );
};

export { List };
