import type { Metadata } from 'next';

import { getItem } from '@/lib/products-db';
import { ItemPage } from '@/modules/item';

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const { item } = await getItem(slug);

  return {
    title: `${item.title}${item.realName ? ' | ' + item.realName : ''} | Patch`,
  };
}

export default async function Page({ params: { slug } }: Props) {
  const { item } = await getItem(slug);

  return <ItemPage item={item} />;
}
