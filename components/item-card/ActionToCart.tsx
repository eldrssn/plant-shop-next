'use client';
import { FC, useRef } from 'react';
import { FilledActionButton } from '@/components/ui/buttons/FilledActionButton';
import { useStore } from '@/common/store/useStore';
import { Product } from '@/common/models/Product';
import { transformItem } from '@/common/utils';

type ActionToCartProps = {
  item: Product;
};

const ActionToCart: FC<ActionToCartProps> = ({ item }) => {
  const ref = useRef<HTMLFormElement & { count: HTMLInputElement }>(null);
  const { addItem } = useStore();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const count = ref.current?.count.value;
    if (!count) {
      return;
    }
    addItem(
      transformItem({
        item,
        quantity: +count,
        choosenVariantIndex: 0,
        choosenColorIndex: 0,
      })
    );
  };

  return (
    <form onSubmit={handleSubmit} ref={ref} className="flex flex-row border-t">
      <div className="w-24">
        <label
          className="absolute invisible w-0 h-0"
          htmlFor={`quantity-${item.url}`}
        >
          Quantity
        </label>
        <input
          id={`quantity-${item.url}`}
          type="number"
          name="count"
          defaultValue={1}
          min={1}
          aria-label="count"
          className="w-full px-4 py-3 outline-none"
        />
      </div>

      <FilledActionButton
        type="submit"
        className="h-12 py-[.625rem] max-w-full bg-zinc-800 hover:bg-zinc-600"
      >
        Add
      </FilledActionButton>
    </form>
  );
};

export { ActionToCart };
