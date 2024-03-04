import { useContext } from 'react';

import { WithTransition } from '@/common/hocs/WithTransition';
import { NavMobileContext } from '@/common/context/nav-mobile';

import { Item } from './Item';
import { getDefaultStyles, transitionStyles } from './animation';

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
