import { PromiseItem } from './PromiseItem';
import { promises } from '@/content/promises';

const PromiseScreen = () => (
  <section>
    <div className='max-w-[1180px] mx-auto my-24'>
      <h2 className='m-6 mb-10 text-5xl font-bold text-center font-header'>
        Why Patch?
      </h2>
      <ul className='flex flex-col px-6 text-center gap-y-5 md:flex-row md:gap-x-10'>
        {promises.map((item) => (
          <PromiseItem {...item} key={item.id} />
        ))}
      </ul>
    </div>
  </section>
);

export { PromiseScreen };
