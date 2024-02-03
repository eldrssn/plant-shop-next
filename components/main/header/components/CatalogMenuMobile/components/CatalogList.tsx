import { useContext } from 'react';

import { WithTransition } from '@/hocs/WithTransition';

import { CatalogItem } from './CatalogItem';
import { getDefaultStyles, transitionStyles } from '../constants';
import { CatalogContext } from './CatalogContext';

const CatalogList = () => {
  const { isMounted, currentMenu, handleItemClick } =
    useContext(CatalogContext);

  return (
    <ul className='w-full mt-8'>
      {currentMenu.map((item, index) => (
        <WithTransition
          key={item.title}
          style={{
            defaultStyle: getDefaultStyles(++index),
            transitionStyles,
          }}
          isOpen={isMounted}
        >
          <CatalogItem {...item} onClick={handleItemClick(item)} />
        </WithTransition>
      ))}
    </ul>
  );
};

export { CatalogList };
