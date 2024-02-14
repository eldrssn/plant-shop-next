'use client';
import { CarouselItem } from '@/components/main/carousel/CarouselItem';
import { popularItems } from '@/content/carousel';

export const Results = () => (
  <div className="grid grid-cols-2 gap-y-6 mb-10 lg:grid-cols-3">
    {popularItems.map((item) => (
      <CarouselItem key={item.id} {...item} />
    ))}
  </div>
);
