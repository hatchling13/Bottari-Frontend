import Link from 'next/link';
import { css } from '../../styled-system/css';
import { prisma } from '../../auth';
import SignInButton from './SignInButton';

import type { Session } from 'next-auth';

export default async function StartButton({
  session,
}: {
  session: Session | null;
}) {
  if (session) {
    // There should be more robust way to implement this...
    const userEmail = session.user?.email;
    const user =
      userEmail &&
      (await prisma.user.findUnique({ where: { email: userEmail } }));

    const id = user ? user.id : 'error';

    return (
      <Link
        href={id}
        className={css({ fontSize: '2xl', _hover: { cursor: 'pointer' } })}
      >
        계속하기
      </Link>
    );
  }

  return <SignInButton />;
}
