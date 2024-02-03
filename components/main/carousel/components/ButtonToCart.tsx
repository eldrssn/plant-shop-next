import { OfferButton } from '@/components/ui/OfferButton';
import { useRef } from 'react';

const ButtonToCart = ({ id }: { id: number }) => {
  const ref = useRef<HTMLFormElement & { count: HTMLInputElement }>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const count = ref.current?.count.value;
    const data = { id, count };
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit} ref={ref} className='flex flex-row border-t'>
      <div className='w-24'>
        <input
          type='number'
          name='count'
          defaultValue={1}
          min={1}
          className='w-full px-4 py-3 outline-none'
        />
      </div>

      <OfferButton
        type='submit'
        className='h-12 py-[.625rem] max-w-full bg-zinc-800 hover:bg-zinc-600'
      >
        Add
      </OfferButton>
    </form>
  );
};

export { ButtonToCart };
