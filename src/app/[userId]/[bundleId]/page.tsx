import { notFound } from 'next/navigation';
import { revalidatePath } from 'next/cache';

import Bundle from '@/components/Bundle';

import { auth, prisma } from '@/../auth';
import { LinkCreateDialog } from '@/components/dialog';
import { create } from '@/actions/link';

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

  const session = await auth();
  const userEmail = session?.user?.email;
  const user =
    userEmail &&
    (await prisma.user.findUnique({ where: { email: userEmail } }));
  const userId = user ? user.id : '';

  async function createLink(formData: FormData) {
    'use server';

    const bundleId = bundle && bundle.id;
    await create(bundleId, userId, formData);

    revalidatePath('/[userId]/[bundleId]', 'page');
  }

  return (
    <main>
      {<Bundle id={bundle.id} name={bundle.name} links={links} />}
      <LinkCreateDialog createAction={createLink} />
    </main>
  );
}
