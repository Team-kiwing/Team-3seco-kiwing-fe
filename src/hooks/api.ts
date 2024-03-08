import { useQuery } from '@tanstack/react-query';

import { QUERYKEY } from '@/constants/queryKeys';
import { getBundleDetail } from '@/services/bundles';

export const useFetchBundleDetail = (bundleId: number | null) => {
  return useQuery({
    queryKey: [QUERYKEY.BUNDLE_DETAIL, bundleId],
    queryFn: async ({ queryKey }) => {
      if (!queryKey[1]) return;
      const data = await getBundleDetail({ bundleId: queryKey[1] as number });
      return data;
    },
  });
};
