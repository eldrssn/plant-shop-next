'use client';
import Image from 'next/image';
import { FC } from 'react';

type ConclusionProps = { length?: number };

export const Conclusion: FC<ConclusionProps> = ({ length }) => (
  <div className="flex flex-col items-center justify-center gap-4 mt-16 mb-10">
    <Image
      src={'/svg/thats-all-folks.svg'}
      alt="That's all, folks"
      width={60}
      height={120}
    />
    <p className="text-2xl font-bold text-center text-zinc-800">
      {!!length
        ? `You’ve viewed all ${length} result${length > 1 ? 's' : ''}`
        : 'There are no items'}
    </p>
  </div>
);
