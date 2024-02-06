import { details } from '@/content/details';
import { Detail } from './Detail';

const DetailsScreen = () => (
  <section className="pt-12 bg-zinc-50">
    <ul className="flex flex-col items-center md:items-start md:flex-row md:flex-wrap max-w-[1200px] m-auto">
      {details.map((message) => (
        <Detail key={message.id} {...message} />
      ))}
    </ul>
  </section>
);

export { DetailsScreen };
