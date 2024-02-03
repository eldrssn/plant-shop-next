const DeliveryOffer = () => (
  <section className='p-6 bg-stone-200'>
    <div className='flex flex-col items-center justify-center gap-5 text-center bg-stone-200 lg:flex-row'>
      <div>
        <img src='/svg/delivery-van.svg' alt='delivery van' className='w-32' />
      </div>
      <p className='text-xl font-bold md:text-3xl font-header'>
        Free standard delivery on orders over £50
      </p>
    </div>
  </section>
);

export { DeliveryOffer };
