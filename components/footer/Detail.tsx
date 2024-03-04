import { FC } from 'react';
import Image from 'next/image';

import { TDetail } from '@/modules/home-page/types';

const Detail: FC<TDetail> = ({ icon, title, descriptions }) => (
  <li className="flex flex-col items-center px-4 mb-12 text-center md:flex-row md:items-start md:text-start md:basis-1/2 lg:basis-1/4">
    <div className="relative mb-4 md:mr-4 md:mt-[6px]">
      <Image
        src={icon}
        alt={title}
        width={30}
        height={30}
        className="max-w-[30px]"
      />
    </div>

    <div>
      <h4 className="mb-4 font-bold uppercase">{title}</h4>
      <div className="flex flex-col gap-2 text-sm">
        {descriptions.map((description, i) => (
          <p className="block" key={i}>
            {description}
          </p>
        ))}
      </div>
    </div>
  </li>
);

export { Detail };
