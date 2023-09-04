import type { TLinkItem } from 'components';

export default function LinkItem({ name, url }: TLinkItem) {
  return (
    <article>
      <h3>{name}</h3>
      <a href={url} target="_blank" rel="noreferrer noopener">
        바로가기
      </a>
    </article>
  );
}
