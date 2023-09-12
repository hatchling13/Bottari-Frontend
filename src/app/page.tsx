import Link from 'next/link';

import { css } from '../../styled-system/css';

import { getSlugsOfBundles } from './placeholder';

export default async function Home() {
  const bundleSlugs = await getSlugsOfBundles('');

  return (
    <main className={css({ display: 'flex', gap: '5' })}>
      {bundleSlugs.map((slug) => {
        const { id, name } = slug;

        return (
          <article key={id}>
            <h2>{name}</h2>
            <Link href={id}>바로가기</Link>
          </article>
        );
      })}
    </main>
  );
}
