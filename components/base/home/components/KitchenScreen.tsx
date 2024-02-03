const KitchenScreen = () => (
  <section className='bg-zinc-50'>
    <div
      className='w-full min-h-screen flex flex-col bg-zinc-50
        md:flex-row max-w-[1680px] m-auto md:max-h-[764px]'
    >
      <div className='h-2/5 md:h-screen md:w-1/2'>
        <img
          src='/pictures/ShopTheLook_KitchenPerson.jpg'
          alt='kitchen-person'
          className='object-cover object-center w-full h-full'
        />
      </div>

      <div className='flex items-center h-3/5 md:h-screen md:w-1/2'>
        <div className='py-12 px-8 md:max-w-[37.5rem] lg:pl-20'>
          <h3 className='mt-0 mb-6 text-4xl font-bold md:text-5xl md:mb-8 text-zinc-800 font-header'>
            Decorate your home with plants
          </h3>

          <p className='mb-5'>
            Plants will love a naturally steamy spot, like a kitchen. Bring life
            to your countertops with a leafy calathea like Jolene or Jo, or let
            a humidity-loving fern like Bertie bask blissfully by your sink.
            Draw your eyes upwards with a trailing plant, like Rapunzel or
            Silvy, and let their vines dangle from the top of a cupboard or
            fridge.
          </p>
          <p className='mb-5'>
            Add pops of colour with a fractured pot, or keep things neutral and
            let your plants do the talking with neutral ceramic or clay pots.
          </p>
          <p className='mb-5'>Shop the look below.</p>
        </div>
      </div>
    </div>
  </section>
);

export { KitchenScreen };
