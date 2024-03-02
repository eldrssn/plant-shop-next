'use client';
import Image from 'next/image';

export const Conclusion = ({ length }: { length?: number }) => (
  <div className="flex flex-col gap-4 justify-center items-center mt-16 mb-10">
    <Image
      src={'/svg/thats-all-folks.svg'}
      alt="That's all, folks"
      width={60}
      height={120}
    />
    <p className="text-2xl text-zinc-800 font-bold text-center">
      {!!length
        ? `You’ve viewed all ${length} result${length > 1 ? 's' : ''}`
        : 'There are no items'}
    </p>
  </div>
);
