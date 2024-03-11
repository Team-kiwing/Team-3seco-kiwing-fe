import { useQuery } from '@tanstack/react-query';

import { notify } from '@/hooks/toast';
import { getMyBundles } from '@/services/bundles';

export const useFetchMyBundles = () => {
  return useQuery({
    queryKey: ['myBundles'],
    queryFn: async () => {
      const data = await getMyBundles('CUSTOM');
      if (!data) {
        notify({
          type: 'error',
          text: '잠시 통신에 문제가 생겼습니다. 다시 새로고침 해주세요.',
        });
        return [];
      }
      return data;
    },
  });
};
