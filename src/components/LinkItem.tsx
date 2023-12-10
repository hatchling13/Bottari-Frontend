import { LinkDeleteDialog } from './dialog';
import LinkDescription from './LinkDescription';

import type { TLinkItem } from 'components';

import { css } from '../../styled-system/css';

export default function LinkItem({ name, url, description }: TLinkItem) {
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
      <div
        className={css({
          display: 'flex',
          justifyContent: 'flex-end',
          paddingTop: '3',
          paddingEnd: '3',
        })}
      >
        <LinkDeleteDialog />
      </div>
      <section
        className={css({
          paddingX: '5',
          paddingBottom: '3',
          display: 'flex',
          flexDir: 'column',
          gap: '5',
        })}
      >
        <h3
          className={css({
            fontSize: '2xl',
            fontWeight: 'bold',
            wordWrap: 'break-word',
            wordBreak: 'keep-all',
          })}
        >
          <a href={url} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        </h3>
        <LinkDescription>{description}</LinkDescription>
      </section>
    </article>
  );
}
