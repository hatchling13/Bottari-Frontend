import { notFound } from 'next/navigation';

import Bundle from '@/components/Bundle';
import { getBundle } from '@/app/placeholder';

export default async function BundlePage({
  params,
}: {
  params: { bundleId: string };
}) {
  const bundle = await getBundle(params.bundleId);

  if (!bundle) {
    notFound();
  }

  return <main>{<Bundle {...bundle} />}</main>;
}
