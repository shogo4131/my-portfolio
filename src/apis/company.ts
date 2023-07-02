import { client } from '@/libs/client';
import type { Companies } from '@/types/response';

export const getCompanies = async () => {
  const { contents } = await client.getList<Companies>({ endpoint: 'companies' });
  return contents;
};
