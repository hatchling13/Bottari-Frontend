import { css } from '../../styled-system/css';
import LinkItem from '@/components/LinkItem';

import type { TBundle } from 'components';

export default function Bundle({ name, links }: TBundle) {
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
      <h2
        className={css({ padding: '5', fontSize: '2xl', fontWeight: 'bold' })}
      >
        {name}
      </h2>
      {links.length === 0 ? (
        '저장된 링크가 없습니다.'
      ) : (
        <section
          className={css({
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: '10',
            flexWrap: 'wrap',
          })}
        >
          {links.map((item) => (
            <LinkItem key={item.id} {...item} />
          ))}
        </section>
      )}
    </article>
  );
}
