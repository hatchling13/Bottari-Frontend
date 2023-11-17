import { css } from '@/../styled-system/css';
import { notFound } from 'next/navigation';
import Link from 'next/link';

import { prisma } from '@/../auth';

export default async function BundlesPage({
  params,
}: {
  params: { userId: string };
}) {
  const { userId } = params;

  const user = await prisma.user.findUnique({ where: { id: userId } });

  if (!user) {
    notFound();
  }

  const bundles = await prisma.bundle.findMany({ where: { userId: userId } });
  const slugs = bundles.map((bundle) => ({ id: bundle.id, name: bundle.name }));

  return (
    <main>
      {bundles.length === 0 ? (
        '저장된 링크 모음이 없습니다.'
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
          {slugs.map((slug) => (
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
      )}
    </main>
  );
}
