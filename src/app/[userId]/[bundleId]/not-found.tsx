import Link from 'next/link';

export default async function BundleNotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>No such bundle!</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
