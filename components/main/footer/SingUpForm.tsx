'use client';

import clsx from 'clsx';

import { FilledActionBox } from '@/components/ui/filled-action-button';
import { useEmailForm } from '@/common/hooks/useEmailForm';

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
      <FilledActionBox type="submit" className="md:max-w-[350px]">
        Sing up
      </FilledActionBox>
    </form>
  );
};

export { SingUpForm };
