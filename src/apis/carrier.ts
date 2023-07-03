import { client } from '@/libs/client';
import type { CarrierList } from '@/types/response';

export const getCarrier = async (contentId: string) => {
  const res = await client.get<CarrierList>({ endpoint: 'carrier-list', contentId });
  return { ...res };
};
