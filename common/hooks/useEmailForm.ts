'use client';

import { useState } from 'react';
import { validate } from '@/common/utility';

export const useEmailForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isCorrentEmail = validate(email);

    if (!isCorrentEmail) {
      setError(true);
      return;
    }

    console.log('email: ', email);
    setError(false);
    setEmail('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail(value);
    setError(false);
  };

  return { handleSubmit, error, email, handleChange };
};
