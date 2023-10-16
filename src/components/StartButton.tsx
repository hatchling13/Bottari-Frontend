'use client';

import Link from 'next/link';
import { css } from '../../styled-system/css';
import { signIn } from 'next-auth/react';

import type { Session } from 'next-auth';

// Replace href for Link when auth code is finished

export default function StartButton({ session }: { session: Session | null }) {
  if (session) {
    return (
      <Link
        href={'/user-id-1'}
        className={css({ fontSize: '2xl', _hover: { cursor: 'pointer' } })}
      >
        계속하기
      </Link>
    );
  }

  return (
    <button
      onClick={() => signIn('google')}
      className={css({ fontSize: '2xl', _hover: { cursor: 'pointer' } })}
    >
      Google로 시작하기
    </button>
  );
}
