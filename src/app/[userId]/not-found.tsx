import Link from 'next/link';

export default async function UserNotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>No such user!</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
