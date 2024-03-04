'use client';
import React, { FC, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import { ProductVariant } from '@/common/models/Product';
import './Gallery.css';

type GalleryProps = {
  imgs: string[];
  title: string;
  choosenVariantIndex: number | null;
  choosenColorIndex: number;
  variants: ProductVariant[];
};

const Gallery: FC<GalleryProps> = ({
  imgs,
  title,
  choosenVariantIndex,
  choosenColorIndex,
  variants,
}) => {
  const mainRef = useRef<typeof Splide | null>(null);

  useEffect(() => {
    if (mainRef.current && choosenVariantIndex !== null) {
      const imgIndex = variants[choosenVariantIndex].imgIndex;

      mainRef.current.go(
        Array.isArray(imgIndex) ? imgIndex[choosenColorIndex] : imgIndex
      );
    }
  }, [choosenVariantIndex, choosenColorIndex, variants]);

  return (
    <Splide
      className="bg-white"
      ref={mainRef}
      aria-label="slider"
      options={{
        gap: '1rem',
      }}
    >
      {imgs.map((img, i) => (
        <SplideSlide key={i}>
          <div className="relative w-full aspect-square">
            <Image src={img} alt={title} fill={true} className="object-cover" />
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default Gallery;
