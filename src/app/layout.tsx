import './global.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '보따리',
  description: '복잡한 링크 모음들을 깔끔하고 보기 쉽게 관리하고 공유해요!',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
