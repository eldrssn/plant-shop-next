import { regexEmail } from '@/common/constants/regex';

export const validate = (email: string) =>
  email !== '' && regexEmail.test(email);
