import { client } from '@/libs/client';
import type { Companies } from '@/types/response';

export const getCompanies = async () => {
  const { contents } = await client.getList<Companies>({ endpoint: 'companies' });
  return contents;
};

export const getCompany = async (contentId: string) => {
  const res = await client.get<Companies>({
    endpoint: 'companies',
    contentId,
  });

  return { ...res };
};
