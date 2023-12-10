'use server';

import { z } from 'zod';

// need to do something with this ugly relative path finding
import { prisma } from '../../auth';

const createLinkFormSchema = z.object({
  name: z.string(),
  url: z.string().url(),
  description: z.string(),
});

function getUserInput(rawFormData: FormData) {
  const name = rawFormData.get('name')?.toString();
  const url = rawFormData.get('url')?.toString();
  const description = rawFormData.get('description')?.toString();

  return { name, url, description };
}

export async function create(
  bundleId: string | null,
  userId: string,
  rawFormData: FormData
) {
  const formData = getUserInput(rawFormData);

  const userInput = await createLinkFormSchema.safeParseAsync(formData);

  if (!userInput.success) {
    console.log(userInput.error);

    return {
      statusCode: 400,
      message: userInput.error,
    };
  }

  if (!bundleId) {
    return {
      statusCode: 500,
      message: '해당 링크 모음을 찾을 수 없습니다!',
    };
  }

  const bundle = await prisma.bundle.findUnique({ where: { id: bundleId } });

  if (!bundle) {
    return {
      statusCode: 500,
      message: '해당 링크 모음을 찾을 수 없습니다!',
    };
  }

  if (bundle.userId !== userId) {
    return {
      statusCode: 403,
      message: '타인의 링크 모음을 수정할 수 없습니다!',
    };
  }

  const { name, url, description } = userInput.data;

  await prisma.link.create({
    data: {
      bundleId,
      name,
      url,
      description,
    },
  });

  return {
    statusCode: 200,
    message: '링크를 성공적으로 추가했습니다!',
  };
}
