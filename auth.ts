import { getServerSession } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaClient } from '@prisma/client';
import { PrismaAdapter } from '@auth/prisma-adapter';

import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from 'next';
import type { NextAuthOptions } from 'next-auth';

export const prisma = new PrismaClient();

export const config = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
} satisfies NextAuthOptions;

export function auth(
  ...args:
    | [GetServerSidePropsContext['req'], GetServerSidePropsContext['res']]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, config);
}

declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      NEXTAUTH_SECRET: string;

      AUTH_GOOGLE_ID: string;
      AUTH_GOOGLE_SECRET: string;
    }
  }
}
