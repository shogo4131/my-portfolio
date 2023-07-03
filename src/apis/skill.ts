import { client } from '@/libs/client';
import type { Skills } from '@/types/response';

export const getSkills = async () => {
  const { contents } = await client.getList<Skills>({
    endpoint: 'skills',
    queries: { limit: 100, orders: 'createdAt' },
  });
  return contents;
};
