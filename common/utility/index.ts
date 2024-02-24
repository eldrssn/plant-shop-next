import { regexEmail } from '@/common/constants/regex';
import { SlugObject } from '../types';

export const validate = (email: string) =>
  email !== '' && regexEmail.test(email);

export const getCurrentYear = () => new Date(Date.now()).getFullYear();

export const convertSlugsToObject = (slugs?: string[]): SlugObject => {
  const result: SlugObject = {};

  if (!slugs) {
    return result;
  }

  for (let i = 0; i < slugs.length; i += 2) {
    const key = slugs[i];
    const value = slugs[i + 1];

    if (result[key]) {
      result[key].push(value);
    } else {
      result[key] = [value];
    }
  }

  return result;
};
