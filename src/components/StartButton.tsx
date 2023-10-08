'use client';

import Link from 'next/link';
import { css } from '../../styled-system/css';
import { signIn } from 'next-auth/react';

import type { Session } from 'next-auth';

// Change Link href when auth is completed

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
      onClick={() => signIn()}
      className={css({ fontSize: '2xl', _hover: { cursor: 'pointer' } })}
    >
      시작하기
    </button>
  );
}
