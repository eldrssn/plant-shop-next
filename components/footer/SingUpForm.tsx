'use client';
import { FilledActionButton } from '@/components/ui/buttons/FilledActionButton';
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
        className={`mb-4 p-5 w-full text-black  
        ${error ? 'animate-wiggle' : 'animate-none'}`}
        value={email}
        onChange={handleChange}
      />
      <FilledActionButton type="submit" className="md:max-w-[350px]">
        Sing up
      </FilledActionButton>
    </form>
  );
};

export { SingUpForm };
