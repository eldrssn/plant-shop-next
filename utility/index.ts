import { regexEmail } from '@/constants/regex';

export const validate = (email: string) =>
  email !== '' && regexEmail.test(email);

export const getCurrentYear = () => new Date(Date.now()).getFullYear();
