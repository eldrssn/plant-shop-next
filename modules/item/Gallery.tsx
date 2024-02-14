'use client';
import Image from 'next/image';
import React, { FC } from 'react';

type TGallery = {
  photos: string[];
  title: string;
};

export const Gallery: FC<TGallery> = ({ photos, title }) => {
  return (
    <div className="relative w-full aspect-square md:basis-1/2">
      <Image src={photos[0]} alt={title} fill={true} className="object-cover" />
    </div>
  );
};
