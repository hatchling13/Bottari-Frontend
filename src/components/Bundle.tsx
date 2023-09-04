import { css } from '../../styled-system/css';
import LinkItem from '@/components/LinkItem';

import type { TBundle } from 'components';

export default async function Bundle({ name, links }: TBundle) {
  return (
    <article
      className={css({
        padding: '3',
        display: 'flex',
        flexWrap: 'wrap',
        flexDir: 'column',
        placeContent: 'center',
      })}
    >
      <h2 className={css({ padding: '5', fontSize: '2xl' })}>{name}</h2>
      <section
        className={css({
          display: 'flex',
          alignItems: 'flex-start',
          gap: '10',
          flexWrap: 'wrap',
        })}
      >
        {links.map((item) => (
          <LinkItem key={item.id} {...item} />
        ))}
      </section>
    </article>
  );
}
