import { item } from '@/content/item';
import { Gallery } from '../../modules/item/Gallery';
import { ItemInfo } from '../../modules/item/ItemInfo';

export default function Page() {
  const { photos, title } = item;
  return (
    <main className="flex flex-col gap-10 md:flex-row md:mt-16 md:mb-12 md:max-w-screen-xl md:mx-auto md:gap-20">
      <Gallery photos={photos} title={title} />
      <ItemInfo {...item} />
    </main>
  );
}
