import { ButtonLink } from '@/components/ui/ButtonLink';

const WelcomeScreen = () => (
  <section className='bg-stone-200'>
    <div
      className='-mt-[64px] md:mt-0 w-full h-screen flex flex-col 
    md:flex-row-reverse max-w-[1680px] m-auto md:max-h-[764px]'
    >
      <div className='basis-1/2 h-1/2 md:h-full'>
        <img
          src='/pictures/welcome-plant.webp'
          alt='welcome-plant'
          className='object-cover object-center w-full h-full'
        />
      </div>

      <div className='flex items-center basis-1/2 h-1/2 md:h-full bg-stone-200'>
        <div className='md:max-w-[37.5rem] py-12 px-7 md:ml-auto '>
          <h1 className='mt-0 mb-6 text-5xl font-bold text-zinc-800 font-header'>
            Plants made easy
          </h1>
          <p className='mb-6'>
            Patch helps you discover the best plants for your space, delivers
            them to your door and helps you look after them.
          </p>

          <div className='flex flex-col gap-y-4'>
            <ButtonLink>Shop indoor plants</ButtonLink>
            <ButtonLink>Shop outdoor plants</ButtonLink>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export { WelcomeScreen };
