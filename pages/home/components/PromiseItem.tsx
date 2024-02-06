import { FC } from 'react';
import Image from 'next/image';
import { TPromiseItem } from '../types';

const PromiseItem: FC<TPromiseItem> = ({ label, title, desciption, image }) => (
  <li>
    <Image
      src={image}
      alt={label}
      loading="lazy"
      width={144}
      height={144}
      className="mx-auto mb-2"
    />
    <p>
      <span className="font-bold">{title}</span> {desciption}
    </p>
  </li>
);

export { PromiseItem };
