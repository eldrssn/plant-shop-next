import type { Metadata } from 'next';

import { Gallery } from '@/modules/item/Gallery';
import { ItemInfo } from '@/modules/item/ItemInfo';
import { getItem } from '@/lib/products-db';

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const { item } = await getItem(slug);
  return {
    title: `${item.title} | ${item.realName} | Patch`,
  };
}

export default async function Page({ params: { slug } }: Props) {
  const { item } = await getItem(slug);
  const { imgs, title } = item;
  
  return (
    <main className="flex flex-col gap-10 md:flex-row md:mt-16 md:mb-12 md:max-w-screen-xl md:mx-auto md:gap-20">
      <Gallery imgs={imgs} title={title} />
      <ItemInfo item={item} />
    </main>
  );
}
