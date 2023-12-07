'use server';

// need to do something with this ugly relative path finding
import { prisma } from '../../auth';

// zod?

export async function createLink(
  userId: string,
  bundleId: string,
  formData: FormData
) {
  const bundle = await prisma.bundle.findUnique({ where: { id: bundleId } });

  if (bundle?.userId !== userId) {
    return {
      statusCode: 403,
      message: '사용자가 가지고 있는 링크 모음이 아닙니다!',
    };
  }

  return {
    statusCode: 200,
    message: '링크를 성공적으로 추가했습니다!',
  };
}
