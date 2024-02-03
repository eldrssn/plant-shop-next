import { FC } from 'react';
import { TTrustMessage } from '../types';

const TrustMessage: FC<TTrustMessage> = ({ icon, title, descriptions }) => (
  <li className='flex flex-col items-center px-4 mb-12 text-center md:flex-row md:items-start md:text-start md:basis-1/2 lg:basis-1/4'>
    <img
      src={icon}
      alt={title}
      width={30}
      height={30}
      className='mb-4 md:mr-4 md:mt-[6px] aspect-square'
    />

    <div className=''>
      <h4 className='mb-4 font-bold uppercase'>{title}</h4>
      <div className='flex flex-col gap-2 text-sm'>
        {descriptions.map((description, i) => (
          <p className='block' key={i}>
            {description}
          </p>
        ))}
      </div>
    </div>
  </li>
);

export { TrustMessage };
