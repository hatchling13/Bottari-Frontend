import { css } from '../../styled-system/css';

import type { TLinkItem } from 'components';

export default async function LinkItem({ name, url, description }: TLinkItem) {
  return (
    <article
      className={css({
        w: '18.75rem',
        border: '1px solid',
        borderRadius: 'lg',
        overflow: 'hidden',
        boxShadow: '5px 5px gray',
      })}
    >
      <img
        src="https://placehold.co/600x400"
        alt="placeholder text"
        className={css({ objectFit: 'cover' })}
      />
      <section
        className={css({
          marginX: '1rem',
          padding: '1rem',
          display: 'flex',
          flexDir: 'column',
          gap: '3',
        })}
      >
        <h3
          className={css({
            fontSize: '2xl',
            wordWrap: 'break-word',
            wordBreak: 'keep-all',
          })}
        >
          <a href={url}>{name}</a>
        </h3>
        <p>{description}</p>
      </section>
    </article>
  );
}
