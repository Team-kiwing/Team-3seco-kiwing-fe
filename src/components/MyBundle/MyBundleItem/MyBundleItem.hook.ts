import { useQuery } from '@tanstack/react-query';

import { getBundleDetail } from '@/services/bundles';

export const useFetchBundleDetail = (bundleId: number) => {
  return useQuery({
    queryKey: ['bundleDetails'],
    queryFn: () => getBundleDetail({ bundleId }),
  });
};
