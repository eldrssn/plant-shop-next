import { FC } from 'react';
import { TPromiseItem } from '../types';

const PromiseItem: FC<TPromiseItem> = ({ label, title, desciption, image }) => (
  <li>
    <img
      src={image}
      alt={label}
      loading='lazy'
      width={144}
      className='mx-auto mb-2'
    />
    <p>
      <span className='font-bold'>{title}</span> {desciption}
    </p>
  </li>
);

export { PromiseItem };
