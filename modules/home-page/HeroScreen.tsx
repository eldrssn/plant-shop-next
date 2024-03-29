import Image from 'next/image';
import { OutlinedActionButton } from '@/components/ui/buttons/OutlinedActionButton';
import { PRODUCTS_SLUG } from '@/common/constants';

const HeroScreen = () => (
  <section className="bg-stone-200">
    <div
      className="-mt-[64px] md:mt-0 w-full h-screen flex flex-col 
      md:flex-row-reverse max-w-[1680px] m-auto md:max-h-[764px]"
    >
      <div className="relative basis-1/2 h-1/2 md:h-full">
        <Image
          src="/pictures/welcome-plant.jpg"
          alt="welcome-plant"
          className="object-cover object-center w-full h-full"
          fill={true}
          priority={true}
        />
      </div>

      <div className="flex items-center basis-1/2 h-1/2 md:h-full bg-stone-200">
        <div className="md:max-w-[37.5rem] py-12 px-7 md:ml-auto ">
          <h1 className="mt-0 mb-6 text-5xl font-bold text-zinc-800 font-header">
            Plants made easy
          </h1>
          <p className="mb-6">
            Patch helps you discover the best plants for your space, delivers
            them to your door and helps you look after them.
          </p>

          <div className="flex flex-col gap-y-4">
            <OutlinedActionButton
              href={`/${PRODUCTS_SLUG}/type/plants/enviroment/indoor`}
            >
              Shop indoor plants
            </OutlinedActionButton>
            <OutlinedActionButton
              href={`/${PRODUCTS_SLUG}/type/plants/enviroment/outdoor`}
            >
              Shop outdoor plants
            </OutlinedActionButton>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export { HeroScreen };
