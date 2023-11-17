import { notFound } from 'next/navigation';

import Bundle from '@/components/Bundle';

import { prisma } from '@/../auth';

export default async function BundlePage({
  params,
}: {
  params: { bundleId: string };
}) {
  const { bundleId } = params;

  const bundle = await prisma.bundle.findUnique({ where: { id: bundleId } });

  if (!bundle) {
    notFound();
  }

  const links = await prisma.link.findMany({ where: { bundleId } });

  return (
    <main>{<Bundle id={bundle.id} name={bundle.name} links={links} />}</main>
  );
}
