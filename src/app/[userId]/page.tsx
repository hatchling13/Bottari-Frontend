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

  return <main></main>;
}
