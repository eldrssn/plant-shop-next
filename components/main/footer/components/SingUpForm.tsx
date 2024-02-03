'use client';

import clsx from 'clsx';

import { OfferButton } from '@/components/ui/OfferButton';
import { useEmailForm } from '@/hooks/useEmailForm';

const SingUpForm = () => {
  const { handleSubmit, error, email, handleChange } = useEmailForm();

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <input
        type="text"
        name="emai"
        data-te-animation-reset="true"
        placeholder="Email address"
        className={clsx('mb-4 p-5 w-full text-black ', {
          'animate-wiggle': error,
          'animate-none': !error,
        })}
        value={email}
        onChange={handleChange}
      />
      <OfferButton type="submit" className="md:max-w-[350px]">
        Sing up
      </OfferButton>
    </form>
  );
};

export { SingUpForm };
