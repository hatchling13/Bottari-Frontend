import LinkItem from '@/components/LinkItem';

import type { TBundle } from 'components';

export default function Bundle({ name, links }: TBundle) {
  return (
    <article>
      <h2>{name}</h2>
      <section>
        {links.map((item) => (
          <LinkItem key={item.id} {...item} />
        ))}
      </section>
    </article>
  );
}
