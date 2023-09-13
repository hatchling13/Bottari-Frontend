import { css } from '@/../styled-system/css';
import { checkUserId, getSlugsOfBundles } from '../placeholder';
import { notFound } from 'next/navigation';
import Link from 'next/link';

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
    <main>
      <section className={css({ display: 'flex', gap: '5' })}>
        {bundleSlugs.map((slug) => (
          <Link
            key={slug.id}
            href={`${params.userId}/${slug.id}`}
            className={css({
              padding: '5',
              border: '1px solid',
              borderRadius: 'lg',
              fontSize: '2xl',
              fontWeight: 'bold',
            })}
          >
            {slug.name}
          </Link>
        ))}
      </section>
    </main>
  );
}
