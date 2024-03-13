import { useQuery } from '@tanstack/react-query';

import { QUERYKEY } from '@/constants/queryKeys';
import { getBundleDetail } from '@/services/bundles';

export const useFetchBundleDetail = (bundleId: number | null) => {
  return useQuery({
    queryKey: [QUERYKEY.BUNDLE_DETAIL, bundleId],
    queryFn: async () => {
      if (!bundleId) return null;
      const data = await getBundleDetail({ bundleId });
      return data;
    },
    enabled: !!bundleId,
  });
};
