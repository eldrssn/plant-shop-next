import { Gallery } from '@/modules/item/Gallery';
import { ItemInfo } from '@/modules/item/ItemInfo';
import { getItem } from '@/lib/products-db';

export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { item } = await getItem(slug);

  const { imgs, title } = item;
  return (
    <main className="flex flex-col gap-10 md:flex-row md:mt-16 md:mb-12 md:max-w-screen-xl md:mx-auto md:gap-20">
      <Gallery imgs={imgs} title={title} />
      <ItemInfo {...item} />
    </main>
  );
}
