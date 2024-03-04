import { FC } from 'react';
import Image from 'next/image';

export type PromiseItemProps = {
  label: string;
  title: string;
  desciption: string;
  image: string;
  id: number;
};

const PromiseItem: FC<PromiseItemProps> = ({
  label,
  title,
  desciption,
  image,
}) => (
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
