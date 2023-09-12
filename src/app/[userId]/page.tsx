import Link from 'next/link';

import { css } from '@/../styled-system/css';

import { checkUserId, getSlugsOfBundles } from '../placeholder';
import { notFound } from 'next/navigation';

export default async function BundlesPage({
  params,
}: {
  params: { userId: string };
}) {
  const userExists = await checkUserId(params.userId);

  if (!userExists) {
    notFound();
  }

  const bundleSlugs = await getSlugsOfBundles(params.userId);

  return (
    <main className={css({ display: 'flex', gap: '5' })}>
      {bundleSlugs.map((slug) => {
        const { id: bundleId, name } = slug;

        return (
          <article key={bundleId}>
            <h2>{name}</h2>
            <Link href={`${params.userId}/${bundleId}`}>바로가기</Link>
          </article>
        );
      })}
    </main>
  );
}
