'use client';

import { css } from '../../styled-system/css';
import { signIn } from 'next-auth/react';

export default function SignInButton({
  provider = 'google',
}: {
  provider?: string;
}) {
  return (
    <button
      onClick={() => signIn(provider)}
      className={css({ fontSize: '2xl', _hover: { cursor: 'pointer' } })}
    >
      {`${provider.charAt(0).toUpperCase()}${provider.slice(1)}`}로 시작하기
    </button>
  );
}
