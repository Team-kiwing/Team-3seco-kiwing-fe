import { useQuery } from '@tanstack/react-query';

import { QUERYKEY } from '@/constants/queryKeys';
import { notify } from '@/hooks/toast';
import { getMyBundles } from '@/services/bundles';

export const useFetchMyBundles = () => {
  return useQuery({
    queryKey: [QUERYKEY.MY_BUNDLES],
    queryFn: async () => {
      const data = await getMyBundles('LATEST');
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
