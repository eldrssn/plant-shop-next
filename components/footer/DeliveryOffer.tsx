import Image from 'next/image';

const DeliveryOffer = () => (
  <section className="p-6 bg-stone-200">
    <div className="flex flex-col items-center justify-center gap-5 text-center bg-stone-200 lg:flex-row">
      <div className="relative">
        <Image
          width={128}
          height={100}
          src="/svg/delivery-van.svg"
          alt="delivery van"
        />
      </div>
      <p className="text-xl font-bold md:text-3xl font-header">
        Free standard delivery on orders over £50
      </p>
    </div>
  </section>
);

export { DeliveryOffer };
